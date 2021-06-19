import styled from "styled-components"

export default function SignFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div``
