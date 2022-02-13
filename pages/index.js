import Head from "next/head"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="flex flex-col p-10">
      <Head>
        <title>Michee Allidjinou</title>
        <meta
          name="description"
          content="Personal website of Michee Allidjinou"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}
