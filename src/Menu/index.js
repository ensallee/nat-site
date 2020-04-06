import React from "react"
import classnames from "classnames"
import cv from "../files/040320_Sufrin_CV.pdf"
import style from "./style.module.css"

const PoetryList = [
  {
    name: "Antioch Review",
    link: "http://review.antiochcollege.edu/winter-2015"
  },
  {
    name: "bG Gallery",
    link: "http://www.santamonica.bgartdealings.com/word-jumble/"
  },
  {
    name: "Best American Experimental Writing 2015",
    link:
      "https://books.google.com/books?id=gesTCwAAQBAJ&newbks=1&newbks_redir=0&lpg=PP1&dq=Best%20American%20Experimental%20Writing%202015&pg=PT271#v=twopage&q&f=false"
  },
  {
    name: "BlazeVOX",
    link:
      "http://www.blazevox.org/BX%20Covers/BXspring14/Nat%20Sufrin%20-%20Spring%2014.pdf"
  },
  { name: "DIALOGIST", link: "https://dialogist.org/v1i4-nat-sufrin/" },
  {
    name: "Fence",
    link: "https://reader.exacteditions.com/issues/80349/spread/10"
  },
  { name: "Imperial Matters", link: "http://imperialmatters.com/nat-sufrin/" },
  {
    name: "Jellyfish Magazine",
    link: "http://www.jellyfishmagazine.org/10/sufrin.html"
  },
  {
    name: "TINGE Magazine",
    link: "http://www.tingemagazine.org/love-letter-to-irigaray/"
  },
  {
    name: "TriQuarterly",
    link: "https://www.triquarterly.org/contributors/nat-sufrin"
  }
]

export default function Menu(props) {
  const { setSelected, setHovered, selected } = props

  const handleSelection = e => {
    e.stopPropagation()
    const value = e.target.innerText
    selected === value ? setSelected(null) : setSelected(value)
  }

  return (
    <div className={style.flexContainer}>
      <div className={style.menu}>
        <h1 className={style.natSufrin}>nat sufrin</h1>
        <ul className={style.mainListContainer}>
          <li
            className={classnames(selected === "About" && style.selected)}
            onClick={e => handleSelection(e)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={() => setHovered(null)}
          >
            About
          </li>
          <li
            className={classnames(selected === "Poetry" && style.selected)}
            onClick={e => handleSelection(e)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={() => setHovered(null)}
          >
            Poetry
          </li>
          <li
            className={classnames(selected === "Research" && style.selected)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href="https://www.researchgate.net/profile/Nat_Sufrin2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research
            </a>
          </li>
          <li
            className={classnames(selected === "CV" && style.selected)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={cv} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
          <li
            className={classnames(selected === "Contact" && style.selected)}
            onClick={e => handleSelection(e)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=nwsufrin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul
          className={classnames(
            style.poetryContainer,
            selected === "Poetry" && style.visible
          )}
        >
          {PoetryList.map(pub => {
            return (
              <li key={pub.name} onClick={e => e.stopPropagation()}>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  {pub.name}
                </a>
              </li>
            )
          })}
        </ul>
        <div
          className={classnames(
            style.aboutContainer,
            selected === "About" && style.visible
          )}
        >
          <p>
            Nat Sufrin is a doctoral candidate in clinical psychology at The
            City University of New York. He also writes poems and takes photos
            on his phone.
          </p>
        </div>
        <div
          className={classnames(
            style.emailContainer,
            selected === "Contact" && style.visible
          )}
        >
          <p>nwsufrin[at]gmail[dot]com</p>
        </div>
      </div>
    </div>
  )
}
