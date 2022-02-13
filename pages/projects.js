import Head from "next/head"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects - Michée Allidjinou</title>
        <meta
          name="description"
          content="Personal website of Michee Allidjinou"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </Layout>
  )
}
