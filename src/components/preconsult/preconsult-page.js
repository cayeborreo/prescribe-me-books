import React, { Fragment, useContext } from "react"
import { AppContext } from "../../context/context"

import VisitClinic from "./visit-clinic"
import FillOutForm from "./fill-out-form"
import Queued from "./queued"
import InConsult from "./in-consult"
import ProceedWithProbing from "./proceed-with-probing"
import Reassess from "./reassess"

const PreconsultPage = ({ paths }) => {
  const { state, dispatch } = useContext(AppContext)

  const RenderPreconsultComponent = () => {
    switch (state?.preConsult?.status) {
      case "VISIT_CLINIC":
      default:
        return <VisitClinic dispatch={dispatch} />
      case "FILL_OUT_FORM":
        return <FillOutForm paths={paths} state={state} dispatch={dispatch} />
      case "QUEUED":
        return <Queued state={state} dispatch={dispatch} />
      case "IN_CONSULT":
        return <InConsult state={state} dispatch={dispatch} />
      case "PROCEED_WITH_PROBING":
      case "FINISH_PRECONSULT":
        return <ProceedWithProbing state={state} dispatch={dispatch} />
      case "REASSESS":
        return <Reassess paths={paths} state={state} dispatch={dispatch} />
    }
  }

  return (
    <Fragment>
      <RenderPreconsultComponent />
    </Fragment>
  )
}

export default PreconsultPage
