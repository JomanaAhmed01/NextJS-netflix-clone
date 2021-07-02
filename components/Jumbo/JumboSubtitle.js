import styled from "styled-components"

export default function JumboSubtitle({ children, ...restProps }) {
  return (
    <Subtitle {...restProps}>
      {children}
    </Subtitle>
  )
}

export const Subtitle = styled.p`
  color: #ffffff;
  width: 80%;
  font-size: 25px;

  @media (max-width: 950px) {
    width: initial;
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
`
