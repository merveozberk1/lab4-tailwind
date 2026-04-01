export async function fetchProjects() {
  // Simüle edilmiş bir ağ gecikmesi ekliyoruz (Yükleniyor animasyonunu görebilmek için)
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const response = await fetch('/data/projects.json');
  if (!response.ok) {
    throw new Error('Projeler yüklenirken bir hata oluştu.');
  }
  return await response.json();
}
