import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="404" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="refresh" content="5; URL='/'" />
      </Head>
      <h1 className="flex h-[100dvh] items-center justify-center text-center text-2xl">
        What are you doing...
      </h1>
    </>
  );
}
