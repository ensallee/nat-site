import React, { useState } from "react"
import classnames from "classnames"
import style from "./style.module.css"

const PoetryList = [
  {
    name: "Antioch Review",
    link:
      "https://www.jstor.org/stable/10.7723/antiochreview.73.1.0081?seq=1#page_scan_tab_contents"
  }, //TODO: fix broken link
  {
    name: "Blaze Vox",
    link:
      "http://www.blazevox.org/BX%20Covers/BXspring14/Nat%20Sufrin%20-%20Spring%2014.pdf"
  },
  { name: "Dialogist", link: "https://dialogist.org/v1i4-nat-sufrin/" },
  { name: "Fence", link: "#" }, //TODO: add Fence link
  { name: "InDigest", link: "#" }, //TODO: is this the one that didn't happen?
  {
    name: "inter/rupture",
    link: "http://interrupture.com/archives/oct_2015/nat_sufrin/"
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
    link: "http://www.triquarterly.org/issues/issue-141/nina-we-pretty"
  }
]

export default function Menu() {
  const [poetryVisible, setPoetryVisible] = useState(false)
  const [psychVisibe, setPsychVisible] = useState(false)

  return (
    <div>
      <h1>Nat Sufrin</h1>
      <ul className={style.mainListContainer}>
        <li onClick={() => setPoetryVisible(!poetryVisible)}>Poetry</li>
        <ul
          className={classnames(
            style.poetryContainer,
            poetryVisible && style.visible
          )}
        >
          {PoetryList.map(pub => {
            return (
              <li>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  {pub.name}
                </a>
              </li>
            )
          })}
        </ul>
        <li onClick={() => setPsychVisible(true)}>Psychology</li>
        <li>C.V.</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
