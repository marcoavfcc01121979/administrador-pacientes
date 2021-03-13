import React, { useEffect, useState } from 'react'
import Cita from './components/Cita';
import Formulario from './components/Formulario'

function App() {
  //citas em local storage
  let citasIniciantes = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciantes) {
    citasIniciantes = [];
  }

  const [citas, guardaCitas] = useState(citasIniciantes);

  useEffect(() => {
    if(citasIniciantes) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas, citasIniciantes])

  // 
  const criarCita = (cita) => {
    guardaCitas([
      ...citas,
      cita
    ])
  }

  // função que elimina uma citação
  const eliminaCitacao = (id) => {
    const novasCitas = citas.filter(cita => cita.id !== id)
    guardaCitas(novasCitas)
  }

  const titulo = citas.length === 0 ? 'Não há citações' : 'Administrando pacientes'

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              criarCita={criarCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminaCitacao={eliminaCitacao}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
