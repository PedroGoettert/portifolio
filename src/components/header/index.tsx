import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-black py-5 text-white">
      <nav>
        <ul className="flex gap-5 justify-center">
          <Link href={"#"}>
            <li>Sobre mim</li>
          </Link>
          <Link href={"#"}>
            <li>Projetos</li>
          </Link>
          <Link href={"#"}>
            <li>Contatos</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}