import React from 'react';
const List = (props) => {

  const list = props.listItems.map((el, i)=>(
    <li key={i}><h2>{el.item}
    <span
	  style={
	    el.done
	    ? {textDecoration: 'line-through', fontSize: '20px'}
	    : {textDecoration: 'none', fontSize: '20px'}
	  }
	  onClick={props.onClick.bind(null, i)}
	/>

<button
  className="btn btn-danger pull-right"
  onClick={props.onClick.bind(null, i)}

  >
  x
</button></h2></li>
  ));

  return (
    <div>
      <ul>
        {
          list
        }
      </ul>
    </div>
  )
};

export default List;