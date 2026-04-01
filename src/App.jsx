import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectList />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
        <p>© 2026 Merve Özberk. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
