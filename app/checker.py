import sys

class Checkers:
    def __init__(self):
        self.board = self.initialize_board()
        self.current_player = 'X'  # Player 'X' starts

    def initialize_board(self):
        board = [[' ' for _ in range(8)] for _ in range(8)]
        for row in range(8):
            for col in range(8):
                if (row + col) % 2 == 1:
                    if row < 3:
                        board[row][col] = 'O'  # Player O's pieces
                    elif row > 4:
                        board[row][col] = 'X'  # Player X's pieces
        return board
