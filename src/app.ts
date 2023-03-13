/*
Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
Пример:
``` js
[
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];
```

При группировке по 'group' ---->

``` js
{
	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
	'2': [ { group: 2, name: 'c' } ]
}
```
*/

interface Data {
  group: number;
  name: string;
}

const data: Data[] = [
  { group: 1, name: "a" },
  { group: 1, name: "b" },
  { group: 2, name: "c" },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T) {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[itemKey] = curEl;
    return map;
  }, {});
}
console.log(group<Data>(data, "group"));
// function group<T, K extends keyof T>(data: T[], key: K) {
//   return data
//     .reduce(
//       (acc: [], cur: T) =>
//         acc.includes(cur[key]) ? acc : acc.push(cur[key]) && acc,
//       []
//     )
//     .map((i) => ({ [i]: data.filter((obj) => obj[key] === i) }));
// }

// console.log(groupData(data, "group"));
