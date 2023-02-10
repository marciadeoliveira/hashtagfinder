import React from "react";
import IconSearch from '../../assets/icon-search.svg';
import "./style.css";

function SearchBarHome(props){
  var tag;
  // Função que verifica se input tem algum valor ao teclar enter, através do input
  function handleChange(e){
    tag = document.querySelector('#searchInput').value.replace(/[^a-zA-Z0-9_]/g, '')
    var keyEnter= e.keyCode
    if(keyEnter === 13){
      if(tag === ''){
        props.setMsgErr('Preencha o campo corretamente')
      }else{
        props.setSearchValue(tag)
        clearFields()
      }
    }
  }
  // Função que verifica se input tem algum valor ao clicar na lupa de pesquisa
  function addHash(){
    tag = document.querySelector('#searchInput').value.replace(/[^a-zA-Z0-9_]/g, '')
    if(tag === ''){
      props.setMsgErr('Preencha o campo corretamente')
    }else if(tag !== '' ){
      props.setSearchValue(tag)
      clearFields()
    }
  }
  // Funçaõ que limpa o valor do input e também a mensagem de erro pelo input não ter valor
  function clearFields(){
    document.querySelector('#searchInput').value = ''
    props.setMsgErr('')
  }

  return(
    <div className='searchBar'>
      <div className="searchBarInput"  value={props.searchValue}>
        <button className='searchButton' onClick={addHash}>
          <img src= {IconSearch} alt= "ilustração" className='searchInputIcon'/>
        </button>
        <input 
          className="searchInput" 
          placeholder="Buscar..." 
          maxLength={6} 
          onChange={handleChange}
          onKeyDown={handleChange}
          id="searchInput"
        />
      </div>
    </div>
  );
}
export default SearchBarHome;  