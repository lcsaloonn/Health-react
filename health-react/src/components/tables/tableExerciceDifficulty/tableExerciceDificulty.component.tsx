import "./tableExerciceDifficulty.scss";

export function TableExerciceDifficultyComponent() {
  return (
    <div className="table-ex-difficulty">
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="table-border table-first">Débutant</th>
            <th className="table-border table-second">Intermédiaire</th>
            <th className="table-border table-third">Confirmé</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Série</th>
            <td>4</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">Répétition</th>
            <td>3</td>
            <td>4 </td>
            <td>4 </td>
          </tr>
          <tr>
            <th scope="row">Poid</th>
            <td>3 kg</td>
            <td>4 kg</td>
            <td>4 kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
