import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex items-center justify-end gap-4">
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="https://github.com/yoshua70" target="_blank">
        <a>
          <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
        </a>
      </Link>
    </div>
  )
}
