import Head from "next/head"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Michee Allidjinou</title>
        <meta
          name="description"
          content="Personal website of Michee Allidjinou"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}
