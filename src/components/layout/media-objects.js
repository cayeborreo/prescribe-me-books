import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"

export const DrLibby = ({ children }) => {
  return (
    <Fragment>
      <div className="block mb-3">
        <span className="tag is-warning is-family-monospace is-uppercase has-text-weight-bold">
          Dr Libby
        </span>
      </div>
      <article className="media">
        <figure className="media-left">
          <div className="image is-64x64">
            <StaticImage
              src="../../images/dr-libby-avatar.png"
              layout="constrained"
              width={64}
              alt="Woman in glasses (Dr Libby) avatar"
            />
          </div>
        </figure>
        <div className="media-content">
          <div className="content is-medium">{children}</div>
        </div>
      </article>
    </Fragment>
  )
}

export const GuyTheReceptionist = ({ children }) => {
  return (
    <Fragment>
      <div className="block mb-3">
        <span className="tag is-light is-family-monospace is-uppercase has-text-weight-bold">
          Guy the Receptionist
        </span>
      </div>
      <article className="media">
        <figure className="media-left">
          <div className="image is-64x64">
            <StaticImage
              src="../../images/receptionist-avatar.png"
              layout="constrained"
              width={64}
              alt="Guy in glasses (receptionist) avatar"
            />
          </div>
        </figure>
        <div className="media-content">
          <div className="content is-medium is-family-monospace">
            {children}
          </div>
        </div>
      </article>
    </Fragment>
  )
}

export const PrescriptionHeader = () => {
  return (
    <article className="media">
      <figure className="media-left">
        <div className="image is-64x64">
          <StaticImage
            src="../../images/prescribe-me-books-logo.png"
            layout="constrained"
            width={64}
            alt="Prescribe Me Books logo"
          />
        </div>
      </figure>
      <div className="media-content">
        <div className="content is-medium my-3">
          <h3 className="mb-0">Dr Libby's Clinic</h3>
          <p className="is-size-7">
            prescribemebooks.caye.codes || (+63) 999 123 READ
          </p>
        </div>
      </div>
    </article>
  )
}

export const Superscription = ({ children }) => {
  return (
    <article className="media">
      <figure className="media-left">
        <div className="content is-large pr-5">
          <h1>Rx</h1>
        </div>
      </figure>
      <div className="media-content">
        <div className="content is-normal my-3">{children}</div>
      </div>
    </article>
  )
}
