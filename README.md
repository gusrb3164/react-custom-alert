# react-custom-alert

- Easy to set up and call alert function like calling a hook.
- light weight. (gzipped : 1.3KB)
- customize alert component.
- support to next.js(server-side-rendering).

![toast-image](https://user-images.githubusercontent.com/34272561/193571396-3a6e40a9-5196-41a7-86bc-e64afa07cbff.png)

![toast-sample](https://user-images.githubusercontent.com/34272561/193572301-14c26f08-f008-44ed-ae26-99fe18bcf91c.gif)

## Installation

### npm

```sh
$ npm install react-custom-alert
```

### yarn

```sh
$ yarn add react-custom-alert
```

## Example

```js
import React from 'react';
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css'; // import css file from root.

function RootComponent() {
  return (
    <>
      <App />
      {/* Add ToastContainer from your root component. */}
      {/* If you use next.js, add it to app.js */}
      {/* If no floatingTime, the default is 3000ms. */}
      <ToastContainer floatingTime={5000} />
    </>
  );
}

function App() {
  // toast methods : info | success | warning | error
  const alertInfo = () => toast.info('info');
  const alertSuccess = () => toast.success('success');
  const alertWarning = () => toast.warning('warning');
  const alertError = () => toast.error('error');

  return (
    <div>
      <button onClick={alertInfo}>Info</button>
      <button onClick={alertSuccess}>Success</button>
      <button onClick={alertWarning}>Warning</button>
      <button onClick={alertError}>Error</button>
    </div>
  );
}
```

## Guide

### ToastContainer

| Prop name      | Description                                  | type                             | default value |
|----------------|----------------------------------------------|----------------------------------|---------------|
| containerStyle | Upper element style that contains toast list | undefined \| React.CSSProperties | undefined     |
| floatingTime   | Time to expose default toast(ms)            | undefined \| number              | 3000     |
| toastStyle     | Default toast style to override             | undefined \| React.CSSProperties | undefined     |

### toast

Toast has four methods(info, success, warning, error).

Each method has the same type as the table below.

```ts
type ToastMethods = (message: string, options?: ToastOptions) => void;
```

| Toast options | Description                        | type                             | default value |
|---------------|------------------------------------|----------------------------------|---------------|
| floatingTime  | Time to expose specific toast(ms)  | undefined \| number              | undefined     |
| toastStyle    | Specific toast style to override   | undefined \| React.CSSProperties | undefined     |
