import { css } from "styled-components";

export const flexMixin = ({
  justify = "flex-start",
  align = "stretch",
  direction = "row",
  wrap = "nowrap",
  gap = "0",
}) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  gap: ${gap};
`;

export const fontMixin = (size = "16px", weight = "normal") => css`
  font-size: ${size};
  font-weight: ${weight};
  color: ${({ theme }) => theme.text};
`;
