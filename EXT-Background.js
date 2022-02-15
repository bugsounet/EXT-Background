/******************
*  EXT-Background
*  ©Bugsounet
*  02/2022
******************/

Module.register("EXT-Background", {
    defaults: {
      debug: false,
      model: "jarvis",
      myImage: null
    },

    notificationReceived: function (notification, payload) {
      switch(notification) {
        case "DOM_OBJECTS_CREATED":
          this.sendSocketNotification("INIT", this.config)
          this.sendNotification("EXT_HELLO", this.name)
          break
        case "GA_READY":
          this.sendNotification("GA_FORCE_FULLSCREEN")
          break
        case "ASSISTANT_LISTEN":
          this.setBackground("listen")
          break
        case "ASSISTANT_THINK":
          this.setBackground("think")
          break
        case "ASSISTANT_STANDBY":
          this.setBackground("standby")
          break
        case "ASSISTANT_REPLY":
          this.setBackground("reply")
          break
        case "ASSISTANT_CONTINUE":
          this.setBackground("continue")
          break
        case "ASSISTANT_CONFIRMATION":
          this.setBackground("confirmation")
          break
        case "ASSISTANT_ERROR":
          this.setBackground("error")
          break
        case "ASSISTANT_HOOK":
          this.setBackground("hook")
          break
      }
    },

    setBackground: function(status) {
      let path = "modules/EXT-Background/"
      var GA = document.getElementById("GA_DOM")
      if (status == "continue") status = "listen"
      if (status == "think") status = "listen"
      if (status == "hook") status = "confirmation"
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
