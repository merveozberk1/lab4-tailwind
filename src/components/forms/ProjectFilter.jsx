export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}) {
  const categories = [
    { value: "all", label: "Tümü" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "backend", label: "Backend" },
  ];

  return (
    <div className="space-y-4 mb-8">
      {/* Arama Alanı */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Proje ara (başlık, açıklama, teknoloji)..."
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pl-10 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Proje ara"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          &#128269;
        </span>
      </div>

      {/* Kategori ve Sıralama */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        
        {/* Kategori Butonları */}
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Kategori filtresi">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              aria-pressed={category === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sıralama */}
        <div className="flex gap-2 items-center">
          <select
            value={sortField}
            onChange={e => onSortFieldChange(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm dark:bg-gray-800 dark:text-white"
            aria-label="Sıralama alanı"
          >
            <option value="year">Yıl</option>
            <option value="title">Başlık</option>
          </select>
          <button
            onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            aria-label={`Sıralama yönü: ${sortOrder === "asc" ? "artan" : "azalan"}`}
          >
            {sortOrder === "asc" ? "\u2191 Artan" : "\u2193 Azalan"}
          </button>
        </div>
      </div>

      {/* Sonuç Sayısı */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {resultCount} / {totalCount} proje gösteriliyor
      </p>
    </div>
  );
}
