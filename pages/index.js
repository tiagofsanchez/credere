import Head from "next/head";
import HomePageFaq from "../components/pages/HomePageFaq";
import HomePageHero from "../components/pages/HomePageHero";
import HomePageHow from "../components/pages/HomePageHow";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

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
      <main>
        <Header /> {/* This will be in a Layout */}
        <div className="grid gap-28">
          <HomePageHero />
          <HomePageHow />
          <HomePageFaq />
          <Footer />
        </div>
      </main>
    </>
  );
}
