import React, {useState} from "react";
import IconLogin from '../../assets/icon-user-alt.svg'
import IconInfo from '../../assets/icon-info-circle.svg';
import Header from "../../components/Header";
import SearchBarHome from "../../components/SearchBarHome";
import Twitter from '../../components/Twitter'
import Footer from "../../components/Footer";
//import Perfil from '../../assets/marcia.jpeg';
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
  const [cardsTwitter, setCardsTwitter] =useState([])
  const [userTwitter, setUserTwitter]=useState([])
  let imageTwitter=[]
  let user = []
  let text=[]
  
  function getTwitter(){
    //Se tiver valor no input, fazer o fetch na apiTwitter
    if(searchValue !== ''){
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
        const dataBase = {
          data:[result.data], //text 
          includes: [result.includes],// media tem url e foto do post - e users tem name, username, profile_image_url
          meta: [result.meta],
        }
       //LIMITAR O VALOR DE POSTS E CARDS TRAZIDOS ... CARSDTWITTER,LENGTH
       //LIMITAR O TAMANHO DO TEXTO NO USERTWITTER
       
        //enquanto o array cardsTwitter >= 10 .....pegar o endereço das imagens dos posts e adicionar na props.cardstwitter
        const urlImage = [dataBase.includes[0].media]
        urlImage.map(item => {
          item.map(i => 
            imageTwitter.push(
              { 
                icon: i.url
              }
            )
          )
            return setCardsTwitter(imageTwitter)
        })
        
        //Pegar os valores dos usuarios, como nome, foto de perfil e adicionar na props. userCards.....
        const dataUsers = [dataBase.includes[0].users]
        dataUsers.map(item=>{
          item.map(i =>
            user.push(
              {
                profile :i.profile_image_url,
                userName:i.username,
                user: i.name,
                twitter: i.url,
              }
            )
          )
          return setUserTwitter(user)
        })
      // pegar o valor dos textos postados e adicionar na props. userCards 
        const dataText = [dataBase.data[0]]
        dataText.map(item=>{
          item.map(i => 
            text.push(
              {
                text: i.text
              }
            )
          )
          return setUserTwitter(text)
        })
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