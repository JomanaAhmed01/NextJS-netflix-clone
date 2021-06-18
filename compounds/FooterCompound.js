import FooterWrapper from '../components/Footer/FooterWrapper'
import FooterTitle from '../components/Footer/FooterTitle'
import FooterRow from '../components/Footer/FooterRow'
import FooterColumn from '../components/Footer/FooterColumn'

export default function FooterCompound() {
  return (
    <>
      <FooterWrapper>
        <FooterTitle />

        <FooterRow>
          <FooterColumn></FooterColumn>
        </FooterRow>
      </FooterWrapper>
    </>
  )
}