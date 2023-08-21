import './home-style.css'

export default function Home() {
    return (
      <div className='container'> 
        <div className="home">
            <div className="apresentation">
                <h1 className='title'>Olá!</h1>
                <h2 className='subtitle'>Meu nome é Clara</h2>
                <h3 className='stack'>Desenvolvedora Front-end e Mobile</h3>
                <button className='about-me-button'>
                    <a className='about-me-button-link' href="#about-me">Sobre mim</a>
                </button>
            </div>
            <img className="profile-pic" src="./assets/profile-pic.png" alt="" />
        </div>
        <div className="about-me" id='about-me'>
            <h1>Sobre mim</h1>
            <p className="about-me-description">Sou uma desenvolvedora front-end e mobile apaixonada por transformar ideias criativas em experiências interativas e funcionais. 
                Com foco no design, usabilidade e acessibilidade, utilizo uma variedade de tecnologias, incluindo <strong>HTML, CSS, JavaScript, React e Flutter</strong>. <br/>
                Meu portfólio reflete minha dedicação em criar produtos de alta qualidade, enquanto minha abordagem colaborativa e curiosa me impulsiona a enfrentar novos desafios.<br/> 
                Estou pronta para trazer sua visão digital à vida de maneira cativante e envolvente.
            </p>
            <div className="stacks">
                <img src="./assets/html5.svg" className='stacks-icons' alt="html"/>
                <img src="./assets/css3-alt.svg" className='stacks-icons' alt="css"/>
                <img src="./assets/react.svg" className='stacks-icons' alt="react"/>
                <img src="./assets/square-js.svg" className='stacks-icons' alt="js"/>
            </div>
        </div>

        <h1 className='project-title'>Projetos</h1>
        <div className="projects">
            <div className="project">
                <img className='project-image' src="./assets/tripee.png" alt="tripee" />
                <p className='project-description'>
                    <strong>Projeto:</strong> Trippe <br/>
                    <strong>Tecnologias:</strong> Flutter, ReactJs <br/>
                    <strong>Sobre:</strong> Desenvolvimento e manutenção de telas do aplicativo de transporte urbano.<br/>
                </p>
            </div>
            <div className="project">
                <img className='project-image' src="./assets/devFinder.png" alt="devFinder" />
                <p className='project-description'>
                    <strong>Projeto:</strong> DevFinder <br/>
                    <strong>Tecnologias:</strong> ReactJs <br/>
                    <strong>Sobre:</strong> Desenvolvimento de um site usando a API do GitHub, onde ao pesquisar o usuário exibe o perfil do GitHub da pessoal.<br/>
                </p>
            </div>
            <div className="project">
                <img className='project-image' src="./assets/to-do-list.png" alt="to-do" />
                <p className='project-description'>
                    <strong>Projeto:</strong> ToDo <br/>
                    <strong>Tecnologias:</strong> ReactJs <br/>
                    <strong>Sobre:</strong> Desenvolvimento de um site com o objetivo de criar uma lista de afazeres.<br/>
                </p>
            </div>
        </div>

        <div className="contacts">
            <h1>Me Contate</h1>
            <div className="buttons">
                <a className='button-link' href="https://www.linkedin.com/in/clara-rodrigues-dos-santos-696074203/">
                    <button type="button"  className='button'>
                        <img src="./assets/linkedin.svg" className='contact-me-icons' alt="linkedin"/> Linkedin
                    </button>
                </a>
                <a href="https://github.com/Clara-Ro" className="button-link">
                    <button type="button" className='button'>
                        <img src="./assets/github.svg" className='contact-me-icons' alt="github"/> Github
                    </button>
                </a>
                <a href="mailto:contato.clararodriguess@gmail.com" className="button-link">
                    <button type="button" className='button'>
                        <img src="./assets/envelope-solid.svg" className='contact-me-icons' alt="email"/>Email
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

