"use client"

import { Global } from "@emotion/react"
import React from "react"
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro"

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  )
}

export default GlobalStyles
