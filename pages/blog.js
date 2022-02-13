import Head from "next/head"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog - Michee Allidjinou</title>
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
