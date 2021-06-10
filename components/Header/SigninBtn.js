import styled from "styled-components"

export default function SigninBtn({ children, ...restProps }) {
  return <SignInButton href='#' {...restProps}>{children}Sign In</SignInButton>
}

export const SignInButton = styled.a`
  text-decoration: none;
  color: #ffffff;
  background-color: #e50914;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 3px;
  margin-bottom: 40px;
  margin-top: 20px;
  margin-right: 58px;
`
