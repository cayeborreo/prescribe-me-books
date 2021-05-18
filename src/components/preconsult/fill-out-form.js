import classNames from "classnames"
import React, { Fragment, useState } from "react"
import Container from "../layout/container"
import Hero from "../layout/hero"

const FillOutForm = ({ paths, dispatch }) => {
  const [formValues, setFormValues] = useState({
    patientName: "",
    chiefComplaint: "",
    path: "",
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
      <Hero>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="A placeholder"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content is-medium is-family-monospace">
              <p>
                Hi there. Please answer this form as Dr Libby gets ready for
                you.
              </p>
            </div>
          </div>
        </article>
      </Hero>

      <Container>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="box py-4">
            <div className="content is-normal">
              <h3>PATIENT INFORMATION</h3>
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
                    value={formValues?.name}
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
      </Container>
    </Fragment>
  )
}

export default FillOutForm
