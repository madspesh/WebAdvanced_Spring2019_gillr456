# Colour Accessibility

![Colour Accessibility Quiz screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/screenshot2.png)

Following on from my midterm project, for my final Spring semester project I created a Javascript game to raise awareness about the importance of colour contrast in web accessibility. According to the [World Wide Web Consortium (W3C)](https://www.w3.org/), designers should always strive to make it easier for users to read content by providing adequate colour contrast between background and foreground.

![Midterm project screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/midtermimage.jpg)

The main requirements of the final semester project were to create a responsive web-based application which uses jQuery and pulls information from a third party API. We were also required to have a strong concept behind our application in order to drive our thinking.





## Concept

I decided to design and build a quiz game application for fellow creatives to guess whether a particular colour combination’s contrast ratio is a pass or a fail. The pass/fail results are accessed through the [WebAIM Color Contrast Checker API](https://webaim.org/resources/contrastchecker/?fcolor=0000FF&bcolor=FFFFFF&api). There are 10 combinations in total, which will be loaded into my game from an external JSON file.

Users receive feedback after each combination on whether their guess was successful, and at the end of the quiz they receive their final score out of 10 along with a customised message. I have also integrated a scoreboard and timer to enhance the gamified experience, and I'm planning to add social media sharing links at the end of the quiz to help spread awareness.

My target audience are designers, developers, or anyone creating in the digital space. The main goal of the project is to educate users about the importance of adequate colour contrast, in the hopes that they will consider incorporating more web accessible content in their future projects.





## Precedents

![Game of the Year website screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/gameoftheyear.gif)

[Game of the Year](https://gameoftheyear.withgoogle.com/) is a game which tests your knowledge of the most popular Google search queries.

![Can't Unsee website screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/cantunsee.gif)

[Can't Unsee](https://cantunsee.space/) is a game for creatives which tests your attention to detail in terms of user interfaces.

![It's Centred That website screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/designerseye.gif)

[It's Centred That](https://www.supremo.co.uk/designers-eye/) is another game for creatives which tests your 'designers eye' in terms of centering content.





## Challenges

First, I created one test question in order to get the API connected and functioning correctly. My JS code is asking the WebAIM API whether each colour combination passes or fails the accessibility test. The code is then checking the pass/fail result against the users yes/no guess, and either displaying a “Correct!” message or a “Wrong” message. In this test, the background and text colours are hard-coded into my JS file.

![Web inspector screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/successfulAPI.gif)

My next step was to compile multiple question variables - each with their own background and text colour properties - into an external JSON file. I loaded each question into a Handlebars template in my HTML file, and then used CSS code to remove and display each div one by one. However, I had a lot of difficulty in getting the JS checking code to work for multiple questions.

![Web inspector screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/codenotworking.gif)

I did a lot of console logs and the code seemed to display the correct message for questions 1 and 2, but question 3 only displayed the message from question 2. The code for question 3 definitely worked as the console log showed that it has executed, but the message was being overwritten by question 2. I needed to find a way to execute the code one step at a time only.





## Triumphs

After lots of unsuccessful attempts at rewriting the code, I sat down with my instructor for advice. I realised that as Handlebars is a templating engine used to display content in multiple containers, it wasn't suitable for this project which only had one container. I edited my HTML file to include just one main container div, instead of the multiple container divs that I was removing/displaying before.

![HTML code screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/code1.png)

I also restructured my JSON file so that all of my questions were stored as multiple objects in one variable, rather than multiple variables. This made it easier to reference colour combinations in my JS code by simply using 'i', rather than a specific variable (eg. 'data["questions"][i].backgroundcolor; ')

![JSON code screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/code2_.png)

The biggest revelation I had was the discovery of the 'unbind' method. The reason why my most recent code kept getting overwritten by previous functions was because I was attaching all my click events to the same two buttons. I had to unbind the click event from the Agree and Disagree button IDs after each loadQuestion() function had run, in order to start afresh each time.

![JS code screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/code3_.png)





## Process

I designed the visual interface of my game using Figma, ensuring that the UI design was colourful, engaging, and above all, accessible! Using Figma helped me to structure my CSS code quickly and easily, as it provides you with CSS properties automatically which you can simply paste into your style sheet.

![Figma screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/figma_design.png)

To introduce the website I designed an introductory panel which explained what the game was about, and gave users a brief introduction to the colour accessibility topic. At the end of the game I provided links for the user to learn more about the official web accessibility guidelines.

![Introductory panel screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/screenshot1.png)

In order to increase the gamified aspect of the experience, I integrated a scoreboard and timer by utilising the 'setTimeout' method. This allowed me to display a Correct/Incorrect for a certain period of time, and then advance the user on to the next question.

![setTimeout JS method screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/code4_.png)
![Correct message screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/screenshot4.png)

I also upped the game-like intensity by adding a timebar, which would start out as green at 0 seconds and then eventually switch to red as the time was approaching 5 seconds. I used the 'animate' method to increase the CSS width of the bar as time increased.

![Red timebar screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/screenshot3.png)

Finally, I added a customised sentiment message at the end of the quiz depending on the users final score. Users that scored 10 out of 10 would receive a 'perfect score!' message, whilst users that scored less than 1 received a 'did you even try?!' message.

![JS screenshot of customised message code](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/code5.png)
![Customised message screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/screenshot6.png)





## Future Iterations

My next steps are to sort out a bug I'm having with the 'replay' button at the end of the quiz, and to add in the Twitter 'retweet' functionality in order to spread awareness of the game.

I would also like to integrate some more animation and perhaps illustrations into the game, in order to make the experience more fun and enjoyable. I think the customised message at the end could perhaps include some sort of fireworks animation if the user scores 10 out of 10.





## Built With

* [jQuery](https://jquery.com/) - JavaScript library
* [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/) - API





## Author

* **Rebecca Gill Clarke** - find me on [GitHub](https://github.com/madspesh) and at [madspesh.me](http://madspesh.me)





## Acknowledgments

* Thank you to [Kayla Polo-Garcia](https://github.com/KayPolo) for her code and tutelage.




