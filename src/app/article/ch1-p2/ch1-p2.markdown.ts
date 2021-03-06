export const ch1P2Markdown = `
## Strengths of Angular
### Type Safety

Angular uses TypeScript for type safety. This allows a developer to write more maintainable code and prevent many runtime errors that would have been possible with JavaScript.

### Powerful CLI

Angular comes with a powerful CLI that handles project creation, boilerplate code generation, and feature addition.

### Performance

The Angular compiler [Ivy](https://www.youtube.com/watch?v=anphffaCZrQ) uses [incremental DOM](http://google.github.io/incremental-dom/), which has an efficient mechanism to update the DOM trees. Therefore, Angular allows you to build web applications that have low memory usage and high performance.

### Reactive Programming

Angular embraces RxJS, which is a library for reactive programming using observables. RxJS is feature-rich and allows us to deal with more complex asynchronous code with ease.

### Robust Structure

Angular uses classes to create modules, components, services and so on. It also uses the dependency injection technique to make the classes independent of their dependencies. This makes Angular components more reusable.

Besides, Angular has a clear division between TypeScript (logic), CSS (styling), and HTML (template) by separating them into different sections or files, which makes a project more maintainable. 

Angular also comes with the [Jasmine test framework](https://jasmine.github.io/) that allows a developer to easily test an Angular application.

### Excellent Documentation

The [documentation](https://angular.io/) of Angular is up-to-date, well-written, and covers almost everything of Angular. Therefore, an Angular developer can easily resort to the documentation when they need to look up some features.

### Broad Community

Angular is used by many developers around the world. Therefore, if you encounter some questions while developing in Angular, chances are someone has already asked them which have been answered by the community.

## Angular compared to other options

### Angular vs React
[React](https://github.com/facebook/react) is a library for building UI developed by Facebook. It uses [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) and embraces [functional programming](https://en.wikipedia.org/wiki/Functional_programming). React has a huge ecosystem powered by its community. Also, React uses the [Virtual DOM](https://reactjs.org/docs/faq-internals.html), which makes it have fast performance.

React is arguably easier to learn for building a simple application. However, for building a large application, React requires a solid understanding of its ecosystem, i.e., the libraries available in the community.

On the other hand, Angular is a framework. Angular does not use JSX and instead uses HTML with directives for templates. As Angular comes with more tools such as TypeScript and RxJS, they can make Angular harder and take longer to pick up.

### Angular vs Vue
Like Angular, [Vue](https://vuejs.org/) is a framework. It is created by Evan You, an ex-Google employee.  Like React, Vue also embraces the Virtual DOM. Vue allows developers to write in both JSX and HTML templates.

Vue is said to be easy to learn and flexible. However, due to its flexibility, it takes time to learn the best practices in order to write well-structured code.
`