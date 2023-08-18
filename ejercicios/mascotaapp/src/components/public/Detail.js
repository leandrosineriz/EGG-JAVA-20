import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {

  const [mascota, setMascota] = useState({});
  const {id} = useParams();
  const {pathname} = useLocation();
  console.log(pathname)
  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data) => {
      console.log(data);
      setMascota(data)
    })
    .catch((err) => console.log(err));
  }, [])
  


  return (
    <div>
      <div>{mascota.name}</div>
      <div>
        <Link to={"/"} className='mt3 btn btn-primary btn-lg'>
          Volver
        </Link>
      </div>
    </div>
  )
}
