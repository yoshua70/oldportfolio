import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="flex items-center justify-end gap-4">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="https://github.com/yoshua70" target="_blank">
        <a>
          <Image
            src="https://img.icons8.com/material-outlined/24/000000/github.png"
            alt="Github icon"
            width={24}
            height={24}
          />
        </a>
      </Link>
    </div>
  )
}
