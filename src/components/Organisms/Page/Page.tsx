import About from "@/components/Molecules/About/About";
import Animation from "@/components/Molecules/Animation/Animation";
import Connect from "@/components/Molecules/Connect/Connect";
import Header from "@/components/Molecules/HeroSection/Header";
import Projects from "@/components/Molecules/Projects/Projects";
import Skills from "@/components/Molecules/Skills/Skills";
import Timeline from "@/components/Molecules/Timeline/Timeline";

function Page() {
     return (
          <div>
               <Header />
               <About />
               <Skills />
               {/* <LottieAnimation /> */}
               {/* <Services /> */}
               <Timeline />
               <Projects />
               <Connect />
               <Animation />
          </div>
     );
}

export default Page;
