# Colour Accessibility

![Image of desktop and mobile views](https://raw.githubusercontent.com/madspesh/WebAdvanced_Spring2019_gillr456/master/Midterm/style/img/image1.jpg)

For my Javascript midterm project, I created an interactive webpage about colour contrast in web accessibility. The main requirements were to create a single page application pulling information from a JSON file, using the jQuery library. We were also required to have a strong initial concept to drive our thinking. 

## Concept

I wanted to build something to to raise awareness about the importance of colour contrast in web accessibility. According to the [World Wide Web Consortium (W3C)](https://www.w3.org/), designers should always make it easier for users to read content by providing adequate colour contrast between background and foreground.

My targeted audience are designers, developers, or anyone creating in the digital space. The main goal of the project is to educate users about the importance of adequate colour contrast, in the hopes that they will consider incorporating more web accessible content in their future projects.

## Process

I had initially planned to use the [WebAIM Color Contrast Checker API](https://webaim.org/resources/contrastchecker/?fcolor=0000FF&bcolor=FFFFFF&api) as the basis of my application, which is an API that provides contrast ratios and AA/AAA pass/fail states between a specific foreground and background colour. However in the interest of time, I decided to create my own JSON file using data from the WebAIM website.

### JSON

![JSON code screenshot](https://raw.githubusercontent.com/madspesh/WebAdvanced_Spring2019_gillr456/master/Midterm/style/img/json1.jpg)

I populated my JSON file with 16 pairs of colours with a variety of pass/fail results, in order to demonstrate how certain combinations you may assume to be highly contrasting could in fact be completely illegible to those with colour blindness and low vision.

I assigned my own unique names to the pairings (eg. Khaki and Cornflower), and gave each of them an id which I would refer to in my Handlebars templating script. The rest of the colour contrast information is taken directly from the WebAIM website.

### HTML + CSS

![HTML code screenshot](https://raw.githubusercontent.com/madspesh/WebAdvanced_Spring2019_gillr456/master/Midterm/style/img/html1.jpg)

My HTML file contains the Handlebars script which allowed me apply a templated style to each object in my JSON file. The objects are rendered in square boxes with a 3D drop-shadow effect. The background and text/drop-shadow colours of each square is pulled directly from the pairing's *bcolor* and *fcolor* HEX codes.

I used CSS to style the squares and ensure that the application was responsive and highly visible on all desktop, tablet and mobile devices. I used Merriweather and Muli as my main typefaces, pulling from the Google Fonts stylesheet.

### jQuery

![jQuery code screenshot](https://raw.githubusercontent.com/madspesh/WebAdvanced_Spring2019_gillr456/master/Midterm/style/img/js1.jpg)

In my JavaScript file, you can find all the functions that I used to pull and render the data from my JSON file. The functions are all written in jQuery syntax, in order to make it easier to mainpulate my HTML file. I call all of the functions in my init variable at the bottom of the file.

In addition to simply displaying the colour pairings, I added a popup box which is activated by clicking the WCAG button in the introduction text. The popup contains information about the WCAG and the meaning behind labels such as "Large Text" and "AAA pass".

## Challenges and Triumphs

My main struggles during this project came from trying to add interactivity to the colour pairing squares. I wanted to be able to invert the *bcolor* and *fcolor* values when the users hovered over each square, in order to see the vast differences between foreground and background colours. I tried experimenting with different mouseover and hover functions, but unfortunately I wasn't able to figure it out.

However I'm pleased that I was able to pull the colours directly from the JSON file instead of hard coding them using CSS. The way that I structured the JSON file should allow me to easily replace it with the live WebAIM API in the future.

## Future Iterations

My next steps are to replace my JSON file with the WebAIM Color Contrast Checker API. I will need to create an array of potential colour pairings; this could either be compiled manually by me, or perhaps by input from users.

I would also like to develop the application into a quiz of some sort, which would allow users to guess whether certain colour combinations are a pass or a fail. I think that creating this kind of gamified experience will make my application more engaging, and encourage users to really consider the importance of web accessibility.

## Built With

* [jQuery](https://jquery.com/) - JavaScript library
* [Handlebars](https://handlebarsjs.com/) - JavaScript templating library
* [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/) - Website/API used for reference

## Author

* **Rebecca Gill Clarke** - find me on [GitHub](https://github.com/madspesh) and at [madspesh.me](http://madspesh.me)

## Acknowledgments

* Thank you to [Kayla Polo-Garcia](https://github.com/KayPolo) for her code and tutelage.
