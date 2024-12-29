class ChessGame:
    def __init__(self):
        self.board = self.create_board()
        self.current_turn = 'white'

    def create_board(self):
        board = [
            ["r", "n", "b", "q", "k", "b", "n", "r"],
            ["p", "p", "p", "p", "p", "p", "p", "p"],
            [" "] * 8,
            [" "] * 8,
            [" "] * 8,
            [" "] * 8,
            ["P", "P", "P", "P", "P", "P", "P", "P"],
            ["R", "N", "B", "Q", "K", "B", "N", "R"],
        ]
        return board
    
    def display_board(self):
        print("  a b c d e f g h")
        for i, row in enumerate(self.board):
            print(f"{8 - i} {' '.join(row)} {8 - i}")
        print("  a b c d e f g h")

    def parse_position(self, pos):
        x = 8 - int(pos[1])  # Row (1-8 to 7-0)
        y = ord(pos[0].lower()) - ord('a')  # Column (a-h to 0-7)
        return x, y

    def make_move(self, start, end):
        start_x, start_y = self.parse_position(start)
        end_x, end_y = self.parse_position(end)

        self.board[end_x][end_y] = self.board[start_x][start_y]
        self.board[start_x][start_y] = " "
        
if __name__ == "__main__":
    game = ChessGame()
    game.play()