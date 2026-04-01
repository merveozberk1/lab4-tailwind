import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">İletişime Geç</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Projeleriniz veya iş birlikleri için bana ulaşabilirsiniz.</p>
        
        {/* Formumuz Burada Çağrılıyor */}
        <ContactForm />
      </div>
    </section>
  );
}
