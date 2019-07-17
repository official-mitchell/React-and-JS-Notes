

function Person() {
    return (
        <div className="person">
        <h1>Name</h1>
        <p>Age</p>
        </div>
    );
}


#######
becomes through taking use of the render 

// <div id="p1"></div>
// <div id="p2"></div>

function Person() {
    return (
        <div className="person">
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
        </div>
    );
}



ReactDOM.render(<Person name="Max" age="28" />, document.querySelector('#p1'));
ReactDOM.render(<Person name="Max" age="28" />, document.querySelector('#p2'));



######
becomes

// <div id="app></div>

function Person() {
    return (
        <div className="person">
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
        </div>
    );
}

var app = (
  <div>
    <Person name="Max" age="28" />
    <Person name="manu" age="29" />
  </div>  
);

ReactDOM.render(<app, document.querySelector('#app'));