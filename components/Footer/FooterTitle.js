import styled from "styled-components"

export default function FooterTitle({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}Questions? Contact us.</Wrapper>
}

export const Wrapper = styled.div`
  color: #757575;
  width: 65%;
  margin-left: auto;
  margin-right: auto;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`