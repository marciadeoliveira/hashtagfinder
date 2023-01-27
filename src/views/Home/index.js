import React, {useState} from "react";
import Footer from "../../components/Footer";
import IconLogin from '../../assets/icon-user-alt.svg'
import IconInfo from '../../assets/icon-info-circle.svg';
import Header from "../../components/Header";
import SearchBarHome from "../../components/SearchBarHome";
import "./style.css";


function Home() {
  const [searchValue,setSearchValue]= useState('');
  const [msgErr,setMsgErr] = useState('')

  const buttonStyles = [
    {
      title: "SOBRE",
      icon: IconInfo,
      route: "/about",
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
  return (
    <div className="containerHome">
      <Header buttons={buttonStyles} />
      <div className="home">
        <div className="homeTitle">
          <h1>Encontre hashtags</h1>
          <h1>de maneira fácil.</h1>
        </div>
        <div className="homeSubtitle"> 
          <p>Digite o que deseja no campo de buscas e</p>
          <p>confira os resultados do Twitter abaixo</p>
        </div>
        <SearchBarHome 
          setSearchValue={setSearchValue} 
          value={searchValue} 
          msgErr={msgErr} 
          setMsgErr={setMsgErr}
        />
        <div>{msgErr}</div>
        <div>Exibindo os 10 resultados mais recentes para #{searchValue}</div>
      </div>


      <Footer />
    </div>
    );
}
export default Home;