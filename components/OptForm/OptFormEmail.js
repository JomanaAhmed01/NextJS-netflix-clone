import styled from "styled-components"

export default function OptFormEmail({ children, ...restProps }) {
  return (
    <EmailInput
      className="optform-email"
      type="text"
      placeholder="Email address"
      {...restProps}
    >
      {children}
    </EmailInput>
  )
}

export const EmailInput = styled.input`
  padding: 10px 20px;
  width: 450px;
  height: 60px;
  font-size: 15px;

  @media (max-width: 950px) {
    margin-bottom: 20px;
    width: 75%;
  }
`
