
import "./style.css";

function CardsTwitter(props){
  return(
    <div className="containerCardsTwitter">
      {
        props.cardsTwitter.map((item,index) => <div className='CardsTwitter' key={index} style={
          {
            display:"flex",
            marginBottom:"5%",
          }
        }
      >
        <img 
          src= {item.icon} 
          alt= "cards" 
          className="cardsIlustration"
          style={
            {
              display: 'flex',
              flexDirection:'column',
              width: '170px',
              height: '180px',
              borderRadius: '15%',
            }
          }
          
        />
       </div>
        )}
    </div>
  )
}
export default CardsTwitter;
