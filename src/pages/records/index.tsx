import { GeldIconLogo } from "../Icons/GeldLogo";
import { Plus } from "../Icons/Plus";
import Category from "../component/category";
import { BluePlus } from "../Icons/BluePlus";

const Records = () => {
  return (
    <div className="MMAIN">
      <div className="MAIIIN">
        <div className="navbar">
          <div className="topmain">
            <GeldIconLogo />
            <h2 className="dash">Dashboard</h2>
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
        <div>
          <div className="ttRecords">
            <div>
              <h2 className="tRecords">Records</h2>
              <button className="ntb">
                <Plus /> Add
              </button>
              <input className="ttInput" placeholder="Search" />
              <h3>Types</h3>
              <div>
                <input className="ttCheckBox" type="checkbox" /> <h3>All</h3>
              </div>
              <div>
                <input className="ttCheckBox" type="checkbox" /> <h3>Income</h3>
              </div>
              <div>
                <input className="ttCheckBox" type="checkbox" /> <h3>Expense</h3>
              </div>
            </div>
            <div>
              <h2>Category</h2>
              {[...Array(10)].map(() => (
                <Category/>
              ))}
            </div>
            <div>
                <BluePlus/> <h3>Add Category</h3>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Records;
