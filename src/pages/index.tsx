import { GeldIconLogo } from "./Icons/GeldLogo"
import { Plus } from "./Icons/Plus"
import DashBoardOne from "./component/DashBoardOne"
import DashBoardTwo from "./component/DashBoardTwo"
import { List } from "./component//list"
import { useRouter } from "next/router"
import { BarChart } from "./component/chart"
import { Chaart } from "./component/chaart"
import { Box } from "@mui/material"

const Home = () => {
  const router = useRouter()

  return (
    <>
      <Box className="dashMMAIN">
        <Box className="MAIIIN">
          <Box className="navbar">
            <Box className="topmain">
              <GeldIconLogo />
              <h2 className="dash">Dashboard</h2>
              <Box className="records" onClick={() => router.push("/records")}>
                Records
              </Box>
            </Box>
            <Box className="top2main">
              <Box>
                <button className="buttonRec">
                  <Plus /> <h3 className="buttonRecc">Record</h3>
                </button>
              </Box>
              <img className="prof" src="prof.jpeg" />
            </Box>
          </Box>
          <Box className="dashMainContainer">
            <Box className="dashContainer">
              <Box className="Stack">
                <Box className="Stackk">
                  <DashBoardOne />
                  <DashBoardTwo />
                  <DashBoardTwo />
                </Box>
              </Box>
              <Box className="middlee">
                <Box>
                  <Box className="middletwo">
                    <h2>Income - Expense</h2>
                  </Box>
                  <Box className="middletwoo">
                    <BarChart />
                  </Box>
                </Box>
                <Box>
                  <Box className="middletwo"></Box>
                  <Box className="middletwoo">
                    <Chaart />
                  </Box>
                </Box>
              </Box>
              <Box className="bottom">
                <List />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
