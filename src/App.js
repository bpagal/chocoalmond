import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { almonds: 0 };
    }
    render() {
        return (
            <div>
                <h1>Choco Almonds: {this.state.almonds}</h1>
                {Array(this.state.almonds).fill(<img src="https://img.icons8.com/dusk/64/000000/chocolate-truffle-.png" />)}
                <a
                    href="#"
                    className="btn btn-indigo"
                    onClick={() => {
                        this.setState((state) => ({
                            almonds: state.almonds + 1,
                        }));
                    }}
                >
                    Add
                </a>

                <a style={{ display: "block" }} href="https://icons8.com/icon/97275/chocolate-truffle">
                    Chocolate Truffle icon by Icons8
                </a>
            </div>
        );
    }
}

export default App;
