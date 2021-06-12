import styled from "styled-components"

export default function JumboImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}

export const Image = styled.img`
  width: 348px;
`