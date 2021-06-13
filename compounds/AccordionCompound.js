import AccordionWrapper from '../components/Accordion/AccordionWrapper'
import AccordionTitle from '../components/Accordion/AccordionTitle'
import AccordionItem from '../components/Accordion/AccordionItem'

export default function AccordionCompound() {
  return (
    <>
      <AccordionWrapper>
        <AccordionTitle />

        <AccordionItem></AccordionItem>
      </AccordionWrapper>
    </>
  )
}