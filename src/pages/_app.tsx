// src/pages/_app.js
import Layout from "@/app/layout";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ElementType,
  pageProps:any}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
