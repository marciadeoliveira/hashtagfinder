import Footer from "../../components/Footer";
import IconLogin from '../../assets/icon-user-alt.svg'
import IconInfo from '../../assets/icon-info-circle.svg';
import Header from "../../components/Header";

import "./style.css";

function Home() {
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
    <>
    <Header buttons={buttonStyles} />
    <div className="container">
      <div className="boxTitles">
        <div className="boxTextTitle">
            <h1>Encontre hashtags de maneira fácil.</h1>
        </div>
        <div className="boxTextSubtitles">
          <p>
            Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
    );
}
export default Home;