'use client';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, image, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg w-full max-w-2xl shadow-xl">
        <div className="flex justify-between items-center p-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <Image
              src={image}
              alt={`${title} logo`}
              width={400}
              height={300}
              className="w-full h-[200px] object-contain"
            />
          </div>
          <div className="whitespace-pre-line text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 