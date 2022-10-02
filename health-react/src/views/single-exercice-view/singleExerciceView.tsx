import { ButtonGoBack } from "components/buttons";
import { ImageWrapper, PartFrame } from "components/frame";
import { TextList } from "components/text";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { HttpService } from "services/http/http.service";
import "./signleExerciceView.scss";

const SingleExerciceView = () => {
  const http = new HttpService();
  const { id } = useParams();
  const [exercice, setExercice] = useState([]);

  const getExercice = async () => {
    const response = await http.get(`/exercices/getByName/${id}`);
    setExercice(response);
  };

  useEffect(() => {
    console.log("Executed only once!");
    getExercice();
  }, [""]);

  const mock = [
    {
      id: 1,
      text: "blalblqlf,sfdfkdfkkf dfkkfkfkfkfkfkkfk fkfkfkkfkfkkf  kfkdkfkd k fdk kdf dk fkdk fdkfk dk fdkf",
    },
    {
      id: 2,
      text: "blalblqlf,sfdfkdfkkf dfkkfkfkfkfkfkkfk fkfkfkkfkfkkf  kfkdkfkd k fdk kdf dk fkdk fdkfk dk fdkf",
    },
    {
      id: 3,
      text: "blalblqlf,sfdfkdfkkf dfkkfkfkfkfkfkkfk fkfkfkkfkfkkf  kfkdkfkd k fdk kdf dk fkdk fdkfk dk fdkf",
    },
  ];

  return (
    <div className="main-container single-exercice">
      <div className="exercice-go-back grid grid-cols-3 ">
        <ButtonGoBack text="retour" link="../" />
      </div>
      <div className="exercice-header md:grid  md:grid-cols-3">
        <div className="exercice-title">
          <span className="exercice-title-transparent">Exercice</span>
          <span className="exercice-title-full">{id}</span>
        </div>

        <ImageWrapper imgUrl="d" alt="d" />
      </div>

      <p className="description"></p>

      <div className="how-to">
        <PartFrame title={"Comment faire le " + id} />
        <TextList list={mock} />
      </div>
    </div>
  );
};
export default SingleExerciceView;
