import React, {useState, useEffect} from "react";
import IconLogin from '../../assets/icon-user-alt.svg'
import IconInfo from '../../assets/icon-info-circle.svg';
import Header from "../../components/Header";
import SearchBarHome from "../../components/SearchBarHome";
import Twitter from '../../components/Twitter'
import Footer from "../../components/Footer";
import Loading from "../../components/Loading"
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
  const [removeLoadng, setRemoveLoading] = useState(false)
  let images;
  let users;
  
  useEffect(() => {
    if (searchValue) {
      getTwitter();
      return () => {
        setRemoveLoading(true)
        setSearchValue("");
      };
    }
  });

  function getTwitter(){
    //Se tiver valor no input, fazer o fetch na apiTwitter
    if(searchValue !== ''){
      setTimeout(()=>{
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
          images = result.data.map((item) => {
            const user = result.includes.users.find(
              (user) => item.author_id === user.id
            )
            const img = result.includes.media.find(
              (img) => item.attachments.media_keys[0] === img.media_key
            )
            return {
              id: item.id,
              icon: img.url,
              username: user.username,
              user: user.name,
              twitter: item.url,
            };
          })
          users = result.data.map((item) => {
            const user = result.includes.users.find(
              (user) => item.author_id === user.id
            )
            return {
              id: item.id,
              text: item.text,
              userName: user.username,
              user: user.name,
              profile: user.profile_image_url,
              twitter: user.url,
            };
          })
          setCardsTwitter(images);
          setUserTwitter(users);
        })
      },1000)
    }
  }
  return (
    <div className="containerHome">
      <Header buttons={buttonStyles} />
      <div className="homeInformations">
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
          {
        searchValue ? <div className="homeMessage">
          <div>Exibindo os 10 resultados mais recentes para #{searchValue}</div>
          <div>{msgErr}</div>
          <div className="homeLoading">
            {!removeLoadng && <Loading/>}
          </div>
        </div>:''
      }
      </div>
      <div className="cardsAndTwitter">
        <Twitter cardsTwitter={cardsTwitter} userTwitter={userTwitter}/>
      </div>
      <Footer />
    </div>
    );
}
export default Home;