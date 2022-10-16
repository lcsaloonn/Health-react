import { SessionCardComponent } from "components/cards";
import "./sessionListView.scss";

export function SessionListView() {
  return (
    <div className="main-container sessions">
      <div className="sessions-title">Choisis ton Programme</div>
      <div className="sessions-title">Et débute ton entrainement</div>
      <div className="sessions-cards">
        <div>
          <SessionCardComponent />;
        </div>
        <div>
          <SessionCardComponent />;
        </div>
        <div>
          <SessionCardComponent />;
        </div>
      </div>
    </div>
  );
}
