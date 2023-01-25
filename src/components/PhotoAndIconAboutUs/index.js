import './style.css';
function PhotoAndIconAboutUs(props){
  return(
    <>
    {
      props.aboutUs.map((item, index) => <div className="aboutBox"  key={index}>
        <div className="aboutBoxImage">
          <img src={item.img} alt={item.name} className="aboutImage"/>
        </div>
        <div className="aboutName">
          <h2>{item.name}</h2>
        </div>
        <div  className="aboutText">
          <p>{item.about}</p>
        </div>
        <div className="aboutBoxIcon">
          <a href={item.github} target="_blank" rel="noopener noreferrer">
            <img src= {item.iconGithub} alt= "github" className="iconImage"/>
          </a>
          <a href={item.email} target="_blank" rel="noopener noreferrer">
            <img src= {item.iconEmail} alt= "email" className="iconImage"/>
          </a>
          <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
            <img src= {item.iconLinkedin} alt= "linkedin" className="iconImage"/>
          </a>
        </div>
      </div>
    )}
    </>
  )
}
export default PhotoAndIconAboutUs;