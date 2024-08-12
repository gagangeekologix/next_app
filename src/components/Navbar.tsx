import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">My Portfolio</Link>
        <div>
          <Link href="/" className="mx-4 hover:underline">Home</Link>
          <Link href="/projects" className="mx-4 hover:underline">Projects</Link>
          <Link href="/contact" className="mx-4 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
