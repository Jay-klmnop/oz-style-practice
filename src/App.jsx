import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled/theme";
import { flexMixin } from "./styled/styledMixin";
import { spacing_md, spacing_lg } from "./styled/styledVariables";
import { GlobalStyle } from "./styled/GlobalStyle";
import Header from "./components/Header";
import Content from "./components/Content";
import { contents } from "./assets/data/data";

const StyledSection = styled.section`
  ${flexMixin({ wrap: "wrap", gap: spacing_md })};
  padding: ${spacing_md} ${spacing_lg};
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle darkMode={darkMode} />
      <main>
        <Header setDarkMode={setDarkMode} />
        <StyledSection>
          {contents.map((content) => (
            <Content key={content.id} content={content} />
          ))}
        </StyledSection>
      </main>
    </ThemeProvider>
  );
}

export default App;
