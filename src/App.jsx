import logo from "./assets/logo.png";
import iconQuestion from "./assets/icon_question.svg";
import iconHeart from "./assets/icon_heart.svg";

import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <section className="container_content">
        <section className="container_intro">
        <img src={logo} className="logo" alt="Logo Quiz" />
        <div>
          <h3 className=" font-bold mb-4">Indicaciones para jugar</h3>
          <div className="flex gap-2 mb-4">
            <img src={iconQuestion} alt="Icono Pregunta" />
            <p>Tendrás <b>6 preguntas</b> para responder</p>
          </div>

          <div className="flex gap-2 mb-4">
            <img src={iconHeart} alt="Icono Pregunta" />
            <p> <b>3</b> vidas</p>
          </div>
          
        </div>
        <Link className="button" to="/quiz">EMPEZAR</Link>
        </section>  
      </section>
    </main>
  );
}

export default App;
