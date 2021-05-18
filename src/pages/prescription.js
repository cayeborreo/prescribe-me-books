import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import PrescriptionPage from "../components/prescription/prescription-page"

const Prescription = () => {
  return (
    <Layout>
      <Seo title="Prescription" />
      <PrescriptionPage />
    </Layout>
  )
}

export default Prescription
