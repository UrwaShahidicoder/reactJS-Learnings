import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function Myapp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   childern: 'click me to visit google'
// }
const anotherElement  = (
<a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    reactElement
);


