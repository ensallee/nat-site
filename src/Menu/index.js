import React, { useState } from "react"
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
//TODO: contact
//TODO: make it so that when you click on a menu item, that photo remains.

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
            About
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
            visibleItem === "Poetry" && style.visible
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
            visibleItem === "About" && style.visible
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
