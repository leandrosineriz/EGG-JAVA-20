import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({mascota}) => {
  
  return (
    <div className='card-RM'>
      { mascota ? (
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
                  <small className="text-body-secondary">Estado: 
                    {(() => {
                      if (mascota.status=="Alive") {
                        return <span style={{color: "green"}}> Vivo</span>;
                      } else if (mascota.status=="Dead") {
                        return <span style={{color: "red"}}> Muerto</span>;
                      } else {
                        return <span style={{color: "grey"}}> Desconocido</span>;
                      }
                    })()}
                  </small>
              </div>
              </div>
          </div>
        </div>
      ) : 
      (
        <div className="col">
          <div className="card shadow-sm">
            
              <img width="100%" src="" alt='img'/>
            

              <h3 className="mb-0 text-dark text-center"> </h3>
              <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className='btn btn-sm btn-outline-secondary'></button>
                  </div>
              </div>
              </div>
          </div>
        </div>
      )
      }
        
    </div>
  )
}
