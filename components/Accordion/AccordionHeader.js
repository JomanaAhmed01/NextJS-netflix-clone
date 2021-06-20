import React from "react"

export default function AccordionHeader({ children, ...restProps }) {
  return (
    <Wrapper {...restProps}>
      {children}
      <Image src="./images/icons/close-slim.png" />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  color: #ffffff;
  font-size: 25px;
  background-color: rgb(41, 41, 41);
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 0.3%;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 950px) {
    margin-left: 11%;
    margin-right: 11%;
    padding-left: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 20px;
  }

  @media (max-width: 550px) {
    margin-left: initial;
    margin-right: initial;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
  }
`

export const Image = styled.img`
  width: 23px;
  filter: brightness(0) invert(1);
  float: right;
  margin-right: 30px;
  cursor: pointer;
`
