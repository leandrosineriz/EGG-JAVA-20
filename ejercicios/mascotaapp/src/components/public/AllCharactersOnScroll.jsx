import React, { Component, useEffect, useState } from 'react'
import { Card } from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { API_RM } from '../../constants/Api.constants';
import { useParams, Link, redirect } from 'react-router-dom';

export const AllCharactersOnScroll = () => {
  
  const [mascotas, setMascotas] = useState([]);
  const [maxPages, setMaxPages] = useState(42);
  let {page} = useParams();

  let cardsList=[];
  let buttons = [];

  
  useEffect(() => {
    RickAndMortyService.getCharactersByPage(page)
    .then((data) => {
      setMaxPages(data.info.pages);
      setMascotas(data.results);
    })
    .catch((error) => console.log(error));

    buttons = [];

    return () => {
      buttons = [];
      console.log("clear!");
    };
  }, [page]);
  
  
  if (page == undefined) {
    page = 1;
  }

  

  //Intersection Observer test
  //####################################################
//   const observer = new IntersectionObserver( entries => {
//     entries.forEach(entry => {
//       console.log("entre");
//       entry.target.classList.toggle("show", entry.isIntersecting);
      
//     });
//   });

//   cards.forEach(card => {
//     console.log(card);
//     observer.observe(card);
//   })

  useEffect(() => {
    const lastCardObserver = new IntersectionObserver( entries => {
        const lastCard = entries[0];
        if (!lastCard.isIntersecting) return;
            loadNewCards();
            lastCardObserver.unobserve(lastCard.target);
            lastCardObserver.observe(document.querySelector(".card-RM:last-child"));
    });

    let cardContainer;

    try {
        lastCardObserver.observe(document.querySelector(".card-RM:last-child"));
        cardContainer = document.querySelector(".test");
    } catch (error) {
        console.log(error);
    }
    

    function loadNewCards() {
        RickAndMortyService.getCharactersByPage(page+1)
        .then((data) => {
            data.results.map((m) => cardsList.push(<Card mascota={m} key={m.id} />));
            console.log(data.results);
        })
        .catch((error) => console.log(error));
    }
  
    return () => {
      cardsList = [];
    }
  }, [cardsList]);

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
