import { createPortal } from "preact/compat";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";

interface props {
  listner: string;
}

export default function Menu({ listner }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(document.getElementById(listner));
  const modalRef = useRef<HTMLDivElement>(null);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    menuButtonRef.current?.addEventListener("click", isOpen ? onClose : onOpen);
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      menuButtonRef.current?.removeEventListener("click", isOpen ? onClose : onOpen);
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [menuButtonRef.current, isOpen, onClose, onOpen, handleClickOutside]);

  if (!isOpen) return null;

  return createPortal(
    <div class="fixed top-12 z-50 right-5 mt-2 w-40 rounded-md bg-white shadow-md" ref={modalRef}>
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
          <a href="/projects">Projects</a>
        </li>
        <li class="m-4">
          <a href="/timeline">Timeline</a>
        </li>
        <li class="m-4">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>,
    document.body
  );
}