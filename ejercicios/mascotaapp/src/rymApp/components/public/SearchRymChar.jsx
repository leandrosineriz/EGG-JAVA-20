import React, { useEffect, useState } from 'react'
import  RickAndMortyService from '../../services/RickAndMorty.service'
import './css/SearchRymChar.css'
import { Link } from 'react-router-dom';

export const SearchRymChar = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");

  let searchList=[];

  useEffect(() => {
    const controller = new AbortController();

    RickAndMortyService.getAllCharactersPages(42, {signal: controller.signal})
    .then((data) => {
      setCharacters(data);
      console.log("effect");
    })
    .catch((error) => {console.log(error);})
  
    return () => {
      controller.abort();
    }
  }, [input])
    
  function handleChange(){
    let searchListRym = document.getElementById("searchList");
    let searchBar = document.getElementById("searchBarRym");

    if (searchBar.value == "") {
      searchListRym.classList.add("hidden");
    } else {
      setInput(searchBar.value);
      searchListRym.classList.remove("hidden");
      console.log("handleChange");
    }
    
    //searchList.classList.add("searchDrop");
  }
  //console.log(characters);
  searchList = characters.map((char) => {
    if(char.name.toLowerCase().includes(input.toLocaleLowerCase())){
      return <p id={char.id} key={char.id}><Link to={"details/"+char.id}>{char.name}</Link></p>
    }
  });
  console.log("main");
  return (
    <div>
        <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" id="searchBarRym"className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" 
            onInput={handleChange}/>
        </div>
        <div className='searchDrop hidden' id='searchList' >
          {searchList}
        </div>
        
        
    </div>
    
  )
}
