import React, { Fragment, useContext, useEffect, useState } from "react"
import { navigate } from "gatsby-link"

import { AppContext } from "../../context/context"
import Hero from "../layout/hero"

import {
  DrLibby,
  PrescriptionHeader,
  Superscription,
} from "../layout/media-objects"
import PatientDetails from "./patient-details"
import classNames from "classnames"

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
      type: "RESET_STATE",
    })
    navigate("/")
  }

  return (
    <Fragment>
      <Hero color="primary" addBox>
        <DrLibby>
          <p>All right, that's good enough for now.</p>
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
          <Superscription>
            <div className="notification is-light p-3">
              <span className="tag is-warning has-text-weight-bold is-uppercase is-family-monospace">
                Dr Libby's Assessment
              </span>
              <hr className="m-1" />
              <p>Assessment here</p>
            </div>
            {signa?.length > 0
              ? signa?.map((item, index) => {
                  const medicine = item?.data
                  return (
                    <div key={index} className="mb-5">
                      <a
                        href={medicine?.goodreadsURL}
                        className="is-size-4 has-text-weight-bold has-text-underlined mb-0"
                      >
                        {medicine?.title}
                      </a>
                      <p className="is-size-6 has-text-light-gray mb-3">
                        {medicine?.subtitle ? (
                          <em>{medicine?.subtitle}</em>
                        ) : (
                          ""
                        )}
                      </p>
                      <div className="is-family-monospace">
                        <p>For indication</p>
                        <p>Read at least 5 pages daily</p>
                      </div>
                      <hr
                        className={classNames({
                          "has-background-white": index > 0,
                        })}
                      />
                      {index === 0 ? (
                        <span className="tag is-light has-text-weight-bold is-uppercase is-family-monospace">
                          Other Recommendations
                        </span>
                      ) : null}
                    </div>
                  )
                })
              : null}
          </Superscription>
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
