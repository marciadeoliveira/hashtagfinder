import React from 'react';
import HomeIcon from '../../assets/icon-home.svg';
import OffIcon from '../../assets/icon-power-off.svg'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react';
import './style.css';

function Search() {
  const [lista, setLista] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const buttonStyles = [
    {
      title: "HOME",
      icon: HomeIcon,
      route: "/",
      textColor: "#0A1744",
      backgroundColor: "#72EFDB",
    },
    {
      title: "SAIR",
      icon: OffIcon,
      route: "/login",
      textColor: "#FFF",
      backgroundColor: "#1E3E7B",
    },
  ]
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
    .then((result) => setLista(result.records))
    .catch(error => console.log('error', error));
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((Appetizer) => {
    // se o elemento que estiver observando estiver visivel irá executar o código para trazer a próxima página de conteúdo
    if(Appetizer.some((entrada) => entrada.isIntersecting)) {
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
    return (
			<header className='Searchpage'>
        <div className='SearchListMain'>
          <Header buttons={buttonStyles} />
          <div className='SearchListTitle'>Buscas Realizadas</div>
          <div className='SearchListTable'>
            <div id='SearchListContainer'>
              <div className='SearchHeaderTable'>
                <p className='SearchhashTagColumn'>HashTag</p>
                <p className='SearchdateColumn'>Data</p>
                <p className='SearchhourColumn'>Hora</p>
              </div>
              <div className='SearchscrollTable'>
                <div id='SearchListHastags'>
                  {lista.map((user, i) => (
                    <ul className='SearchListHastags' key={i}>
                      <li className='SearchListMarcadores'>{user.fields.Hashtag}</li>
                      <li className='SearchdateColumns'>{formatDate(user.fields.Data)}</li>
                      <li className='SearchhourColumns'>{formatTime(user.fields.Data)}</li>
                    </ul>
                   ))}



                </div>
							</div>
           </div>
          <div id='sentinel'></div>
          </div>
        </div>
        <Footer />
      </header>
    );
};
export default Search;