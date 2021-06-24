--- 
path: "/apply_call_bind"
date: "2021-06-23"
title: "JavaScript - apply, call, bind"
author: "mfordas"
tags: ["coding", "webdev", "javascript"]
short: "JavaScript - call, apply czy może bind?"
pic: "elena-mozhvilo-FBaJVyV_NvU-unsplash.jpg"
---

<div>
<p>Dzisiaj #moimislowami o trzech metodach, o które prawie na pewno zostaniemy zapytani na rozmowie kwalifikacyjnej. Dla niecierpliwych tl;dr: Robią to samo - określają kontekst wywołania funkcji, różnią się sposobem podawania argumentów i tym, że dwie z nich od razu wywołują daną funkcję a trzecia zwraca nową funkcję bez jej wywołania. Mowa tutaj o call, apply oraz bind.
</p>
<h3>call
</h3>
<p>Wg definicji z MDN’a: Metoda call pozwala metodzie jednego obiektu zostać użytej na innym obiekcie. Zobaczmy przykład poniżej:
</p>
</div>

```javascript
const Porsche = {
    name: 'Porsche',
    printName: function (model) { console.log(`${this.name} - ${model}` ) },
};

Porsche.printName('911'); // Porsche - 911

const BMW = {
    name: 'BMW',
};

Porsche.printName.call(BMW, 'M5'); // BMW - M5
```
<div>
<p>Call przyjmuje argumenty w kolejności: (obiekt na którym chcemy wywołać daną funkcję, ...argumenty do danej funkcji wypisane po przecinku).
</p>
<h3>apply
</h3>
<p>Od call różni ją tak naprawdę tylko to, że argumenty do danej funkcji dostarczamy w postaci tabeli:
</p>
</div>

```javascript
const Porsche = {
    name: 'Porsche',
    printName: function (model) { console.log(`${this.name} - ${model}` ) },
};

Porsche.printName('911'); // Porsche - 911

const BMW = {
    name: 'BMW',
};

Porsche.printName.apply(BMW, ['M2']); // BMW - M2
```
<div>
<p>Cechą wspólną call i apply jest to, że od razu wywołują daną funkcję.
</p>
<h3>bind
</h3>
<p>Działa  tak samo jak call i apply ale nie wywołuje od razu funkcji a jedynie tworzy nową funkcję i przypisuje jej określony kontekst:
</p>
</div>

```javascript
const Porsche = {
    name: 'Porsche',
    printName: function (model) { console.log(`${this.name} - ${model}` ) },
};

Porsche.printName('911'); // Porsche - 911

const BMW = {
    name: 'BMW',
};

const printBmwName = Porsche.printName.bind(BMW, 'M4');

printBmwName(); // BMW - M4
```
<div>
<p>W sumie byłoby to na tyle jeśli chodzi te metody. Myślę, że warto z każdą z nich napisać kilka linijek dla przećwiczenia ich działania, na pewno wtedy lepiej wiedza wejdzie do głowy.
</p>
<p>
                                     Na koniec jak zwykle przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call"
                                        target="_blank"><b>MDN - call</b></a></li>
                                        <li><a
                                        href="https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"
                                        target="_blank"><b>MDN - apply</b></a></li>
                                        <li><a
                                        href="https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"
                                        target="_blank"><b>MDN - bind</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=uBdH0iB1VDM"
                                        target="_blank"><b>JS Function Methods call( ), apply( ), and bind( )</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=c0mLRpw-9rI"
                                        target="_blank"><b>javaScript call apply and bind</b></a></li>
                                    </ul>
                                </p>
</div>