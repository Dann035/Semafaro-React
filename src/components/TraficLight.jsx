import { useState } from "react";
import "./TraficLight.css";

function TraficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="contenedor">
      <img className="semafaro" src="src/assets/Imagen.jpeg" alt="Semáfaro" />
      <button
        className="redColor"
        onClick={() => setColor("#a52019")}
        style={{
          backgroundColor: color === "#a52019" ? "#FF3226" : "#a52019",
        }}
      ></button>
      <button
        className="greenColor"
        onClick={() => setColor("#C46100")}
        style={{
          backgroundColor: color === "#C46100" ? "#ff7e00" : "#C46100",
        }}
      ></button>
      <button
        className="yellowColor"
        onClick={() => setColor("#317f43")}
        style={{
          backgroundColor: color === "#317f43" ? "#09FF06" : "#317f43",
        }}
      ></button>
    </div>
  );
}

export default TraficLight;
