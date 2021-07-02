import styled from "styled-components"

export default function AddImage({ children, ...restProps }) {
  let FAQState = "open"

  if (FAQState === "open") {
    return (
      <Image {...restProps} src="./images/icons/add.png">
        {children}
      </Image>
    )
  } else {
    return null
  }
}

export const Image = styled.img`
  width: 23px;
  filter: brightness(0) invert(1);
  float: right;
  margin-right: 30px;
  margin-top: 3px;
  cursor: pointer;
`
