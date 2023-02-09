import "./style.css";
import React from 'react';
import CardsTwitter from "../CardsTwitter";

<<<<<<< HEAD

function Twitter(props) {
=======
function Twitter(props){
>>>>>>> bb7d6c2326a2aeb8eea567a39239fbe45396a2d3
  return (
    <div className="containerTwuiter">
      {/* <button class="btnTwitter">
        Twitter
      </button> */}
      <div className="containerCard">
        <CardsTwitter cardsTwitter={props.cardsTwitter} />
        {/* <button class="btnCard">
          Imagens
        </button> */}
      </div>
      <div className="containerInformation">

        {
          props.userTwitter.map((item, index) => <div className="twitterUser" key={index}>
            <div className="twitterProfile">
              <img src={item.profile} alt="foto do perfil" className="twitterPicture" />
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