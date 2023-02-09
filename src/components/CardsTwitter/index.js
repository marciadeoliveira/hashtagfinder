import "./style.css";

function CardsTwitter(props){
  return(
    <div className="containerCardsTwitter">
      {
        props.cardsTwitter.map((item,index) => <div className='cardsTwitter' key={index}>
        <img src= {item.icon} alt= "cards" className="cardsIlustration"/>
        <label className="cardsPostedBy">Postado por:</label>
        <label className="postedbyUserName">@{item.username}</label>
       </div>
        )}
    </div>
  )
}
export default CardsTwitter;
