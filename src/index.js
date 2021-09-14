import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const person = ['One', 'Two', 'three'];
const list = person.map(person => <h3>{person}</h3>);

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      // add at least 5 people contact info (name, phone, email and a delete
      button)
      <div>
        <h3>{list}</h3>
        <h4>details:</h4>
        <button>delete</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
