import classNames from "classnames"
import React from "react"

const Container = ({
  children,
  mobile = 12,
  tablet = 10,
  desktop = 8,
  fullhd = 6,
  isCentered = true,
}) => {
  return (
    <div
      className={classNames("columns", {
        "is-centered": isCentered,
      })}
    >
      <div
        className={classNames(
          `column is-${mobile}-mobile is-${tablet}-tablet is-${desktop}-desktop is-${fullhd}-fullhd`
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
