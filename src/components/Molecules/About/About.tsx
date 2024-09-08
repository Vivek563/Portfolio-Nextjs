import Image from "next/image";

function About() {
     return (
          <>
               <section className="section about">
                    <div className="section-center  about-center">
                         <article className="about-img-container  hero-img-container ">
                              <div className="overlay"></div>
                              <Image width={250} height={300} src="/about-img.jpg" alt="about-img" className="hero-img about-img" />
                         </article>

                         <article className="about-info">
                              <div className="section-title about-title">
                                   <h2>About</h2>
                                   <div className="underline"></div>
                              </div>

                              <p
                                   style={{
                                        fontWeight: "bolder",
                                   }}
                              >
                                   <span style={{ textAlign: "justify", fontSize: "18px", fontWeight: "bolder", color: "black" }}>
                                        {" "}
                                        My passion is creating, and I find happiness in being a better me today than the me yesterday.
                                   </span>
                                   <br />
                                   I&rsquo;m passionate about building open-source stuff and teaching people to code. I have started my professional web development journey building web apps using
                                   Reactjs, Nextjs and Nodejs. I love exploring new technologies and playing around with them and to contribute to the open source community by creating tools which can
                                   be helpful to the community, doing photography & sketching in my spare time, listening to some music which ranges from rock to pop and going around with my friends.{" "}
                                   <br />
                              </p>
                              <span style={{ textAlign: "justify", fontSize: "18px", marginTop: "30px", fontWeight: "bolder", color: "black" }}> PS: I believe that aliens do exist 👽</span>
                         </article>
                    </div>
               </section>
          </>
     );
}

export default About;
