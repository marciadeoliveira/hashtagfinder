import Header from "../../components/Header";
import Footer from "../../components/Footer"
import IconHome from '../../assets/icon-home.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


function Login() {
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  const navigate = useNavigate();

  //validação de email
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?filterByFormula=Find(%220922%22%2C+Squad)',
      {
        method: "GET",
        headers: {
        Authorization:'Bearer keykXHtsEPprqdSBF',
        },
      },
    )
    .then((response) =>  {return response.json()})
    .then(function (data) {
      const dataEmail = data.records[0].fields.Email
      const dataPassword = data.records[0].fields.Senha
      if(dataEmail === email && dataPassword === password){
        navigate('/search', {replace: true});
        localStorage.clear()
      }
      document.getElementById('messageError').innerHTML = 'Atenção! Seus dados são inválidos!'
    })
  }
  // personalização do header 
  const buttonStyles = [
    {
      title: "HOME",
      icon: IconHome,
      route: "/",
      textColor: "#0A1744",
      backgroundColor: "#72EFDB",
    }
  ] 
  return (
    <div className="container">
      <Header buttons={buttonStyles} />
      <div className="containerLogin">
        <div className="wrapLogin">
          <form onSubmit={handleSubmit} className="formLogin">
            <spam className="textLogin"> Login</spam>
            <div className="WrapInput">
              <input className="input"
                type="email"
                placeholder="Usuario"
                onChange={(e) => SetEmail(e.target.value)}
                required
              />
            </div>
            <div className="WrapInput">
              <input
                className="input"
                type="password"
                placeholder='senha'
                onChange={(e) => SetPassword(e.target.value)}
                required
              />
            </div>
            <div className="containeButton">
              <button type="subimt" className="buttonSend">ACESSAR</button>
              <span className="Error" id="messageError"></span>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Login