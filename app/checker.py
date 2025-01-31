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
                        board[row][col] = 'O'
                    elif row > 4:
                        board[row][col] = 'X'
        return board

    def print_board(self):
        print("  0 1 2 3 4 5 6 7")
        print(" ----------------")
        for i, row in enumerate(self.board):
            print(f"{i}|{' '.join(row)}|{i}")
        print(" ----------------")
        print("  0 1 2 3 4 5 6 7")

    def is_valid_move(self, start, end):
        sx, sy = start
        ex, ey = end
        if not (0 <= sx < 8 and 0 <= sy < 8 and 0 <= ex < 8 and 0 <= ey < 8):
            return False
        if self.board[sx][sy] != self.current_player:
            return False
        if self.board[ex][ey] != ' ':
            return False
        if abs(ex - sx) == 1 and abs(ey - sy) == 1:
            return True
        if abs(ex - sx) == 2 and abs(ey - sy) == 2:
            mx, my = (sx + ex) // 2, (sy + ey) // 2
            if self.board[mx][my] not in (' ', self.current_player):
                return True
        return False
