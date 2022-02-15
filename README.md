# MMM-GABackground

This module is an EXT for MMM-GoogleAssistant v4.

It allows to change the default Google Assistant background to your own or with animated gifs for each status of the assistant

Needed: [MMM-GoogleAssistant](https://github.com/bugsounet/MMM-GoogleAssistant)

## Installation:
```
cd ~/MagicMirror/modules
git clone https://github.com/bugsounet/EXT-Background
cd EXT-Background
npm install
```

## Creation of a model

GoogleAssistant have some `Status`: listen, standby, confirmation, reply, error, hook<br>
This EXT is able to read it<br>
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

## Donate
 [Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TTHRH94Y4KL36&source=url), if you love this module !
