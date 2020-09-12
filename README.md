# MMM-GABackground

This module is an extension for MMM-GoogleAssistant.

It allows to change the default Google Assistant background to your own or with animated gifs for each status of the assistant

Needed: [MMM-GoogleAssistant](https://github.com/bugsounet/MMM-GoogleAssistant)

## Installation:
```
cd ~/MagicMirror/modules
git clone https://github.com/bugsounet/MMM-GABackground
cd MMM-GABackground
npm install
```

## Configuration

* I have just to configure your recipe and update your recipe configuration in MMM-GoogleAssistant

* npm installer have installed 2 new recipes in GoogleAssistant recipes directory
  * `with-BackgroundStatus.js`: allow to change the background of the assistant for each status of it
  * `with-Background.js`: allow to change the background of the assistant with your prefered background 

### How add a recipe to GoogleAssistant ?

In your GoogleAssistant configuration (in config.js), you have a `recipe:[]` field, just add your wanted recipe on it !<br>
Sample:
```js
recipes: [ "with-BackgroundStatus.j"],
```
if you have already a recipes configuration just add it in the queue
```js
recipes: [ "with-MMM-TelegramBot.js", "with-BachgroundStatus.j"],
```

### How configure your wanted recipe:<br>
Open your prefered editor and edit your wanted recipe !

  * `with-BackgroundStatus.js`<br>  
  Actually I have prepared 4 models:
    - jarvis:<br>
    ![](https://github.com/bugsounet/MMM-GABackground/blob/master/jarvis/standby.gif)
    - lego:<br>
    ![](https://github.com/bugsounet/MMM-GABackground/blob/master/lego/standby.gif)
    - old:<br>
    ![](https://github.com/bugsounet/MMM-GABackground/blob/master/old/standby.gif)
    - cortana:<br>
    ![](https://github.com/bugsounet/MMM-GABackground/blob/master/cortana/standby.gif)
    
  You have just to replace the value of `var model=` by your wanted model<br>
  By default, i have set `jarvis`<br>
  Sample: If you want `lego` model just replace `jarvis` par `lego`
  ```js
  var model= "lego"
  ```
  * `with-Background.js`<br>
  Past your prefered background file in the root directory of MMM-GABackground<br><br>
  In this recipe, you have `var file = "myprefered.jpg"`<br>
  Just replace the value with your wanted the file name ! (Attention to uppercase,lowercase,...)<br>
  
## Creation of a model

GoogleAssistant have some `Status`: listen, standby, confirmation, reply, error, hook<br>
The recipe read it<br>
So we will apply a gif to all status !

* Make a directory with the name of the new model
* Past all wanted GIFs to apply
* Rename your GIF for reading with the status<br>
 Names of files MUST be:
   * listen.gif 
   * standby.gif
   * confirmation.gif
   * reply.gif
   * error.gif
   
If a gif is missing: it return a black screen for the missing status GIF<br>
Now, you have just to select your model in your recipe configuration

You can Make a PullRequest with your own model !

## Notes:
 * For working GoogleAssistant need the `fullscreen_above` position !
