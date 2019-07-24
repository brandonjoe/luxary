# Luxary presence 

## Application for Luxary presence.
[Demo at 1920x1080](https://brandonjoe.github.io/luxary/)

### Please share your screen resolution, OS, browser version (best if you're using latest) you used to test in so we can look at it in:
I coded this project in 1920x1080 resolution in the latest version of Google Chrome on Windows 10. 

### What part of the design did you get stuck on? What took the most time? Similarly, what was the easiest part?

Trying to find the correct font. The Roboto font wasn't the same one given for the statistics. So "16.6M$" looked a lot different than me "16.6M$" Because I wanted to complete this under the time limit, I wasn't able to make this fully response and didn't collapse the Nav bar correctly. It also took me forever to find the  exact logos on Material, ended up using font awesome. I tried to make use of React's components by passing information down props in the nav buttons and data because those seem like the most reusable components in case more or less stuff would be added. Easiest part was positioning because I feel like I have a solid sense of how to position things. 


### What part of the design didn't make sense? Did you change anything?
I didn't change anything, I tried to keep it as close to the original as I could. 

### If you had more time, what would you have liked to implement?
I would have loved to implement the correct data for fetching. As of right now, I couldn't get the correct data to show up during my fetch call. I wasn't sure what the problem was, so I made a fetch call, waited for the response, and then manually updated the state within the fetch call. To prove that it works, state is initialized with zero values, and gets correctly updated within componentWillMount. 

### What did you have to research or lookup while working on this?
I'd be lying if I didn't have to google a lot of stuff, most of the time it was some material-ui related stuff. I only ended up using Material for the dropdown menu. I didn't use dropdown menu for "Filter Range" because I already implemented it in the other drop down and I was running out of time. 

Overall I thought this was a fun project, and I learned a lot about Material-ui. This project is far from perfect, and if I had more time than just a few hours, I would have made it more fluid and responsive. 
