import styled from "styled-components"

export default function OptFormBtn({ children, ...restProps }) {
  return <Button href='#' {...restProps}>{children}Get Started &gt;</Button>
}

export const Button = styled.a`
  background-color: #e50914;
  text-decoration: none;
  color: #ffffff;
  font-size: 25px;
  padding: 13px 40px;

  @media (max-width: 950px) {
    width: max-content;
    padding: 10px 25px;
    font-size: 20px;
  }
`
