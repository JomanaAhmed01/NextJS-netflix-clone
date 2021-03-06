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
            <JumboTitle width="100%">Enjoy on your TV.</JumboTitle>
            <JumboSubtitle>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </JumboSubtitle>
          </JumboTextWrapper>

          <JumboImageWrapper>
            <JumboImage src="/images/misc/home-tv.jpg" width="100%" />
          </JumboImageWrapper>
        </JumboItem>

        <Separator />

        <JumboItem>
          <JumboTextWrapper>
            <JumboTitle width="100%">
              Download your shows to watch offline.
            </JumboTitle>
            <JumboSubtitle width="100%">
              Save your favorites easily and always have something to watch.
            </JumboSubtitle>
          </JumboTextWrapper>

          <JumboImageWrapper>
            <JumboImage src="/images/misc/home-mobile.jpg" width="100%" />
          </JumboImageWrapper>
        </JumboItem>

        <Separator />

        <JumboItem>
          <JumboTextWrapper>
            <JumboTitle width="100%">Watch everywhere.</JumboTitle>
            <JumboSubtitle width="100%">
              Stream unlimited films and TV programmes on your phone, tablet,
              laptop and TV without paying more.
            </JumboSubtitle>
          </JumboTextWrapper>

          <JumboImageWrapper>
            <JumboImage src="/images/misc/home-imac.jpg" width="100%" />
          </JumboImageWrapper>
        </JumboItem>

        <Separator />

        <JumboItem>
          <JumboTextWrapper>
            <JumboTitle width="100%">Create profiles for kids.</JumboTitle>
            <JumboSubtitle width="100%">
              Send kids on adventures with their favorite characters in a space
              made just for them???free with your membership.
            </JumboSubtitle>
          </JumboTextWrapper>

          <JumboImageWrapper>
            <JumboImage src="/images/misc/home-kids.png" width="100%" />
          </JumboImageWrapper>
        </JumboItem>

        <Separator />
      </JumboWrapper>
    </>
  )
}
