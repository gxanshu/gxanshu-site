import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import { createPortal } from 'preact/compat';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';


export default function Search() {
	const [isOpen, setIsOpen] = useState(false);
	const searchButtonRef = useRef(document.getElementById('docsearch-search-button'));
	const [initialQuery, setInitialQuery] = useState<string>();

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onInput = useCallback(
		(e) => {
			setIsOpen(true);
			setInitialQuery(e.key);
		},
		[setIsOpen, setInitialQuery]
	);

	useEffect(() => {
		searchButtonRef.current?.addEventListener('click', onOpen);
		return () => searchButtonRef.current?.removeEventListener('click', onOpen);
	}, [searchButtonRef.current, onOpen]);

	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButtonRef,
	});

	if (!isOpen) return null;

	return createPortal(
		<DocSearchModal
			initialQuery={initialQuery}
			initialScrollY={window.scrollY}
			onClose={onClose}
			indexName="codenanshu"
			appId="CK17DW50IY"
			apiKey="5245e5dbcfb0f2f0a1bdf7d0edd9eb7e"
			getMissingResultsUrl={({ query }) =>
				`https://github.com/aianshume/codenanshu/issues/new?title=Missing+results+for+query+%22${encodeURIComponent(
					query
				)}%22`
			}
			placeholder="Search docs"
		/>,
		document.body
	);
}