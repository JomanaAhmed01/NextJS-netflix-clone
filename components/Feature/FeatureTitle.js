import styled from "styled-components"

export default function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}Unlimited movies, TV shows, and more.</Title>
}

export const Title = styled.h1`
  width: 640px;
  color: #ffffff;
  text-align: center;
  font-size: 50px;
  margin-top: 170px;
  margin-left: auto;
  margin-right: auto;
  cursor: context-menu;

  @media screen and (max-width: 950px) {
    width: 80%;
  }

  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`