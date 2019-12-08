# HowToDad

A web app to help you become the ULTIMATE Dad! Are you even a dad if you don't "dad joke"?

🔎 **Project Design**

I started off with a rough wireframe to get an idea of what I wanted to do. Below you can find a link to the Figma doc:
- [Figma Wireframe](https://www.figma.com/file/HOAhRy7mzwuBcY5wXhuBUk/HowToDad-App)


There's also the logo I created:
- [Figma HTD Logo](https://www.figma.com/file/Cj2BPCL6d995AvdP76mh8p/HowToDad-Logo)


🔎 **API's used**

I chose to use 2 API's in this project.

- [icanhazdadjoke.com](https://icanhazdadjoke.com/)
- [myjson.com](http://myjson.com/)


https://akveo.github.io/nebular/

- [Angular](https://angular.io)
- [Nx Dev Tools](https://nx.dev/angular)
- [RxJs for state and reactivity](https://rxjs-dev.firebaseapp.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Nebular](https://akveo.github.io/nebular/)


🔎 **Tech I had to learn on this project**

- Nebular

This was the first time I used Nebular. Really enjoyed exploring a new UI library.

- @ngx-pwa/local-storage

This is a local storage like library for angular, except it interfaces with IndexDB. So it's asynchronous unlike localStorage

🔎 **Project assumptions**

- Sharing jokes through myjson.com, I assumed it will be available long enough to share a link, but storing the user's jokes in local storage would be safer, as people generally don't clear it often.
- I also avoided looking up jokes by Id on the icanhazdadjoke api, as I'm not confident the Id's will always be unique. Thus, I only used it to fetch random jokes.


## Development server

Run `ng serve how-to-dad` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests or keep them running by `ng e2e --watch` via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
