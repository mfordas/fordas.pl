--- 
path: "/context"
date: "2021-11-12"
title: "React - Context"
author: "mfordas"
tags: ["coding", "webdev", "javascript", "react"]
short: "React - Context - manager stanu czy nie?"
pic: "owen-cannon-cWLTaVPCGyA-unsplash.jpg"
---

<div>
<p>Co to do cholery w końcu jest ten kontekst w React? Manager stanu czy nie? Postaram się skompletować tutaj znalezione przeze mnie informacje i przedstawić je w prosty sposób #moimislowami
</p>
<p>
            <p>Najlepszym początkiem będzie zdefiniowanie <b>właściwości managera stanu:</b></p>
                <ul>
                    <li>przechowuje stan początkowy</li>
                    <li>pozwala odczytać aktualny stan</li>
                    <li>pozwala zaktualizować stan</li>
                    <li>posiada mechanizm informujący o zmianach stanu</li>
                </ul>
        </p>
<p>A następnie przytoczenie definicji Kontekstu z dokumentacji Reacta:</p>
<p>"Kontekst umożliwia przekazywanie danych wewnątrz drzewa komponentów bez konieczności przekazywania ich przez właściwości każdego komponentu pośredniego."</p>
</div>
<p>Jak od razu widać w definicji Kontekstu nie ma mowy o przechowywaniu wartości a jedynie o przekazywaniu jej bezpośrednio do komponentu docelowego.Głównym założeniem jest uniknięcie sytuacji nazywanej <a
                                        href="https://kentcdodds.com/blog/prop-drilling"
                                        target="_blank"><b>prop drilling</b></a> czyli przekazywania propsów przez wiele komponentów, które w ogóle nie muszą o nich wiedzieć. W dokumentacji mowa jest także o wartościach, które uznamy za globalne i potrzebujemy do nich dostępu w wielu miejscach np. aktualny język, motyw kolorystyczny.</p>
<p>Żeby zaprezentować użycie Kontekstu posłużę się przykładem z biblioteki MaterialUI pokazującym jak za jego pomocą zaimplementować zmianę stylu aplikacji. Utworzyłem plik StyleContext w którym utworzyłem kontekst do zmiany stylu StyleContext, komponent StylesProvider, który będzie służył za wrapper innych komponentów oraz funkcję getDesignTokens zwracającą ustawienia dla poszczególnych styli. Dodatkowo dodałem tutaj zapisywanie wybranego stylu do localstorage dzięki czemu wybrany styl zostaje zapamiętany. Kod tego komponentu możesz zobaczyć poniżej.</p>

```javascript
import React, {createContext, ReactElement, useState } from 'react';
import { createTheme, PaletteMode, ThemeProvider  } from '@mui/material';
import { amber, blueGrey, deepOrange, grey, teal, yellow } from '@mui/material/colors';

export enum Styles {
    light = 'light',
    dark = 'dark' ,
}

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: amber,
            divider: amber[200],
            text: {
              primary: '#fff',
              secondary: yellow[300],
            },
            background: {
                default: blueGrey[800],
                paper: blueGrey[800],
            }
          }
        : {
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: teal[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });

const THEME_STORAGE = 'THEME';

export const StyleContext = createContext({ colorMode: { toggleColorMode: () => {} }, style: 'light'});

export const StylesProvider: React.FC<{ children: ReactElement}> = ({ children }) => {
    const savedMode = () => localStorage.getItem(THEME_STORAGE) === Styles.dark ? Styles.dark : Styles.light;

    const [style, setStyle] = useState<PaletteMode>(savedMode());

    const colorMode = React.useMemo(
        () => ({
          toggleColorMode: () => {
            setStyle((prevMode: string) => (prevMode === Styles.light ? changeStyle(Styles.dark) : changeStyle(Styles.light))
            );
          },
        }),
        [],
      );
    
      const theme = React.useMemo(() => createTheme(getDesignTokens(style)), [style]);
    

    const changeStyle = (style: Styles) => {
        localStorage.setItem(THEME_STORAGE, style);
        return style;
    }

    return (
        <StyleContext.Provider value={{ colorMode, style }}>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
        </StyleContext.Provider>
    )
}
```
<div>
<p>Następnie zaimportowałem komponent StylesProvider do pliku index.ts i opakowałem nim całą aplikację.
</p>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StylesProvider } from './Context/Context';

ReactDOM.render(
  <React.StrictMode>
      <StylesProvider>
        <App />
      </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
<div>
<p>W tym momencie wszystkie komponenty mają dostęp do StyleContextu. Przykładowo w pliku komponentu App możemy użyć kontekstu w następujący sposób.
</p>

```javascript
import { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Box } from '@mui/material';

import { StyleContext, Styles } from 'Context/Context';
import { Menu } from 'Components/Menu/Menu';
import { MainPage } from 'Components/MainPage/MainPage';

function App() {
 
  const { colorMode, style } = useContext(StyleContext);

  console.log('Render App');
  
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        bgcolor: 'background.default',
        color: 'text.primary',
        flexDirection: 'column'
      }}
    >
      <div style={{ position: 'absolute', right: '40px', top: '40px'}}>
        <Switch onChange={colorMode.toggleColorMode} defaultChecked={style === Styles.dark} />
      </div>
        <Router>
          <Menu />
          <Route path='/list' component={ MainPage } />
        </Router>
    </Box>
  );
}

export default App;
```
<div>
<p>Co tutaj się dzieje, używamy hooka useContext, który przyjmuje za argument obiekt Kontekstu i zwraca wartość zapisaną w najbliższym dostawcy. Pobieramy colorMode czyli obiekt z funkcją potrzebną do zmiany stylu aplikacji oraz aktualną wartość zmiennej style dzięki, której określimy w jakim położeniu powinien być suwak zmieniający styl aplikacji.
</p>
<p>Podsumowując, Kontekst służy do przekazywania wartości między komponentami. Wartość ta może być czymkolwiek - stringiem, liczbą, obiektem. Jest ona przechowywana np. w stanie komponentu. Możemy używać go do uniknięcia tzw. prop drillingu i przekazania wartości do komponentów znajdujących się bardzo głęboko w drzewie.
</p>
<p>
                                     Na koniec jak zwykle przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://pl.reactjs.org/docs/context.html"
                                        target="_blank"><b>Dokumentacja React - Kontekst</b></a></li>
                                        <li><a
                                        href="https://blog.testdouble.com/posts/2021-03-19-react-context-for-dependency-injection-not-state/?fbclid=IwAR0VxQ5YV5OUr664SQs6TpjXCT7Qwk2CJIHZ9bNcIFJXINNK1cEtEQfo0pE"
                                        target="_blank"><b>Użycie Kontekstu do dependency injection</b></a></li>
                                        <li><a
                                        href="https://blog.isquaredsoftware.com/2021/01/context-redux-differences/"
                                        target="_blank"><b>Why React Context is Not a "State Management" Tool (and Why It Doesn't Replace Redux)</b></a></li>
                                        <li><a
                                        href="https://kentcdodds.com/blog/prop-drilling"
                                        target="_blank"><b>Prop drilling</b></a></li>
                                    </ul>
                                </p>
</div>