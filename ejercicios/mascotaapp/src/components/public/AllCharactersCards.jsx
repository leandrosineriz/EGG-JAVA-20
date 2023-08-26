import React from 'react'

export const AllCharactersCards = () => {
    const [mascotas, setMascotas] = useState([]);
    let cardsList=[];

    useEffect(() => {
        RickAndMortyService.getCharactersByPage(page)
        .then((data) => {
            setMaxPages(data.info.pages);
            setMascotas(data.results);
        })
        .catch((error) => console.log(error));
        
        return () => {
            console.log("clear!");
        };
    }, []);

    cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />);

    return (
        <div>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardsList}
                    </div>
                </div>
            </div>
        </div>
    );
}
