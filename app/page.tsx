import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="fixed top-0 left-0 right-0 bg-black backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            Simple<span className="text-gray-400">Commerce</span>
          </h1>
          <ul className="hidden md:flex space-x-8 text-white font-bold">
            <li><a href="#" className="hover:text-gray-200 transition-all duration-300">Beranda</a></li>
            <li><a href="#" className="hover:text-gray-200 transition-all duration-300">Produk</a></li>
            <li><a href="#" className="hover:text-gray-200 transition-all duration-300">Tentang</a></li>
            <li><a href="#" className="hover:text-gray-200 transition-all duration-300">Kontak</a></li>
          </ul>
          <div>
            <button className="bg-white rounded-full px-4 py-3">Login</button>
          </div>
          <button className="md:hidden p-2 rounded-md border border-gray-300 text-gray-600">☰</button>
        </div>
      </nav>

    </main>
  );
}
