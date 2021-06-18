import styled from "styled-components"

export default function FooterRow({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  line-height: 30px;

  @media (max-width: 900px) {
    width: 40%;
  }
`
