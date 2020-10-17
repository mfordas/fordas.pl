--- 
path: "/db_structures"
date: "2020-10-17"
title: "Bazy danych - Modele i struktury danych"
author: "mfordas"
tags: ["databases", "moimislowami", "backend"]
short: "#moimisłowami o modelach i strukturach danych."
pic: "pexels-will-mu-3802666.jpg"
---

  <div>
                        <p>Na początek dwie definicje:</p>
                           <p><b>Baza danych</b> - zbiór danych (informacji) uporządkowany według określonych zasad</p>
                           <p><b>Struktury danych </b>- zaawansowane pojemniki na dane, które gromadzą je i układają w odpowiedni sposób.</p>
                                <p>
                                   Podstawowe struktury danych:
                                    <ol>
                                        <li><a
                                        href="https://pl.wikipedia.org/wiki/Stos_(informatyka)"
                                        target="_blank"><b>stos</b></a></li>
                                        <li><a
                                        href="https://pl.wikipedia.org/wiki/Lista"
                                        target="_blank"><b>lista</b></a></li>
                                        <li><a
                                        href="https://pl.wikipedia.org/wiki/Kolejka_(informatyka)"
                                        target="_blank"><b>kolejka</b></a></li>
                                        <li><a
                                        href="https://pl.wikipedia.org/wiki/Kopiec_(informatyka)"
                                        target="_blank"><b>kopiec</b></a></li>
                                        <li><a
                                        href="https://pl.wikipedia.org/wiki/Drzewo_(informatyka)"
                                        target="_blank"><b>drzewo</b></a></li>
                                        <li><a
                                        href="http://www.algorytm.edu.pl/grafy.html"
                                        target="_blank"><b>graf</b></a></li>
                                    </ol>
                                </p>
                                <p><b>Model danych</b> - integralny zbiór zasad, opisujący dane i powiązania między nimi, określający ograniczenia nakładane na dane i operacje które możemy na nich wykonywać</p>
                                <p>Model danych spełnia 3 role:
                                    <ol>
                                        <li>Strukturalna - określenie sposobu przechowywania danych (sposób uporządkowany)</li>
                                        <li>Integralna - zagwarantowanie stabilności systemu przechowywania danych</li>
                                        <li>Manipulacyjna - zapewnienie możliwości bezpiecznej modyfikacji danych oraz ewentualnych zmian struktury danych</li>
                                    </ol>
                                </p>
                                <p>Modele danych:
                                    <ul>
                                        <li><b>jednorodny</b>- używamy w nim jednego zgromadzenia danych, np. tabeli, spisu, katalogu. Charakteryzuje się prostotą a jego wada to trudność w odnalezieniu niektórych danych oraz możliwa redundancja (nadmiarowość, powtarzanie danych)</li>
                                        <li><b>hierarchiczny</b>- oparty na drzewiastych strukturach danych, stosuje się w nim związki nadrzędny-podrzędny. Jego minusem jest brak elastyczności w operacjach, wstawianie rekordów wymaga powiązania ich z rekordem nadrzędnym a usunięcie rekordu nadrzędnego powoduje usunięcie wszystkich podrzędnych</li>
                                        <li><b>obiektowy</b>- opiera się na tym samym co programowanie obiektowe, rzeczywistość reprezentują obiekty, które są instancją klasy. Klasą nazywamy zestaw atrybutów i metod (funkcji). </li>
                                        <li><b>sieciowy</b>- zmodyfikowany model hierarchiczny, oparty na typach kolekcji i typach rekordów. Jego reprezentacja przyjmowała postać grafu zorientowanego, który nazywano siecią</li>
                                        <li><b>relacyjny</b>- dane grupowane są w relacje (tabele). Relacje są zbiorami rekordów (wierszy w tabeli), powiązanych między sobą</li>
                                        <li><b>relacyjno-obiektowy</b>- mechanizm przechowywania danych jest relacyjny ale do operacjach na danych możemy użyć interfejsu meto wykorzystujących mechanizmy obiektowe</li>
                                    </ul>
                                </p>
                                 <p>
                                     Przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=zldeGKrYUdk&list=PLOYHgt8dIdoymv-Wzvs8M-OsKFD31VTVZ&index=4"
                                        target="_blank"><b>Kurs MySQL odc. 4: Modele danych. Relacja. Iloczyn kartezjański -Pasja informatyki</b></a></li>
                                        <li><a
                                        href="https://pl.wikipedia.org/wiki/Baza_danych"
                                        target="_blank"><b>Bazy danych - Wikipedia</b></a></li>
                                    </ul>
                                </p>
                        </div>