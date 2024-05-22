import React from 'react';

interface ModalContentProps {
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
const CloseButton: React.FC<ModalContentProps> = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      type="button"
      className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-indigo-500"
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
};

export default CloseButton;
