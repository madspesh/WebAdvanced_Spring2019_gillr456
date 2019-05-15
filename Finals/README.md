# Colour Accessibility

![Midterm Project](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/midtermimage.jpg)

Following on from my midterms, for my final project I am creating a Javascript game to raise awareness about the importance of colour contrast in web accessibility. According to the [World Wide Web Consortium (W3C)](https://www.w3.org/), designers should always strive to make it easier for users to read content by providing adequate colour contrast between background and foreground.

The main requirements of the finals are to create a responsive web-based application which uses jQuery and pulls information from a third party API. We are also required to have a strong concept behind our application in order to drive our thinking.



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



## Process

![Web inspector screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/successfulAPI.gif)

First, I created one test question in order to get the API connected and functioning correctly. My JS code is asking the WebAIM API whether each colour combination passes or fails the accessibility test. The code is then checking the pass/fail result against the users yes/no guess, and either displaying a “Correct!” message or a “Wrong” message. In this test, the background and text colours are hard-coded into my JS file.

![Web inspector screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/blob/master/Finals/style/img/codenotworking.gif)

My next step was to compile multiple question variables - each with their own background and text colour properties - into an external JSON file. I loaded each question into a Handlebars template in my HTML file, and then used CSS code to remove and display each div one by one. However, I had a lot of difficulty in getting the JS checking code to work for multiple questions.

I did a lot of console logs and the code seemed to display the correct message for questions 1 and 2, but question 3 only displayed the message from question 2. The code for question 3 definitely worked as the console log showed that it has executed, but the message was being overwritten by question 2. I needed to find a way to execute the code one step at a time only.

![Another web inspector screenshot](https://github.com/madspesh/WebAdvanced_Spring2019_gillr456/tree/master/12_Final%20Project%20v2)



