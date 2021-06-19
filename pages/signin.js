import HeaderContainer from '../components/Header/HeaderContainer'
import NavbarContainer from '../components/Header/NavbarContainer'
import Logo from '../components/Header/Logo'
import SignFormWrapper from '../components/SignIn/SignFormWrapper'
import SignFormBase from '../components/SignIn/SignFormBase'
import SignFormTitle from '../components/SignIn/SignFormTitle'

export default function signin() {
  return (
    <>
      <HeaderContainer>
        <NavbarContainer />
        <Logo />
        <SignFormWrapper>
          <SignFormBase>
            <SignFormTitle>Sign In</SignFormTitle>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderContainer>
    </>
  )
}