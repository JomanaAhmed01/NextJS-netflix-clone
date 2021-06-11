import styled from "styled-components"

export default function OptFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  border: 3px solid yellow;
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`
