// src/pages/_app.js
import Layout from "@/app/layout";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ElementType,
  pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
