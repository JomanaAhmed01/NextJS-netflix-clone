import AccordionWrapper from '../components/Accordion/AccordionWrapper'
import AccordionTitle from '../components/Accordion/AccordionTitle'
import AccordionItem from '../components/Accordion/AccordionItem'
import FeatureSubtitle from '../components/Feature/FeatureSubtitle'
import OptFormWrapper from "../components/OptForm/OptFormWrapper"
import OptFormEmail from "../components/OptForm/OptFormEmail"
import OptFormBtn from "../components/OptForm/OptFormBtn"
import Separator from '../components/Jumbo/Separator'

export default function AccordionCompound() {
  return (
    <>
      <AccordionWrapper>
        <AccordionTitle />

        <AccordionItem></AccordionItem>

        <FeatureSubtitle />
        <OptFormWrapper>
          <OptFormEmail />
          <OptFormBtn />
        </OptFormWrapper>
      </AccordionWrapper>

      <Separator />
    </>
  )
}