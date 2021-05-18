import React, { Fragment, useContext, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import { AppContext } from "../../context/context"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import ProbingPage from "../../components/probing/probing-page"

const Probing = props => {
  const { state, dispatch } = useContext(AppContext)
  const questions = props?.data?.allAirtableQuestions?.nodes

  // useEffect(() => {
  //   if (status !== "FINISHED_PRECONSULT") {
  //     dispatch({
  //       type: "RESET_STATE",
  //     })
  //     navigate("/")
  //   }
  // }, [status, dispatch])

  return (
    <Layout>
      <Seo title="Probing" />
      <ProbingPage questions={questions} state={state} dispatch={dispatch} />
    </Layout>
  )
}

export default Probing

export const query = graphql`
  query ($id: [String] = "$id") {
    allAirtableQuestions(
      filter: { data: { path: { elemMatch: { id: { in: $id } } } } }
    ) {
      nodes {
        recordId
        data {
          answers {
            data {
              isFinal
              indication
              label
              resultNotes {
                childMarkdownRemark {
                  html
                }
              }
              followUpQuestion {
                recordId
              }
              mainPrescription {
                data {
                  author
                  goodreadsURL
                  main
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
            recordId
          }
          order
          label
          referringAnswer {
            data {
              mainQuestion {
                recordId
              }
            }
          }
        }
      }
    }
  }
`
