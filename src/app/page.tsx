import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AIProjects from "@/components/AIProjects";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AIProjects />
        <ThoughtLeadership />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
