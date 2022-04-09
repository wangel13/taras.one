const ExampleFrame = ({ children, className, title = 'Render' }) => (
  <div className={`not-prose relative rounded-2xl border p-6 dark:border-primary-800 ${className}`}>
    <div className="absolute -top-3 left-4 rounded bg-white px-2 text-sm font-medium uppercase text-gray-400 dark:bg-gray-900 dark:text-primary-800">
      {title}
    </div>
    {children}
  </div>
)

export default ExampleFrame
