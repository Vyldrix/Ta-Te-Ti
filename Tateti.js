class TaTeTi {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameMode = '';
        this.gameOver = false;
        this.scores = { X: 0, O: 0 };
        this.isPlayerTurn = true;
    }

    startGame(mode) {
        this.gameMode = mode;
        this.resetBoard();
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.game-container').style.display = 'block';
        
        const difficultyTexts = {
            'easy': '🟢 Modo Fácil - IA Básica',
            'medium': '🟡 Modo Intermedio - IA Inteligente', 
            'hard': '🔴 Modo Difícil - IA Experta',
            'human': '👥 Dos Jugadores'
        };
        document.getElementById('difficultyIndicator').textContent = difficultyTexts[mode];
        
        this.createBoard();
        this.updateDisplay();
    }

    createBoard() {
        const boardElement = document.getElementById('gameBoard');
        boardElement.innerHTML = '';
        
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('button');
            cell.className = 'cell';
            cell.onclick = () => this.makeMove(i);
            boardElement.appendChild(cell);
        }
    }

    makeMove(index) {
        if (this.board[index] !== '' || this.gameOver || !this.isPlayerTurn) return;

        this.board[index] = this.currentPlayer;
        this.updateBoard();
        
        if (this.checkWin()) {
            this.handleGameEnd(`¡Jugador ${this.currentPlayer} gana!`);
            this.scores[this.currentPlayer]++;
            return;
        }
        
        if (this.board.every(cell => cell !== '')) {
            this.handleGameEnd('¡Empate!');
            return;
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateDisplay();

        // Si es modo IA y ahora es turno de O
        if (this.gameMode !== 'human' && this.currentPlayer === 'O') {
            this.isPlayerTurn = false;
            setTimeout(() => this.makeAIMove(), 500);
        }
    }

    makeAIMove() {
        let move;
        
        switch (this.gameMode) {
            case 'easy':
                move = this.getRandomMove();
                break;
            case 'medium':
                move = this.getMediumMove();
                break;
            case 'hard':
                move = this.getBestMove();
                break;
        }

        if (move !== -1) {
            this.board[move] = 'O';
            this.updateBoard();
            
            if (this.checkWin()) {
                this.handleGameEnd('¡La IA gana!');
                this.scores['O']++;
                return;
            }
            
            if (this.board.every(cell => cell !== '')) {
                this.handleGameEnd('¡Empate!');
                return;
            }

            this.currentPlayer = 'X';
            this.isPlayerTurn = true;
            this.updateDisplay();
        }
    }

    getRandomMove() {
        const availableMoves = this.board.map((cell, index) => cell === '' ? index : null)
                                        .filter(val => val !== null);
        return availableMoves.length > 0 ? 
               availableMoves[Math.floor(Math.random() * availableMoves.length)] : -1;
    }

    getMediumMove() {
        // Intentar ganar
        for (let i = 0; i < 9; i++) {
            if (this.board[i] === '') {
                this.board[i] = 'O';
                if (this.checkWin()) {
                    this.board[i] = '';
                    return i;
                }
                this.board[i] = '';
            }
        }

        // Bloquear al jugador
        for (let i = 0; i < 9; i++) {
            if (this.board[i] === '') {
                this.board[i] = 'X';
                if (this.checkWin()) {
                    this.board[i] = '';
                    return i;
                }
                this.board[i] = '';
            }
        }

        // Movimiento aleatorio
        return this.getRandomMove();
    }

    getBestMove() {
        let bestScore = -Infinity;
        let bestMove = -1;

        for (let i = 0; i < 9; i++) {
            if (this.board[i] === '') {
                this.board[i] = 'O';
                let score = this.minimax(this.board, 0, false);
                this.board[i] = '';
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }

        return bestMove;
    }

    minimax(board, depth, isMaximizing) {
        let winner = this.checkWinForMinimax();
        
        if (winner === 'O') return 1;
        if (winner === 'X') return -1;
        if (board.every(cell => cell !== '')) return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = 'O';
                    let score = this.minimax(board, depth + 1, false);
                    board[i] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = 'X';
                    let score = this.minimax(board, depth + 1, true);
                    board[i] = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }

    checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
            [0, 4, 8], [2, 4, 6] // diagonales
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.highlightWinningCells(pattern);
                return true;
            }
        }
        return false;
    }

    checkWinForMinimax() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return this.board[a];
            }
        }
        return null;
    }

    highlightWinningCells(pattern) {
        const cells = document.querySelectorAll('.cell');
        pattern.forEach(index => {
            cells[index].classList.add('winning-cell');
        });
    }

    handleGameEnd(message) {
        this.gameOver = true;
        document.getElementById('gameStatus').textContent = message;
        document.getElementById('gameStatus').classList.add('winner');
        setTimeout(() => {
            document.getElementById('gameStatus').classList.remove('winner');
        }, 600);
        this.updateDisplay();
    }

    updateBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            cell.textContent = this.board[index];
            cell.className = 'cell';
            if (this.board[index]) {
                cell.classList.add('taken', this.board[index].toLowerCase());
            }
        });
    }

    updateDisplay() {
        document.getElementById('currentPlayer').textContent = 
            this.gameOver ? '' : `Turno: ${this.currentPlayer}`;
        document.getElementById('scoreDisplay').textContent = 
            `X: ${this.scores.X} | O: ${this.scores.O}`;
    }

    resetBoard() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.isPlayerTurn = true;
        document.getElementById('gameStatus').textContent = '¡Haz tu jugada!';
    }

    resetGame() {
        this.resetBoard();
        this.updateBoard();
        this.updateDisplay();
    }

    backToMenu() {
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.game-container').style.display = 'none';
        this.scores = { X: 0, O: 0 };
    }
}

const game = new TaTeTi();

function startGame(mode) {
    game.startGame(mode);
}

function resetGame() {
    game.resetGame();
}

function backToMenu() {
    game.backToMenu();
}