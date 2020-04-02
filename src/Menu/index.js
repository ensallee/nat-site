import React from "react"
import classnames from "classnames"
import style from "./style.module.css"

const PoetryList = [
  {
    name: "Antioch Review",
    link: "http://review.antiochcollege.edu/winter-2015"
  },
  {
    name: "Blaze Vox",
    link:
      "http://www.blazevox.org/BX%20Covers/BXspring14/Nat%20Sufrin%20-%20Spring%2014.pdf"
  },
  { name: "Dialogist", link: "https://dialogist.org/v1i4-nat-sufrin/" },
  {
    name: "Fence",
    link: "https://reader.exacteditions.com/issues/80349/spread/1"
  },
  { name: "Imperial Matters", link: "http://imperialmatters.com/nat-sufrin/" },
  {
    name: "Jellyfish",
    link: "http://www.jellyfishmagazine.org/10/sufrin.html"
  },
  {
    name: "Tinge",
    link: "http://www.tingemagazine.org/love-letter-to-irigaray/"
  },
  {
    name: "TriQuarterly",
    link: "https://www.triquarterly.org/contributors/nat-sufrin"
  }
]

//TODO: psych links
//TODO: CV
//TODO: about section

export default function Menu(props) {
  const { setSelected, setHovered, selected } = props

  const handleSelection = e => {
    e.stopPropagation()
    const value = e.target.innerText
    selected === value ? setSelected(null) : setSelected(value)
  }

  return (
    <div className={style.flexContainer} onClick={() => setSelected(null)}>
      <div className={style.menu}>
        <h1 className={style.natSufrin}>nat sufrin</h1>
        <ul className={style.mainListContainer}>
          <li
            className={classnames(selected === "About" && style.selected)}
            onClick={e => handleSelection(e)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={e => setHovered(null)}
          >
            About
          </li>
          <li
            className={classnames(selected === "Poetry" && style.selected)}
            onClick={e => handleSelection(e)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={e => setHovered(null)}
          >
            Poetry
          </li>
          <li
            className={classnames(selected === "Psychology" && style.selected)}
            onClick={e => handleSelection(e)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={e => setHovered(null)}
          >
            Psychology
          </li>
          <li
            className={classnames(selected === "C.V." && style.selected)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={e => setHovered(null)}
          >
            C.V.
          </li>
          <li
            className={classnames(selected === "Contact" && style.selected)}
            onMouseEnter={e => setHovered(e.target.innerText)}
            onMouseLeave={e => setHovered(null)}
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
            Nat Sufrin is a doctoral candidate in Clincial Psychology at The
            City College of New York. He is also a practicing poet and iPhone
            photography enthusiast. He lives in Brooklyn.
          </p>
        </div>
      </div>
    </div>
  )
}
