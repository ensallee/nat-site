import React, { useState, useEffect } from "react"
import whiteBuilding from "../media/white_building.JPG"
import candyAndFlowers from "../media/candy_and_flowers.JPG"
import screamingToast from "../media/screaming_toast.JPG"
import TV from "../media/tv.JPG"
import accessories from "../media/accessories.JPG"
import nat from "../media/nat.JPG"
import style from "./style.module.css"

const ImageMap = {
  Default: nat,
  Poetry: whiteBuilding,
  Psychology: screamingToast,
  "C.V.": TV,
  Contact: accessories
}

export default function Gallery(props) {
  const [imgPath, setImgPath] = useState()
  const [isNewImage, setIsNewImage] = useState(false)

  const { selected } = props

  useEffect(() => {
    setImgPath(ImageMap[selected])
    setIsNewImage(true)
  }, [selected])

  return (
    <div className={style.galleryContainer}>
      <div className={style.imageContainer}>
        <img
          className={isNewImage && style.fade}
          onAnimationEnd={() => setIsNewImage(false)}
          src={imgPath}
          alt="Nat Sufrin iPhone Photograph"
        />
      </div>
    </div>
  )
}
