import "./style.css";
import React from 'react';
import CardsTwitter from "../CardsTwitter";


function Twitter(props){
  return (
    <div className="containerTwuiter">
      <div className="containerCard">
        <CardsTwitter cardsTwitter={props.cardsTwitter}/>
      </div>
      <div className="containerInformation">
        {
          props.userTwitter.map((item,index) => <div className="twitterUser" key={index}>
          <div className="twitterProfile">
            <img src= {item.profile} alt= "foto do perfil" className="twitterPicture"/>
          </div>
          <div className="twitterInformations">
            <div className="informationsUser"><strong>{item.user}:</strong> @{item.userName}</div>
            <div className="informationsText">{item.text}</div>
            <div className="informationsBoxLink">
              <a href={item.twitter}
                 className="informationsLink" 
                 target="_blank" 
                 rel="noopener noreferrer">
                  <strong>
                    Link ver mais no Twitter
                  </strong>
              </a>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Twitter;