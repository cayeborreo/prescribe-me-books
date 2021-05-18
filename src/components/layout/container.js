import classNames from "classnames"
import React from "react"

const Container = ({
  children,
  mobile = 8,
  tablet = 8,
  desktop = 8,
  fullhd = 6,
  isCentered = true,
}) => {
  return (
    <div
      className={classNames("columns is-mobile mx-5 py-5", {
        "is-centered": isCentered,
      })}
    >
      <div
        className={`column is-${mobile}-mobile is-${tablet}-tablet is-${desktop}-desktop is-${fullhd}-fullhd`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
