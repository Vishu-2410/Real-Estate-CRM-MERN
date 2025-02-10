import React from 'react';

export default function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
