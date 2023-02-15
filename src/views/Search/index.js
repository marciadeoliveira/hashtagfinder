import React from 'react';
import HomeIcon from '../../assets/icon-home.svg';
import OffIcon from '../../assets/icon-power-off.svg'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import './style.css';
import SearchList from '../../components/SearchList';

function Search() {
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
  return (
    <header className='searchPage'>
      <div className='searchListMain'>
        <Header buttons={buttonStyles} />
        <div className='searchListTitle'>Buscas Realizadas</div>
        <div className='searchListTable'>
          <div id='searchListContainer'>
            <div className='searchHeaderTable'>
              <p className='searchHashTagColumn'>HashTag</p>
              <p className='searchDateColumn'>Data</p>
              <p className='searchHourColumn'>Hora</p>
            </div>
            <SearchList />
          </div>
          <div id='ObservList'></div>
        </div>
      </div>
      <Footer />
    </header>
  );
};
export default Search;