import { BasicButton } from "../../components/buttons";
import { ButtonStyleEnum } from "../../utils/types/enums/buttonStyleEnum";
import "./mainView.scss";

const MainView = () => {
  const statsArray = [
    {
      number: 140,
      title: "EXPERT COACHES",
    },
    {
      number: 978,
      title: "Members joined",
    },
    {
      number: 50,
      title: "fitness programs",
    },
  ];

  return (
    <div className="home main-container">
      <div className="slogan">
        <span className="transparent">Shape</span>
        <span className="full"> Your</span>
        <div className="full">Ideal Body</div>
      </div>

      <div className="cummon-text">
        In here we will help you to shape and build your ideal body and live up
        your life to fullest
      </div>

      <div className="stats-container">
        {statsArray.map((stat: { number: number; title: string }) => (
          <div className="stats">
            <div className="stats-number">+ {stat.number}</div>
            <div className="stats-text">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="hero-button">
        <BasicButton
          children="Get started"
          onClick={() => {
            console.log("click");
          }}
          buttonStyle={ButtonStyleEnum.PRIMARY}
        ></BasicButton>
        <BasicButton
          children="Learn more"
          onClick={() => {
            console.log("click");
          }}
          buttonStyle={ButtonStyleEnum.SECONDARY}
        ></BasicButton>
      </div>

      <div className="programs-header">
        <span className="transparent">Explore our</span>
        <span className="full">Programs</span>
        <span className="transparent"> to share you</span>
      </div>
    </div>
  );
};

export default MainView;
