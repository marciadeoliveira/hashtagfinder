import IconSearch from '../../assets/icon-search.svg';
import React from "react";

import "./style.css";
function SearchBarHome(props){
  var tag;
  function handleChange(e){
    tag = document.querySelector('#searchInput').value.replace(/[^a-zA-Z0-9_]/g, '')
    var keyEnter= e.keyCode
    if(keyEnter === 13){
      if(tag === ''){
        props.setMsgErr('Preencha o campo corretamente')
      }else{
        props.setSearchValue(tag)
        clearFields()
        twitter()
      }
    }
  }
  function addHash(){
    tag = document.querySelector('#searchInput').value.replace(/[^a-zA-Z0-9_]/g, '')
    if(tag === ''){
      props.setMsgErr('Preencha o campo corretamente')
    }else if(tag !== '' ){
      props.setSearchValue(tag)
      clearFields()
      twitter()
    }
  }
  function clearFields(){
    document.querySelector('#searchInput').value = ''
    props.setMsgErr('')
  }
  function twitter(){
    console.log( 'agora vai')
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