class ChessGame:
    def __init__(self):
        self.board = self.create_board()
        self.current_turn = 'white'


if __name__ == "__main__":
    game = ChessGame()
    game.play()