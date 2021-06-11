import styled from "styled-components"

export default function NavbarContainer({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}c33333333</Wrapper>
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 180px;
  padding-top: 10px;
`