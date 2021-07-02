import styled from "styled-components"
import { useState } from "react"
import { films } from "../Data/films"
import { series } from "../Data/series"
import FooterCompound from "../compounds/FooterCompound"
import Link from "next/link"

export default function browse() {
  const [activeMovie, setActiveMovie] = useState("")
  const [activeCategory, setActiveCategory] = useState(films)
  const [showVideo, setShowVideo] = useState(false)

  console.log("films", films)

  function showVideoTrailer() {
    if (showVideo === false) {
      setShowVideo(true)
    }
  }

  return (
    <>
      <BrowseWrapper>
        <BrowseFirstPart>
          <BrowseNavbar>
            <Link href="/">
              <BrowseLogo src="/images/misc/logo.svg" />
            </Link>
            <BrowseNavbarText>
              <Browsefilms onClick={() => setActiveCategory(films)}>
                Films
              </Browsefilms>
              <Browseseries onClick={() => setActiveCategory(series)}>
                Series
              </Browseseries>
            </BrowseNavbarText>
          </BrowseNavbar>

          {showVideo === true ? (
            <BrowseVideoWrapper className="video-wrapper">
              <Video className="video" src="/videos/video.mp4" controls></Video>
            </BrowseVideoWrapper>
          ) : null}

          <BrowseHeader>
            <BrowseTitle>Watch the Irish Man</BrowseTitle>
            <BrowseSubtitle>
              Hit man Frank Sheeran looks back at the secrets he kept as a loyal
              member of the Bufalino crime family in this acclaimed film from
              Martin Scorsese.
            </BrowseSubtitle>
            <BrowsePlayButton onClick={showVideoTrailer}>Play</BrowsePlayButton>
          </BrowseHeader>
        </BrowseFirstPart>

        <BrowseMovies>
          <BrowseDrama>
            <BrowseDramaTitle>
              {activeCategory === films ? "Drama" : "Documentaries"}
            </BrowseDramaTitle>
            <BrowseDramaMovies>
              {activeCategory.map((item) =>
                item.genre === "drama" || item.genre === "documentaries" ? (
                  <BrowseDramaImage
                    src={item.smallImage}
                    onClick={() => setActiveMovie(item.name)}
                  />
                ) : null
              )}
            </BrowseDramaMovies>

            {activeCategory
              .filter(
                (item) =>
                  item.genre === "drama" || item.genre === "documentaries"
              )
              .map((item) =>
                item.name === activeMovie ? (
                  <BrowseDramaFightClub className="browse-drama-fight-club">
                    <BrowseDramaFightClubDesc
                      itemFolder={item.folder}
                      itemGenre={item.genre}
                      itemName={item.name}
                    >
                      <BrowseDramaFightClubTitleAndIconWrapper className="browse-drama-fight-club-title-and-icon-wrapper">
                        <BrowseDramaFightClubTitle className="browse-drama-fight-club-title">
                          {item.title}
                        </BrowseDramaFightClubTitle>
                        <BrowseDramaFightClubCloseIconWrapper className="browse-drama-fight-club-close-icon-wrapper">
                          <CloseIcon
                            className="browse-drama-fight-club-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></CloseIcon>
                        </BrowseDramaFightClubCloseIconWrapper>
                      </BrowseDramaFightClubTitleAndIconWrapper>
                      <BrowseDramaFightClubSubtitle className="browse-drama-fight-club-subtitle">
                        {item.subTitle}
                      </BrowseDramaFightClubSubtitle>
                      <BrowsePlayButton
                        onClick={showVideoTrailer}
                        className="browse-header-play-button"
                      >
                        Play
                      </BrowsePlayButton>
                    </BrowseDramaFightClubDesc>
                  </BrowseDramaFightClub>
                ) : null
              )}
          </BrowseDrama>

          <BrowseThriller>
            <BrowseDramaTitle>
              {activeCategory === films ? "Thriller" : "Comedies"}
            </BrowseDramaTitle>
            <BrowseDramaMovies>
              {activeCategory.map((item) =>
                item.genre === "thriller" || item.genre === "comedies" ? (
                  <BrowseThrillerImage
                    src={item.smallImage}
                    onClick={() => setActiveMovie(item.name)}
                  />
                ) : null
              )}
            </BrowseDramaMovies>

            {activeCategory
              .filter(
                (item) => item.genre === "thriller" || item.genre === "comedies"
              )
              .map((item) =>
                item.name === activeMovie ? (
                  <BrowseDramaFightClub className="browse-drama-fight-club">
                    <BrowseThrillerDesc
                      itemFolder={item.folder}
                      itemGenre={item.genre}
                      itemName={item.name}
                    >
                      <BrowseDramaFightClubTitleAndIconWrapper className="browse-drama-fight-club-title-and-icon-wrapper">
                        <BrowseDramaFightClubTitle className="browse-drama-fight-club-title">
                          {item.title}
                        </BrowseDramaFightClubTitle>
                        <BrowseDramaFightClubCloseIconWrapper className="browse-drama-fight-club-close-icon-wrapper">
                          <CloseIcon
                            className="browse-drama-fight-club-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></CloseIcon>
                        </BrowseDramaFightClubCloseIconWrapper>
                      </BrowseDramaFightClubTitleAndIconWrapper>
                      <BrowseDramaFightClubSubtitle className="browse-drama-fight-club-subtitle">
                        {item.subTitle}
                      </BrowseDramaFightClubSubtitle>
                      <BrowsePlayButton
                        onClick={showVideoTrailer}
                        className="browse-header-play-button"
                      >
                        Play
                      </BrowsePlayButton>
                    </BrowseThrillerDesc>
                  </BrowseDramaFightClub>
                ) : null
              )}
          </BrowseThriller>

          <BrowseChildren>
            <BrowseDramaTitle>
              {activeCategory === films ? "Children" : "Children"}
            </BrowseDramaTitle>
            <BrowseDramaMovies>
              {activeCategory.map((item) =>
                item.genre === "children" || item.genre === "children" ? (
                  <BrowseChildrenImage
                    src={item.smallImage}
                    onClick={() => setActiveMovie(item.name)}
                  />
                ) : null
              )}
            </BrowseDramaMovies>

            {activeCategory
              .filter(
                (item) => item.genre === "children" || item.genre === "children"
              )
              .map((item) =>
                item.name === activeMovie ? (
                  <BrowseDramaFightClub className="browse-drama-fight-club">
                    <BrowseChildrenDesc
                      itemFolder={item.folder}
                      itemGenre={item.genre}
                      itemName={item.name}
                    >
                      <BrowseDramaFightClubTitleAndIconWrapper className="browse-drama-fight-club-title-and-icon-wrapper">
                        <BrowseDramaFightClubTitle className="browse-drama-fight-club-title">
                          {item.title}
                        </BrowseDramaFightClubTitle>
                        <BrowseDramaFightClubCloseIconWrapper className="browse-drama-fight-club-close-icon-wrapper">
                          <CloseIcon
                            className="browse-drama-fight-club-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></CloseIcon>
                        </BrowseDramaFightClubCloseIconWrapper>
                      </BrowseDramaFightClubTitleAndIconWrapper>
                      <BrowseDramaFightClubSubtitle className="browse-drama-fight-club-subtitle">
                        {item.subTitle}
                      </BrowseDramaFightClubSubtitle>
                      <BrowsePlayButton
                        onClick={showVideoTrailer}
                        className="browse-header-play-button"
                      >
                        Play
                      </BrowsePlayButton>
                    </BrowseChildrenDesc>
                  </BrowseDramaFightClub>
                ) : null
              )}
          </BrowseChildren>

          <BrowseSuspense>
            <BrowseDramaTitle>
              {activeCategory === films ? "Suspense" : "Crime"}
            </BrowseDramaTitle>
            <BrowseDramaMovies>
              {activeCategory.map((item) =>
                item.genre === "suspense" || item.genre === "crime" ? (
                  <BrowseSuspenseImage
                    src={item.smallImage}
                    onClick={() => setActiveMovie(item.name)}
                  />
                ) : null
              )}
            </BrowseDramaMovies>

            {activeCategory
              .filter(
                (item) => item.genre === "suspense" || item.genre === "crime"
              )
              .map((item) =>
                item.name === activeMovie ? (
                  <BrowseDramaFightClub className="browse-drama-fight-club">
                    <BrowseSuspenseDesc
                      itemFolder={item.folder}
                      itemGenre={item.genre}
                      itemName={item.name}
                    >
                      <BrowseDramaFightClubTitleAndIconWrapper className="browse-drama-fight-club-title-and-icon-wrapper">
                        <BrowseDramaFightClubTitle className="browse-drama-fight-club-title">
                          {item.title}
                        </BrowseDramaFightClubTitle>
                        <BrowseDramaFightClubCloseIconWrapper className="browse-drama-fight-club-close-icon-wrapper">
                          <CloseIcon
                            className="browse-drama-fight-club-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></CloseIcon>
                        </BrowseDramaFightClubCloseIconWrapper>
                      </BrowseDramaFightClubTitleAndIconWrapper>
                      <BrowseDramaFightClubSubtitle className="browse-drama-fight-club-subtitle">
                        {item.subTitle}
                      </BrowseDramaFightClubSubtitle>
                      <BrowsePlayButton
                        onClick={showVideoTrailer}
                        className="browse-header-play-button"
                      >
                        Play
                      </BrowsePlayButton>
                    </BrowseSuspenseDesc>
                  </BrowseDramaFightClub>
                ) : null
              )}
          </BrowseSuspense>

          <BrowseRomance>
            <BrowseDramaTitle>
              {activeCategory === films ? "Romance" : "Feel-Good"}
            </BrowseDramaTitle>
            <BrowseDramaMovies>
              {activeCategory.map((item) =>
                item.genre === "romance" || item.genre === "feel-good" ? (
                  <BrowseRomanceImage
                    src={item.smallImage}
                    onClick={() => setActiveMovie(item.name)}
                  />
                ) : null
              )}
            </BrowseDramaMovies>

            {activeCategory
              .filter(
                (item) => item.genre === "romance" || item.genre === "feel-good"
              )
              .map((item) =>
                item.name === activeMovie ? (
                  <BrowseDramaFightClub className="browse-drama-fight-club">
                    <BrowseRomanceDesc
                      itemFolder={item.folder}
                      itemGenre={item.genre}
                      itemName={item.name}
                    >
                      <BrowseDramaFightClubTitleAndIconWrapper className="browse-drama-fight-club-title-and-icon-wrapper">
                        <BrowseDramaFightClubTitle className="browse-drama-fight-club-title">
                          {item.title}
                        </BrowseDramaFightClubTitle>
                        <BrowseDramaFightClubCloseIconWrapper className="browse-drama-fight-club-close-icon-wrapper">
                          <CloseIcon
                            className="browse-drama-fight-club-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></CloseIcon>
                        </BrowseDramaFightClubCloseIconWrapper>
                      </BrowseDramaFightClubTitleAndIconWrapper>
                      <BrowseDramaFightClubSubtitle className="browse-drama-fight-club-subtitle">
                        {item.subTitle}
                      </BrowseDramaFightClubSubtitle>
                      <BrowsePlayButton
                        onClick={showVideoTrailer}
                        className="browse-header-play-button"
                      >
                        Play
                      </BrowsePlayButton>
                    </BrowseRomanceDesc>
                  </BrowseDramaFightClub>
                ) : null
              )}
          </BrowseRomance>
        </BrowseMovies>
      </BrowseWrapper>

      <FooterCompound />
    </>
  )
}

export const BrowseWrapper = styled.div``

export const BrowseFirstPart = styled.div`
  background: url(/images/misc/irishman.jpg) center top / cover no-repeat;
  padding-top: 30px;
`

export const BrowseNavbar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  padding-bottom: 130px;

  @media screen and (max-width: 550px) {
    margin-left: 20px;
    margin-top: -12px;
  }
`

export const BrowseLogo = styled.img`
  width: 108px;
  height: 32px;
  margin-right: 30px;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    margin-right: 20px;
  }
`

export const BrowseNavbarText = styled.div``

export const Browsefilms = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 17px;
  margin-right: 30px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    font-size: 16px;
    margin-right: 35px;
  }
`

export const Browseseries = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`

export const BrowseHeader = styled.div`
  padding-left: 50px;
  margin-top: -10px;
  width: 100%;

  @media screen and (max-width: 550px) {
    padding-left: 17px;
  }
`

export const BrowseTitle = styled.p`
  color: white;
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  text-shadow: rgb(0 0 0 / 45%) 2px 2px 4px;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`

export const BrowseSubtitle = styled.p`
  color: #ffffff;
  font-size: 22px;
  width: 630px;
  text-shadow: rgb(0 0 0 / 45%) 2px 2px 4px;
  margin-top: -35px;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  @media screen and (max-width: 550px) {
    margin-top: -15px;
    font-size: 18px;
  }
`

export const BrowsePlayButton = styled.button`
  box-shadow: rgb(0 0 0 / 35%) 0px 0.6vw 1vw -0.4vw;
  background-color: rgb(230, 230, 230);
  border-width: 0px;
  padding: 10px 35px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 200px;
  cursor: pointer;
  text-align: center;
  color: rgb(0, 0, 0);
  transition: all 0.4s ease 0s;
  outline: 0px;

  :hover {
    background-color: #ff1a1a;
    color: #ffffff;
  }

  @media screen and (max-width: 550px) {
    margin-top: 10px;
  }
`

export const BrowseMovies = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  width: 100%;

  @media screen and (max-width: 1105px) {
    padding-left: 120px;
  }

  @media screen and (max-width: 650px) {
    padding-left: 50px;
  }
`

export const BrowseDrama = styled.div`
  margin-bottom: 50px;
`

export const BrowseDramaTitle = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
`

export const BrowseDramaMovies = styled.div`
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`

export const BrowseDramaImage = styled.img`
  width: 19%;
  margin-right: 10px;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (max-width: 1105px) {
    width: 17%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const BrowseDramaFightClub = styled.div``

export const BrowseDramaFightClubDesc = styled.div`
  background: ${(props) =>
    `url(/images/${props.itemFolder}/${props.itemGenre}/${props.itemName}/large.jpg)`};
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
`

export const BrowseDramaFightClubTitleAndIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BrowseDramaFightClubTitle = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
`

export const BrowseDramaFightClubCloseIconWrapper = styled.div`
  margin-right: 20px;
  margin-top: -10px;
`

export const CloseIcon = styled.img`
  filter: brightness(0) invert(1);
  width: 24px;
  cursor: pointer;
`

export const BrowseDramaFightClubSubtitle = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;

  @media screen and (max-width: 650px) {
    width: 270px;
  }
`

export const BrowseVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`

export const Video = styled.video`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  z-index: 9997;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const BrowseThriller = styled.div`
  margin-bottom: 50px;
`

export const BrowseThrillerImage = styled.img`
  width: 19%;
  margin-right: 10px;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (max-width: 1105px) {
    width: 17%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const BrowseThrillerDesc = styled.div`
  background: ${(props) =>
    `url(/images/${props.itemFolder}/${props.itemGenre}/${props.itemName}/large.jpg)`};
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
`

export const BrowseChildren = styled.div`
  margin-bottom: 50px;
`

export const BrowseChildrenImage = styled.img`
  width: 19%;
  margin-right: 10px;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (max-width: 1105px) {
    width: 17%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const BrowseChildrenDesc = styled.div`
  background: ${(props) =>
    `url(/images/${props.itemFolder}/${props.itemGenre}/${props.itemName}/large.jpg)`};
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
`

export const BrowseSuspense = styled.div`
  margin-bottom: 50px;
`

export const BrowseSuspenseImage = styled.img`
  width: 19%;
  margin-right: 10px;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (max-width: 1105px) {
    width: 17%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const BrowseSuspenseDesc = styled.div`
  background: ${(props) =>
    `url(/images/${props.itemFolder}/${props.itemGenre}/${props.itemName}/large.jpg)`};
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
`

export const BrowseRomance = styled.div`
  margin-bottom: 50px;
`

export const BrowseRomanceImage = styled.img`
  width: 19%;
  margin-right: 10px;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (max-width: 1105px) {
    width: 17%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const BrowseRomanceDesc = styled.div`
  background: ${(props) =>
    `url(/images/${props.itemFolder}/${props.itemGenre}/${props.itemName}/large.jpg)`};
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
`

/*import React, { useState } from "react"
import Logo from "../components/Header/Logo.js"
import FooterColumn from "../components/Footer/FooterColumn"
import FooterLink from "../components/Footer/FooterLink"
import FooterRow from "../components/Footer/FooterRow"
import FooterTitle from "../components/Footer/FooterTitle"
import FooterWrapper from "../components/Footer/FooterWrapper"
import { films } from "../data/films"
import { series } from "../data/series"

function Browse() {
  const [activeMovie, setActiveMovie] = useState("")
  const [activeCategory, setActiveCategory] = useState(films)
  const [showVideo, setShowVideo] = useState(false)

  function showVideoTrailer() {
    if (showVideo === false) {
      setShowVideo(true)
    }
  }

  console.log("films", films)

  return (
    <div className="browse-wrapper">
      <div className="browse-first-part">
        <div className="browse-navbar">
          <Logo className="browse-logo" />
          <div className="browse-navbar-text">
            <a
              onClick={() => setActiveCategory(films)}
              className="browse-films"
            >
              films
            </a>
            <a
              onClick={() => setActiveCategory(series)}
              className="browse-series"
            >
              series
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
            {activeCategory === films ? "Drama" : "Documentaries"}
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
            {activeCategory === films ? "Thriller" : "Comedies"}
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
            {activeCategory === films ? "Suspense" : "Crime"}
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
            {activeCategory === films ? "Romance" : "Feel-Good"}
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

.browse-navbar {
  display: flex;
  align-items: center;
  margin-left: 50px;
  padding-bottom: 130px;
}

@media screen and (max-width: 550px) {
  .browse-navbar {
    margin-left: 20px;
    margin-top: -12px;
  }
}

.browse-logo {
  margin-right: 30px;
}

@media screen and (max-width: 550px) {
  .browse-logo {
    margin-right: 20px;
  }
}

.browse-navbar-text {
  margin-bottom: 10px;
}

.browse-films {
  text-decoration: none;
  color: #ffffff;
  font-size: 17px;
  margin-right: 30px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}

@media screen and (max-width: 550px) {
  .browse-films {
    font-size: 16px;
    margin-right: 35px;
  }
}

.browse-series {
  text-decoration: none;
  color: #ffffff;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}

@media screen and (max-width: 550px) {
  .browse-series {
    font-size: 16px;
  }
}

.browse-header {
  padding-left: 50px;
  margin-top: -10px;
  width: 100%;
}

@media screen and (max-width: 550px) {
  .browse-header {
    padding-left: 17px;
  }
}

.browse-title {
  color: white;
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  text-shadow: rgb(0 0 0 / 45%) 2px 2px 4px;
  font-family: "Roboto", sans-serif;
}

@media screen and (max-width: 550px) {
  .browse-title {
    font-size: 30px;
  }
}

.browse-subtitle {
  color: #ffffff;
  font-size: 22px;
  width: 630px;
  text-shadow: rgb(0 0 0 / 45%) 2px 2px 4px;
  margin-top: -35px;
  font-family: "Roboto", sans-serif;
}

@media screen and (max-width: 768px) {
  .browse-subtitle {
    width: 95%;
  }
}

@media screen and (max-width: 550px) {
  .browse-subtitle {
    margin-top: -15px;
    font-size: 18px;
  }
}

.browse-header-play-button {
  box-shadow: rgb(0 0 0 / 35%) 0px 0.6vw 1vw -0.4vw;
  background-color: rgb(230, 230, 230);
  border-width: 0px;
  padding: 10px 35px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 200px;
  cursor: pointer;
  text-align: center;
  color: rgb(0, 0, 0);
  transition: all 0.4s ease 0s;
  outline: 0px;
}

.browse-header-play-button:hover {
  background-color: #ff1a1a;
  color: #ffffff;
}

@media screen and (max-width: 550px) {
  .browse-header-play-button {
    margin-top: 10px;
  }
}

.video-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

.video {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  z-index: 9997;
}

@media screen and (max-width: 768px) {
  .video {
    width: 100%;
  }
}

.browse-movies {
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  width: 100%;
}

@media screen and (max-width: 1105px) {
  .browse-movies {
    padding-left: 120px;
  }
}

@media screen and (max-width: 650px) {
  .browse-movies {
    padding-left: 50px;
  }
}

.browse-drama {
  margin-bottom: 50px;
}

.browse-drama-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}

.browse-drama-movies {
}

@media screen and (max-width: 650px) {
  .browse-drama-movies {
    display: flex;
    flex-direction: column;
  }
}

.browse-drama-pic {
  width: 19%;
  margin-right: 10px;
}

@media screen and (max-width: 1105px) {
  .browse-drama-pic {
    width: 17%;
  }
}

@media screen and (max-width: 650px) {
  .browse-drama-pic {
    width: 100%;
    margin-bottom: 10px;
  }
}

.browse-drama-pic:hover {
  transform: scale(1.2);
}

.browse-thriller {
  margin-bottom: 50px;
}

.browse-thriller-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}

.browse-thriller-movies {
}

@media screen and (max-width: 650px) {
  .browse-thriller-movies {
    display: flex;
    flex-direction: column;
  }
}

.browse-thriller-pic {
  width: 19%;
  margin-right: 10px;
}

@media screen and (max-width: 1105px) {
  .browse-thriller-pic {
    width: 17%;
  }
}

@media screen and (max-width: 650px) {
  .browse-thriller-pic {
    width: 100%;
    margin-bottom: 10px;
  }
}

.browse-thriller-pic:hover {
  transform: scale(1.2);
}

.browse-children {
  margin-bottom: 50px;
}

.browse-children-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}

.browse-children-movies {
}

@media screen and (max-width: 650px) {
  .browse-children-movies {
    display: flex;
    flex-direction: column;
  }
}

.browse-children-pic {
  width: 19%;
  margin-right: 10px;
}

@media screen and (max-width: 1105px) {
  .browse-children-pic {
    width: 17%;
  }
}

@media screen and (max-width: 650px) {
  .browse-children-pic {
    width: 100%;
    margin-bottom: 10px;
  }
}

.browse-children-pic:hover {
  transform: scale(1.2);
}

.browse-suspense {
  margin-bottom: 50px;
}

.browse-suspense-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}

.browse-suspense-movies {
}

@media screen and (max-width: 650px) {
  .browse-suspense-movies {
    display: flex;
    flex-direction: column;
  }
}

.browse-suspense-pic {
  width: 19%;
  margin-right: 10px;
}

@media screen and (max-width: 1105px) {
  .browse-suspense-pic {
    width: 17%;
  }
}

@media screen and (max-width: 650px) {
  .browse-suspense-pic {
    width: 100%;
    margin-bottom: 10px;
  }
}

.browse-suspense-pic:hover {
  transform: scale(1.2);
}

.browse-romance {
  margin-bottom: 50px;
}

.browse-romance-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}

.browse-romance-movies {
}

@media screen and (max-width: 650px) {
  .browse-romance-movies {
    display: flex;
    flex-direction: column;
  }
}

.browse-romance-pic {
  width: 19%;
  margin-right: 10px;
}

@media screen and (max-width: 1105px) {
  .browse-romance-pic {
    width: 17%;
  }
}

@media screen and (max-width: 650px) {
  .browse-romance-pic {
    width: 100%;
    margin-bottom: 10px;
  }
}

.browse-romance-pic:hover {
  transform: scale(1.2);
}

.browse-drama-fight-club {
}

.browse-drama-fight-club-desc {
  background: url(/images/films/drama/fight-club/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-tiger-king-desc {
  background: url(/images/series/documentaries/tiger-king/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-fight-club-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-fight-club-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-fight-club-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-fight-club-subtitle {
    width: 270px;
  }
}

.browse-drama-fight-club-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-fight-club-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-the-prestige {
}

.browse-drama-the-prestige-desc {
  background: url(/images/films/drama/the-prestige/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-citizenfour-desc {
  background: url(/images/series/documentaries/citizenfour/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-prestige-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-the-prestige-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-the-prestige-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-the-prestige-subtitle {
    width: 270px;
  }
}

.browse-drama-the-prestige-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-the-prestige-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-the-social-network {
}

.browse-drama-the-social-network-desc {
  background: url(/images/films/drama/the-social-network/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-man-on-wire-desc {
  background: url(/images/series/documentaries/man-on-wire/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-social-network-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-the-social-network-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-the-social-network-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-the-social-network-subtitle {
    width: 270px;
  }
}

.browse-drama-the-social-network-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-the-social-network-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-the-revenant {
}

.browse-drama-the-revenant-desc {
  background: url(/images/films/drama/the-revenant/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-super-size-me-desc {
  background: url(/images/series/documentaries/super-size-me/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-revenant-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-the-revenant-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-the-revenant-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-the-revenant-subtitle {
    width: 270px;
  }
}

.browse-drama-the-revenant-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-the-revenant-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-kings-speech {
}

.browse-drama-kings-speech-desc {
  background: url(/images/films/drama/kings-speech/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-amanda-knox-desc {
  background: url(/images/series/documentaries/amanda-knox/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-kings-speech-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-kings-speech-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-kings-speech-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-kings-speech-subtitle {
    width: 270px;
  }
}

.browse-drama-kings-speech-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-kings-speech-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-night-crawler {
}

.browse-drama-night-crawler-desc {
  background: url(/images/films/thriller/nightcrawler/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-south-park-desc {
  background: url(/images/series/comedies/south-park/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-night-crawler-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-night-crawler-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-night-crawler-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-night-crawler-subtitle {
    width: 270px;
  }
}

.browse-drama-night-crawler-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-night-crawler-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-the-silence-of-the-lambs {
}

.browse-drama-the-silence-of-the-lambs-desc {
  background: url(/images/films/thriller/the-silence-of-the-lambs/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-curb-your-enthusiasm-desc {
  background: url(/images/series/comedies/curb-your-enthusiasm/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-silence-of-the-lambs-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-the-silence-of-the-lambs-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-the-silence-of-the-lambs-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-the-silence-of-the-lambs-subtitle {
    width: 270px;
  }
}

.browse-drama-the-silence-of-the-lambs-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-the-silence-of-the-lambs-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-black-swan {
}

.browse-drama-black-swan-desc {
  background: url(/images/films/thriller/black-swan/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-arrested-development-desc {
  background: url(/images/series/comedies/arrested-development/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-black-swan-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-black-swan-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-black-swan-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-black-swan-subtitle {
    width: 270px;
  }
}

.browse-drama-black-swan-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-black-swan-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-joker {
}

.browse-drama-joker-desc {
  background: url(/images/films/thriller/joker/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-office-desc {
  background: url(/images/series/comedies/the-office/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-joker-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-joker-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-joker-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-joker-subtitle {
    width: 270px;
  }
}

.browse-drama-joker-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-joker-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-a-quiet-place {
}

.browse-drama-a-quiet-place-desc {
  background: url(/images/films/thriller/a-quiet-place/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-family-guy-desc {
  background: url(/images/series/comedies/family-guy/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-a-quiet-place-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-a-quiet-place-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-a-quiet-place-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-a-quiet-place-subtitle {
    width: 270px;
  }
}

.browse-drama-a-quiet-place-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-a-quiet-place-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-hotel-transylvania {
}

.browse-drama-hotel-transylvania-desc {
  background: url(/images/films/children/hotel-transylvania/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-dora-the-explorer-desc {
  background: url(/images/series/children/dora-the-explorer/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-hotel-transylvania-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-hotel-transylvania-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-hotel-transylvania-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-hotel-transylvania-subtitle {
    width: 270px;
  }
}

.browse-drama-hotel-transylvania-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-hotel-transylvania-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-spirited-away {
}

.browse-drama-spirited-away-desc {
  background: url(/images/films/children/spirited-away/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-arthur-desc {
  background: url(/images/series/children/arthur/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-spirited-away-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-spirited-away-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-spirited-away-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-spirited-away-subtitle {
    width: 270px;
  }
}

.browse-drama-spirited-away-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-spirited-away-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-up {
}

.browse-drama-up-desc {
  background: url(/images/films/children/up/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-spongebob-desc {
  background: url(/images/series/children/spongebob/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-up-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-up-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-up-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-up-subtitle {
    width: 270px;
  }
}

.browse-drama-up-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-up-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-frozen {
}

.browse-drama-frozen-desc {
  background: url(/images/films/children/frozen/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-paw-patrol-desc {
  background: url(/images/series/children/paw-patrol/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-frozen-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-frozen-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-frozen-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-frozen-subtitle {
    width: 270px;
  }
}

.browse-drama-frozen-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-frozen-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-despicable-me {
}

.browse-drama-despicable-me-desc {
  background: url(/images/films/children/despicable-me/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-peppa-pig-desc {
  background: url(/images/series/children/peppa-pig/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-despicable-me-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-despicable-me-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-despicable-me-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-despicable-me-subtitle {
    width: 270px;
  }
}

.browse-drama-despicable-me-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-despicable-me-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-shutter-island {
}

.browse-drama-shutter-island-desc {
  background: url(/images/films/suspense/shutter-island/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-innocent-man-desc {
  background: url(/images/series/crime/the-innocent-man/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-shutter-island-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-shutter-island-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-shutter-island-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-shutter-island-subtitle {
    width: 270px;
  }
}

.browse-drama-shutter-island-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-shutter-island-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-seven {
}

.browse-drama-seven-desc {
  background: url(/images/films/suspense/seven/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-long-shot-desc {
  background: url(/images/series/crime/long-shot/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-seven-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-seven-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-seven-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-seven-subtitle {
    width: 270px;
  }
}

.browse-drama-seven-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-seven-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-prisoners {
}

.browse-drama-prisoners-desc {
  background: url(/images/films/suspense/prisoners/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-making-a-murderer-desc {
  background: url(/images/series/crime/making-a-murderer/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-prisoners-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-prisoners-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-prisoners-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-prisoners-subtitle {
    width: 270px;
  }
}

.browse-drama-prisoners-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-prisoners-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-zodiac {
}

.browse-drama-zodiac-desc {
  background: url(/images/films/suspense/zodiac/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-confession-killer-desc {
  background: url(/images/series/crime/the-confession-killer/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-zodiac-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-zodiac-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-zodiac-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-zodiac-subtitle {
    width: 270px;
  }
}

.browse-drama-zodiac-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-zodiac-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-gone-girl {
}

.browse-drama-gone-girl-desc {
  background: url(/images/films/suspense/gone-girl/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-staircase-desc {
  background: url(/images/series/crime/the-staircase/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-gone-girl-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-gone-girl-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-gone-girl-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-gone-girl-subtitle {
    width: 270px;
  }
}

.browse-drama-gone-girl-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-gone-girl-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-la-la-land {
}

.browse-drama-la-la-land-desc {
  background: url(/images/films/romance/la-la-land/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-school-of-rock-desc {
  background: url(/images/series/feel-good/school-of-rock/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-la-la-land-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-la-la-land-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-la-la-land-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-la-la-land-subtitle {
    width: 270px;
  }
}

.browse-drama-la-la-land-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-la-la-land-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-titanic {
}

.browse-drama-titanic-desc {
  background: url(/images/films/romance/titanic/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-juno-desc {
  background: url(/images/series/feel-good/juno/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-titanic-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-titanic-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-titanic-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-titanic-subtitle {
    width: 270px;
  }
}

.browse-drama-titanic-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-titanic-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-a-star-is-born {
}

.browse-drama-a-star-is-born-desc {
  background: url(/images/films/romance/a-star-is-born/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-good-will-hunting-desc {
  background: url(/images/series/feel-good/good-will-hunting/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-a-star-is-born-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-a-star-is-born-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-a-star-is-born-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-a-star-is-born-subtitle {
    width: 270px;
  }
}

.browse-drama-a-star-is-born-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-a-star-is-born-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-the-notebook {
}

.browse-drama-the-notebook-desc {
  background: url(/images/films/romance/the-notebook/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-midnight-in-paris-desc {
  background: url(/images/series/feel-good/midnight-in-paris/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-the-notebook-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-the-notebook-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-the-notebook-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-the-notebook-subtitle {
    width: 270px;
  }
}

.browse-drama-the-notebook-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-the-notebook-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}


.browse-drama-blue-valentine {
}

.browse-drama-blue-valentine-desc {
  background: url(/images/films/romance/blue-valentine/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-forrest-gump-desc {
  background: url(/images/series/feel-good/forrest-gump/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-blue-valentine-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-blue-valentine-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-blue-valentine-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-blue-valentine-subtitle {
    width: 270px;
  }
}

.browse-drama-blue-valentine-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-blue-valentine-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}



.browse-drama-blue-valentine {
}

.browse-drama-blue-valentine-desc {
  background: url(/images/films/romance/blue-valentine/large.jpg);
  background-size: contain;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 50px;
  height: 360px;
}

.browse-drama-blue-valentine-title-and-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-drama-blue-valentine-title {
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.browse-drama-blue-valentine-subtitle {
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 500px;
}

@media screen and (max-width: 650px) {
  .browse-drama-blue-valentine-subtitle {
    width: 270px;
  }
}

.browse-drama-blue-valentine-close-icon-wrapper {
  margin-right: 20px;
  margin-top: -10px;
}

.browse-drama-blue-valentine-close-icon {
  filter: brightness(0) invert(1);
  width: 24px;
}

export default Browse*/
