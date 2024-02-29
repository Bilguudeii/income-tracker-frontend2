import { GeldIconLogo } from "./Icons/GeldLogo";
import { Plus } from "./Icons/Plus";
import DashBoardOne from "./component/DashBoardOne";
import DashBoardTwo from "./component/DashBoardTwo";

const Home = () => {
  return (
    <>
      <div className="MMAIN">
        <div className="MAIIIN">
          <div className="navbar">
            <div className="topmain">
              <GeldIconLogo />
              <h2 className="dash">Dashboard</h2>
              <h2 className="records">Records</h2>
            </div>
            <div className="top2main">
              <div>
                <button className="buttonRec">
                  <Plus /> <h3 className="buttonRecc">Record</h3>
                </button>
              </div>
              <img className="prof" src="prof.jpeg" />
            </div>
          </div>

          <div className="Stack">
            <div className="Stackk">
              <DashBoardOne/>
              <DashBoardTwo/>
              <DashBoardTwo/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
