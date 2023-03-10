/******************
*  EXT-Background
*  ©Bugsounet
*  03/2023
******************/

Module.register("EXT-Background", {
    defaults: {
      model: "jarvis",
      myImage: null
    },

    start: function () {
      this.ready = false
    },

    notificationReceived: function (notification, payload, sender) {
      if (notification == "DOM_OBJECTS_CREATED") this.sendSocketNotification("INIT")
      if (!sender || (sender.name != "MMM-GoogleAssistant")) return
      if (notification == "GAv5_READY") {
        this.sendNotification("EXT_HELLO", this.name)
        this.ready = true
      }
      if (!this.ready) return

      switch(notification) {
        case "ASSISTANT_THINK":
        case "ASSISTANT_CONTINUE":
        case "ASSISTANT_LISTEN":
          this.setBackground("listen")
          break
        case "ASSISTANT_STANDBY":
          this.setBackground("standby")
          break
        case "ASSISTANT_REPLY":
          this.setBackground("reply")
          break
        case "ASSISTANT_HOOK":
        case "ASSISTANT_CONFIRMATION":
          this.setBackground("confirmation")
          break
        case "ASSISTANT_ERROR":
          this.setBackground("error")
          break
      }
    },

    setBackground: function(status) {
      let path = "modules/EXT-Background/"
      var GA = document.getElementById("GA_DOM")
      if (this.config.myImage) {
        path = path + this.config.myImage
      } else {
        path = path + this.config.model + "/" + status + ".gif?seed=" + Date.now()
      }
      GA.setAttribute('style', "background-image: url(" + path + ");")
    },

    getDom: function () {
      var dom = document.createElement("div")
      dom.style.display = 'none'
      return dom
    }
});
