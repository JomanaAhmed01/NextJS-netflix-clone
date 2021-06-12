import JumboWrapper from '../components/Jumbo/JumboWrapper'
import JumboItem from '../components/Jumbo/JumboItem'
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper'
import JumboTitle from '../components/Jumbo/JumboTitle'
import JumboSubtitle from '../components/Jumbo/JumboSubtitle'
import JumboImageWrapper from '../components/Jumbo/JumboImageWrapper'
import JumboImage from '../components/Jumbo/JumboImage'
import Separator from '../components/Jumbo/Separator'

export default function JumboCompound() {
  return (
    <>
      <JumboWrapper>
        <JumboItem>
          <JumboTextWrapper>
            <JumboTitle>Enjoy on your TV.</JumboTitle>
            <JumboSubtitle>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </JumboSubtitle>
          </JumboTextWrapper>

          <JumboImageWrapper>
            <JumboImage src="/images/misc/home-tv.jpg" width="348px" />
          </JumboImageWrapper>
        </JumboItem>

        <Separator />

        <JumboItem>
          <JumboTextWrapper>
            <JumboTitle>
              Download your programmes to watch on the go.
            </JumboTitle>
            <JumboSubtitle>
              Save your data and watch all your favourites offline.
            </JumboSubtitle>
          </JumboTextWrapper>

          <JumboImageWrapper>
            <JumboImage src="/images/misc/home-mobile.jpg" width="185px" />
          </JumboImageWrapper>
        </JumboItem>

        <Separator />

        <JumboItem>
          <JumboTextWrapper>
            <JumboTitle>Watch everywhere.</JumboTitle>
            <JumboSubtitle>
              Stream unlimited films and TV programmes on your phone, tablet,
              laptop and TV without paying more.
            </JumboSubtitle>
          </JumboTextWrapper>

          <JumboImageWrapper>
            <JumboImage src="/images/misc/home-imac.jpg" width="100%"/>
          </JumboImageWrapper>
        </JumboItem>

        <Separator />
      </JumboWrapper>
    </>
  )
}
