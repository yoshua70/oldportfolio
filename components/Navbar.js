import Link from "next/link"
import Image from "next/image"

import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
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
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light" : "Go dark"}
      </button>
    </div>
  )
}
