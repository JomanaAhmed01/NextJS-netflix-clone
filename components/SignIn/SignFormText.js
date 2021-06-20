import styled from "styled-components"

export default function SignFormText({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  color: #757575;
  display: inline-block;
  margin-right: 7px;
`
