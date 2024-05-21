import { ModalProps } from './type';

const Modal: React.FC<ModalProps> = ({ show, children, className = '', fullscreen = false }) => {
  return (
    <main
      className={`fixed top-0 left-0 z-10 flex w-screen h-screen px-24 py-0 overflow-auto ${
        show ? `visible bg-black/54` : `invisible bg-transparent`
      } ${fullscreen && `p-0 overflow-hidden`}`}
    >
      <div className={`m-auto ${className} ${fullscreen && `w-full max-w-full h-screen`}`}>{children}</div>
    </main>
  );
};

export default Modal;
