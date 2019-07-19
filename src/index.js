import React from 'react';
import ReactDOM from 'react-dom';

class AnimationText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }
    plus() {
        this.setState((prevState) => ({ num: ++prevState.num }));
    }
    minus() {
        this.setState((prevState) => ({ num: --prevState.num }));
    }
    render() {
        return (
            <> 
            <button type='button' onClick={this.minus}>-</button>
            <b> {this.state.num} </b>
            <button type='button' onClick={this.plus}>+</button>
            </>
        )
    }
};

ReactDOM.render(<AnimationText />,
    document.getElementById('div1'))