/* xySample.js */
function setup() {
  createCanvas(500, 500)
  background(60)

  let grph = new Graph('xy')
  grph.xLabel('Radius (m)', [0, -8])
  grph.yLabel('Velocity (m/s)')
  grph.title('Radius v Velocity', [0, 20])

  // these two do the same thing:
  grph.addPoints([[4, 5, 6], [1, 2, 3]], 'lists', "BLUE")
  // grph.addPoints([[4,1],[5,2],[6,3]], 'points', "BLUE")

  // these two do the same thing:
  // grph.addPointUncert([[0.1, 0.1, 0.1], [0.2, 0.2, 0.2]], 'lists')
  grph.addPointUncert([[0.1, 0.2], [0.1, 0.2], [0.1, 0.2]], 'points')

  grph.bestfit(true, "ORANGE")

  grph.addFunc(x => Math.sin(5 * x) + 3, color = 'BLUE')
  grph.addFunc(Math.cos, color = 'GREEN')
  grph.addFunc(x => Math.sin(x) + 2)
  grph.addFunc(x => Math.pow(x, 5) - (1.2 * x), color ='RED')

  grph.xInterv(1)
  grph.yInterv(1)
  grph.axis(0, 8, 0, 5)

  grph.canvasLocation(70, 70, 450, 450)
  grph.show()
}