import styled from "styled-components";
import { flexMixin, fontMixin } from "../styled/styledMixin";
import {
  spacing_sm,
  spacing_md,
  font_md,
  font_medium,
} from "../styled/styledVariables";

const StyledHeader = styled.header`
  ${flexMixin({ justify: "space-between", align: "center" })};
  padding: ${spacing_sm} ${spacing_md};
  background-color: ${({ theme }) => theme.background};

  ul {
    ${flexMixin({ justify: "center", align: "center", gap: spacing_md })};
    li {
      list-style: none;
      ${fontMixin(font_md, font_medium)};
    }
  }
`;

export default function Header({ setDarkMode }) {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {setDarkMode ? "dark mode" : "light mode"}
      </button>
    </StyledHeader>
  );
}
