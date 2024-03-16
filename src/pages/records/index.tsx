import { GeldIconLogo } from "../Icons/GeldLogo";
import { Plus } from "../Icons/Plus";

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
            </div>
        </div>
    )
}

export default Records