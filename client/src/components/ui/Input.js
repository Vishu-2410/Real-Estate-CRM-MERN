import React from 'react';

export default function Input({ value, onChange, id, className }) {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      className={`border-2 border-gray-300 p-2 rounded-md ${className}`}
      type="text"
    />
  );
}
