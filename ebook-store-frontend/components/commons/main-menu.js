import Link from "next/link";

export default function MainMenu() {
  return (
    <nav className="flex">
      <ul>
        <li>
          <Link href="/" className="text-lg">
            eBook Store
          </Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/authors">Authors</Link>
        </li>
      </ul>
    </nav>
  );
}
