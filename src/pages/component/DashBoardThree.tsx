import * as React from "react"
import { Upside } from "../Icons"

function DashBoardOne() {
  return (
    <div className="dashboardTwo">
      <div className="twotop">
        <h3 className="urinc">Total Expenses</h3>
      </div>
      <div>
        <h3 className="urinc texttt">1,200,000₮</h3>
        <h3 className="urinc textttt">Your income Amount</h3>
      </div>
      <div>
        <h3 className="urinc texttttt">
          <Upside /> 32% from last month
        </h3>
      </div>
    </div>
  )
}

export default DashBoardOne
