function Select({ label, className = "", children, ...props }) {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <select
        className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

export default Select

