import styled from "styled-components"

export default function SignFormBtn({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  width: 95%;
  background-color: #e50914;
  padding: 15px 30px;
  border-radius: 3px;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 740px) {
    width: 100%;
  }
`
