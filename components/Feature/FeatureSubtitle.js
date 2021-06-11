import styled from "styled-components"

export default function FeatureSubtitle({ children, ...restProps }) {
  return (
    <Subtitle {...restProps}>
      {children}Ready to watch? Enter your email to create or restart your
      membership.
    </Subtitle>
  )
}

export const Subtitle = styled.p`
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-size: 19px;
  margin-left: auto;
  margin-right: auto;
  cursor: context-menu;

  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
`