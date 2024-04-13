import { GeldIconLogo } from "../Icons/GeldLogo"
import { Plus } from "../Icons/Plus"
import { useRouter } from "next/router"
import Category from "../component/category"
import { RecordList } from "../component/RecordList"
import { RecordModal } from "../component/RecordModal"
// import axios, { AxiosRequestConfig } from "axios"
import { useState } from "react"
import RadioButtonsGroup from "../component/RadioButton"

const Records = () => {
  const router = useRouter()
  const [releod, setReleod] = useState("")
  return (
    <div>
      <div className="MAIIIN">
        {/* --------- NAVBAR ---------- */}
        <div className="navbar">
          <div className="topmain">
            <GeldIconLogo />
            <h2 className="dash" onClick={() => router.push("/")}>
              Dashboard
            </h2>
            <div className="records">Records</div>
          </div>
          <div className="top2main">
            <div className="ntbContainer">
              <button className="buttonRec">
                <Plus /> <h3 className="buttonRecc">Record</h3>
              </button>
            </div>
            <img className="prof" src="prof.jpeg" />
          </div>
        </div>
        <div className=" MMAIN">
          <div className="ttRecords">
            <h2 className="Title">Records</h2>
            <RecordModal type="add" id="" setReleod={setReleod} />
            <div>
              <h3 className="Title-Small">Types</h3>
              <div className="Type">
                <div className="ttMUI">
                  <RadioButtonsGroup/>
                </div>
              </div>
            </div>
            <div>
              <h2 className="Title-Small">Category</h2>
              <Category />
            </div>
          </div>
          <RecordList setReleod={setReleod} releod={releod} />
        </div>
      </div>
    </div>
  )
}

export default Records
