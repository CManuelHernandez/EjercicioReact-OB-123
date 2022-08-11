import React from "react";
import { Contacto } from "../models/contacto.class";
import ComponenteB from "./ComponenteB";

const ComponenteA = () => {
  const contactoPorDefecto = new Contacto(
    "Manuel",
    "Hernández",
    "cmanuelhm87@gmail.com",
    true
  );
  return (
    <div>
      <h1>Contactos</h1>
      <ComponenteB contacto={contactoPorDefecto} />
    </div>
  );
};

export default ComponenteA;
