import styled from "styled-components"

export default function FooterLink({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  color: #757575;
  font-size: 13px;

:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`