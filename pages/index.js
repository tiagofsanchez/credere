import Head from "next/head";

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
        <h1 className="text-3xl font-bold">
          Credere, your mortgage with social impact
        </h1>
      </main>
    </>
  );
}
