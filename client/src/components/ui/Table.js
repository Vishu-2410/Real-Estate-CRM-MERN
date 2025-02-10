import React from 'react';

export default function Table({ headers, data }) {
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2 bg-gray-100">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="odd:bg-gray-50 even:bg-white">
            {Object.values(row).map((cell, idx) => (
              <td key={idx} className="border p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
