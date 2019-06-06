# Peer-Programming


## Objectives

- Learn how to work (really) closely in team
- Learn how to set up a javascript exercise quickly


## Instructions

For this exercise we're gonna work with live instructions, **so don't make this exercise in advance!!!**
Here are the instructions:

1. Download the [template.html](files/template.html) from the 'files' folder
2. Place a button on the section with the commentary, give it the `btn` & `btn-primary` classes, the button should read `Calculate!`.
3. Save the button in a variable & log it in the console
4. Log "Clicky!", when you click the button
5. When you click the button switch the `btn-primary` class to `btn-success`
6. After .5 seconds, switch the `btn-success` class back to `btn-primary`
7. When you click the button, add the fontawesome loading icon to the front of the button's content [(click here for the icon)](https://fontawesome.com/icons/spinner?style=solid), make sure it spins as well.
8. After .5 seconds it needs to disappear as well.
9. When you click the button, the text needs to change to `Calculating...`
10. After .5 seconds it goes back to `Calculate!`. Make sure the fontawesome icon still works
11. Add an input field to the left of the button, make it a text input
12. Add a div with a nice border below the button (make sure to add some top margin to the div so it's nice and separate)
13. When you click the button, after .5 seconds, the inputted number (from the input field) gets printed in the bordered div box
14. Now make sure when you print the number in the box, that there is a message saying `Here is your result:` `$x` where `$x` is the number
15. Now make sure you don't add this text with javascript
16. Add a second (text) input field, to the right of the first input field, move the button one line below the two input fields
17. When you click the button, both numbers of the input fields should be added to each other
18. If one of the input fields is empty, then use javascript to block the result from being calculated
19. Display an error message on top of the input fields, saying what the problem is
20. Now remove that code and add the `required` attribute to the input html tags, compare both results
21. Add a select element in between the input fields (so it's input, select, input and then button below these)
22. The select value should have all operators as options
23. Now when you click the button, it should calculate the operation (add when + is selected, remove when - is selected, ...)
24. Catch the following error: `You can't divide by 0`
25. Catch the following error: `You can't subtract a number from a smaller number (5-23)`
26. Catch the following error: `You can't divide by a number if the result would not be an integer`
27. Catch the following error: `You can't multiply by odd numbers`
28. If the text `rand` is entered instead of a number, then on key up change that text to a random number (integer) between 0-100
29. Catch the following error: `You can't do any operations if the content is anything but a number`
30. If you type `Boom!` in any of the input fields, the entire page content (separately) falls down out of the page and you are left with a blank page
