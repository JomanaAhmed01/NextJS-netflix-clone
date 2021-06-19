import styled from "styled-components"

export default function SignFormLink({ children, ...restProps }) {
  return (
    <Wrapper {...restProps}>
      {children}
      <Link {...restProps}></Link>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: inline-block;
  margin-top: 40px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 740px) {
    margin-top: 40px;
  }
`

export const Link = styled.a``
