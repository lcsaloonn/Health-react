import { ButtonGoBack } from "components/buttons";
import { ImageWrapper, PartFrame } from "components/frame";
import { TextList } from "components/text";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { HttpService } from "services/http/http.service";
import { IExercicePost } from "utils/types/enums/IExercicePost.interface";
import "./signleExerciceView.scss";

const SingleExerciceView = () => {
  const http = new HttpService();

  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [titlesplit, setTitleSplit] = useState<string[]>([]);
  const [exercice, setExercice] = useState<IExercicePost>();

  const getExercice = async () => {
    try {
      const response = await http.get(`/exercicePost/${id}`);
      if (response.status !== 400) {
        setExercice(response);
      }
    } catch {}
  };

  useEffect(() => {
    if (id !== undefined) {
      setTitle(id.replaceAll("-", " "));
      setTitleSplit(id.split("-"));
    }

    getExercice();
  }, [""]);

  if (exercice !== undefined) {
    return (
      <div className="main-container single-exercice">
        <div className="exercice-go-back grid grid-cols-3 ">
          <ButtonGoBack text="retour" link="../" />
        </div>
        <div className="exercice-header md:grid  md:grid-cols-3 gap-4">
          <div className="exercice-title">
            <span className="exercice-title-transparent">Exercice</span>
            {titlesplit.map((element: string, id: number) => (
              <span className="exercice-title-full" key={id}>
                {element}
              </span>
            ))}
          </div>

          <ImageWrapper imgUrl="d" alt="d" />
        </div>

        <p className="description"></p>

        <div className="how-to">
          <PartFrame title={"Comment faire le " + title} />
          <TextList list={exercice.howToRealise} />
        </div>
      </div>
    );
  } else {
    return <h1>Wrong name</h1>;
  }
};
export default SingleExerciceView;
