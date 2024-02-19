const Alert = ({ children }) => (
  <div
    className="border-gray-30 flex items-center rounded-lg border p-4 text-sm text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
    role="alert"
  >
    <span className="sr-only">Info</span>
    <div>{children}</div>
  </div>
)

export default Alert
