import React, { Fragment, useContext } from "react"
import { AppContext } from "../../context/context"

import VisitClinic from "./visit-clinic"
import FillOutForm from "./fill-out-form"
import InConsult from "./in-consult"
import Queued from "./queued"
import ProceedWithProbing from "./proceed-with-probing"

const PreconsultPage = ({ paths }) => {
  const { state, dispatch } = useContext(AppContext)

  const RenderPreconsultComponent = () => {
    switch (state?.preConsult?.status) {
      case "VISIT_CLINIC":
      default:
        return <VisitClinic state={state} dispatch={dispatch} />
      case "FILL_OUT_FORM":
        return <FillOutForm paths={paths} state={state} dispatch={dispatch} />
      case "QUEUED":
        return <Queued state={state} dispatch={dispatch} />
      case "IN_CONSULT":
        return <InConsult state={state} dispatch={dispatch} />
      case "PROCEED_WITH_PROBING":
      case "FINISH_PRECONSULT":
        return <ProceedWithProbing state={state} dispatch={dispatch} />
    }
  }

  return (
    <Fragment>
      <RenderPreconsultComponent />
    </Fragment>
  )
}

export default PreconsultPage
