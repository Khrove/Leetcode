# Let's play! You have to return which player won! In case of a draw return Draw!.

# "scissors", "paper" --> "Player 1 won!"
# "scissors", "rock" --> "Player 2 won!"
# "paper", "paper" --> "Draw!"

def rps(p1: str, p2: str):
    rules = {'paper': 'rock', 'rock': 'scissors', 'scissors': 'paper'}

    if p1 == p2:
        return "Draw!"

    if rules[p1] == p2:
        return 'Player 1 wins!'

    if rules[p2] == p1:
        return 'Player 2 wins!'

print(rps('paper', 'paper'))
print(rps('scissors', 'paper'))
print(rps('rock', 'paper'))

