import LottieAnimation from "../AnimationLottie/AnimationLottie";

/* eslint-disable @next/next/no-img-element */
function Skills() {
     return (
          <>
               <section className="section skills">
                    <div className="section-title">
                         <h2>TECH STACK:</h2>
                         <div className="underline"></div>
                    </div>
                    <div className="skill-tech">
                         <div className="skill-language-left">
                              <h4 className="tech-name">Languages:</h4>
                              <div className="tech-icon">
                                   <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/JAVASCRIPT-%23323330.svg?logo=javascript&logoColor=%23F7DF1E" alt="" />
                                   <img src="https://img.shields.io/badge/JAVA-%23ED8B00.svg?logo=java&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/GOLANG-%23323330.svg?logo=golang&logoColor=%23F7DF1E" alt="" />
                                   <img src="https://img.shields.io/badge/MARKDOWN-%23000000.svg?logo=markdown&logoColor=white" alt="" />
                              </div>
                              <h4 className="tech-name">JS Framework/Library:</h4>

                              <div className="tech-icon">
                                   <img src="https://img.shields.io/badge/NEXTJS-black?logo=next.js&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/REACTJS-%2320232a.svg?logo=react&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/THREEJS-black?logo=three.js&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/ELECTRONJS-%2320232a.svg?logo=electron&logoColor=%2361DAFB" alt="" />
                                   <img src="https://img.shields.io/badge/REDUX-%2320232a.svg?logo=redux&logoColor=%2361DAFB" alt="" />
                              </div>

                              <h4 className="tech-name">CSS Framework/Library/Pre-processors:</h4>

                              <div className="tech-icon">
                                   <img src="https://img.shields.io/badge/TAILWIND%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/MUI-%230081CB.svg?logo=mui&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white" alt="" />
                              </div>

                              <h4 className="tech-name">Database</h4>

                              <div className="tech-icon">
                                   <img src="https://img.shields.io/badge/FIREBASE-%23039BE5.svg?logo=firebase" alt="" />
                                   <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/APPWRITE-%234ea94b.svg?logo=appwrite&logoColor=white" alt="" />
                              </div>

                              <h4 className="tech-name">Backend</h4>

                              <div className="tech-icon">
                                   <img src="https://img.shields.io/badge/NODE%20JS-6DA55F?logo=node.js&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/EXPRESSJS-%23404d59.svg?logo=express&logoColor=%2361DAFB" alt="" />
                                   <img src="https://img.shields.io/badge/NEXTJS-black?logo=next.js&logoColor=white" alt="" />
                              </div>
                              <h4 className="tech-name">CI/CD:</h4>

                              <div className="tech-icon">
                                   <img src="https://img.shields.io/badge/JENKINS-%232C5263.svg?logo=jenkins&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/GITHUB%20ACTIONS-%232671E5.svg?logo=githubactions&logoColor=white" alt="" />
                              </div>
                              <h4 className="tech-name">Version Control:</h4>

                              <div className="tech-icon">
                                   <img src="https://img.shields.io/badge/GIT-%23F05033.svg?logo=git&logoColor=white" alt="" />
                                   <img src="https://img.shields.io/badge/GITHUB-%23121011.svg?logo=github&logoColor=white" alt="" />
                              </div>
                         </div>
                         <div className="skill-image-right">
                              {/* <img src="/boo.svg" alt="boo" /> */}
                              <LottieAnimation />
                         </div>
                    </div>
               </section>
          </>
     );
}

export default Skills;
