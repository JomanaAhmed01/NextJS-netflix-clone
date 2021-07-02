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
  font-size: 15px;

  :hover {
    text-decoration: underline;
  }
`
