# Famous take-home Assignment

## Intro

Thank you for taking the time to complete the Famous take-home assignment.

Here, we're trying to create a realistic task that resembles a typical (though somewhat artificial)
task that you might get when working for Famous.

Our goal is to give you the best chance to show us your code and the way you work while giving us some insight into how your brain works and what is your coding style like. There might be ambiguity in the assignment and please make sure to clearly comment when you encountered such and what your resolution was.

This is also going to be a conversation starter of sorts for your interview.

You shouldn't spend more than 2-4 hours working on this, so make sure you spend most of the time on creating something that's working, instead of trying to refactor the existing code or create something over the top. No need to validate everything everywhere, but some good common sense checks are good.

We're looking for self-contained working code that follows the style of the existing code.

You shouldn't need any external components or libraries but if you feel that you need one, you can use it.

## Task
Our data structure (in testData.js) is a set of cards that are used to display items. Both cards and items have a set of properties that are common to them but we know nothing more about the data than we have in the testData file.

When you start the app, you will see that there are two panes displayed in your browser, a "Card" and an "Card Item Info" pane. In the Card pane you will see a card with some items outlined. 

1. Detect when an item on the card is clicked and establish this item as the currently selected item.
2. Once you have a selected item, display its properties in the right side Card Item Info pane. Use the correct UI elements to display these properties when possible - inputs for simple text and number fields, color selector for colors, etc.
Tip: You might want to focus on just a subset of properties first, then expand to all as time permits.
3. Once the properties are displayed, detect if the user changes the property fields and send them to the "Mock API" function call `updateCardItem` to update the data.

Bonus - if you still have time, you can work on displaying items on the card more accurately, for example showing images, displaying text, etc. You should definitely time-box this though.

## Instructions

- Stack: Javascript on Node 12, it uses parcel-bundler to run the app
- Use `npm install` to install the dependencies
- You can start the app using `npm run start`
- You can debug in your browser's developer tools, probably Chrome is your best bet

Good luck, and if you have any questions, please do email.

Yours,
The Famous Dev Team