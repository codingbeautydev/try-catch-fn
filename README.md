# try-catch-fn

Functional try-catch implementation.

More info here: [This is how functional try-catch transforms your JavaScript code](https://www.codingbeautydev.com/blog/javascript-functional-try-catch).

## Usage

```js
import { tryCatch } from 'try-catch-fn';

const status = tryCatch({
  tryFn: () => {
    throw new Error('network error');
  },
  catchFn: (err) => 'error',
});

console.log(status); // error
```

Pass single function argument to simply "silence" any exception it throws.

```js
import { tryCatch } from 'try-catch-fn';

const status = tryCatch(() => {
  throw new Error('error');
});

console.log(status); // null
```
