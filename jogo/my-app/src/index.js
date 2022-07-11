import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';


class Square extends React.Component {
    render(){
        return(
            <button className="square" onclick={function(){
                console.log('click');
            }}>
                {this.props.value}
            </button>
        );
    }
}
class Board extends React.Component {
    renderSquares(i) {
        return <Square value={i}/>;
    }
}

