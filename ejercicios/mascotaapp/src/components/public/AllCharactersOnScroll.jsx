import React, { Component, useEffect, useState } from 'react'
import { Card } from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { API_RM } from '../../constants/Api.constants';
import { useParams, Link, redirect } from 'react-router-dom';

export const AllCharactersOnScroll = () => {
  
  const [mascotas, setMascotas] = useState([]);

  let page = 1;
  let cardsList=[];
  let cardContainer;
  let lastCardObserver;

  function loadNewCards(page) {
    page +=1;
    RickAndMortyService.getCharactersByPage(page)
    .then((data) => {
        data.results.map((m) => cardsList.push(<Card mascota={m} key={m.id} />));
        setMascotas[data.results];
        console.log(data.results);
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log("1")
    RickAndMortyService.getCharactersByPage(1)
    .then((data) => {
      setMascotas(data.results);
      
    })
    .catch((error) => console.log(error));

    return () => {
      console.log("clear 1!");
    };
  }, []);

  

  useEffect(() => {
    console.log("2");
    lastCardObserver = new IntersectionObserver( entries => {
      const lastCard = entries[0];
      if (!lastCard.isIntersecting) return;
          loadNewCards(page);
          lastCardObserver.unobserve(lastCard.target);
          lastCardObserver.observe(document.querySelector(".card-RM:last-child"));
          console.log(document.querySelector(".card-RM:last-child"));
    });

      try {
        lastCardObserver.observe(document.querySelector(".card-RM:last-child"));
        cardContainer = document.querySelector(".test");
      } catch (error) {
        console.log("error observer");
      }
    return () => {
      
    }
  }, [mascotas])

  cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />);
  
  return (
    <div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          { mascotas.length!=0 ? (
              <div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 test">
                  {cardsList}
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )
          }
        </div>
      </div>
    </div>
  );
}


function subscribeRmPage(params) {
  let characters = [];
  RickAndMortyService.getCharactersByPage(1)
    .then((data) => {
      characters = data.results;
      return characters;
    })
    .catch((error) => console.log(error))
}

