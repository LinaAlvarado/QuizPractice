import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const Result = ({score, message}) => {
  return (
    <main>
    <section className="container_content">
      <section className="question_view">
      <div className="container_end_view">
          <img src={logo} className="logoEnd" alt="Logo Quiz" />
          <div>
            <h5 className="title_end">{message}</h5>
            <p className="score_p">Tu puntaje es {score}</p>
          </div>
          <Link className="button" to="/" >
            VOLVER A JUGAR
          </Link>
        </div>
     
      </section>  
    </section>
  </main>
   
      
     
   
  );
};

export default Result;
