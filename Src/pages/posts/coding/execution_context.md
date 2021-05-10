--- 
path: "/js-execution_context"
date: "2020-10-03"
title: "JavaScript. Execution context."
author: "mfordas"
tags: ["javascript", "programming", "moimislowami"]
short: "#moimisłowami o Execution Context w JavaScript."
pic: "child-1864718_1920.jpg"
---

<div>
    <h3><b>Kontekst wykonania (Execution Context)</b></h3><p> Miejsce w którym interpretowany i wykonywany jest kod JS.</p>
        <p>
            <h3><b>Trzy rodzaje Execution Context:</b></h3>
                <ol>
                    <li><b>Global Execution Context</b> - globalny(domyślny) kontekst wykonania. W nim obsłużony zostaje kod, który nie znajduje się wewnątrz żadnej funkcji. Podczas wykonywania kodu JS mamy tylko jeden taki kontekst.</li>
                    <li><b>Function Execution Context</b> - lokalny(funkcyjny) kontekst wykonania. W nim obsłużony zostaje kod, który znajduje się wewnątrz konkretnej funkcji. Lokalny kontekst wykonania jest tworzony przy każdym wywołaniu funkcji.</li>
                    <li><b>Eval Execution Context</b> - na funkcję eval natrafiłem jakiś czas temu i pierwsza rzecz, która mnie zdziwiła to to, że na MDN od razu wyświetla się napis: 'Never use eval()'.Nie używać, to nie używać. Na razie nie wnikam więc co to jest Eval Execution Context.</li>
                </ol>
        </p>
            <h3><b>Execution Stack</b></h3>
            <p>Z Execution Context związany jest Execution Stack (Stos wykonania). Jest to miejsce, w którym przechowywane są wszystkie konteksty wykonania. Zawsze na początku trafia tam Global Execution Context a później wszystkie pozostałe konteksty. Wykonywanie i usuwanie kontekstów odbywa się na zasadzie LIFO (Last in, first out) czyli ostatni wchodzi, pierwszy wychodzi. </p>
            <p>JavaScript jest jednowątkowa, więc w jednym momencie może być wykonywany jeden stos.</p>
            <h3><b>Budowanie Execution Context</b></h3>
            <p>Execution Context budowany jest w dwóch fazach:
                <ol>
                    <li><b>Creation Stage</b> - podczas tej fazy definiowane są zmienne, funkcje i argumenty. Ustalana jest wartość 'this' oraz scope chain (łańcuch zakresów).</li>
                    <li><b>Execution Stage</b> - faza wykonania - podczas niej przypisywane są wartości do zmiennych i referencji funkcji, a także wykonywany jest kod.</li>
                </ol>
                    <p>Cały wpis jest wzorowany na dwóch źródłach, które znajdują się poniżej. Chciałem jedynie opisać to #moimisłowami żeby w razie pytań na ten temat udzielić zwięzłej odpowiedzi.</p>
                    <p>Przykłady przedstawione w źródłach są przejrzyste i pozwalają lepiej zrozumieć Execution Context.</p>
                    <p>
                    Przydatne źródła:
                    <ul>
                        <li><a
                            href="https://www.youtube.com/watch?v=Hb0RG60gwh8"
                            target="_blank"><b>Execution Context - Zaawansowany JavaScript #1/4 - Overment </b></a></li>
                        <li><a
                                href="https://medium.com/@nazanindelam/all-you-need-to-learn-to-understand-javascript-execution-context-and-stack-3babbdd88868"
                                target="_blank"><b>Artykuł Naz Delam na Medium </b></a></li>
                    </ul>
                    </p>
            </p>
</div>