import Link from "next/link";

export function Header() {
    return (
        <header className="hover:bg-blue-50 bg-gray-50 mb-2 p-2">
            <Link href="/" className="bg-blue-300 w-fit rounded hover:bg-blue-400 py-1 px-2 text-white">Início</Link>
        </header>
    )
}
