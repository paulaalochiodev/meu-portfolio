import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { ProfileCards } from "@/components/ProfileCards";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { Contacts } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <Hero/>
        <About/>

        <TechStack/>
        <ProfileCards/>
        <FeaturedProjects/>
        <Experience/>

        <Contacts/>
      </main>
      <Footer/>
    </div>
  );
}