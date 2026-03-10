export default function Alert({
  children,
  variant = "info",
  title,
  dismissible = false,
  onDismiss,
}) {
  // Alert renk varyantları (Karanlık mod destekli)
  const variants = {
    info: "bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:border-blue-700 dark:text-blue-200",
    success: "bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:border-green-700 dark:text-green-200",
    warning: "bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:border-amber-700 dark:text-amber-200",
    error: "bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:border-red-700 dark:text-red-200",
  };

  return (
    <div role="alert" className={`border-l-4 rounded-r-lg p-4 ${variants[variant]}`}>
      <div className="flex justify-between items-start">
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
        {dismissible && (
          <button 
            onClick={onDismiss} 
            className="ml-4 opacity-60 hover:opacity-100" 
            aria-label="Kapat"
          >
            &#10005;
          </button>
        )}
      </div>
    </div>
  );
}
