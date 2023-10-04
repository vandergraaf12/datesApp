import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita,eliminarCita}) => {

    return (  
        <Fragment>
            <a href="#" className="list-group-item list-group-item-action bg-dark">
                <div className="d-flex w-100 justify-content-between text-light">
                <h5 className="mb-1 text-light">{cita.mascota}</h5>
                <small>{cita.fecha} {cita.hora}</small>
                </div>
                <p className="mb-1 text-light ">{cita.sintoma}</p>
                <small className="align-baseline">{cita.propietario}</small> 
                <div className="text-right">
                        <button className="btn btn-danger "
                                onClick={ () => eliminarCita(cita.id) }> Eliminar </button>
                </div>                
            </a>            
        </Fragment>
    );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;