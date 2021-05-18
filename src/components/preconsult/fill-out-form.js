import React, { Fragment, useState } from "react"
import classNames from "classnames"

import Hero from "../layout/hero"
import { GuyTheReceptionist } from "../layout/media-objects"

const FillOutForm = ({ paths, state, dispatch }) => {
  const [formValues, setFormValues] = useState({
    ...state?.preConsult,
    status: "FILL_OUT_FORM",
  })
  const [errors, setErrors] = useState({})

  const handleChange = event => {
    event.preventDefault()
    setErrors({ ...errors, [event.currentTarget.name]: null })
    setFormValues({
      ...formValues,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleClick = event => {
    event.preventDefault()
    setErrors({ ...errors, path: null })
    setFormValues({
      ...formValues,
      chiefComplaint: event.currentTarget.name,
      path: event.currentTarget.id,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!formValues?.chiefComplaint) {
      setErrors({
        ...errors,
        chiefComplaint: "Please let us know your chief complaint",
      })
    }

    if (formValues?.patientName && formValues?.chiefComplaint) {
      setErrors({})
      dispatch({
        type: "UPDATE_PRECONSULT",
        payload: {
          ...formValues,
          status: "QUEUED",
        },
      })
    }
  }

  return (
    <Fragment>
      <Hero color="primary" addBox>
        <GuyTheReceptionist>
          <p>
            Hi there. Please answer this form as Dr Libby gets ready for you.
          </p>
        </GuyTheReceptionist>
      </Hero>

      <Hero>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="box py-4">
            <div className="content is-normal">
              <h3>PATIENT INFORMATION</h3>
              <hr />
              <div className="field mb-5">
                <label className="label" htmlFor="patientName">
                  Name
                </label>
                <p className="control">
                  <input
                    name="patientName"
                    className="input"
                    type="text"
                    placeholder="Type your name here"
                    value={formValues?.patientName}
                    onChange={handleChange}
                    required
                  />
                </p>
              </div>

              <label className="has-text-weight-bold" htmlFor="chiefComplaint">
                Chief Complaint
              </label>
              <br />
              <i>Lately, I've been feeling...</i>
              <div className="buttons mt-3 mb-2">
                {paths?.map((path, index) => (
                  <button
                    className={classNames("button", {
                      "is-warning": formValues?.path === path?.data?.url,
                    })}
                    key={index}
                    name={path?.data?.name}
                    id={path?.data?.url}
                    onClick={handleClick}
                  >
                    {path?.data?.name}
                  </button>
                ))}
              </div>
              {errors?.chiefComplaint ? (
                <p className="help is-danger">{errors?.chiefComplaint}</p>
              ) : null}
            </div>
          </div>

          <center>
            <button className="button is-primary is-large" type="submit">
              I'm done
            </button>
          </center>
        </form>
      </Hero>
    </Fragment>
  )
}

export default FillOutForm
