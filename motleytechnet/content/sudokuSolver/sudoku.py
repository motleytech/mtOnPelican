# solve a sudoku

# read in a sudoku - format to be determined
squares = []
possibilities = []

# for each square, find possibilities
for sqnum in range(81):
    possbs = find_possibilities(squares, sqnum)
    possibilities[sqnum] = possbs

for sqnum in range(81):
    possb = possibilities[sqnum]
    if len(possb) == 1:
        possibilities[sqnum] = []
        num = possb[0]
        squares[sqnum] = num


# read in the sudoku puzzle
# find possibilities for each square
# loop thouugh each unfilled square and check the possibilities
    # if num possbs == 1, fill the square
        # update the possibilities of the row, column and nsq
# if no square was fillable, take the first unfilled square and take a guess
    # try to fill the other squares based on this guess (probably making more guesses)
    # if its not possible to complete the sudoku using this guess, take a next guess
    # if we fail with all guesses, return false, signifying that the sudoku cannot be solved with the given state
# loop through possibilities again
