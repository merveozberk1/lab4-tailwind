import { useState } from 'react';
import Button from './components/Button'; 
import Input from './components/Input'; 
import Card from './components/Card'; 
import Alert from './components/Alert'; 

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans text-gray-900 dark:text-gray-100 pb-20">
        
        {/* HEADER (ÜST BİLGİ) */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">UI Tasarım Sistemi</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Geliştirici: Merve Özberk</p>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full hover:scale-105 transition-transform"
              title="Temayı Değiştir"
            >
              {isDark ? '☀️ Güneş Modu' : '🌙 Gece Modu'}
            </button>
          </div>
        </header>

        {/* ANA İÇERİK - VİTRİN */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
          {/* 1. BUTTONS SECTİON */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">1. Butonlar (Buttons)</h2>
            <div className="flex flex-wrap gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </section>

          {/* 2. INPUTS SECTION */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">2. Form Elemanları (Inputs)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Input id="name" label="Ad Soyad" placeholder="Adınızı giriniz" />
              <Input id="email" label="E-posta Adresi" type="email" helpText="Örn: mail@sirket.com" />
              <Input id="pass" label="Şifre" type="password" error="Şifre en az 8 karakter olmalıdır." />
              <Input id="disabled" label="Devre Dışı Alan" disabled value="Bu alan değiştirilemez" />
            </div>
          </section>

          {/* 3. CARDS SECTION */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">3. Kartlar (Cards)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="elevated" title="Elevated Kart" image="true" imageAlt="Proje Görseli">
                <p>Dikkat çekmesi istenen ana içerikler için gölgeli ve yükseltilmiş tasarım.</p>
              </Card>
              <Card variant="outlined" title="Outlined Kart">
                <p>Arka plana uyum sağlayan, ince çerçeveli daha sade bir kart tasarımı.</p>
              </Card>
              <Card variant="filled" title="Filled Kart" footer={<Button size="sm" variant="secondary">İncele</Button>}>
                <p>Kendinden dolgulu arka planı ile okumayı kolaylaştıran modern tasarım.</p>
              </Card>
            </div>
          </section>

          {/* 4. ALERTS SECTION */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">4. Uyarılar (Alerts)</h2>
            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-3xl">
              <Alert variant="info" title="Bilgilendirme">Sistem güncellemesi bu gece 03:00'da yapılacaktır.</Alert>
              <Alert variant="success" title="İşlem Başarılı">Değişiklikleriniz güvenle kaydedildi.</Alert>
              <Alert variant="warning" title="Dikkat">Lütfen şifrenizi kimseyle paylaşmayınız.</Alert>
              <Alert variant="error" title="Bağlantı Hatası" dismissible>Sunucuya ulaşılamıyor, lütfen internetinizi kontrol edin.</Alert>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
