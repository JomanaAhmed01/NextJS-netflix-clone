import styled from "styled-components"

export default function SignFormLink({ children, ...restProps }) {
  return (
      <Link {...restProps}>{children}</Link>
  )
}

export const Link = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 740px) {
    margin-top: 40px;
  }
`
