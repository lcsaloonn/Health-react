import { SessionCardComponent } from "components/cards";

export function SessionListView() {
  return (
    <div className="sessions">
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
