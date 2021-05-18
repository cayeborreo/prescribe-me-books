export const initialState = {
  preConsult: {
    status: "VISIT_CLINIC", // FILL_OUT_FORM, QUEUED, IN_CONSULT, PROCEED_WITH_PROBING
    patientName: "",
    chiefComplaint: "", // Lost in life, Lonely, Grief
    path: "", // LS, LN, GF, HB, TD
  },
  probing: {
    status: "", // FINISHED_PRECONSULT
    // currentQuestion: {}, // you can have this in local state! no need for app-wide updates
    isFinal: false,
  },
  prescription: {
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

    case "UPDATE_PROBING_STATUS":
      return {
        ...state,
        probing: {
          ...state.probing,
          status: action.payload,
        },
      }

    case "UPDATE_PROBING_QUESTION":
      return {
        ...state,
        probing: {
          ...state.probing,
          currentQuestion: action.payload,
        },
      }

    case "UPDATE_PRESCRIPTION_RESULTS":
      return {
        ...state,
        prescription: {
          result: {
            ...state?.prescription?.result,
            ...action.payload,
          },
        },
      }

    default:
      return state
  }
}
