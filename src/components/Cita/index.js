import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, eliminaCitacao}) => (
    <div className="cita">
        <p>Nome do paciente: <span>{cita.paciente}</span></p>
        <p>Nome da doença: <span>{cita.doente}</span></p>
        <p>Data: <span>{cita.data}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminaCitacao(cita.id)}
        >Deletar &times;</button>
    </div>
)

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminaCitacao: PropTypes.func.isRequired
}

export default Cita;
