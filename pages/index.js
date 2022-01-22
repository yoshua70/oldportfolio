import Head from "next/head"

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
      <h1 className="text-3xl font-bold underline">Hello, World !</h1>
    </div>
  )
}
