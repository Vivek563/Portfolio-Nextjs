import RandomWalk from "@/components/Atoms/RandomWalk/RandomWalk";
import RandomWalkMobile from "@/components/Atoms/RandomWalk/RandomWalkMobile";

function Header() {
     return (
          <>
               <header className="hero">
                    <div className="section-center hero-center">
                         <div className="md:hidden">
                              <RandomWalkMobile />
                         </div>
                         <div className="hidden md:block">
                              <RandomWalk />
                         </div>
                         {/* <article className="header-mobile-view">{width > 998 ? <RandomWalk /> : <RandomWalkMobile />}</article> */}

                         <article className="hero-info">
                              <h3>Hola,</h3>
                              <div className="underline"></div>
                              <h1>
                                   i&apos;m <span style={{ color: "#ff4c60" }}>Vivek </span>
                              </h1>
                              <h4>Software Engineer from India</h4>
                              <a href="/contact" className="btn hero-btn">
                                   hire me
                              </a>
                              <ul className="social-icons hero-icons">
                                   <li>
                                        <a href="https://github.com/vivek563" className="social-icon">
                                             <i className="fa-brands fa-github"></i>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://www.linkedin.com/in/vivek563maurya" className="social-icon">
                                             <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://www.instagram.com/vivekmaurya_563/" className="social-icon">
                                             <i className="fa-brands fa-instagram"></i>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="mailto:vivek563maurya@gmail.com" className="social-icon">
                                             <i className="fas fa-paper-plane"></i>
                                        </a>
                                   </li>
                                   {/* <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li> */}
                              </ul>
                         </article>
                    </div>
               </header>
          </>
     );
}

export default Header;
