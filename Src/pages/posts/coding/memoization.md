--- 
path: "/memo"
date: "2021-06-13"
title: "React - memoization (React.memo & React.PureComponent)"
author: "mfordas"
tags: ["coding", "webdev", "javascript", "react"]
short: "Pure function, pure component, memoization czyli trochę o optymalizacji wydajności w React"
pic: "kerem-karaarslan-6-4vPo17qoc-unsplash.jpg"
---

  <div>
                                <p>Kolejnym tematem z zaawansowanego Reacta jest zapamiętywanie - memoization. Zapamiętywanie jest techniką optymalizacji wydajności. Polega na zapamiętaniu wyniku funkcji i jeśli w przyszłości zostaną dostarczone do niej argumenty o takich samych wartościach zwrócenie wyniku bez przeprowadzania obliczeń. Warunkiem wykorzystania zapamiętywania na danej funkcji jest to, że funkcja ta jest ‘czysta’ (pure function).
                                </p>
                                <p>Trzeba zacząć od tego czym są Higher order components (Komponenty wyższego rzędu). Definicja wg oficjalnej dokumentacji Reacta brzmi:
                                </p>
                                <ol>
        <li>dla takich samych argumentów zawsze daje taki sam wynik</li>
        <li>nie wywołuje efektów ubocznych</li>
        </ol>
                                <p><b>Komponent wyższego rzędu jest funkcją, która przyjmuje jako argument inny komponent i zwraca nowy komponent.</b>
                                </p>
                                <p>Pure function są idealnym odwzorowaniem funkcji matematycznych w programowaniu.</p>
                                <p>Przykładem pure function jest funkcja sumująca trzy liczby:
                                </p>
                                </div>

```javascript
function sum(a, b, c) {
  return a + b + c;
}
```
<div>
                                <p>Na tej podstawie możemy zdefiniować pojęcie Pure Component w React. Pure Component możemy zdefiniować jako komponent, którego metoda render przy tych samych właściwościach i stanie wyświetla ten sam wynik. Przykładem takiego elementu może być komponent, który wyświetla listę elementów oraz pozwala dodawać nowe elementy:
                                </p>
                                </div>

```javascript
import { useState } from 'react';
import { List } from './Memoization/List';

const sampleItemsList = [
  {
    name: 'Apple',
  },
  {
    name: 'Bannana',
  },
  {
    name: 'Tomato',
  },
  {
    name: 'Orange',
  },
];

function App() {
  const [itemsList, setitemsList] = useState(sampleItemsList);
  const [itemName, setItemName] = useState('');

  console.log('Render App');

  const handleItemName = (event) => setItemName(event.target.value);

  const handleAddItem = () => {
    setitemsList(itemsList.concat({ name: itemName }));
    setItemName('');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <List itemsList={itemsList} />
        <input type='text' value={itemName} onChange={handleItemName}></input>
        <button onClick={handleAddItem}>Add item to list</button>
      </header>
    </div>
  );
}

const List = ({ itemsList }) => {
  console.log('Render list');

  if (itemsList.length > 0)
    return itemsList.map((item, index) => <Item key={index} item={item} />);

  return <div>There are no items on the list</div>;
};

const Item = ({ item }) => {
  console.log(`Render list item ${item.name}`);
  return (
    <div style={{ display: 'flex' }}>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.color}</div>
    </div>
  );
};
```
<div>
                                <p>Żeby prześledzić proces renderowania dodałem trzy consol logi. Teraz sprawdźmy zachowanie tego komponentu bez zapamiętywania oraz gdy zastosujemy zapamiętywanie. W pierwszym przypadku otrzymujemy następujący log:</p>
</div>

```javascript
Render App
Render list
Render list item Apple
Render list item Banana
Render list item Tomato
Render list item Orange
```
<div>
<p>Przy każdym wpisaniu w text input wartości dostajemy taki sam zestaw logów. Oznacza to, że wszystkie komponenty zostały ponownie wyrenderowane. W małych aplikacjach nie jest to problemem ponieważ nie wpływa na płynność działania aplikacji ale łatwo wyobrazić sobie aplikację w której mamy do czynienia z bardzo dużymi listami, których wyświetlanie zabiera dużo czasu i zasobów. W tym momencie przychodzi nam z pomocą komponent wyższego rzędu React.memo. Po wprowadzeniu React.memo nasz kod będzie wyglądał następująco:</p>
</div>

```javascript
{...}

function App() {...}

const List = React.memo(({ itemsList }) => {
  console.log('Render list');

  if (itemsList.length > 0)
    return itemsList.map((item, index) => <Item key={index} item={item} />);

  return <div>There are no items on the list</div>;
});

export const Item = React.memo(({ item }) => {
  console.log(`Render list item ${item.name}`);
  return (
      <div>{item.name}</div>
  );
});
```
<div>
<p>Komponenty List oraz Item opakowaliśmy w komponent wyższego rzędu React.memo. Sprawdźmy teraz zachowanie naszych komponentów podczas wpisywania nazwy nowego przedmiotu. Log, który otrzymujemy to:</p>
</div>

```javascript
Render App
```
<div>
<p>Wyeliminowaliśmy więc ponowne renderowanie trzech komponentów. W małych aplikacjach zapewne różnica w jej funkcjonowaniu byłby niezauważalna ale w przypadku aplikacji wyświetlającej bardzo długie listy zobaczyliśmy różnicę.</p>
<p>Odpowiednikiem React.memo dla komponentów klasowych jest React.PureComponent.</p>
<p>
                                     Przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://pl.reactjs.org/docs/react-api.html#reactpurecomponent"
                                        target="_blank"><b>Dokumentacja React'a - PureComponent</b></a></li>
                                        <li><a
                                        href="https://pl.reactjs.org/docs/react-api.html#reactmemo"
                                        target="_blank"><b>Dokumentacja React'a - memo</b></a></li>
                                        <li><a
                                        href="https://www.robinwieruch.de/react-memo"
                                        target="_blank"><b>R.Wieruch - How to use React memo</b></a></li>
                                    </ul>
                                </p>
</div>