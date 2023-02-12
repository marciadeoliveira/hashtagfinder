import "./style.css";
import { useEffect, useState } from 'react';


function SearchList (){
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
   
        fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/buscas?maxRecords=10&filterByFormula=({Squad} = '0922')",
        // fetch( "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?maxRecords=10&view=Grid%20view",
              {
            method:"GET",
            headers: 
                    {
              "Authorization": 'Bearer keykXHtsEPprqdSBF'
            }
          }
            )
        .then(response => response.json())
        .then((result) => setList(result.records))
        .catch(error => console.log('error', error));
      }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((Appetizer) => {
    // se o elemento que estiver observando estiver visivel irá executar o código para trazer a próxima página de conteúdo
    if(Appetizer.some((entry) => entry.isIntersecting)) {
      setTimeout(
        () =>
          setCurrentPage(
            (currentPageInsideState) => currentPageInsideState + 10
        ),1000
      );
    }
  });
 //esse metodo observa algum elemento da página
  intersectionObserver.observe(document.querySelector("#sentinel"));
  return () => intersectionObserver.disconnect();
  }, []);

    //FORMATAR A DATA
  function formatDate(date) {
      let newDate = new Intl.DateTimeFormat("pt-br", {
          day: "2-digit",
          month: "2-digit",
      }).format(date);
      return newDate;
  }
  //FORMATAR HORA
  function formatTime(time) {
    let  newhour = new Intl.DateTimeFormat("pt-br", {
      hour: "numeric",
      minute: "numeric",
    }).format(time);
    return newhour;
  }

    return( 
        <div className='searchScrollTable'>
        <div id='searchListHastags'>
        {list.map((user, i) => (
            <ul className='searchListHastags' key={i}>
            <li className='searchListMarcadores'>{user.fields.Hashtag}</li>
            <li className='searchDateColumns'>{formatDate(user.fields.Data)}</li>
            <li className='searchHourColumns'>{formatTime(user.fields.Data)}</li>
            </ul>
        ))}
        </div>
        </div>
    )        
}
export default SearchList;