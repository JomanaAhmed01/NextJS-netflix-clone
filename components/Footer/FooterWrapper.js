import styled from "styled-components"

export default function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  margin-bottom: 60px;
  padding: 30px 50px;
`
