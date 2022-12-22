import Head from "next/head";
import HomePageFaq from "../components/pages/HomePageFaq";
import HomePageHero from "../components/pages/HomePageHero";
import HomePageHow from "../components/pages/HomePageHow";
import Layout from "../components/shared/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Credere</title>
        <meta
          name="description"
          content="Credere: Your mortgage with social impact"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePageHero />
        <div className="grid gap-48">
          <HomePageHow />
          <HomePageFaq />
        </div>
      </Layout>
    </>
  );
}
