# LevelUp project

The purpose of this project is to create a todo system integrated with an activity progress tracker.

Users can create activities or goals to track and record their progress with them by completing items on their todo list.

The idea behind this project comes from role playing games where players often have skills that they level up by completing tasks or fulfilling challenges. As a player you can see the results of your efforts and get feedback and rewards for your progress which really helps to motivate you to continue playing.

I believe the same dynamics can be used in the real world to make a game of your regular activities, habits and things you need to do.

## Author

- [@Dennie Chan (Oculareo)](https://github.com/Oculareo)

## Development

The project will be developed in stages with core functionality and features introduced first so a minimally viable product (MVP) can be produced. Additional features and changes will be included as the project progresses.

- June 30th. Brainstorming features, benefits and uses of the project. Whiteboard sketches and mockups were created to flesh out the ideas of the project. Different ideas about how the site can be used developed as I sketched out user interface ideas.

- July 1st. Took sketches and created higher fidelity first drafts in Figma. Just focused on the mobile designs first which meant figuring out core functionality.

- July 2nd. Planning to make this project MERN stack as that is my foundation. Initialized project, created repo, began the Readme file to document development. Brainstorming some decisions about the project including database schema, authentication options and different tech to use.

- July 3rd. Created base files and directory structure for the models and routes planned for this project. User, Todo and Activity

- July 4th. Happy Independence Day!

- July 5th. Started controllers for the user model REST functions. Added Express Validation and checks for name, password, email from req.body.

- July 6th. Completed the user REST API routing and controller functions. Added express-sessions and integrated Authentication.

- July 7th. Expanded express-validator middleware to cover Activity routes/controllers. Added user logout route and function to terminate session. Completed the Activities REST API router and controller functions.

- July 8th. Completed Todo routes and controller functions. Added some code to check ownership of Todos, Activity to authenticated user.

- July 9th. Initialized front end portion of project with create-react-app. Added concurrently and updated scripts to run backend and frontend in one command.

- July 10th. Set up Sass project styling folders and structure.

- July 11th. Added React-router basic structure folders and components.

- July 12th. Added Header and MainNav Components.

- July 13th. Added main navigation Component along with NavLinks and Links. Added SASS/mixin, media query breakpoints and color variables

- July 14th. Researching styled-components, Theme-UI for refactor styling.

- July 17th. Created new branch and added styled-components foundation.

- July 18th. Removed Sass styling folders and structure. Added styled-components, Theme-UI. Merged styled-components into main branch

- July 20th. Added Register Component and controller.

- July 21st. Added Login Component and controller. Added ContextAPI for state management.

- July 22nd. Researching further express-sessions to integrate into state and user authentication.

- July 23rd. Researching ContextAPI and useReducer to provide app wide state management.

- July 24th. Added reducer, dispatch. Added user authenticated credentials
