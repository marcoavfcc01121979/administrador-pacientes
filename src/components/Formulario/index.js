import React, { useState } from 'react'

import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({ criarCita }) => {
    const [cita, atualizaCita] = useState({
        paciente: '',
        doente: '',
        data: '',
        hora: '',
        sintomas: ''
    })
    const [error, atualizaError] = useState(false);

    const atualizaEstado = (e) => {
        
        atualizaCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { paciente, doente, data, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(paciente.trim() === '' || doente.trim() === '' || data.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            atualizaError(true);
            return;
        }

        //Eliminar a mensagem previo
        atualizaError(false);

        // Assinar um ID
        cita.id = uuid();


        // Criar uma citação
        criarCita(cita)

        // Reiniciar um form
        atualizaCita({
            paciente: '',
            doente: '',
            data: '',
            hora: '',
            sintomas: ''
        })
    }
    return(
        <>
            <h2>Criar Citações</h2>

            {error ? <p className="alerta-error">Todos os campos são obrigátorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nome do paciente</label>
                <input 
                    type="text"
                    name="paciente"
                    className="u-full-width"
                    placeholder="Nome do paciente"
                    onChange={atualizaEstado}
                    value={paciente}
                />

                <label>Nome da doença</label>
                <input 
                    type="text"
                    name="doente"
                    className="u-full-width"
                    placeholder="Nome da doença do paciente"
                    onChange={atualizaEstado}
                    value={doente}
                />

                <label>Data</label>
                <input 
                    type="date"
                    name="data"
                    className="u-full-width"
                    onChange={atualizaEstado}
                    value={data}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={atualizaEstado}
                    value={hora}
                />

                <label>Sítomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={atualizaEstado}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Criar citações</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    criarCita: PropTypes.func.isRequired
}

export default Formulario;