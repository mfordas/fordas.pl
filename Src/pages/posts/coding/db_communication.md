--- 
path: "/db_communication"
date: "2020-10-11"
title: "Bazy danych - Komunikacja"
author: "mfordas"
tags: ["javascript", "databases", "moimislowami", "backend"]
short: "#moimisłowami o komunikacji z bazą danych."
pic: "pexels-pixabay-163165.jpg"
---

  <div>
                           <p>Podczas pisania aplikacji 'Forma zakupy' korzystałem z frameworka Express.js do budowy API. Aplikacja posiada bazę danych MongoDB. Na tej bazie danych wykonywane są standardowe operacje: <b>CRUD</b>, czyli <b>C</b>reate (Utwórz) <b>R</b>ead(Odczytaj) <b>U</b>pdate(Zaktualizuj) <b>D</b>elete(Usuń). Tylko pytanie w jaki sposób są one wykonywane? W dokumentacji mdn znalazłem artykuł o komunikacji z bazą danych właśnie w Express.js.
                                </p>
                                <p>
                                Express.js pozwala nam na korzystanie z dowolnej bazy danych, który wspierany jest przez Node.js - MySQL, Redis, SQLite, MongoDB. 
                                </p>
                                <p>
                                    Teraz jest pytanie w jaki sposób możemy komunikować się z wybraną bazą danych? Mdn podaje dwa sposoby:
                                    <ol>
                                        <li>Stosowanie języka zapytań związanego z konkretną bazą danych np. SQL</li>
                                        <li>Używanie ORM (Object Relational Mapping)/ODM (Object Document Mapping) czyli najprościej mówiąc zamiany danych w postaci obiektów JS na język zrozumiały dla bazy danych</li>
                                    </ol>
                                </p>
                                <p>Najszybszym pod względem wydajnościowym rozwiązaniem jest komunikowanie się z bazą danych w jej języku domyślnym. Podczas używania ORM/ODM nie mamy pewności, że dana funkcja wykorzystuje najbardziej zoptymalizowany sposób wysyłania zapytań, szczególnie gdy ORM/ODM obsługuje różne bazy danych za pomocą tych samych funkcji. Z drugiej strony używanie ORM/ODM daje nam możliwość użycia różnych baz danych bez dogłębnego wnikania w język obsługujący każdą z nich. Stosowanie ORM/ODM pozwala myśleć w formacie JS bez potrzeby przestawiania się na sposób działania bazy danych.</p>
                                <p>Minusem używania ORM/ODM'ów, który przychodzi mi do głowy jest to, że jeśli mamy aplikację opartą na takim systemie i któregoś dnia przestanie być wspierany to jesteśmy zmuszeni przepisać całą komunikację z bazą danych na nowo co może być bardzo kosztowne. Więc podczas wyboru ORM/ODM na pewno musimy zwracać uwagę jaka jest aktywność społeczności wokół projektu - aktywność ściągnięć z npm, ilość pull-requestów czy zgłaszanych błędów.</p>
                                <p>Dla bliższego zapozna się z Mongoose'm czyli ODM'em przeznaczonym dla MongoDB, którego używam w 'Forma Zakupy'  polecam przeczytać pierwszy artykuł ze źródeł.</p>
                                 <p>
                                     Przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose"
                                        target="_blank"><b>Express Tutorial Part 3: Using a Database (with Mongoose) - mdn</b></a></li>
                                        <li><a
                                        href="https://www.udemy.com/course/nodejs-master-class/"
                                        target="_blank"><b>Kurs Mosha na temat NodeJs - rozdziały 7, 8, 9</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/c/TraversyMedia/search?query=database"
                                        target="_blank"><b>Materiały z kanału TraversyMedia na temat baz danych</b></a></li>
                                        <li><a
                                        href="https://www.npmjs.com/search?q=keywords:odm"
                                        target="_blank"><b>Lista ODM na npm</b></a></li>
                                        <li><a
                                        href="https://www.npmjs.com/search?q=keywords:orm"
                                        target="_blank"><b>Lista ORM na npm</b></a></li>
                                        <li>Dokumentacja</li>
                                    </ul>
                                </p>
                        </div>