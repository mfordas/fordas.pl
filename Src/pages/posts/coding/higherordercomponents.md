--- 
path: "/hoc"
date: "2021-05-09"
title: "React - Higher order components"
author: "mfordas"
tags: ["coding", "webdev", "javascript", "react"]
short: "Krótko o komponentach wyższego rzędu"
pic: "markus-spiske-3dw6ie9x3Q0-unsplash.jpg"
---

  <div>
                                <p>Po zadaniu przeze mnie pytania bardziej doświadczonym programistom, czego warto się uczyc z JS’a / Reacta temat tytułowy tego posta był wspominany zbyt wiele razy żeby go nie zgłębić i o nim nie napisać. Zabranie się za napisanie tego posta zajęło mi również zbyt wiele czasu ale niech będzie on przełamaniem prawie pięciomiesięcznej przerwy na blogu.
                                </p>
                                <p>Trzeba zacząć od tego czym są Higher order components (Komponenty wyższego rzędu). Definicja wg oficjalnej dokumentacji Reacta brzmi:
                                </p>
                                <p><b>Komponent wyższego rzędu jest funkcją, która przyjmuje jako argument inny komponent i zwraca nowy komponent.</b>
                                </p>
                                <p>W sumie nie ma zbytnio czego przekształcać na własne słowa bo definicja jest, krótka i prosta. Można do niej dodać jedynie, że komponenty wyższego rzędu służą do wielokrotnego używania logiki komponentu.
                                </p>
                                <p>Najlepiej przerobić to na przykładzie. Wyobraźmy sobie, że mamy komponent służący do wyświetlania danych pobranych z api. Wewnątrz mamy obsługę pobierania danych, wyświetlania stanu ładowania oraz komunikatu o błędzie. Poniżej przedstawiam przykładowy kod takiego komponentu:
                                </p>
                                </div>

```javascript
import React, {useState, useEffect} from 'react';

export const ShowPosts = () => {
    const [fetchedData, setFetchedData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
            const getDataFromApi = async () => {
                let posts = {};
                setIsLoading(true);

                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

                    if(!response.ok) throw new Error(response.statusText);

                    posts = await response.json();
                } catch (error) {
                    setErrorMessage(error.message);
                    setIsLoading(false);
                    setIsError(true);
                    return
                };

                setIsLoading(false);
                setFetchedData(posts);
            };

                getDataFromApi();
        },[]);

    const postContainer = (post) => (
        <div key={post.id} className='postContainer'>
            <div>{post.userId}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );

    if(isLoading) return <div>Loading</div>

    if(isError) return <div>{errorMessage}</div>

    return (
        <div>
        {Object.keys(fetchedData).length ? fetchedData.map(item => postContainer(item)) : <></>}
        </div>
    );
};
```
<div>
                                <p>Łatwo wyobrazić sobie, że podobnych komponentów w większej aplikacji będzie pełno. Każdy z nich powinien posiadać obsługę ładowania danych i błędów. Spróbujmy więc rozdzielić kod tego komponentu do kilku osobnych komponentów aby można było go używać wielokrotnie w różnych miejscach aplikacji.
                                </p>
                                <p>Rozdzielamy logikę odpowiedzialną za:</p>
                                <ol>
                                <li>Pobieranie danych</li>
                                <li>Pokazanie statusu ładowania</li>
                                <li>Wyświetlenie informacji o błędzie</li>
                                <li>Wyświetlanie danych pobranych z API</li>
                                </ol>
                                <p>W efekcie dostajemy cztery osobne komponenty wyglądające następująco:</p>
                                <p>1. Pobieranie danych</p>
</div>

```javascript
import React, {useState, useEffect} from 'react';

export const withFetchData = (Component, apiAddress) => {
    return function FetchData(props) {
        const [fetchedData, setFetchedData] = useState({});
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');
    
        useEffect(() => {
                const getDataFromApi = async () => {
                    let posts = {};
                    setIsLoading(true);
    
                    try {
                        const response = await fetch(apiAddress);
    
                        if(!response.ok) throw new Error(response.statusText);
    
                        posts = await response.json();
                    } catch (error) {
                        setErrorMessage(error.message);
                        setIsLoading(false);
                        setIsError(true);
                        return
                    };
    
                    setIsLoading(false);
                    setFetchedData(posts);
                };
    
                    getDataFromApi();
            },[]);

        return <Component {...props} data={fetchedData} isLoading={isLoading} isError={isError} errorMessage={errorMessage} />
    };
};
```
<div>
<p>2. Pokazanie statusu ładowania</p>
</div>

```javascript
export const withFetchLoading = Component => {
    return function FetchLoading(props) {
        const { isLoading } = props;

        if(isLoading) return <div>Loading</div>

        return <Component {...props} />
    };
};                                
```
<div>
<p>3. Wyświetlanie informacji o błędzie</p>
</div>

```javascript
export const withFetchError = Component => {
    return function FetchError(props) {
        const {isError, errorMessage} = props;

        if(isError) return <div>{errorMessage}</div>

        return <Component {...props} />
    };
};
```
<div>
<p>4. Wyświetlanie danych pobranych z API</p>
</div>

```javascript
export const ShowPosts = ({ data }) => {
    const postContainer = (post) => (
        <div key={post.id} className='postContainer'>
            <div>{post.userId}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );

    if (!Object.keys(data).length) return <></>;

    if (Object.keys(data).length) return data.map((item) => postContainer(item));
};
```
<div>
<p>Co się tutaj stało? Utworzyliśmy trzy komponenty wyższego rzędu: <b>withFetchData</b>,  <b>withFetchLoading</b> oraz <b>withFetchError</b>. Każdy z nich
jako argument przyjmuje komponent i zwraca inny komponent, wzbogacony o konkretną funkcję - pobieranie danych, warunkowe wyświetlenie statusu ładowania lub informacji o błędzie. Dodatkowo komponent withFetchData przyjmuje drugi argument w postaci adresu API, aby można było go wymienić na dowolny inny.</p>
<p>Następnie możemy złożyć komponent, który będzie posiadał wszystkie wymienione wyżej funkcje:</p>
</div>

```javascript
const ShowPostsWithFetchDataAndFetchErrorAndFetchLoading = 
    withFetchData(
        withFetchError(
            withFetchLoading(ShowPosts)), apiAddressPosts);
```
<div>
<p>Otrzymaliśmy komponent wyświetlający posty pobrane z API, obsługujący stan ładowania oraz komunikaty o błędach.</p>
<p>Zapis przedstawiony powyżej jest dość nieczytelny. Z pomocą przychodzi nam paczka o nazwie <b>recompose</b> i funkcja, którą możemy w niej znaleźć -
<b>compose</b>. Aby z niej skorzystać musimy lekko zmodyfikować nasz komponent wyższego rzędu <b>withFetchData</b>. Zmiana dotyczy sposobu dostarczania parametrów. Nowy kod komponentu przedstawiam poniżej:</p>
</div>

```javascript
import React, {useState, useEffect} from 'react';

export const withFetchData = apiAddress => Component => {
    return function FetchData(props) {
        const [fetchedData, setFetchedData] = useState({});
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');
    
        useEffect(() => {
                const getDataFromApi = async () => {
                    let posts = {};
                    setIsLoading(true);
    
                    try {
                        const response = await fetch(apiAddress);
    
                        if(!response.ok) throw new Error(response.statusText);
    
                        posts = await response.json();
                    } catch (error) {
                        setErrorMessage(error.message);
                        setIsLoading(false);
                        setIsError(true);
                        return
                    };
    
                    setIsLoading(false);
                    setFetchedData(posts);
                };
    
                    getDataFromApi();
            },[]);

        return <Component {...props} data={fetchedData} isLoading={isLoading} isError={isError} errorMessage={errorMessage} />
    };
};
```
<div>
<p>Teraz możemy użyć funkcji compose. Kompozycja komponentu będzie wyglądać w tym przypadku tak:</p>
</div>

```javascript
const ShowPostsWithFetchDataAndFetchErrorAndFetchLoading = compose(
  withFetchData(apiAddressPosts), 
  withFetchLoading, 
  withFetchError)
  (ShowPosts);
```
<div>
<p>Zapis jest na pewno bardziej czytelny ale to już Wasz wybór, którego sposobu użyjecie.</p>
</div>
<p>Dzięki rozdzieleniu funkcjonalności, możemy użyć utworzonych komponentów wyższego rzędu w różnych częściach aplikacji. Jeśli podmienimy adres endpoint'a w komponencie withFetchData to uzyskamy inne dane, które możemy wyświetlić za pomocą nowego komponentu, którym zastąpimy komponent ShowPosts.</p>
<p>To by było na tyle na temat komponentów wyższego rzędu. Mam nadzieję, że jeśli ktoś nie miał z nimi w ogóle do czynienia to po przeczytaniu tego tekstu chociaż trochę się z nimi zapoznał.</p>
<p>
                                     Przydatne źródła:
                                    <ul>
                                        <li><a
                                        href="https://pl.reactjs.org/docs/higher-order-components.html"
                                        target="_blank"><b>Dokumentacja React'a - Komponenty wyższego rzędu</b></a></li>
                                        <li><a
                                        href="https://www.youtube.com/watch?v=SaZJnxIxEUU"
                                        target="_blank"><b>Higher Order Components - Wzorce w React #4</b></a></li>
                                    </ul>
                                </p>
</div>