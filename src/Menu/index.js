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

export default function Menu(props) {
  const [visibleItem, setVisibleItem] = useState(null)

  const { setSelected } = props

  const handleSelection = (e, value, func) => {
    e.stopPropagation()
    func(value)
  }

  return (
    <div className={style.flexContainer} onClick={() => setVisibleItem(null)}>
      <div className={style.menu}>
        <h1 className={style.natSufrin}>nat sufrin</h1>
        <ul className={style.mainListContainer}>
          <li
            onClick={e =>
              handleSelection(e, e.target.innerText, setVisibleItem)
            }
            onMouseEnter={e =>
              handleSelection(e, e.target.innerText, setSelected)
            }
            onMouseLeave={e => handleSelection(e, "Default", setSelected)}
          >
            Poetry
          </li>
          <li
            onClick={e =>
              handleSelection(e, e.target.innerText, setVisibleItem)
            }
            onMouseEnter={e =>
              handleSelection(e, e.target.innerText, setSelected)
            }
            onMouseLeave={e => handleSelection(e, "Default", setSelected)}
          >
            Psychology
          </li>
          <li
            onMouseEnter={e =>
              handleSelection(e, e.target.innerText, setSelected)
            }
            onMouseLeave={e => handleSelection(e, "Default", setSelected)}
          >
            C.V.
          </li>
          <li
            onMouseEnter={e =>
              handleSelection(e, e.target.innerText, setSelected)
            }
            onMouseLeave={e => handleSelection(e, "Default", setSelected)}
          >
            Contact
          </li>
          <ul
            className={classnames(
              style.poetryContainer,
              visibleItem === "Poetry" && style.visible
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
        </ul>
      </div>
    </div>
  )
}
