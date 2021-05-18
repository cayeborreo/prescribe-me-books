import React, { Fragment, useContext, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import { AppContext } from "../../context/context"

const ProbingPage = props => {
  // console.log(props?.data?.allAirtableQuestions?.nodes)
  const { state, dispatch } = useContext(AppContext)
  const { status } = state?.preConsult

  useEffect(() => {
    if (status !== "FINISH_PRECONSULT") {
      dispatch({
        type: "UPDATE_PRECONSULT_STATUS",
        payload: "FILL_OUT_FORM",
      })
      navigate("/")
    }
  }, [status, dispatch])

  return <Fragment>Lets see</Fragment>
}

export default ProbingPage

export const query = graphql`
  query ($id: String) {
    allAirtableQuestions(
      filter: { data: { path: { elemMatch: { id: { eq: $id } } } } }
    ) {
      nodes {
        data {
          answers {
            data {
              label
              isFinal
              followUpQuestion {
                recordId
              }
              mainPrescription {
                data {
                  author
                  main
                  goodreadsURL
                  secondary
                  subtitle
                  title
                }
              }
              otherRecommendations {
                data {
                  author
                  goodreadsURL
                  main
                  secondary
                  subtitle
                  title
                }
              }
            }
          }
          label
          order
          path {
            id
          }
        }
        recordId
      }
    }
  }
`
