import React, { Fragment, useContext, useEffect, useState } from "react"
import { navigate } from "gatsby-link"
import classNames from "classnames"

import { AppContext } from "../../context/context"
import Hero from "../layout/hero"

import { DrLibby, PrescriptionHeader } from "../layout/media-objects"
import PatientDetails from "./patient-details"
import Superscription from "./superscription"

const PrescriptionPage = () => {
  const { state, dispatch } = useContext(AppContext)
  const [signa, setSigna] = useState([])
  const results = state?.prescription?.result
  const patient = state?.preConsult

  useEffect(() => {
    let finalPrescribedBooks = []
    if (results?.mainPrescription?.length > 0) {
      finalPrescribedBooks = [...results?.mainPrescription]
    }

    if (results?.otherRecommendations?.length > 0) {
      finalPrescribedBooks = [
        ...finalPrescribedBooks,
        ...results?.otherRecommendations,
      ]
    }

    setSigna(finalPrescribedBooks)
  }, [results])

  const handleButtonClick = () => {
    dispatch({
      type: "RETAKE",
    })
    navigate("/")
  }

  return (
    <Fragment>
      <Hero color="primary" addBox>
        <DrLibby>
          <div
            dangerouslySetInnerHTML={{
              __html: results?.resultNotes?.childMarkdownRemark?.html,
            }}
            className="mb-5"
          />
          <p>Here are your prescribed books. I hope they do you good. 😌</p>
        </DrLibby>
      </Hero>

      <Hero>
        <div className="box py-4">
          <PrescriptionHeader />
          <hr className="mt-1" />
          <PatientDetails patient={patient} />
          <br />

          {/* <span className="tag is-warning has-text-weight-bold is-uppercase">
              Doctor's Assessment
            </span>
            <hr className="has-background-white m-1" />
            <div
              dangerouslySetInnerHTML={{
                __html: results?.resultNotes?.childMarkdownRemark?.html,
              }}
            />
          </Superscription> */}
          <Superscription />
          <div className="columns">
            <div className="column is-2 is-2-tablet is-1-desktop is-hidden-mobile" />
            <div className="column">
              {signa?.length > 0
                ? signa?.map((item, index) => {
                    const medicine = item?.data
                    return (
                      <div key={index} className="mb-5">
                        <a
                          href={medicine?.goodreadsURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="is-size-4 has-text-link has-text-weight-bold has-text-underlined mb-0"
                        >
                          {medicine?.title}
                        </a>{" "}
                        <span className="is-inline-block ml-3 is-size-6 is-family-monospace has-text-light-gray has-text-weight-bold">
                          By {medicine?.author}
                        </span>
                        <p className="is-size-6 has-text-light-gray mb-3">
                          {medicine?.subtitle ? (
                            <em>{medicine?.subtitle}</em>
                          ) : (
                            ""
                          )}
                        </p>
                        <div className="is-family-monospace">
                          {medicine?.administration ? (
                            <p>{medicine?.administration}</p>
                          ) : (
                            <p>Read at least 5 pages daily.</p>
                          )}
                        </div>
                        {signa?.length > 1 && index === 0 ? (
                          <Fragment>
                            <hr
                              className={classNames({
                                "has-background-white": index > 0,
                              })}
                            />
                            <span className="tag is-light has-text-weight-bold is-uppercase is-family-monospace">
                              Other Recommendations
                            </span>
                          </Fragment>
                        ) : null}
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </div>

        <center>
          <button
            className="button is-primary is-large"
            onClick={handleButtonClick}
          >
            Thanks!
          </button>
        </center>
      </Hero>
    </Fragment>
  )
}

export default PrescriptionPage
