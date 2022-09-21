import img from "../../../assets/img/exercices/face-pull-exercice-epaules.jpg";
import { truncateText } from "../../../utils/util/text-format/textFormat";
import "./exerciceCard.scss";

const ExerciceCard = () => {
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus iure molestias totam sed reprehenderit libero ipsam voluptas dolorum rerum! Numquam, sed. Ab rem consequatur facilis quaerat eum similique esse aliquid";
  console.log(truncateText(text, 5)); // pour tronquer
  return (
    <div className="exercice-card">
      <div className="thumbnail">
        <img src={img} alt="" />
      </div>
      <div className="title">Face pull</div>
      {/* couper si trop gros */}
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        possimus, labore eaque delectus, earum autem necessitatibus quisquam
        sunt illo corrupti totam quos ipsa fuga at unde maxime esse eum quas!
      </div>
      {/* stars pour plus tard */}
    </div>
  );
};
export default ExerciceCard;
