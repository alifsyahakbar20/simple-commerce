import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">
            Simple<span className="text-gray-800">Commerce</span>
          </h1>
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition">Beranda</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Produk</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Tentang</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Kontak</a></li>
          </ul>
          <button className="md:hidden p-2 rounded-md border border-gray-300 text-gray-600">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://img.freepik.com/free-photo/young-woman-shopping-online-with-laptop-credit-card_1150-12814.jpg?w=1380&t=st=1697700000~exp=1697700600~hmac=demo"
          alt="Hero Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Belanja Cerdas, Hidup Lebih Mudah
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-100">
            Platform e-commerce profesional untuk kebutuhan sehari-hari Anda
          </p>
          <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow-lg transition">
            Jelajahi Sekarang
          </button>
        </div>
      </section>

      {/* Kategori Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Kategori Populer</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: "Fashion", img: "https://img.freepik.com/free-photo/fashionable-young-woman-holding-shopping-bags_23-2149105974.jpg?w=826&t=st=1697700000~exp=1697700600~hmac=demo" },
            { name: "Elektronik", img: "https://img.freepik.com/free-photo/modern-smartphone-with-colorful-screen_23-2147894153.jpg?w=826&t=st=1697700000~exp=1697700600~hmac=demo" },
            { name: "Rumah Tangga", img: "https://img.freepik.com/free-photo/modern-stylish-living-room-interior-design_23-2149182333.jpg?w=826&t=st=1697700000~exp=1697700600~hmac=demo" },
            { name: "Kesehatan", img: "https://img.freepik.com/free-photo/flat-lay-medicine-concept-with-stethoscope_23-2148544325.jpg?w=826&t=st=1697700000~exp=1697700600~hmac=demo" },
          ].map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden hover:-translate-y-1 transition transform cursor-pointer"
            >
              <div className="relative w-full h-40">
                <Image src={cat.img} alt={cat.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-gray-800">{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Produk Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "https://img.freepik.com/free-photo/smartwatch-mockup_53876-105111.jpg?w=740",
              "https://img.freepik.com/free-photo/modern-laptop-with-digital-tablet-smartphone_23-2147833144.jpg?w=740",
              "https://img.freepik.com/free-photo/sneakers-shoes-white-background_1203-7549.jpg?w=740",
              "https://img.freepik.com/free-photo/blue-headphones-digital-device_53876-95806.jpg?w=740",
            ].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
              >
                <div className="relative w-full h-52">
                  <Image src={img} alt={`Produk ${i + 1}`} fill className="object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-800">Produk {i + 1}</h3>
                  <p className="text-blue-600 font-bold mt-1">
                    Rp{(i + 1 * 25000).toLocaleString("id-ID")}
                  </p>
                  <button className="mt-auto bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Belanja Sekarang dan Dapatkan Penawaran Spesial 🎉
        </h2>
        <p className="text-lg mb-8 text-blue-100">
          Gratis ongkir untuk pembelian pertama & diskon hingga 30%!
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
          Belanja Sekarang
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SimpleCommerce</h3>
            <p className="text-gray-400 text-sm">
              Platform belanja online modern untuk kebutuhan harian Anda.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Beranda</a></li>
              <li><a href="#" className="hover:text-blue-400">Produk</a></li>
              <li><a href="#" className="hover:text-blue-400">Tentang</a></li>
              <li><a href="#" className="hover:text-blue-400">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-blue-400">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Hubungi Kami</h4>
            <p className="text-sm text-gray-400">Email: support@simplecommerce.id</p>
            <p className="text-sm text-gray-400">Telepon: +62 812 3456 7890</p>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Simple-Commerce. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
