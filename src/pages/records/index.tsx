import { GeldIconLogo } from "../Icons/GeldLogo";
import { useRouter } from "next/router";
import Category from "../component/category";
import { RecordList } from "../component/RecordList";
import { RecordModal } from "../component/RecordModal";
import { useState } from "react";
import RadioButtonsGroup from "../component/RadioButton";
import { Box } from "@mui/material";

const Records = () => {
  const router = useRouter();
  const [releod, setReleod] = useState("");
  return (
    <Box>
      <Box className="MAIIIN">
        <Box className="navbar">
          <Box className="topmain">
            <GeldIconLogo />
            <h3
              style={{ cursor: "pointer" }}
              className="dash"
              onClick={() => router.push("/")}
            >
              Dashboard
            </h3>
            <h3
              style={{ cursor: "pointer" }}
              className="records"
              onClick={() => router.push("/records")}
            >
              Records
            </h3>
          </Box>
          <Box className="top2main">
            <Box className="ntbContainer">
              <button className="buttonRec">
                <h3
                  className="buttonRecc"
                  onClick={() => router.push("/login")}
                >
                  LogOut
                </h3>
              </button>
            </Box>
            <img className="prof" src="prof.jpeg" />
          </Box>
        </Box>
        <Box className=" MMAIN">
          <Box className="ttRecords">
            <h2 className="Title">Records</h2>
            <RecordModal type="add" id="" setReleod={setReleod} />
            <Box>
              <h3 className="Title-Small">Types</h3>
              <Box className="Type">
                <Box className="ttMUI">
                  <RadioButtonsGroup />
                </Box>
              </Box>
            </Box>
            <Box>
              <h2 className="Title-Small">Category</h2>
              <Category />
            </Box>
          </Box>
          <RecordList setReleod={setReleod} releod={releod} />
        </Box>
      </Box>
    </Box>
  );
};

export default Records;
