import styled from "styled-components"

export default function SignFormInput({ children, ...restProps }) {
  return (
    <Wrapper {...restProps}>
      {children}
      <Input {...restProps}></Input>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 100%;
  border: none;

  @media (max-width: 740px) {
    width: 105%;
  }
`

export const Input = styled.input`
  width: 95%;
  height: 50px;
  padding: 20px 20px;
  background-color: rgb(102, 101, 101);
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  margin-bottom: 20px;

  ::placeholder {
    color: #a6a6a6;
  }
`
