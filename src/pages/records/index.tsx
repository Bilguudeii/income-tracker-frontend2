import axios from "axios";
import { GeldIconLogo } from "../Icons/GeldLogo";
import { Plus } from "../Icons/Plus";
import Category from "../component/category";
import { BluePlus } from "../Icons/BluePlus";
import { useEffect, useState } from "react";

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
              <div className="ttone">
                <h2 className="recordss">Records</h2>
                <button className="ntb">
                  <Plus /> Add
                </button>
              </div>
              <input className="ttInput" placeholder="Search" />
              <h3>Types</h3>
              <div className="ttMUI">
                <input className="ttCheckBox" type="checkbox" /> <h3 className="ttName">All</h3>
              </div>
              <div className="ttMUI">
                <input className="ttCheckBox" type="checkbox" /> <h3 className="ttName">Income</h3>
              </div>
              <div className="ttMUI">
                <input className="ttCheckBox" type="checkbox" /> <h3 className="ttName">Expense</h3>
              </div>
            </div>
            <div>
              <h2>Category</h2>
              <Category />
            </div>
            <div>
              <button className="ttButton"> <BluePlus /> Add Category</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Records;
