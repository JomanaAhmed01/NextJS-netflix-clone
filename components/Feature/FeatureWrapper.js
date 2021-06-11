import styled from "styled-components"

export default function FeatureWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Wrapper = styled.div`
  border: 3px solid green;
`