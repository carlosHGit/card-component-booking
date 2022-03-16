import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Bienvenidos a Places Squad</h1>
      <Link href={'/Places'}>
        <a>
            Ir a places
        </a>
      </Link>
    </>
  )
}
