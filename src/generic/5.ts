/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair {
//   key;
//   value;
// }

// export {};

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = { key: 'age', value: 25 };


const pair2: KeyValuePair<number, boolean> = { key: 10, value: true };

// function printKeyValue<K, V>(pair: KeyValuePair<K, V>) {
//   console.log(`Key: ${pair.key}, Value: ${pair.value}`);
// }

// printKeyValue(pair1); 
// printKeyValue(pair2);
