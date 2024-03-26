import { GeldIconLogo } from "../Icons/GeldLogo";
import { Plus } from "../Icons/Plus";
import { useRouter } from "next/router";
import Category from "../component/category";
import { List } from "../component/list";

const Records = () => {
  const router = useRouter()
  return (
    <div className="MMAIN">
      <div className="MAIIIN">
        <div className="navbar">
          <div className="topmain">
            <GeldIconLogo />
            <h2 className="dash" onClick={() => router.push('/')}>Dashboard</h2>
            <div className="records">Records</div>
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
        <div className="ttContainer">
          <div style={{display:'flex', alignItems:'center', width:'800px'}}>
            <div className="ttRecords">
              <div>
                <div className="ttone">
                  <h2 className="recordss">Records</h2>
                  <button className="ntb">
                    <Plus /> Add
                  </button>
                </div>
                <h3 className="ttTypex">Types</h3>
                <div className="ttMUI ttAAA">
                  <input className="ttCheckBox" type="checkbox" />{" "}
                  <h3 className="ttName">All</h3>
                </div>
                <div className="ttMUI">
                  <input className="ttCheckBox" type="checkbox" />{" "}
                  <h3 className="ttName">Income</h3>
                </div>
                <div className="ttMUI">
                  <input className="ttCheckBox" type="checkbox" />{" "}
                  <h3 className="ttName">Expense</h3>
                </div>
              </div>
              <div>
                <h2 className="ttTypex">Category</h2>
                <Category />
              </div>
            </div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
