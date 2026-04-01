export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = "elevated",
}) {
  // Kart varyantları (Karanlık mod destekli)
  const variants = {
    elevated: "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg border border-transparent dark:border-gray-700",
    outlined: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    filled: "bg-gray-100 dark:bg-gray-800 border border-transparent",
  };

  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${variants[variant]}`}>
      {image ? (
        <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-500">{imageAlt || "Görsel"}</div>
      ) : null}
      
      <div className="p-5 flex flex-col flex-1">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-400 text-sm flex-1">
          {children}
        </div>
      </div>
      
      {footer && (
        <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 mt-auto">
          {footer}
        </div>
      )}
    </div>
  );
}
