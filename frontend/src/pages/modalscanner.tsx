import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  value: string; // Valor a ser passado
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, value }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Modal</h2>
        <p>Valor: {value}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onClose}
        >
          Fechar Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
