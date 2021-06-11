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
  margin-top: 20px;
  margin-left: auto;
  margin-right: -28px;

  @media screen and (max-width: 550px) {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 14px;
    margin-right: -28px;
  }
`