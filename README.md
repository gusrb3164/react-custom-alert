# react-custom-alert

- Easy to set up and call alert function like calling a hook.
- light weight. (gzipped : 1.3KB)
- customize alert component.

![React toastify](./sample-video.gif 'React toastify')

## Installation

```sh
$ npm install --save react-custom-alert
$ yarn add react-custom-alert
```

## Example

```js
import React from 'react';
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert/index.css'; // import css file from root.

function RootComponent() {
  return (
    <>
      <App />
      {/* Add ToastContainer from your root component. */}
      {/* If no floatingTime, the default is 3000ms. */}
      <ToastContainer floatingTime={5000} />
    </>
  );
}

function App() {
  // alert type : info | success | warning | error
  const alertInfo = () => alert({ message: 'info', type: 'info' });
  const alertSuccess = () => alert({ message: 'success', type: 'success' });
  const alertWarning = () => alert({ message: 'warning', type: 'warning' });
  const alertError = () => alert({ message: 'error', type: 'error' });

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
