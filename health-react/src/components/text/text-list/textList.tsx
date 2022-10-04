import { TextListType } from "utils/types/enums/IExercicePost.interface";
import "./text-list.scss";

const TextList = ({ list }: { list: TextListType[] }) => {
  return (
    <ol className="text-list grid gap-x-2 gap-y-4 grid-cols-8 xl:grid-cols-12">
      {list.map((element: TextListType, id: number) => (
        <li
          className="text-list-item col-span-8 md:col-start-2 md:col-end-8 xl:col-start-3 xl:col-end-11"
          key={id}
        >
          {element.text}
        </li>
      ))}
    </ol>
  );
};
export default TextList;
