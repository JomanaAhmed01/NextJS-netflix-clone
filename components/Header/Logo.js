import styled from "styled-components"

export default function Logo({children, ...restProps}) {
  return <Image src='/images/misc/logo.svg' {...restProps}>{children}</Image>
}

export const Image = styled.img`
  
`