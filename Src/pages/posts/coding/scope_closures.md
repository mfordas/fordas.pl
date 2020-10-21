--- 
path: "/js-scope-closures"
date: "2020-10-21"
title: "JavaScript. Zakres. Zakres leksykalny. Domknięcia. "
author: "mfordas"
tags: ["javascript", "programming", "moimislowami"]
short: "#moimisłowami o zakresie, zakresie leksykalnym i domknięciach."
pic: "pexels-cottonbro-4966171.jpg"
---


  <div>
                            <p><b>Zakres (scope) - </b>Zestaw zasad określający gdzie w jaki sposób uzyskujemy dostęp do zmiennych.</p>
                                <p>
                                    <b>Zmienne mogą być wyszukiwane w dwóch celach:</b>
                                    <ol>
                                        <li>Przypisania referencji (LHS - Left hand side look-up)</li>
                                        <li>Zwrócenia wartości (RHS - Right hand side look-up)</li>
                                    </ol>
                                </p>
                                <p>Przeważnie mamy do czynienia z więcej niż jednym zakresem. Tak samo jak funkcje i bloki zakresy mogą być zagnieżdżane wewnątrz innych zakresów. Jeśli zmienna nie zostanie znaleziona w bieżącym zakresie silnik JavaScriptu przejdzie do wyższego zakresu w celu jej znalezienia. Jeśli znowu jej nie znajdzie to przejdzie do zakresu wyżej, do momentu aż dojdzie do globalnego zakresu.</p>
                                <p>Z wyszukiwaniem zmiennych w zakresach związane są wyrzucane błędy:
                                 <ol>
                                        <li><b>Reference Error - </b>występuje gdy podczas wyszukiwania RHS zmienna nie zostanie znaleziona w zakresie lub podczas wyszukiwania LHS gdy aktywny jest strict mode.</li>
                                        <li><b>Type Error - </b>dostaniemy gdy podczas wyszukiwania RHS zmienna zostanie znaleziona ale operacja, którą chcemy na niej wykonać jest niedozwolona.</li>
                                    </ol>
                                <p><b>Zakres leksykalny - </b> zakres określany podczas fazy leksykalnej czyli pierwszej fazy pracy kompilatora polegającej na interpretowaniu kodu źródłowego na zrozumiałe dla silnika tokeny. Strukturę zasięgu leksykalnego określa informacja o tym gdzie definiowane są zmienne i bloki.  </p>
                                <p><b>Domknięcie - </b> występuje gdy funkcja zapamiętuje i ma dostęp do swojego zasięgu leksykalnego nawet gdy jest wywoływana poza nim.</p>
                                <p>Przykład domknięcia:</p>
                                </div>

```javascript
    const suma = function (liczba1) {
    const liczba2 = 5;
    return function(liczba3) {
        return liczba1 + liczba2 + liczba3;
    };
};

const sumaZ15 = suma(10);
console.log(sumaZ15(10));
```
<div>
<p>
W powyższym przykładzie funkcja suma została wywołana z liczbą 10 a jej wynik został przypisany do zmiennej sumaZ15. Funkcja suma zakończyła swoje działanie więc teoretycznie nie mamy już dostępu do zmiennych liczba1 oraz liczba2. Jednak dzięki mechanizmowi domknięć zostały one zapamiętane przez funkcję sumaZ15 i mogą być użyte podczas kolejnych jej wywołań. Zatem wywołanie funkcji sumaZ15(10) da nam wynik 25.
</p>
                                <p>
                                     Przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=YvJY6z6Xwr4"
                                        target="_blank"><b>Closures (domknięcia) w JavaScript - kurs programowania #16</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=41WCKu3dHNU"
                                        target="_blank"><b>Jak działa zakres (scope) - Zaawansowany JavaScript #2/4</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=7a-1-8Rtah4"
                                        target="_blank"><b>Czym jest zakres leksykalny? Zaawansowany JavaScript #3/4</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=wINRm5v3Lu8"
                                        target="_blank"><b>Czym są domknięcia?(Closures) - Zaawansowany JavaScript #4/4</b></a></li>
                                        <li><a
                                        href="https://developer.mozilla.org/pl/docs/Web/JavaScript/Domkniecia"
                                        target="_blank"><b>Domknięcia - mdn</b></a></li>
                                    </ul>
                                </p>
                        </div>