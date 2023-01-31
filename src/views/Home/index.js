import React, {useState} from "react";
import IconLogin from '../../assets/icon-user-alt.svg'
import IconInfo from '../../assets/icon-info-circle.svg';
import Header from "../../components/Header";
import SearchBarHome from "../../components/SearchBarHome";
import Twitter from '../../components/Twitter'
import Footer from "../../components/Footer";
import IconTeste from '../../assets/imgcardTEST.jpg'
import Perfil from '../../assets/marcia.jpeg';
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
  const cardsTwitter =[
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste ,
    },
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste,
    },
    {
      icon: IconTeste,
    },
  ]
  const userTwitter=[
    {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    },
    {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    }, {
      profile : Perfil,
      userName: 'Username',
      user: '@blablabla',
      text:'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
      twitter:'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D',
    },
  ]
  function getTwitter(){
    if(searchValue !== ''){
      console.log(searchValue, 'searchValue')
      fetch(`https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${searchValue}%20has:hashtags%20-is:retweet%20-is:quote%20has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height&tweet.fields=source`,
        {                                                               
          method:"GET",
          headers:{
            "Authorization": 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
          }
        }
      )
      .then(function(res){ return res.json()})
      .then(function(result){
        console.log(result)
      })
    }

  }
  getTwitter()
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
      </div>
      <div className="homeMessage">
        <div>{msgErr}</div>
        <div>Exibindo os 10 resultados mais recentes para #{searchValue}</div>
      </div>
      <div>
        <Twitter cardsTwitter={cardsTwitter} userTwitter={userTwitter}/>
      </div>
      <Footer />
    </div>
    );
}
export default Home;