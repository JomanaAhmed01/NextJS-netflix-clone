import styled from "styled-components"

export default function AccordionItem({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  margin-bottom: 5px;
`
