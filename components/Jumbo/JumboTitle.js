import styled from "styled-components"

export default function JumboTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

export const Title = styled.h1`
  color: #ffffff;
  font-size: 45px;
  width: 90%;
  margin-bottom: 1px;

  @media (max-width: 950px) {
    width: initial;
    font-size: 35px;
  }

  @media (max-width: 550px) {
    width: initial;
    font-size: 30px;
  }
`
