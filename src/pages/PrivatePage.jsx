import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0a192f] text-center px-6">
      <h1 className="text-6xl font-bold text-[#64ffda] mb-4">404</h1>

      <p className="text-gray-300 text-xl mb-6">
        Halaman ini private tidak untuk publik 🚫
      </p>

      <Link
        to="/"
        className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}