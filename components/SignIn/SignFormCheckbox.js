import styled from "styled-components"

export default function SignFormBase({ children, ...restProps }) {
  return (
    <Wrapper>
      <Label {...restProps}>
        <Input {...restProps}></Input>
        {children}Remember me
      </Label>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-top: 20px;
`

export const Input = styled.input`
  color: #737373;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  border: 0;
  height: 16px;
  left: -20px;
  width: 16px;
  margin-right: 5px;
`

export const Label = styled.label`
  color: #b3b3b3;
  display: flex;
  align-items: center;
`
