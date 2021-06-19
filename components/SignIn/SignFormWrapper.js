import styled from "styled-components"

export default function SignFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 740px) {
    display: initial;
  }
`
