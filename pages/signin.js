import HeaderContainer from '../components/Header/HeaderContainer'
import NavbarContainer from '../components/Header/NavbarContainer'
import Logo from '../components/Header/Logo'
import SignFormWrapper from '../components/SignIn/SignFormWrapper'

export default function signin() {
  return (
    <>
      <HeaderContainer>
        <NavbarContainer />
        <Logo />
        <SignFormWrapper></SignFormWrapper>
      </HeaderContainer>
    </>
  )
}