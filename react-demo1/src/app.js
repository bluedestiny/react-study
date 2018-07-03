import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import {add} from './components/math'
class App extends React.Component {
  render(){ // Every react component has a render method.
    return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      
        <ToDoApp />
      
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
console.log(add(12,12));
