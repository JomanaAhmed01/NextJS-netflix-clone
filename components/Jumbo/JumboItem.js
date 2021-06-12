import styled from "styled-components"

export default function JumboItem({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  width: 1110px;
  display: flex;
  justify-content: center;
  padding: 30px 100px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 30px 50px;
  }
`
