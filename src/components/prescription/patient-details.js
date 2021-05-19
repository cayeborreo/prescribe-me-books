import React, { Fragment } from "react"

const PatientDetails = ({ patient }) => {
  return (
    <Fragment>
      <div className="columns is-mobile">
        <div className="column mt-0 is-5-mobile is-3-tablet is-2-desktop has-text-weight-bold">
          Name
        </div>
        <div className="column mt-0 is-family-monospace has-border-bottom">
          {patient?.patientName}
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column mt-0 is-5-mobile is-3-tablet is-2-desktop has-text-weight-bold">
          Chief Complaint
        </div>
        <div className="column mt-0 is-family-monospace has-border-bottom">
          {patient?.chiefComplaint}
        </div>
      </div>
    </Fragment>
  )
}

export default PatientDetails
