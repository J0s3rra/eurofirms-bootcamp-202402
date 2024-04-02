class App extends React.Component {
    constructor() {
        super()

        const board = new Array(3)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill(0)

        this.state = {
            board,
            turn: 0
        }
    }

    getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }

    play(row, column) {
        console.log('click')
        const prevBoard = this.state.board

        const board = []
        for (let i = 0; i < prevBoard.length; i++)
            board[i] = new Array(prevBoard[0].length).fill(0)

        for (const i in prevBoard)
            for (const j in prevBoard[i])
                board[i][j] = prevBoard[i][j]

        const turn = this.state.turn

        if (turn % 2 === 0)
            board[row][column] = 1
        else
            board[row][column] = 2

        this.setState({ board, turn: turn + 1 })
    }

    render() {
        const board = this.state.board

        return <>
            <header>Tic Tac Toe</header>
            <main>
                <section className="board" style={{
                    gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                    gridTemplateRows: `repeat(${board.length}, 1fr)`
                }}>
                    {board.map((row, i) => row.map((column, j) => <div className="cell" onClick={() => this.play(i, j)}>{this.getCellChar(board[i][j])}</div>)).flat(Infinity)}
                </section>
            </main>
            <footer></footer>
        </>
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)