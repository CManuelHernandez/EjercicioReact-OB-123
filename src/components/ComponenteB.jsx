import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";

const ComponenteB = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellido: {contacto.apellido}</h2>
      <h2>Email: {contacto.email}</h2>
      <h3>
        Conectado:{" "}
        {contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </h3>
    </div>
  );
};

ComponenteB.prototype = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteB;
