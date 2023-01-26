import { createPortal } from "preact/compat";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";

interface props {
  listner: string;
}

export default function Menu({ listner }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef(document.getElementById(listner));

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    searchButtonRef.current?.addEventListener("click", isOpen ? onClose : onOpen);
    return () => searchButtonRef.current?.removeEventListener("click", isOpen ? onClose : onOpen);
  }, [searchButtonRef.current, isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div class="fixed top-12 z-50 right-5 mt-2 w-40 rounded-md bg-white shadow-md">
      <ul class="text-gray-800">
        <li class="m-4">
          <a href="/about">About</a>
        </li>
        <li class="m-4">
          <a href="/blog">Blog</a>
        </li>
        <li class="m-4">
          <a href="/notes">Notes</a>
        </li>
        <li class="m-4">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>,
    document.body
  );
}
