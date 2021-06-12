import JumboWrapper from '../components/Jumbo/JumboWrapper'
import JumboItem from '../components/Jumbo/JumboItem'
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper'

export default function JumboCompound() {
  return (
    <>
      <JumboWrapper>
        <JumboItem>
          <JumboTextWrapper></JumboTextWrapper>
        </JumboItem>
      </JumboWrapper>
    </>
  )
}
