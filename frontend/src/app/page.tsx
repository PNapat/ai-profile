import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Resume from "@/components/sections/Resume";
import Footer from "@/components/sections/Footer";
import ChatBubble from "@/components/chat/ChatBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
      </main>
      <Footer />
      <ChatBubble />
    </>
  );
}
