Title: Magic Squares
Date: 2015-09-02 16:25
Category: Blog
Tags: Magic Square, Computing, Mathematics
Authors: Motleytech
Disqus_Identifier: magic_squares

A conventional [magic square](http://en.wikipedia.org/wiki/Magic_square) of order n is a square filled with the numbers 1 through n\*n such that the sum of the rows, columns and diagonals is the same. Each number in the square must be distinct, and thus every number is used exactly once.

Surprisingly, it is very easy to create magic squares when n is odd. Magic squares of even n also exist, but creating them is comparatively more difficult.

What follows is a program to create odd magic squares of any (reasonable) size. Give it a try... enter an odd number (3 to 49) and the program should reply with a magic square. The sum of each row, column and both diagonals will be the same.

<script src="/js/magicSquare.js"></script>

<input id="sqsize" type="text" class="form-control" value="3">
<button id="btngenerate" onclick="magicSquare.onGenerate()" class="btn btn-info" type="button">Generate!</button>
<span id="errorspan" class="label label-danger"></span>

<hr />

<div id="magicsquare"></div>

<script>
  window.onload = function () { magicSquare.generateSquare('#magicsquare', 3) }
</script>
<noscript style="color:red">
  You must have javascript enabled in order to use this application.
</noscript>
