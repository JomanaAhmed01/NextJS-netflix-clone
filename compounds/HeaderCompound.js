import HeaderContainer from '../components/Header/HeaderContainer'
import NavbarContainer from '../components/Header/NavbarContainer'
import Logo from '../components/Header/Logo'
import SigninBtn from '../components/Header/SigninBtn'
import FeatureWrapper from '../components/Feature/FeatureWrapper'

export default function HeaderCompound() {
  return (
    <>
      <HeaderContainer>
        <NavbarContainer>
          <Logo />
          <SigninBtn />
        </NavbarContainer>

        <FeatureWrapper></FeatureWrapper>
      </HeaderContainer>
    </>
  )
}