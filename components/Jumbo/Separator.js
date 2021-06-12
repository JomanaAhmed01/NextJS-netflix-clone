import styled from "styled-components"

export default function Separator({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  border-bottom: 10px solid rgb(34, 34, 34);
`
