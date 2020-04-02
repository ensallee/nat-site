import React, { useState } from "react"
import Menu from "../Menu"
import Gallery from "../Gallery"
import style from "./style.module.css"

export default function Container() {
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  return (
    <div className={style.mainContainer}>
      <Menu
        setSelected={setSelected}
        setHovered={setHovered}
        selected={selected}
      />
      <Gallery selected={selected} hovered={hovered} />
    </div>
  )
}
