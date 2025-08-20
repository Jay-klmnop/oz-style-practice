import styled from "styled-components";
import { flexMixin, fontMixin } from "../styled/styledMixin";
import {
  spacing_xxs,
  spacing_xs,
  spacing_sm,
  font_sm,
  font_bg,
  font_medium,
  font_bold,
} from "../styled/styledVariables";

const StyledContent = styled.div`
  ${flexMixin({ align: "start", direction: "column", gap: spacing_xs })};

  img {
    width: 300px;
    border-radius: ${spacing_sm};
    margin-bottom: ${spacing_xxs};
  }

  span {
    ${fontMixin(font_sm, font_bold)};
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    padding: ${spacing_xxs} ${spacing_xs};
    border-radius: ${spacing_xxs};
  }

  h3 {
    ${fontMixin(font_bg, font_bold)};
    color: ${({ theme }) => theme.text};
  }

  p {
    ${fontMixin(font_sm, font_medium)};
    color: ${({ theme }) => theme.secondaryText};
  }
`;

export default function Content({ content }) {
  return (
    <StyledContent>
      <img src={content.img} alt={content.title} width="300px" height="199px" />
      <span>모집중</span>
      <h3>{content.title}</h3>
      <p>{content.subtitle}</p>
    </StyledContent>
  );
}
