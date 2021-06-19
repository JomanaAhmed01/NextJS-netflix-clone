import styled from "styled-components"

export default function SignFormBase({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  background-color: #000000;
  width: 450px;
  padding: 50px;
  border-radius: 5px;
  height: 580px;
  opacity: 0.75;

  @media (max-width: 740px) {
    width: initial;
    padding: 20px;
  }
`
