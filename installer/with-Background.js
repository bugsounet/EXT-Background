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
          var path = "modules/MMM-GABackgound/myprefered.jpg"
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
