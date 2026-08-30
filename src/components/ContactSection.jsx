import { useState } from 'react';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [contactModal, setContactModal] = useState(null); // { type, title, message }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/myegrjkj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setContactModal({
          type: 'success',
          title: 'Pesan Terkirim!',
          message: 'Terima kasih telah menghubungi saya. Pesan Anda telah berhasil disampaikan.',
        });
        e.target.reset();
      } else {
        setContactModal({
          type: 'error',
          title: 'Gagal Mengirim',
          message: 'Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba beberapa saat lagi.',
        });
      }
    } catch (error) {
      setContactModal({
        type: 'error',
        title: 'Koneksi Terganggu',
        message: 'Gagal terhubung ke server. Periksa koneksi internet Anda lalu coba lagi.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 border-t border-slate-800/80 bg-slate-900/10 py-14 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400">Contact Me</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">Mari Bekerja Sama</h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-400 mt-2 leading-relaxed">
            Saya terbuka untuk diskusi peluang kerja, kolaborasi proyek, maupun diskusi seputar teknologi.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <a href="mailto:riyadiputrar@gmail.com" className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3.5 sm:p-5 backdrop-blur-md transition duration-300 hover:border-blue-500/50 hover:bg-slate-900/60">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400">Email</p>
                <p className="text-xs sm:text-base font-bold text-white group-hover:text-blue-300 transition truncate">riyadiputrar@gmail.com</p>
              </div>
            </a>

            <a href="https://instagram.com/riyadii0_" target="_blank" rel="noreferrer" className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3.5 sm:p-5 backdrop-blur-md transition duration-300 hover:border-pink-500/50 hover:bg-slate-900/60">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-600/10 text-pink-400 transition duration-300 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-pink-400">Instagram</p>
                <p className="text-xs sm:text-base font-bold text-white group-hover:text-pink-300 transition truncate">@riyadii0_</p>
              </div>
            </a>

            <div className="flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3.5 sm:p-5 backdrop-blur-md">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-600/10 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-indigo-400">Lokasi</p>
                <p className="text-xs sm:text-base font-bold text-white truncate">Yogyakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-950/50 p-4 sm:p-8 backdrop-blur-md">
            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 sm:mb-2">Nama Anda</label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 sm:mb-2">Email Anda</label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    placeholder="nama@email.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[10px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 sm:mb-2">Pesan</label>
                <textarea
                  name="message"
                  id="contact-message"
                  rows="3"
                  required
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition custom-scrollbar"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:bg-blue-500 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                <span>{submitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {contactModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 backdrop-blur-md transition-all duration-300 p-4">
          <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950/95 p-5 sm:p-6 text-center shadow-2xl text-white transform scale-100 transition-all duration-300">
            <div className={`mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${
              contactModal.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
            }`}>
              {contactModal.type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white">{contactModal.title}</h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{contactModal.message}</p>

            <button
              type="button"
              onClick={() => setContactModal(null)}
              className="mt-5 sm:mt-6 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 shadow-lg shadow-blue-600/30"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}