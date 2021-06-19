import styled from "styled-components"

export default function SignFormCaptcha({ children, ...restProps }) {
  return <ReCaptcha {...restProps}>{children}</ReCaptcha>
}

export const ReCaptcha = styled.p`
  color: #757575;
  font-size: 13px;
  width: 280px;
  margin-top: 50px;

  @media (max-width: 740px) {
    margin-top: 80px;
    width: initial;
  }
`
