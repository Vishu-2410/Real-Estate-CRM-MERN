import React from 'react';

export default function Select({ options, onChange, id, className }) {
  return (
    <select
      id={id}
      onChange={onChange}
      className={`border-2 border-gray-300 p-2 rounded-md ${className}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
