

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center py-6 bg-black text-white">
      <div className="border border-white/50 rounded-full px-8 py-3 flex gap-8 backdrop-blur-sm bg-black/50">
        <a href="#" className="hover:text-gray-300 transition-colors font-medium font-sans text-sm uppercase tracking-widest">Home</a>
        <a href="#about" className="hover:text-gray-300 transition-colors font-medium font-sans text-sm uppercase tracking-widest">About</a>
        <a href="#contact" className="hover:text-gray-300 transition-colors font-medium font-sans text-sm uppercase tracking-widest">Contact</a>
      </div>
    </nav>
  );
}
