import { GeldIconLogo } from "./Icons/GeldLogo";
import { Plus } from "./Icons/Plus";
import DashBoardOne from "./component/DashBoardOne";
import DashBoardTwo from "./component/DashBoardTwo";
import { List } from "./component//list";
import { useRouter } from "next/router";
import { BarChart } from "./component/chart";
import { Chaart } from "./component/chaart";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <div className="dashMMAIN">
        <div className="MAIIIN">
          <div className="navbar">
            <div className="topmain">
              <GeldIconLogo />
              <h2 className="dash">Dashboard</h2>
              <div className="records" onClick={() => router.push("/records")}>
                Records
              </div>
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
          <div>
            <div className="dashContainer">
              <div className="Stack">
                <div className="Stackk">
                  <DashBoardOne />
                  <DashBoardTwo />
                  <DashBoardTwo />
                </div>
              </div>
              <div className="middlee">
                <div>
                  <div className="middletwo">
                    <h2>Income - Expense</h2>
                  </div>
                  <div className="middletwoo">
                    <BarChart />
                  </div>
                </div>
                <div>
                  <div className="middletwo"></div>
                  <div className="middletwoo">
                    <Chaart />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <List />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
