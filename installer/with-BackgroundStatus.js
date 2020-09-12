/**
 * with-BackgroundStatus.js
 * This recipe allow to change background of GA on each status (listen, standby, reply,...
 * @bugsounet 12/09/20020
 **/

var recipe = {
  commands: {
    "BACKGROUND": {
      moduleExec: {
        module: ["MMM-GoogleAssistant"],
        exec: (module,param,from) => {
          var model= "jarvis"

          var status = param.status.actual
          var GA = document.getElementById("GA_DOM")
          if (status == "continue") status = "listen"
          if (status == "hook") status = "confirmation"
          var path = "modules/MMM-GABackground/" + model + "/" + status + ".gif?" + Date.now() 
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
