import { GeldIconLogo } from "./Icons/GeldLogo"
import DashBoardOne from "./component/DashBoardOne"
import DashBoardTwo from "./component/DashBoardTwo"
import DashBoardThree from "./component/DashBoardThree"
import { List } from "./component//list"
import { useRouter } from "next/router"
import { BarChart } from "./component/chart"
import { useEffect, useState } from "react"
import { Chaart } from "./component/chaart"
import { Box } from "@mui/material"
import axios from "axios"
import DashBoardCombined from "./component/DashBoardCombined"

type Transaction = {
  amount: number | string
  category: string
  note: string
  transactionTitle: string
  transactionType: string
  userId?: string
  __v: number
  _id: string
}

const Home = ({ transaction }: { transaction: Transaction[] }) => {
  // let income = 0
  // let expense = 0
  // for(let i = 0;i< transaction.length; i++){
  //   if(transaction[i],transactionType === 'income'){
  //     income = income + transaction[i].amount
  //   }else {
  //     expense = expense - transaction[i].amount
  //   }
  //   }
  // }

  // let total = income +
  const router = useRouter()
  const [releod, setReleod] = useState("")

  return (
    <>
      <Box className="dashMMAIN">
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
              <Box>
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
          <Box className="dashMainContainer">
            <Box className="dashContainer">
              <Box className="Stack">
                <Box className="Stackk">
                  <DashBoardOne />
                  <DashBoardCombined />
                  <DashBoardCombined />
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
                <List setReleod={setReleod} releod={releod} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
