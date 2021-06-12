import JumboWrapper from '../components/Jumbo/JumboWrapper'
import JumboItem from '../components/Jumbo/JumboItem'
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper'
import JumboTitle from '../components/Jumbo/JumboTitle'
import JumboSubtitle from '../components/Jumbo/JumboSubtitle'

export default function JumboCompound() {
  return (
    <>
      <JumboWrapper>
        <JumboItem>
          <JumboTextWrapper>
            <JumboTitle />
            <JumboSubtitle />
          </JumboTextWrapper>
        </JumboItem>
      </JumboWrapper>
    </>
  )
}
