import styled from "styled-components"

export default function AccordionBody({ children, ...restProps }) {
  let FAQState = "open"

  if (FAQState === "open") {
    return <Wrapper {...restProps}>{children}</Wrapper>
  } else {
    return null
  }
}

export const Wrapper = styled.div`
  color: #ffffff;
  font-size: 20px;
  background-color: rgb(41, 41, 41);
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 0.5%;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;

  @media (max-width: 950px) {
    margin-left: 11%;
    margin-right: 11%;
    padding-left: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 17.5px;
  }

  @media (max-width: 550px) {
    margin-right: initial;
    margin-left: initial;
  }
`
