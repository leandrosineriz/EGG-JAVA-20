import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {

  const [mascota, setMascota] = useState(null);

  const {id} = useParams();
  let {page} = useParams();

  const {pathname} = useLocation();

  if (page == undefined) {
    page = 1;
  }

  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data) => {
      setMascota(data);
    })
    .catch((err) => console.log(err));
  }, [])

  // const results = [];
  
  // for (let i = 0; i < episodes.length; i++) {
  //   results.push(
  //     <span key={i}>
  //       <br />
  //       {episodes[i]}
  //     </span>,
  //   );
  // };

  return (
    <div>
      <div>
        <Link to={"/"+page} className='mt3 btn btn-primary btn-lg'>
          Volver
        </Link>
      </div>
      <div className="card mb-3">
        { mascota ? (
          <div className="row g-0">
          <div className="col-md-2">
            <img src={mascota.image} className="img-fluid rounded-start" alt="img"></img>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{mascota.name}</h5>
              <p className="card-text">Status: {mascota.status}</p>
              <p className="card-text">Species: {mascota.species}</p>
              <p className="card-text">Type: { mascota.type==="" ? ("unknown"):(mascota.type)}</p>
              <p className="card-text">Gender: {mascota.gender}</p>
              <p className="card-text">Origin: {mascota.origin.name}</p>
              <p className="card-text">Location: {mascota.location.name}</p>
              <p className="card-text">Episodes: {mascota.episode.length}</p>
              <p className="card-text"><small className="text-body-secondary">Created: {mascota.created}</small></p>
            </div>
          </div>
        </div>
        ) : (
          <p> Loading... </p>
        )
        }
      </div>
      
      
    </div>
  )
}
