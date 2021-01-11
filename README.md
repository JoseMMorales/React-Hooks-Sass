![Screenshot 2021-01-10 at 20 52 25](https://user-images.githubusercontent.com/43299285/104133764-de48c980-5385-11eb-8f87-629c05ea405f.png)

# React-Hooks-Sass 

[Hooks](https://reactjs.org/docs/hooks-faq.html#do-i-need-to-rewrite-all-my-class-components) are integrated functions in [React v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) that give to React developers managing lifecycle methods inside functional components without building any class. In this repo, I've used a few of them to use local state to manage data for UI in different scenarios. 

Besides, this project has also been implemented with CSS pre-processor ([Sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) **'Syntactically awesome style sheets'**) to build the style sheets faster, which are executed on the server and sends CSS to the browser.

### Hooks in React-Hooks-Sass are...

[UseState](https://reactjs.org/docs/hooks-state.html), [UseEffect](https://reactjs.org/docs/hooks-effect.html) and [UseContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

## This project...
In this App you will find four practice tasks in which I created reusable components, all of them linked an routed from high level App.js towards each individual page (see structure below). The navbar is been named to identify the certain task you are in, so it is very easy to go through. 

* **Cards:** Meaning of this scenario is how to repeat same component (Card.js) passing props in all parameters of each card based on needs.
* **Shop:** On this scenario, I have created two components (List.js and Library.js) to display data dinamically coming from useContext.
* **Agenda:** On this scenario, Agenda.js component is displaying the data from useContext, so Form.js updates the states in main database.
* **To Do:** On this scenario, we get data from API using fetch in createContent for being displayed dinamically when Input.js is adding a new To Do.

#### (!!Just 20 elements in To Dos call have been used in this task)
#### API: https://jsonplaceholder.typicode.com/todos 

## App Structure
![Screenshot 2021-01-11 at 08 56 35](https://user-images.githubusercontent.com/43299285/104157195-f4d53c00-53ea-11eb-8928-ca97ab42d97c.png)

### Demo...
![Screen-Recording-2021-01-11-at-00 43 57](https://user-images.githubusercontent.com/43299285/104138776-aef68480-53a6-11eb-91d6-c7e0045b89f0.gif)

## Installing
* **Note that you should have installed NodeJS ^10.16.3 to proceed with steps below**
* Clone the project to your local directory
* `$git clone https://github.com/JoseMMorales/React-Hooks-Sass.git`
* `$cd React-Hooks-Sass`
* `$npm install`
* `$npm start`

#### Any SCSS file changes will be compiled automatically 

## Technologies: 
* NodeJS ^10.16.3
* React ^17.0.1
* Hooks
* Sass

## Dependencies used: 
* @testing-library/jest-dom: ^5.11.4
* @testing-library/react: ^11.1.0
* @testing-library/user-event: ^12.1.10
* react: ^17.0.1
* react-dom: ^17.0.1
* react-scripts: 4.0.1
* web-vitals: ^0.2.4

## devDependencies used: 
* bootstrap: ^4.5.3
* node-sass: ^4.14.1
* node-sass-chokidar: ^1.5.0
* npm-run-all: ^4.1.5
* react-router-dom: ^5.2.0

## Author
Jose MMorales