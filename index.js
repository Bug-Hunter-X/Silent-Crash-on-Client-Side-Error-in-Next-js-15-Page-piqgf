```javascript
// pages/about.js
import ErrorComponent from './_error';

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Something went wrong!');
  } catch (error) {
    return <ErrorComponent error={error}/>;
  }
}
```
```javascript
// pages/_error.js

export default function ErrorComponent({ error }) {
  return (
    <div>
      <h1>An error occurred</h1>
      <p>{error.message}</p>
    </div>
  );
}
```