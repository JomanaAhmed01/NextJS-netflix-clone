export default function browse() {
  return (
    <>
      gvgggggggggggggggggggggggg
    </>
  )
}

/*import React, { useState } from "react"
import Logo from "../components/Header/Logo.js"
import FooterColumn from "../components/Footer/FooterColumn"
import FooterLink from "../components/Footer/FooterLink"
import FooterRow from "../components/Footer/FooterRow"
import FooterTitle from "../components/Footer/FooterTitle"
import FooterWrapper from "../components/Footer/FooterWrapper"
import { filmsData } from "../data/FilmsData"
import { seriesData } from "../data/SeriesData"

function Browse() {
  const [activeMovie, setActiveMovie] = useState("")
  const [activeCategory, setActiveCategory] = useState(filmsData)
  const [showVideo, setShowVideo] = useState(false)

  function showVideoTrailer() {
    if (showVideo === false) {
      setShowVideo(true)
    }
  }

  console.log("filmsData", filmsData)

  return (
    <div className="browse-wrapper">
      <div className="browse-first-part">
        <div className="browse-navbar">
          <Logo className="browse-logo" />
          <div className="browse-navbar-text">
            <a
              onClick={() => setActiveCategory(filmsData)}
              className="browse-films"
            >
              Films
            </a>
            <a
              onClick={() => setActiveCategory(seriesData)}
              className="browse-series"
            >
              Series
            </a>
          </div>
        </div>
        {showVideo === true ? (
          <div className="video-wrapper">
            <video className="video" src="/videos/video.mp4" controls></video>
          </div>
        ) : null}

        <div className="browse-header">
          <p className="browse-title">Watch The Irish Man</p>
          <p className="browse-subtitle">
            Hit man Frank Sheeran looks back at the secrets he kept as a loyal
            member of the Bufalino crime family in this acclaimed film from
            Martin Scorsese.
          </p>
          <button
            onClick={showVideoTrailer}
            className="browse-header-play-button"
          >
            Play
          </button>
        </div>
      </div>

      <div className="browse-movies">
        <div className="browse-drama">
          <p className="browse-drama-title">
            {activeCategory === filmsData ? "Drama" : "Documentaries"}
          </p>
          <div className="browse-drama-movies">
            {activeCategory.map((item) =>
              item.genre === "drama" || item.genre === "documentaries" ? (
                <img
                  className="browse-drama-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}
          </div>

          {activeCategory
            .filter(
              (item) => item.genre === "drama" || item.genre === "documentaries"
            )
            .map((item) =>
              item.name === activeMovie ? (
                <div className="browse-drama-fight-club">
                  <div className={`browse-drama-${item.name}-desc`}>
                    <div className="browse-drama-fight-club-title-and-icon-wrapper">
                      <p className="browse-drama-fight-club-title">
                        {item.title}
                      </p>
                      <div className="browse-drama-fight-club-close-icon-wrapper">
                        <img
                          className="browse-drama-fight-club-close-icon"
                          src="/images/icons/close.png"
                          onClick={() => setActiveMovie("")}
                        ></img>
                      </div>
                    </div>
                    <p className="browse-drama-fight-club-subtitle">
                      {item.subTitle}
                    </p>
                    <button
                      onClick={showVideoTrailer}
                      className="browse-header-play-button"
                    >
                      Play
                    </button>
                  </div>
                </div>
              ) : null
            )}
        </div>

        <div className="browse-thriller">
          <p className="browse-thriller-title">
            {activeCategory === filmsData ? "Thriller" : "Comedies"}
          </p>
          <div className="browse-thriller-movies">
            {activeCategory.map((item) =>
              item.genre === "thriller" || item.genre === "comedies" ? (
                <img
                  className="browse-thriller-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}
          </div>

          {activeCategory
            .filter(
              (item) => item.genre === "thriller" || item.genre === "comedies"
            )
            .map((item) =>
              item.name === activeMovie ? (
                <div className="browse-drama-fight-club">
                  <div className={`browse-drama-${item.name}-desc`}>
                    <div className="browse-drama-night-crawler-title-and-icon-wrapper">
                      <p className="browse-drama-night-crawler-title">
                        {item.title}
                      </p>
                      <div className="browse-drama-night-crawler-close-icon-wrapper">
                        <img
                          className="browse-drama-night-crawler-close-icon"
                          src="/images/icons/close.png"
                          onClick={() => setActiveMovie("")}
                        ></img>
                      </div>
                    </div>
                    <p className="browse-drama-night-crawler-subtitle">
                      {item.subTitle}
                    </p>
                    <button
                      onClick={showVideoTrailer}
                      className="browse-header-play-button"
                    >
                      Play
                    </button>
                  </div>
                </div>
              ) : null
            )}
        </div>

        <div className="browse-children">
          <p className="browse-children-title">Children</p>
          <div className="browse-children-movies">
            {activeCategory.map((item) =>
              item.genre === "children" ? (
                <img
                  className="browse-children-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}

            {activeCategory
              .filter((item) => item.genre === "children")
              .map((item) =>
                item.name === activeMovie ? (
                  <div className="browse-drama-up">
                    <div className={`browse-drama-${item.name}-desc`}>
                      <div className="browse-drama-up-title-and-icon-wrapper">
                        <p className="browse-drama-up-title">{item.title}</p>
                        <div className="browse-drama-up-close-icon-wrapper">
                          <img
                            className="browse-drama-up-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></img>
                        </div>
                      </div>
                      <p className="browse-drama-up-subtitle">
                        {item.subTitle}
                      </p>
                      <button
                        onClick={showVideoTrailer}
                        className="browse-header-play-button"
                      >
                        Play
                      </button>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>

        <div className="browse-suspense">
          <p className="browse-suspense-title">
            {activeCategory === filmsData ? "Suspense" : "Crime"}
          </p>
          <div className="browse-suspense-movies">
            {activeCategory.map((item) =>
              item.genre === "suspense" || item.genre === "crime" ? (
                <img
                  className="browse-suspense-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}

            {activeCategory
              .filter(
                (item) => item.genre === "suspense" || item.genre === "crime"
              )
              .map((item) =>
                item.name === activeMovie ? (
                  <div className="browse-drama-up">
                    <div className={`browse-drama-${item.name}-desc`}>
                      <div className="browse-drama-up-title-and-icon-wrapper">
                        <p className="browse-drama-up-title">{item.title}</p>
                        <div className="browse-drama-up-close-icon-wrapper">
                          <img
                            className="browse-drama-up-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></img>
                        </div>
                      </div>
                      <p className="browse-drama-up-subtitle">
                        {item.subTitle}
                      </p>
                      <button
                        onClick={showVideoTrailer}
                        className="browse-header-play-button"
                      >
                        Play
                      </button>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>

        <div className="browse-romance">
          <p className="browse-romance-title">
            {activeCategory === filmsData ? "Romance" : "Feel-Good"}
          </p>
          <div className="browse-romance-movies">
            {activeCategory.map((item) =>
              item.genre === "romance" || item.genre === "feel-good" ? (
                <img
                  className="browse-romance-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}
          </div>
          {activeCategory
            .filter(
              (item) => item.genre === "romance" || item.genre === "feel-good"
            )
            .map((item) =>
              item.name === activeMovie ? (
                <div className="browse-drama-the-notebook">
                  <div className={`browse-drama-${item.name}-desc`}>
                    <div className="browse-drama-the-notebook-title-and-icon-wrapper">
                      <p className="browse-drama-the-notebook-title">
                        {item.title}
                      </p>
                      <div className="browse-drama-the-notebook-close-icon-wrapper">
                        <img
                          className="browse-drama-the-notebook-close-icon"
                          src="/images/icons/close.png"
                          onClick={() => setActiveMovie("")}
                        ></img>
                      </div>
                    </div>
                    <p className="browse-drama-the-notebook-subtitle">
                      {item.subTitle}
                    </p>
                    <button
                      onClick={showVideoTrailer}
                      className="browse-header-play-button"
                    >
                      Play
                    </button>
                  </div>
                </div>
              ) : null
            )}
        </div>
      </div>

      <FooterWrapper>
        <FooterTitle />

        <FooterRow>
          <FooterColumn>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>Investor Relations</FooterLink>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Speed Test</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Jobs</FooterLink>
            <FooterLink>Cookie Preferences</FooterLink>
            <FooterLink>Legal Notices</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterLink>Account</FooterLink>
            <FooterLink>Ways To Watch</FooterLink>
            <FooterLink>Corporate Information</FooterLink>
            <FooterLink>Netflix Originals</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterLink>Media Center</FooterLink>
            <FooterLink>Terms Of Use</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </FooterColumn>
        </FooterRow>
      </FooterWrapper>
    </div>
  )
}

export default Browse*/
