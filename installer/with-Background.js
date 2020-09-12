/**
 * with-Background.js
 * This recipe allow to change background of GA with your prefered !
 * @bugsounet 12/09/20020
 **/

var recipe = {
  commands: {
    "BACKGROUND": {
      moduleExec: {
        module: ["MMM-GoogleAssistant"],
        exec: (module,param,from) => {
          var file = "myprefered.jpg"

          var path = "modules/MMM-GABackgound/" + file
          var GA = document.getElementById("GA_DOM")
          GA.setAttribute('style', "background-image: url(" + path + ");")
        }
      }
    }
  },
  plugins: {
    onStatus: "BACKGROUND"
  }
}
exports.recipe = recipe // Don't remove this line.
