# Let's play! You have to return which player won! In case of a draw return Draw!.

# "scissors", "paper" --> "Player 1 won!"
# "scissors", "rock" --> "Player 2 won!"
# "paper", "paper" --> "Draw!"
import unittest

def rps(p1: str, p2: str):
    rules = {'paper': 'rock', 'rock': 'scissors', 'scissors': 'paper'}

    if p1 == '' or p2 == '':
        return 'An input is required for both players'

    inputP1 = p1.lower()
    inputP2 = p2.lower()

    if inputP1 not in rules.values() or inputP2 not in rules.values():
        return 'Please provide a valid value: Paper, Rock, Scissors'

    if inputP1 == inputP2:
        return "Draw!"

    if rules[inputP1] == inputP2:
        return 'Player 1 wins!'

    if rules[inputP2] == inputP1:
        return 'Player 2 wins!'

print(rps('paper', 'paper'))
print(rps('scissors', 'paper'))
print(rps('rock', 'paper'))
print(rps('', 'rock'))
print(rps('bing', 'rock'))
print(rps('Rock', 'PapER'))


class TestRPS(unittest.TestCase):
    def runTest(self):
        self.assertEqual(rps('paper', 'paper'), 'Draw!', 'We expected Draw!')
        self.assertEqual(rps('paper', 'rock'), 'Player 1 wins!', 'We expected Player 1 wins!')
        self.assertEqual(rps('', 'rock'), 'An input is required for both players', 'We expected an input to be provided by both players')


unittest.main()
