import styled from "styled-components"

export default function JumboItem({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 100px;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 30px 50px;
  }
`
