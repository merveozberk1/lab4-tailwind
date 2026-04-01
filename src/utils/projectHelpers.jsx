export function applyFilters(projects, search, category, sortField, sortOrder) {
  let result = [...projects];

  // 1. Arama Filtresi
  if (search) {
    const lowerSearch = search.toLowerCase();
    result = result.filter(
      p =>
        p.title.toLowerCase().includes(lowerSearch) ||
        p.description.toLowerCase().includes(lowerSearch) ||
        p.tech.some(t => t.toLowerCase().includes(lowerSearch))
    );
  }

  // 2. Kategori Filtresi
  if (category !== "all") {
    result = result.filter(p => p.category === category);
  }

  // 3. Sıralama İşlemi
  result.sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (typeof aValue === "string") aValue = aValue.toLowerCase();
    if (typeof bValue === "string") bValue = bValue.toLowerCase();

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return result;
}
