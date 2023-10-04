import React,{Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'', 
        hora:'',        
        sintoma:''
    });

    const [error, actualizarError] = useState(false);

    //Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    //Extraer los valores del objeto Cita
    const { mascota, propietario, fecha, hora, sintoma } = cita;

    //Cuando el usuario presionar "agregar cita"
    const submitCita = e =>{
        e.preventDefault();
        
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintoma.trim() === ''){
            actualizarError(true);
            return;
        }
        actualizarError(false);
        
        //Asignar un ID
        cita.id = uuid();
        
        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'', 
            hora:'',        
            sintoma:''
        });
    }

    return ( 
        <Fragment>
            <h2 className="text-center text-uppercase">Crear Cita</h2>

            {
                error 
                ? <div className="alert alert-danger" role="alert">Todos los campos son obligatorios</div>
                : <p></p>
            }

            <form 
                onSubmit={submitCita}
            >
                <div className="form-group">
                    <label>Nombre Mascota</label>
                    <input  type="text" 
                            className="form-control" 
                            name="mascota" 
                            placeholder="Nombre Mascota"
                            onChange={actualizarState}
                            value={mascota} />                    
                </div>
                <div className="form-group">
                    <label>Nombre Propietario</label>
                    <input  type="text" 
                            className="form-control" 
                            name="propietario" 
                            placeholder="Nombre Propietario de la mascota"
                            onChange={actualizarState}
                            value={propietario}/>                    
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input  type="date" 
                            className="form-control" 
                            name="fecha" 
                            onChange={actualizarState}
                            value={fecha}/>                    
                </div>
                <div className="form-group">
                    <label>Hora</label>
                    <input  type="time" 
                            className="form-control" 
                            name="hora" 
                            onChange={actualizarState}
                            value={hora}/>                    
                </div>
                <div className="form-group">
                    <label>Sintomas</label>
                    <textarea  
                            className="form-control" 
                            name="sintoma"
                            placeholder="Describa los sintomas que presenta su mascota" 
                            onChange={actualizarState}
                            value={sintoma}/>                    
                </div>
                <div className="form-group">
                    <button type="submit"
                            className="form-control btn btn-success" 
                            name="agregarCita">
                    Agregar Cita</button>                    
                </div>
            </form>
        </Fragment>
     );
}


Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;