import React, { useEffect, useReducer } from "react"
import { AppReducer, initialState } from "./reducer"

const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const { status } = state.preConsult

  useEffect(() => {
    if (status === "QUEUED") {
      const waitingTime = setTimeout(() => {
        dispatch({
          type: "UPDATE_PRECONSULT_STATUS",
          payload: "IN_CONSULT",
        })
      }, 4000)
      return () => clearTimeout(waitingTime)
    }
  }, [status])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
