import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Media from "@/components/sections/Media";
import QuoteSection from "@/components/sections/Quote";
import Feature1 from "@/components/sections/Feature1";
import Feature2 from "@/components/sections/Feature2";
import Feature3 from "@/components/sections/Feature3";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Media />
      <QuoteSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </Layout>
  );
}
