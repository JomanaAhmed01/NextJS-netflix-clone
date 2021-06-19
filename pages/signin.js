import HeaderContainer from '../components/Header/HeaderContainer'
import NavbarContainer from '../components/Header/NavbarContainer'
import Logo from '../components/Header/Logo'
import SignFormWrapper from '../components/SignIn/SignFormWrapper'
import SignFormBase from '../components/SignIn/SignFormBase'
import SignFormTitle from '../components/SignIn/SignFormTitle'
import SignFormInput from '../components/SignIn/SignFormInput'
import SignFormBtn from '../components/SignIn/SignFormBtn'
import SignFormText from '../components/SignIn/SignFormText'
import SignFormLink from '../components/SignIn/SignFormLink'

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
            <SignFormText>New to Netflix?</SignFormText>
            <SignFormLink href='#'>Sign up now.</SignFormLink>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderContainer>
    </>
  )
}