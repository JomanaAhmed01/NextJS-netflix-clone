import styled from "styled-components"
import Link from "next/link"

export default function Logo({ children, ...restProps }) {
  return (
    <Link href="/">
      <Image src="/images/misc/logo.svg" {...restProps}>
        {children}
      </Image>
    </Link>
  )
}

export const Image = styled.img`
  margin-left: 55px;
  margin-top: 20px;
  width: 108px;
  cursor: pointer;

  @media screen and (max-width: 950px) {
    width: 100px;
    margin-left: 42px;
  }

  @media screen and (max-width: 550px) {
    width: 85px;
    margin-left: 47px;
  }
`
