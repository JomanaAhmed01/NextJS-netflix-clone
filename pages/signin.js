import HeaderContainer from "../components/Header/HeaderContainer"
import NavbarContainer from "../components/Header/NavbarContainer"
import Logo from "../components/Header/Logo"
import SignFormWrapper from "../components/SignIn/SignFormWrapper"
import SignFormBase from "../components/SignIn/SignFormBase"
import SignFormTitle from "../components/SignIn/SignFormTitle"
import SignFormInput from "../components/SignIn/SignFormInput"
import SignFormBtn from "../components/SignIn/SignFormBtn"
import SignFormCheckbox from "../components/SignIn/SignFormCheckbox"
import SignFormText from "../components/SignIn/SignFormText"
import SignFormLink from "../components/SignIn/SignFormLink"
import SignFormCaptcha from "../components/SignIn/SignFormCaptcha"
import FooterCompound from "../compounds/FooterCompound"

export default function signin() {
  return (
    <>
      <HeaderContainer>
        <NavbarContainer />
        <Logo />
        <SignFormWrapper>
          <SignFormBase>
            <SignFormTitle>Sign In</SignFormTitle>
            <SignFormInput type="text" placeholder="Email address" />
            <SignFormInput type="password" placeholder="Password" />
            <SignFormBtn>Sign In</SignFormBtn>
            <SignFormCheckbox type="checkbox" label="Remember me" />
            <SignFormText>New to Netflix?</SignFormText>
            <SignFormLink href="/signup">Sign up now.</SignFormLink>
            <SignFormCaptcha>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </SignFormCaptcha>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderContainer>

      <FooterCompound />
    </>
  )
}
