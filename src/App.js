import React,  {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
      citasIniciales = [];
  }

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      if(citasIniciales){
          localStorage.setItem('citas',JSON.stringify(citas));
      }
      else{
          localStorage.setItem('citas',JSON.stringify([]));
      }
  }, [citas]);

  //Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
      guardarCitas([...citas,cita]);
  }

  //Función qué elimina una cita por su ID
  const eliminarCita = id =>{
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length  === 0 
                ? 'No hay citas' 
                : 'Administra tus citas'

  return (
    <Fragment>
      <div className="bg-light">
          <div className="row p-3 mb-2  bg-primary text-white">
              <div className="col ">
                  <h1>Administrador de Pacientes</h1>  
              </div>           
          </div> 
          <div className="row p-3 mb-2 ">
              <div className="col">
                  <Formulario
                  crearCita={crearCita} /> 
              </div>           
              <div className="col">
                  <h2 className="text-center text-uppercase">{titulo}</h2> <br></br>
                      <div className="list-group bg-dark">
                        {
                          citas.map(cita => (
                              <Cita
                                    key={cita.id}                   
                                    cita={cita}
                                    eliminarCita={eliminarCita}
                              />
                          )) 
                        }
                      </div>
              </div>
          </div> 
      </div>   
    </Fragment>    
  );
}

export default App;
