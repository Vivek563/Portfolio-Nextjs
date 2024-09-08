import Card from "@/components/Atoms/Card/Card";
import projectsData from "./ProjectData";

function Projects() {
     return (
          <section className="section blog bg-grey">
               <div className="section-title">
                    <h2>Projects</h2>
                    <div className="underline"></div>
               </div>
               <div className="cardstyle">
                    {projectsData.map((project, index) => (
                         <Card key={index} title={project.title} projectdiscription={project.projectDescription} sourcelink={project.sourceLink} livelink={project.liveLink} />
                    ))}
               </div>
               <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <h1>Want to See All My Work?</h1>
                    <h4>
                         <a href="https://github.com/vivek563" className="" target="_blank" rel="noopener noreferrer">
                              Click Me🙃
                         </a>
                    </h4>
               </div>
          </section>
     );
}

export default Projects;
