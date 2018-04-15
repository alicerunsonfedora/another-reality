"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"welcome_achievement": {
		title: "Starting the Journey (5GP)",
		body: "Every journey is a series of choices.",
		icon: "img/ui/achievements/001.png"
	},
    "ddlc_salvato_achievement": {
		title: "Welcome to the Literature Club (10GP)",
		body: "Some things don't have a deeper meaning.",
		icon: "img/ui/achievements/achievement.ico"
	},
    "first_bypass_achievement": {
        title: "The Road Not Taken (5 GP)",
        body: "You earned this achievement!",
        icon: "img/ui/achievements/008.png"
    },
    "first_bypass_failure_achievement": {
        title: "Fail to Succeed (5 GP)",
        body: "Failing to succeed doesn't mean failing to progress.",
        icon: "img/ui/achievements/007.png"
    },
    "just_monika_achievement": {
        title: "Just Monika. (JUSTMONIKA GP)",
        body: "Just Monika.",
        icon: "img/ui/achievements/achievement.ico"
    }
    
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
	"l": {
		"Name": "Libitina",
		"Color": "#80cbc4"
	},
    
    "a": {
		"Name": "Amour",
		"Color": "#ce93d8"
	},
    
    "p": {
		"Name": "{{player.Name}}",
		"Color": "#5bcaff"
	}
};

let script = {
	// The game starts here.
	"Start": [
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
                    storage.player.intelligence += 5;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},

        {
          "Conditional": {
              "Condition": function(){
                  return storage.player.Name == "Daniel";
              },
              "True": "jump Welcome_dan",
              "False": "jump Welcome_story"
          }  
        }
    ],
    
    "Welcome_dan": [
        function(){
            storage.player.intelligence += 10;
        },
        "notify ddlc_salvato_achievement",
        "a Remember, Daniel...",
        "a One does not simply play God...",
        "jump Welcome_story"
    ],
    
    "Welcome_story": [
        "notify welcome_achievement",
        "p Ah...",
        "notify just_monika_achievement",
        "notify first_bypass_failure_achievement",
        "p I certainly didn't see this coming...",
        "end"
    ]
};