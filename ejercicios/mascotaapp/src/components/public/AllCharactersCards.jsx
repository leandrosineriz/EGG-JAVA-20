import React from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { useState, useEffect } from 'react';
import { Card } from './Card';

export const AllCharactersCards = () => {
    const [characters, setCharacters] = useState([]);
    let cardsList=[];

    useEffect(() => {
        //console.log("USE EFFECT");
        RickAndMortyService.getAllCharactersPages(42)
        .then((list) => {
            setCharacters(list);
            //console.log("THEN");
        })
        .catch((error) => console.log(error));

        return () => {
            console.log("clear!");
        };
    }, []);
    
    cardsList = characters.map((m) => <Card mascota={m} key={m.id} />);
    //console.log(characters);
    //console.log("MAIN");
    return (
        <div>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    { characters.length>0 ? (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {cardsList}
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
