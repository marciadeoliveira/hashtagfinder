import React, {useEffect,useState} from "react";
import './style.css';
import Header from "../../components/Header";
import PhotoAndIconAboutUs from "../../components/PhotoAndIconAboutUs";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import IconIlustration from '../../assets/about-ilustration.svg';
import IconGithub from '../../assets/icon-github.svg';
import IconEnvelope from '../../assets/icon-envelope.svg';
import IconLinkedin from '../../assets/icon-awesome-linkedin.svg';
import IconHome from '../../assets/icon-home.svg';
import IconLogin from '../../assets/icon-user-alt.svg';

function About(){
  const [aboutProject, setAboutProject] = useState();
  const [aboutUs, setAboutUs] = useState([]);
  const [removeLoadng, setRemoveLoading] = useState(false)
  const buttonStyles =[
    {
      title: "HOME",
      icon: IconHome,
      route: "/",
      textColor: "#0A1744",
      backgroundColor: "#72EFDB",
    },
    {
      title: "LOGIN",
      icon: IconLogin,
      route: "/login",
      textColor: "#FFF",
      backgroundColor: "#1E3E7B",
    },
  ]
  let aboutUsApi = []
  useEffect(() => {
    setTimeout(()=>{
      fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?filterByFormula=Find(%220922%22%2C+Squad)',
        {
          method: "GET",
          headers: {
          Authorization:'Bearer keykXHtsEPprqdSBF',
          },
        }
      )
      .then(function (res) { return res.json(); })
      .then(function (data) { 
        const aboutProject = data.records[0]
        setAboutProject(aboutProject.fields.Sobre)
        setRemoveLoading(true)
      })
      .catch((erro) => console.log(erro));

      fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?filterByFormula=Find(%220922%22%2C+Squad)', 
        { 
          method: "GET", 
          headers: { 
            "Authorization": `Bearer keykXHtsEPprqdSBF`, 
          } 
        }
      )
      .then(function (res) { return res.json(); })
      .then(function (data) { 
        const aboutus = [data.records]
        aboutus.map(item => {
          item.map(i =>
            aboutUsApi.push({
              name:i.fields.Nome,
              about: i.fields.Descrição,
              img: i.fields.Imagem[0].url,
              email: i.fields.Email,
              github: i.fields.Github,
              linkedin: i.fields.LinkedIn,
              iconGithub: IconGithub,
              iconEmail: IconEnvelope,
              iconLinkedin: IconLinkedin,
            })
          )
          return setAboutUs(aboutUsApi)
        })   
      })
      .catch((erro) => console.log(erro));
    },1000)
  })
   return(
    <div className="containerAbout">
      <Header buttons={buttonStyles}/> 
      <div className="about">
        <div className="aboutProject">
          <div className="aboutProjectTitle">
            <h1>Sobre o projeto</h1>
          </div>
          <div className="projectText">
            <div className="textLoader">
              {!removeLoadng && <Loading/>}
            </div>
            <p>{aboutProject}</p>
          </div>
        </div>
        <div className="aboutIlustration">
          <img src= {IconIlustration} alt= "ilustração" className="IlustrationImage"/>
        </div>
      </div>
      <div className="aboutUs">
        <div className="aboutTitle">
          <h1>Quem somos</h1>
        </div>
        <div className="aboutUsBox">
          <div className="aboutLoader">
            {!removeLoadng && <Loading/>}
          </div>
          <PhotoAndIconAboutUs aboutUs={aboutUs}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default About;