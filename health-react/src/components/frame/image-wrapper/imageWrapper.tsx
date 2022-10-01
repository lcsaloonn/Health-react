import "./imageWrapper.scss";

const ImageWrapper = ({ imgUrl, alt }: { imgUrl: string; alt: string }) => {
  return (
    <div className="img-wrapper">
      <img
        src="../assets/img/developpe-militaire-exercice-musculation.gif"
        alt="#"
      />
    </div>
  );
};
export default ImageWrapper;
