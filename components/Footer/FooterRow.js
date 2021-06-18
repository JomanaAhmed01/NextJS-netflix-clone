import styled from "styled-components"

export default function FooterRow({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 65%;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`
