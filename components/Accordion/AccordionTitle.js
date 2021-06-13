import styled from "styled-components"

export default function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}Frequently Asked Questions</Title>
}

export const Title = styled.h1`
  width: 100%;
  color: #ffffff;
  font-size: 50px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 550px) {
    font-size: 25px;
  }
`
