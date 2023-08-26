import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({mascota}) => {
   
  return (
    <div>
        <div className="col">
            <div className="card shadow-sm">
              <Link to={"details/"+mascota.id}>
                <img width="100%" src={mascota.image} alt='img'/>
              </Link>

                <h3 className="mb-0 text-dark text-center"> {mascota.name} </h3>
                <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to={"details/"+mascota.id} className='btn btn-sm btn-outline-secondary'>View</Link>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
