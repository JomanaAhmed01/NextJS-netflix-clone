import HeaderContainer from '../components/Header/HeaderContainer'
import NavbarContainer from '../components/Header/NavbarContainer'
import Logo from '../components/Header/Logo'

export default function HeaderCompound() {
  return (
    <>
      <HeaderContainer>
        <NavbarContainer>
          <Logo />
        </NavbarContainer>
      </HeaderContainer>
    </>
  )
}