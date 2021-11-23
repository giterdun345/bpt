import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// components
import Hero from "../components/home/HeroSlider/Hero";
import ServicesHome from "../components/home/Services/ServicesHome";
import MoreServices from "../components/home/Services/MoreServices";
import Testimonials from "../components/home/Testimonials/Testimonials";
import FeaturedArticles from "../components/home/FeaturedArticles/FeaturedArticles";
import CountdownCards from "../components/home/Testimonials/CountdownCards";
import TeamMembers from "../components/home/TeamMembers/TeamMembers";
import MiniTeam from "../components/home/TeamMembers/MiniTeam";
import FeaturedBlog from "../components/home/FeaturedArticles/FeaturedBlog";
import LogoCarousel from "../components/home/LogoCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>BPT: Home</title>
        <link rel="stylesheet" href="./static/css/style.css" />
        <link rel="stylesheet" href="./static/css/flaticon.css" />
      </Head>
      <Hero />
      <ServicesHome />
      <div
        className="support-company-area pt-100 pb-100 section-bg fix"
        style={{
          backgroundImage: "url('/static/img/gallery/section_bg02.png')",
        }}
      >
        <MoreServices />
      </div>
      <FeaturedBlog />
      <Testimonials />
      <CountdownCards />
      <LogoCarousel />
      <MiniTeam />
      <TeamMembers />
    </>
  );
}
