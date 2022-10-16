import { Link } from "react-router-dom";

export function SessionStartInfoView() {
  return (
    <div className="session-info">
      <div className="session-info-title"> Session test</div>
      <div className="session-info-bodyPart">
        <div className="session-info-bodyPart-title">
          Cette session vous permet de développé
        </div>
        <div className="session-info-bodyPart-list">
          <span className="session-info-bodyPart-list-item">bras</span>
          <span className="session-info-bodyPart-list-item">dos</span>
          <span className="session-info-bodyPart-list-item">pecs</span>
          <span className="session-info-bodyPart-list-item">jambre</span>
        </div>
      </div>
      <div className="session-info-parts">
        <div className="session-info-parts-ex1">
          <div className="session-info-parts-ex1-img">
            <img src="" alt="" />
          </div>
          <div className="session-info-parts-ex1-container">
            <div className="session-info-parts-ex1-container-title">ex1</div>
            <p className="session-info-parts-ex1-container-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga rem
              porro neque iure libero culpa maiores veritatis, ducimus tenetur a
              at nulla corporis explicabo accusantium facilis perspiciatis?
              Totam, suscipit quisquam.
            </p>
            <Link to="\">en savoir plus</Link>
            <div className="session-info-parts-ex1-container-series">
              Nombre de série: <b>2</b>
            </div>
            <div className="session-info-parts-ex1-container repetition">
              Nombre de répétition: <b>4</b>
            </div>
            <div className="session-info-parts-ex1-container-weight">
              Poids: variable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
