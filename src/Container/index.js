import React, { useState } from "react"
import Menu from "../Menu"
import Gallery from "../Gallery"
import style from "./style.module.css"

export default function Container() {
  const [selected, setSelected] = useState("Default")

  return (
    <div className={style.mainContainer}>
      <Menu setSelected={setSelected} />
      <Gallery selected={selected} />
    </div>
  )
}
