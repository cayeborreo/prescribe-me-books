export const initialState = {
  preConsult: {
    status: "VISIT_CLINIC", // FILL_OUT_FORM, QUEUED, IN_CONSULT, PROCEED_WITH_PROBING, FINISH_PRECONSULT
    patientName: "",
    chiefComplaint: "", // Lost in life, Lonely, Grief
    path: "", // LS, LN, GF, HB, TD
  },
  probing: {
    status: "", // CONFIRMED_CONCERN
    order: 1,
    isFinal: false,
  },
  prescribing: {
    result: {},
  },
}

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return initialState

    case "UPDATE_PRECONSULT_STATUS":
      return {
        ...state,
        preConsult: {
          ...state.preConsult,
          status: action.payload,
        },
      }

    case "UPDATE_PRECONSULT":
      return {
        ...state,
        preConsult: { ...state.preConsult, ...action.payload },
      }

    case "UPDATE_PROBING":
      return {
        ...state,
        probing: { ...state.probing, ...action.payload },
      }

    default:
      return state
  }
}
