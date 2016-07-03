var ssolve = function () {

    // from time import time
    // import random

    let sortFunc = function(a, b) { return b-a }

    // returns a range as a list
    function range(start, stop, step) {
      let result = []
      if (step === undefined) {
        step = 1
      }
      if (stop === undefined) {
        stop = start
        start = 0
      }
      if (step > 0) {
        for (let ix = start; ix < stop; ix += step) {
          result.push(ix)
        }
      } else {
        for (let ix = start; ix > stop; ix += step) {
          result.push(ix)
        }
      }

      return result
    }

    let xrange = range

    function shuffle(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    let test_cases = [
        ['already solved',
           "974236158638591742125487936316754289742918563589362417867125394253649871491873625",
           "974236158638591742125487936316754289742918563589362417867125394253649871491873625",
           true
        ],
        ['one unknown',
           "2564891733746159829817234565932748617128.6549468591327635147298127958634849362715",
         "256489173374615982981723456593274861712836549468591327635147298127958634849362715",
         true
        ],
        ['naked singles',
           "3.542.81.4879.15.6.29.5637485.793.416132.8957.74.6528.2413.9.655.867.192.965124.8",
           "365427819487931526129856374852793641613248957974165283241389765538674192796512438",
           true
        ],
        ['hidden singles',
           "..2.3...8.....8....31.2.....6..5.27..1.....5.2.4.6..31....8.6.5.......13..531.4..",
           "672435198549178362831629547368951274917243856254867931193784625486592713725316489",
           true
        ],
        ['too few numbers',
           "..9.7...5..21..9..1...28....7...5..1..851.....5....3.......3..68........21.....87",
           "",
           false
        ]
    ]

    function updateRow(possb, pos, val){
        let rr = parseInt(pos/9)
        for (let ov=rr*9; ov < (rr + 1)*9; ov++){
            if (possb[ov][val]){
                if (keys(possb[ov]).length === 1){
                    return false
                }
                delete possb[ov][val]
            }
        }
    }

    function updateCol(possb, pos, val) {
        let cc = pos%9
        for (let ov=cc; ov < 81; ov = ov+9){
            if (possb[ov][val]) {
                if (keys(possb[ov]).length === 1) {
                    return false
                }
                delete possb[ov][val]
            }
        }
    }

    function updateCell(possb, pos, val) {
        let sc = parseInt(pos/27)*27 + parseInt((pos%9)/3)*3
        for (let addv of [0, 1, 2, 9, 10, 11, 18, 19, 20]) {
            let scv = sc + addv
            if (possb[scv][val]) {
                if (keys(possb[scv]).length === 1) {
                    return false
                }
                delete possb[scv][val]
            }
        }
    }

    function updateAll(possb, pos, val) {
        if (updateRow(possb, pos, val) === false) {
            return false
        }
        if (updateCol(possb, pos, val) === false) {
          return false
        }
        if (updateCell(possb, pos, val) === false) {
          return false
        }

        return true
    }


    function initPossibilities(possb, ins) {
        for (let rr of xrange(9)) {
            for (let cc of xrange(9)) {
                let pos = rr*9 + cc
                let val = ins[pos]
                if (val !== 0) {
                    # update row, col and cell
                    possb[pos] = {}

                    # update all
                    if (updateAll(possb, pos, val) === false) {
                        console.log("Failed in initializing possibilities")
                        return false
                    }
                }
            }
        }
        return possb
    }

    function solveSudoku(possb, ss, undoMovesPS, undoMovesSS) {
        let changed = True
        let val
        while (changed) {
            changed = False
            for (pos of xrange(81)) {
                if (keys(possb[pos]).length === 1) {
                    changed = True
                    val = possb[pos].pop()
                    undoMovesSS.push([pos, val])
                    ss[pos] = val
                    if (updateAll(possb, pos, val) === false) {
                        return false
                    }
                }
            }
        }

        let guessPos = null
        for (pos of xrange(81)) {
            if (keys(possb[pos]).length > 1) {
                guessPos = pos
                break
            }
        }

        if (guessPos === null) {
            return ss
        }

        guessValues = keys(possb[guessPos])
        shuffle(guessValues)
        for (guess of guessValues) {
            undoMovesPS.push([guessPos, possb[guessPos]])
            possb[guessPos] = {}
            undoMovesSS.push([guessPos, guess])
            ss[guessPos] = guess
            if (updateAll(possb, guessPos, guess) === false) {
                return False
            }
            retVal = solveSudoku(possb, ss, undoMovesPS, undoMovesSS)
            if (retVal !== false) {
                return retVal
            }
            let [pos, val] = undoMovesSS.pop()
            ss[pos] = val
            [pos, val] = undoMovesPS.pop()
            possb[pos] = val
        }

        return false


    function getCell(sdk, cell) {
        let cs = parseInt(cell/3)*27 + (cell%3)*3
        let rv = []
        for (let ix of [0,1,2,9,10,11,18,19,20]) {
          rv.push(sdk[cs + ix])
        }

        return rv

    function listsEq(al, bl) {
      if (al.length !== bl.length) {
        return false
      }

      for (let ix=0; ix < al.length; ix++) {
        if (al[ix] !== bl[ix]) {
          return false
        }
      }
      return true
    }

    function checkSolution(outs) {
        # every row
        let set9 = range(1,10)
        for (let rr of range(9)) {
            let rowd = []
            for (let cc of range(9)) {
                rowd.push(outs[rr*9 + cc])
            }
            if (listEq(set9, rowd) === false) {
                console.log('Error in row ', rr)
            }
        }

        for (let cc of range(9)) {
            let cold = []
            for (let rr of range(9)) {
                cold.push(outs[rr*9 + cc])
            }
            cold.sort(function(a, b){return b-a})
            if (listEq(set9, coldd) === false) {
                console.log('Error in column ', cc)
            }
        }

        for cc in xrange(9):
            assert set9 == set([outs[x*9 + cc] for x in xrange(9)])

        for cell in xrange(9):
            assert set9 == set(getCell(outs, cell))

        return "Solution checks out..."

    }


    def formatSudoku(outs):
        data = [str(x) for x in outs]
        data = [' '.join(data[x*3:(x+1)*3]) for x in range(27)]
        data = ['   '.join(data[x*3:(x+1)*3]) for x in range(9)]
        data = ['\n'.join(data[x*3:(x+1)*3]) for x in range(3)]
        data = '\n\n'.join(data)
        return '\n' + data + '\n'


    def stringToList(inp):
        inp = inp.replace('.', '0')
        return [int(x) for x in inp]

    def listToString(inp):
        return "".join(str(x) for x in inp)

    def runTests():
        for name, inp, outp, valid in test_cases:
            if True:
                sudokuInput = stringToList(inp)
                possibilities = [set(range(1,10)) for x in xrange(9) for y in xrange(9)]
                possb = initPossibilities(possibilities, sudokuInput)
                if possb is False:
                    print "No possibilities found"
                    continue

                st = time()
                result = solveSudoku(possb, sudokuInput)
                et = time()

                if result is False:
                    print "\nFailed to find solution"
                    if valid is True:
                        raise "Unexpected failure"
                    else:
                        print "But it is an expected failue... rejoice"

                    continue
                else:
                    print formatSudoku(result)
                    print checkSolution(result)
                    print "Took %s seconds"%str(et-st)

                if listToString(result) == outp:
                    print "Test \"%s\" passed." % name
                else:
                    print "Test \"%s\" failed." % name


    runTests()

    return {
      solveSudoku: solveSudoku
    }
}()
