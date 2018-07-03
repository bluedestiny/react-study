import React from 'react';
import List from '../components/List';
import Input from '../components/Input';
class ToDoApp extends React.Component {
  componentWillMount = () => { // run before the render method
    this.setState({ // add an array of strings to state.
      list: [{item:'thing1',done:true}, {item:'thing2',done:true},{item: 'thing3',done:true}],
      newTodo:"test"
    });
  };
  onInputChange = (event) => {
  	this.setState({ newTodo: event.target.value}); // updates state to new value when user changes the input value
};
 onInputSubmit = (event) => {
  event.preventDefault();
  this.setState((previousState)=>({
    list: [...previousState.list, {item: previousState.newTodo, done: true }], // notice the change here
    newToDo: ''
  }));
};


onListItemClick = (i) => { // takes the index of the element to be updated
  this.setState((previousState)=>({
    list: [
      ...previousState.list.slice(0, i), // slice returns a new array without modifying the existing array. Takes everything up to, but not including, the index passed in.
      Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}), // Object.assign is a new ES6 feature that creates a new object based on the first param (in this case an empty object). Other objects can be passed in and will be added to the first object without being modified.
      ...previousState.list.slice(i+1) // takes everything after the index passed in and adds it to the array.
    ]
  }))
};
deleteListItem = (i) => {
  this.setState((previousState)=>({ // using previous state again
    list: [
      ...previousState.list.slice(0, i), // again with the slice method
      
      ...previousState.list.slice(i+1) // the only diffence here is we're leaving out the clicked element
    ]
  }))
};

  render() {
    return (
      <div className="row">
	  <div className="col-md-10 col-md-offset-1">
	    <div className="panel panel-default">
	      <div className="panel-body">
	        <h1>My To Do App</h1>
	        <hr/>
	        <Input onChange={this.onInputChange} onClick={this.onInputSubmit}/>
	        <List listItems={this.state.list} onClick={this.deleteListItem} />
	      </div>
	    </div>
	  </div>
	</div>
    );
  }
}
export default ToDoApp;