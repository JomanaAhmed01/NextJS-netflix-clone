import styled from "styled-components"

export default function HeaderContainer({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  background: url(/images/misc/home-bg.jpg) left top / cover no-repeat;
`