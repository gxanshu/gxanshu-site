import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import { createPortal } from "preact/compat";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef(
    document.getElementById("docsearch-search-button")
  );
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
    searchButtonRef.current?.addEventListener("click", onOpen);
    return () => searchButtonRef.current?.removeEventListener("click", onOpen);
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
      indexName={"codenanshu"}
      appId={"VISHEC26TM"}
      apiKey={"86fa377ab35d29f18d4f9765dfd46623"}
      getMissingResultsUrl={({ query }) =>
        `https://github.com/gxanshu/gxanshu-site/issues/new?title=Missing+results+for+query+%22${encodeURIComponent(
          query
        )}%22`
      }
      placeholder="Search Satellite 🛰️"
    />,
    document.body
  );
}
