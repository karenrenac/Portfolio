import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white shadow-md">
      <ul className="flex justify-center gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
