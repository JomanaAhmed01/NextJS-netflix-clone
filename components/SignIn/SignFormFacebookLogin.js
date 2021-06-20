import styled from "styled-components"
import { SocialFacebook } from "@styled-icons/foundation/SocialFacebook"

export default function SignFormFacebookLogin({ children, ...restProps }) {
  return (
    <Wrapper>
      <Link {...restProps}>
        {children}
        <FacebookIcon />
        Login with Facebook
      </Link>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`

export const Link = styled.a`
  color: #737373;
  font-size: 14px;
`

export const FacebookIcon = styled(SocialFacebook)`
  color: #3b5998;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
`
