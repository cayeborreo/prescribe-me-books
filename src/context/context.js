import React, { useState } from "react"

const initialState = {}
const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
