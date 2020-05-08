# Tic Tac Toe Project
##### @github.com/i-am-monza		31 March 2020

This project is a react application; template created with create-react-app. Ii is a single-page tic tac toe game, where two users can take turns playing. The game determines winners as the game progresses, and indicates when there's a tie. Players can re-do their last play in history. This means they can rewind, and play again without using an extra move. Layout is simple, colourful with the use of css gradiuents.

#### * Development
The source code for the application is located under 'src' directory. The application is a single-page application, built with reacts components. This applications building components are:

1. Game.js - main componnent
2. Board.js - sub component
3. Button.js - sub component
4. Dashboard.js - sub component

###### All components have their respective test files in their root directories. Test files have matching names as the components with .test.js extention. The project is using jest for generating test coverage reports and sammury if you want to see coverage.

#### * Production
The source code for the production environment is found under the build folder. This project is using GitHub's gh-pages module for bulding and deploying project. The access link for deployed build is found in the description of this repository, so go play a bit.

###### The projects only has dependancies for development environment. These are listed in the package.json file under 'devDependecies.'

###### The project relise on installed-by-default jest framework for assertions in tests, and jest-dom extended matchers as well. It also uses reacts @testing-library for testing components.

#### * Branching model
This projects is using Git Flow model for breanching - where the 'application' branch is for the teams test environment, and 'gh-pages' is for production environment. The 'master' branch has the shipped product.

### The project is using cdn's for importing some resources. It is required that you run it connected to the internet so some bootstrap and fontawesome styles take effect on application when testing on development environment. Find the node version in the package.json file.