import HeaderContainer from '../components/Header/HeaderContainer'
import NavbarContainer from '../components/Header/NavbarContainer'
import Logo from '../components/Header/Logo'
import SigninBtn from '../components/Header/SigninBtn'
import FeatureWrapper from '../components/Feature/FeatureWrapper'
import FeatureTitle from '../components/Feature/FeatureTitle'
import FeatureSubtitle from '../components/Feature/FeatureSubtitle'
import OptFormWrapper from '../components/OptForm/OptFormWrapper'
import OptFormEmail from '../components/OptForm/OptFormEmail'
import OptFormBtn from '../components/OptForm/OptFormBtn'

export default function HeaderCompound() {
  return (
    <>
      <HeaderContainer>
        <NavbarContainer>
          <Logo />
          <SigninBtn />
        </NavbarContainer>

        <FeatureWrapper>
          <FeatureTitle />
          <FeatureSubtitle />
        </FeatureWrapper>

        <OptFormWrapper>
          <OptFormEmail />
          <OptFormBtn />
        </OptFormWrapper>
      </HeaderContainer>
    </>
  )
}