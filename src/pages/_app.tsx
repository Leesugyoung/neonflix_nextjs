import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

// Component : 렌더링 되는 페이지들을 Component prop 으로 전달
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
