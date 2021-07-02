import styled from "styled-components"
import Link from "next/link"

export default function OptFormBtn({ children, ...restProps }) {
  return (
    <Link href="/browse">
      <Button {...restProps}>{children}Get Started &gt;</Button>
    </Link>
  )
}

export const Button = styled.a`
  background-color: #e50914;
  text-decoration: none;
  color: #ffffff;
  font-size: 25px;
  padding: 13px 40px;
  cursor: pointer;

  @media (max-width: 950px) {
    width: max-content;
    padding: 10px 25px;
    font-size: 20px;
  }
`
