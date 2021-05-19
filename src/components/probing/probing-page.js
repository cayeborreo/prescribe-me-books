import { navigate } from "gatsby-link"
import React, { Fragment, useEffect, useState } from "react"
import Hero from "../layout/hero"
import { DrLibby } from "../layout/media-objects"

import { getFirstQuestion } from "./services/getFirstQuestion"
import { getRecordById } from "./services/getRecordById"

const ProbingPage = ({ questions, dispatch }) => {
  const [previousQuestion, setPreviousQuestion] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState({})

  const question = currentQuestion?.data

  useEffect(() => {
    if (Object.keys(currentQuestion).length < 1) {
      setCurrentQuestion(getFirstQuestion(questions))
    }
  }, [currentQuestion, questions])

  const handleAnswerClick = event => {
    const target = event.currentTarget

    setPreviousQuestion(currentQuestion)

    // If the answer leads to a follow-up question, setCurrentQuestion
    // Otherwise, call dispatch and save answer details to state.prescription
    if (target.name === "followUpQuestion") {
      const followUpQuestion = getRecordById(questions, target.id)
      setCurrentQuestion(followUpQuestion)
    } else {
      const results = getRecordById(currentQuestion?.data?.answers, target.id)

      if (results?.data?.isFinal) {
        dispatch({
          type: "UPDATE_PRESCRIPTION_RESULTS",
          payload: results?.data,
        })
        navigate("/prescription")
      } else {
        dispatch({
          type: "UPDATE_PRECONSULT_STATUS",
          payload: "REASSESS",
        })
        navigate("/")
      }
    }
  }

  const handleBackClick = () => {
    if (Object.values(previousQuestion)?.length < 1) {
      dispatch({
        type: "UPDATE_PRECONSULT_STATUS",
        payload: "REASSESS",
      })
      navigate("/")
    } else {
      setCurrentQuestion({ ...previousQuestion })
      setPreviousQuestion({ ...currentQuestion })
    }
  }

  return (
    <Fragment>
      <Hero color="primary" addBox>
        <DrLibby>{question?.label}</DrLibby>
      </Hero>

      <Hero>
        <center>
          <div className="buttons">
            {question?.answers?.length > 0
              ? question.answers.map((choices, index) => {
                  const choice = choices?.data
                  const id = choice?.followUpQuestion
                    ? choice?.followUpQuestion[0]?.recordId
                    : choices?.recordId
                  const name = choice?.followUpQuestion
                    ? "followUpQuestion"
                    : "isFinal"
                  return (
                    <button
                      className="button is-fullwidth"
                      id={id}
                      name={name}
                      key={index}
                      onClick={handleAnswerClick}
                      disabled={choice?.isDisabled}
                    >
                      {choices?.data?.label}
                    </button>
                  )
                })
              : null}
          </div>
          <a
            onClick={handleBackClick}
            className="is-link has-text-light-gray is-size-7 has-text-underlined"
          >
            Wait, go back
          </a>
        </center>
      </Hero>
    </Fragment>
  )
}

export default ProbingPage
