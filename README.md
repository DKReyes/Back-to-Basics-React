# Back to Basics React :book:
 
A website filled with basic knowledge on React. :+1:

> Each Chapter will contain a comment in the code with their chapter and section. Other instructions and indication in this basic website will be noted in this README.md.*

### Chapter 1 - React, Hello World, Pages, Routes, Components

This chapter is the introduction and the most basic form of introduction to building a simple website.

Creating a project:
When I created my React App I first had to make a new project using this command in my terminal.

```
npx create-react-app <Project Name>
```

Once I created my react app I would move my directory in the terminal using the change directory (cd) command.
```
cd <Project Name>
```

> If I want to start up the website I use the command `npm start` inside my terminal.

Creating a multi-paged website:

Inside my directory I would first install a few router dependencies in order to allow multi pages and routes.
```
npm install react-router-dom
npm install --save styled-components
```

The next step I made was creating a components folder and a pages folder inside the src folder.
Pages folder contain the pages itself. Inside this folder I created the `index.js` and `chapterTwo.js`.
The components folder will contain future components further in this and other chapters.
Along with these folders I added the `routes.js` to the src folder.

Inside the App.js (Inside the src folder) I add the Router import and the default path. 

Next step the famous **Hello World!**

Inside the `index.js` I wrote the following code inside the funtion Index() { return }
```
<h1>Hello World!</h1>
```

To conclude chapter 1 I have added a basic component button that will be used for chapter 2.
I create a component in the component folder called `firstButton.js` and inside I write my function that
returns the button element. 

The next final step is to add it to my page by importing the component to the page and using said component.
> Note: To understand a basic understanding of importing and structure picture a box and inside is a smaller box being put inside the bigger one. Importing is like giving the smaller box a name and putting it inside the bigger box. This is how you would use importing components to a page.
>
> First Add this at the top of the page typically your import list.
`Import <VARIABLE NAME> from  <FILE LOCATION>`
>
> Use the variable name (aka the smaller box) in your funtions and that is your imported item.
`<VARIABLE NAME />`
