--- 
path: "/js-variables-types"
date: "2020-11-13"
title: "JavaScript. Zmienne. Typy."
author: "mfordas"
tags: ["javascript", "programming", "moimislowami"]
short: "#moimisłowami o zmiennych i typach w JavaScript."
pic: "elizabeth-kay-9szCcOw4BWo-unsplash.jpg"
---

  <div>
                            <p>Dzisiaj krótki post o zmiennych i typach w JavaScript.</p>
                            <h3>Zmienne</h3>
                                <p>
                                    <p><b>W JavaScript możemy zadeklarować zmienne za pomocą jednego z trzech słów kluczowych:</b></p>
                                    <ol>
                                        <li><b>var</b></li>
                                        <li><b>let</b></li>
                                        <li><b>const</b></li>
                                    </ol>
                                </p>
                                <p>Główna różnica zmiennych deklarowanych za pomocą każdego z tych słów kluczowych polega na zasięgu ich występowania ale nie tylko. No to po kolei o każdym ze słów kluczowych:
                                 <ol>
                                        <li><b>var</b> - posiada zasięg funkcyjny, podlega hoistingowi (czyli automatyczne przenoszenie deklaracji zmiennej na początek jej zasięgu), możliwa  możliwa jest jej redeklaracja i zmiana jej wartości</li>
                                        <li><b>let</b> - posiada zasięg blokowy (czyli ograniczony najbliższymi nawiasami klamrowymi), możliwa jest zmiana jej wartości, nie możemy jej redeklarować</li>
                                        <li><b>const</b> - posiada zasięg blokowy, jej wartość (w przypadku typów prostych) / referencja (w przypadku typów referencyjnych) jest stała, musi być zadeklarowana i zainicjalizowana w tym samym czasie, nie możemy jej redeklarować</li>
                                    </ol>
                                <h3>Typy</h3>
                                <p>Przy temacie zmiennych warto wspomnieć o typach występujących w JavaScript:</p>
                                 <ol>
                                  <li><b>Typy prymitywne (proste)</b> - ich wartości zapisywane są bezpośrednio w zmiennej. Do typów prostych zaliczamy: string, number, Boolean, null, undefined, symbol</li>
                                  <li><b>Typy referencyjne</b> - w zmiennej znajduje się referencja do miejsca w pamięci (adresu). Do typów referencyjnych zaliczamy: obiekt ogólny, funkcja, tablica. Z czego funkcja i tablica są podtypami obiektu ogólnego</li>
                                 </ol>
                                <p>
                                     Przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=JFDScHg6Dws"
                                        target="_blank"><b>Programowanie w JavaScript #1 Zmienne - Samuraj programowania</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=5RE_3KvobVs"
                                        target="_blank"><b>Zmienne w JavaScript: var czy let - Pasja informatyki</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=DyAIYDgkZ8o"
                                        target="_blank"><b>Zmienne w JavaScript: const - Pasja informatyki</b></a></li>
                                        <li><a
                                        href="https://developer.mozilla.org/pl/docs/Learn/JavaScript/Pierwsze_kroki/Zmienne"
                                        target="_blank"><b>Dokumentacja na mdn</b></a></li>
                                    </ul>
                                </p>
                        </div>