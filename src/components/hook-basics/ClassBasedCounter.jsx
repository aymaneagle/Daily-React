import {Component} from "react";
// export default ClassBasedCounter;
class ClassBasedCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }
    incrementCount=() => {
        this.setState({count: this.state.count + 1})
    }
render() {
        return (
            <div className="border w-fit p-3 shadow-xl rounded-md flex flex-col
            justify-center items-center">

        <h1 className="text-xl font-bold">Class Based Component</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCount} className="border px-2 py-1">Increment</button>
        </div>
        )
}
}

export default ClassBasedCounter;

