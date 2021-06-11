import styled from "styled-components"

export default function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}Unlimited movies, TV shows, and more.</Title>
}

export const Title = styled.h1`
  border: 3px solid yellow;
  width: 640px;
  color: #ffffff;
  text-align: center;
  font-size: 50px;
  margin-top: 170px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`