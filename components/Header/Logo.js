import styled from "styled-components"

export default function Logo({children, ...restProps}) {
  return <Image src='/images/misc/logo.svg' {...restProps}>{children}</Image>
}

export const Image = styled.img`
  margin-left: 55px;
  margin-top: 20px;
  width: 108px;
`