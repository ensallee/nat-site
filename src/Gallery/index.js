import React, { useState, useEffect } from "react"
import classnames from "classnames"
import house from "../media/house.JPG"
import whiteBuilding from "../media/white_building.JPG"
import screamingToast from "../media/screaming_toast.JPG"
import TV from "../media/tv.JPG"
import accessories from "../media/accessories.JPG"
import nat from "../media/nat.JPG"
import style from "./style.module.css"

const ImageMap = {
  Default: nat,
  About: house,
  Poetry: whiteBuilding,
  Psychology: screamingToast,
  "C.V.": TV,
  Contact: accessories
}

export default function Gallery(props) {
  const [imgPath, setImgPath] = useState()
  const [isNewImage, setIsNewImage] = useState(false)

  const { selected, hovered } = props

  useEffect(() => {
    const hasOneValue = selected || hovered
    const valueToMap = hasOneValue ? (selected ? selected : hovered) : "Default"
    const isNew = ImageMap[valueToMap] !== imgPath

    if (isNew) {
      setImgPath(ImageMap[valueToMap])
      setIsNewImage(true)
    }
  }, [selected, hovered])

  return (
    <div className={style.galleryContainer}>
      <div className={style.imageContainer}>
        <img
          onClick={e => e.stopPropagation()}
          className={classnames(isNewImage && style.fade)}
          onAnimationEnd={() => setIsNewImage(false)}
          src={imgPath}
          alt="Nat Sufrin iPhone Photograph"
        />
      </div>
    </div>
  )
}
