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
            <JumboImage src="/images/misc/home-tv.jpg" />
          </JumboImageWrapper>
        </JumboItem>

        <Separator />
      </JumboWrapper>
    </>
  )
}
