import styled from "styled-components"

export default function SignFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

export const Title = styled.h2`
  color: #ffffff;
  font-size: 32px;
  width: 100%;
`