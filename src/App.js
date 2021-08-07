import logo from './logo.svg';
//cssを読み込んでます
import './App.css';

function App() {
  return (
    <div className="App">
         <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">北村 拓也</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

      <main className="l-main">
            <section className="home" id="home">
                <div className="home__container bd-grid">
                    <h1 className="home__title"><span>kitamura tukuya's</span><br/>portfolio</h1>

                    <div className="home__scroll">
                        <a href="#about" className="home__scroll-link"><i className='bx bx-up-arrow-alt' ></i>Scroll down</a>
                    </div>

                    <img src="assets/img/perfil.png" alt="" className="home__img"/>
                </div>
            </section>
            
            <section className="about section" id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="assets/img/perfil.png" alt=""/>
                    </div>

                    <div>
                        <h2 class="about__subtitle">I'am kitamura Takuya</h2>
                        <span className="about__profession">Front-end engineer</span>
                        <p className="about__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consectetur, architecto quas fugiat, iste inventore facere repellendus delectus id, vitae blanditiis.</p>

                        <div className="about__social">
                            <a href="#" className="about__social-icon"><i className='bx bxl-linkedin' ></i></a>
                            <a href="#" className="about__social-icon"><i className='bx bxl-github' ></i></a>
                            <a href="#" className="about__social-icon"><i className='bx bxl-dribbble' ></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">
                    <div className="skills__box">
                        <h3 className="skills__subtitle">Development</h3>
                        <span className="skills__name">Html</span>
                        <span className="skills__name">Css</span>
                        <span className="skills__name">Javascript</span>
                        <span className="skills__name">Scss</span>
                        <span className="skills__name">React</span>
                        
                        <h3 className="skills__subtitle">Design</h3>
                       
                    </div>

                    <div className="skills__img">
                        <img src="assets/img/skill.jpg" alt=""/>
                    </div>
                </div>
            </section>


            <section className="portfolio section" id="portfolio">
                <h2 className="section-title">Portfolio</h2>

                <div className="portfolio__container bd-grid">
                    <div className="portfolio__img">
                        <img src="assets/img/work1.jpg" alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div className="portfolio__img">
                        <img src="assets/img/work2.jpg" alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div className="portfolio__img">
                        <img src="assets/img/work3.jpg" alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div className="portfolio__img">
                        <img src="assets/img/work4.jpg" alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div className="portfolio__img">
                        <img src="assets/img/work5.jpg" alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div className="portfolio__img">
                        <img src="assets/img/work6.jpg" alt=""/>

                        <div className="portfolio__link">
                            <a href="#" className="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <div className="contact__info">
                        <h3 className="contact__subtitle">EMAIL</h3>
                        <span className="contact__text">info.mail.com</span>

                        <h3 className="contact__subtitle">PHONE</h3>
                        <span className="contact__text">+20 999-999</span>

                        <h3 className="contact__subtitle">ADRESS</h3>
                        <span className="contact__text">My contry</span>
                    </div>

                    <form action="" className="contact__form">
                        <div className="contact__inputs">
                            <input type="text" placeholder="Name" className="contact__input"/>
                            <input type="mail" placeholder="Email" className="contact__input"/>
                        </div>

                        <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>

                        <input type="submit" value="Enviar" className="contact__button"/>
                    </form>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
