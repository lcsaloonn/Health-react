import "./text-list.scss";

type TextListType = {
  id: number;
  text: string;
};

const TextList = ({ list }: { list: TextListType[] }) => {
  return (
    <ol className="text-list grid gap-4 grid-cols-6">
      {list.map((element: TextListType, id: number) => (
        <li className="text-list-item col-start-2 col-end-6" key={id}>
          {element.text}
        </li>
      ))}
    </ol>
  );
};
export default TextList;
