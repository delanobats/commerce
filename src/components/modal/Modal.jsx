import { useRef, useEffect, useCallback, ReactNode } from 'react';
// import FocusTrap from '@lib/focus-trap'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, onClose }) => {
  const ref = useRef();

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className="fixed bg-dialog-bg flex items-center inset-0 z-50 justify-center backdrop-blur-[2px]">
      <div className="" role="dialog" ref={ref}>
        {/* <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className="hover:text-accent-5 transition ease-in-out duration-150 focus:outline-none absolute right-0 top-0 m-6"
        >
          <AiOutlineClose className="h-6 w-6" />
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
