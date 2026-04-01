export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hakkımda</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          Fırat Üniversitesi'nde Yazılım Mühendisliği 3. sınıf öğrencisi olarak eğitimime devam ediyorum. Özellikle backend geliştirme, veri yapıları, algoritmalar ve sistem tasarımı konularına büyük bir ilgi duyuyorum.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "JavaScript", "HTML/CSS", "Java", "C#", "Python", "Firebase"].map(tech => (
            <span key={tech} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
