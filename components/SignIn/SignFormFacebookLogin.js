import styled from "styled-components"
import { SocialFacebook } from "@styled-icons/foundation/SocialFacebook"

export default function SignFormFacebookLogin({ children, ...restProps }) {
  return (
    <Wrapper>
      {children}
      <FacebookIcon />
      Login with Facebook
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  color: grey;
`

export const FacebookIcon = styled(SocialFacebook)`
  color: #3b5998;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`