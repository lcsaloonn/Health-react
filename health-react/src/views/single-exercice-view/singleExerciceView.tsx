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
    <div className="single-exercice">
      <h1>{id}</h1>
      <p className="description"></p>
      <img src="" alt="" />
      <div className="how-to">
        {/* fram -- coment -- */}
        <h1 className="title">Comment réaliser le {id}</h1>

        <TextList list={mock} />

        {/* component etape */}
      </div>
    </div>
  );
};
export default SingleExerciceView;
