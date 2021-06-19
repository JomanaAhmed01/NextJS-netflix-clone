import HeaderContainer from '../components/Header/HeaderContainer'
import NavbarContainer from '../components/Header/NavbarContainer'
import Logo from '../components/Header/Logo'
import SignFormWrapper from '../components/SignIn/SignFormWrapper'
import SignFormBase from '../components/SignIn/SignFormBase'
import SignFormTitle from '../components/SignIn/SignFormTitle'
import SignFormInput from '../components/SignIn/SignFormInput'

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
          </SignFormBase>
        </SignFormWrapper>
      </HeaderContainer>
    </>
  )
}