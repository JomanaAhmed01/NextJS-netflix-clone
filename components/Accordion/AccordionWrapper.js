import styled from "styled-components"

export default function AccordionWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  margin-bottom: 70px;
  margin-left: 10px;
  margin-right: 10px;
`
