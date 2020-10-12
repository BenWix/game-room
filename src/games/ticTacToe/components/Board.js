import React, { Component }  from 'react'
import Square from './Square'

import '../TicTacToe.css'


class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }



    renderSquare(i) {
        return <Square 
                    value={this.props.squares[i]}
                    onClick={() => this.props.onClick(i)}
                />
    }

    render() {

        return (
            <React.Fragment>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </React.Fragment>
        );
    }
}


  
export default Board;