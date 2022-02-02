import Head from "next/head"
import Hero from "../components/Hero"
import SkillsSection from "../components/SkillsSection"

export default function Home() {
  return (
    <div className="flex flex-col pr-10 pl-10">
      <Head>
        <title>Michee Allidjinou</title>
        <meta
          name="description"
          content="Personal website of Michee Allidjinou"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SkillsSection />
    </div>
  )
}
