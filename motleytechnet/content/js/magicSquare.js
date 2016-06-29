var magicSquare = function () {

  // called on clicking generate button
  function onGenerate() {
    let inp = $("#sqsize").val()
    let res = parseInt(inp)
    if ((!res) || (res === undefined) || (res <= 2) || (res % 2 === 0) || (res >= 50)) {
      let msg = "Invalid input: '" + inp + "'."
      $("#errorspan").text(msg + " Valid: Odd number [3:49]")
      $("#sqsize").val("")
      return
    }
    $("#errorspan").text("")
    generateSquare("#magicsquare", res)
  }

  // generates the 2d array of magic square numbers
  function generateNumbers(size) {
    let nums = []

    // init with empty values
    for (let ix = 0; ix < size; ix++) {
      snums = []
      for (let iy = 0; iy < size; iy++) {
        snums.push(null)
      }
      nums.push(snums)
    }

    let cr = 0
    let cc = (size - 1) / 2
    let count = 0
    while (count < size * size) {
      count += 1
      nums[cr][cc] = count
      cr = cr - 1
      cc = cc + 1
      if ((cr < 0) && (cc == size)) {
        cr = 1
        cc = size - 1
      } else if (cr < 0) {
        cr = size - 1
      } else if (cc == size) {
        cc = 0
      }

      if (nums[cr][cc] !== null) {
        cr = cr + 2
        cc = cc - 1
      }
    }

    return nums
  }

  // verifies that the sum of rows, cols and diags are the expected value
  function verifyNumbers(nums, size) {
    let esum = size * (size * size + 1) / 2
    let verified = true

    // check the sums
    for (let ir = 0; ir < size; ir++) {
      let rsum = 0
      let csum = 0
      let d1sum = 0
      let d2sum = 0
      for (let ic = 0; ic < size; ic++) {
        rsum += nums[ir][ic]
        csum += nums[ic][ir]
        d1sum += nums[ic][ic]
      }
      if (rsum !== esum) {
        console.error(`Sum for row $(ir) ($(rsum)) does not match expected value ($(esum)).`)
        verified = false
      }
      if (csum !== esum) {
        console.error(`Sum for column $(ir) ($(csum)) does not match expected value ($(esum)).`)
        verified = false
      }
    }

    let d1sum = 0
    let d2sum = 0
    for (let ir = 0; ir < size; ir++) {
      d1sum += nums[ir][ir]
      d2sum += nums[size-ir-1][ir]
    }
    if (d1sum !== esum) {
      console.error(`Sum for first diagonal ($(d1sum)) does not match expected value ($(esum)).`)
      verified = false
    }
    if (d2sum !== esum) {
      console.error(`Sum for second diagonal ($(d2sum)) does not match expected value ($(esum)).`)
      verified = false
    }

    return verified
  }

  // creates the table from the 2d array of magic numbers
  function generateTable(nums, size) {
    let htmlStr = "<table>"

    for (let cr = 0; cr < size; cr++) {
      htmlStr += "<tr>"
      for (let cc = 0; cc < size; cc++) {
        htmlStr += "<td>"
        htmlStr += nums[cr][cc]
        htmlStr += "</td>"
      }
      htmlStr += "</tr>"
    }

    htmlStr += "</table>"
    return htmlStr
  }

  // the main function which generates numbers and creates table which
  // represents the magic square
  function generateSquare(divid, size) {

    let numbers = generateNumbers(size)
    let verified = verifyNumbers(numbers, size)
    if (!verified) {
      alert('The magic square failed verification. Check logs.')
    }
    let table = generateTable(numbers, size)
    let sum = size * (size * size + 1) / 2

    $(divid).empty()
    $(divid).append('<p>Common sum is ' + sum + '</p>')
    $(divid).append(table)
  }

  return {
      generateSquare: generateSquare,
      onGenerate: onGenerate
  }
}()
