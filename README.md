#MY REACT 

--Why Constructor Is the Best Place to Create State

Because at this point:

✅ The component is just being created — it’s the perfect place to set up its initial data (state) before anything is rendered to the screen.

Let’s go deeper 👇

🔹 1. State must be defined before the component is rendered

React’s lifecycle goes like this:

constructor() ➜ render() ➜ componentDidMount()


If you define the state after rendering, the component wouldn’t know what data to display at first.

✅ So initializing it in the constructor ensures that when React first calls render(),
this.state already exists with valid initial values.

🔹 2. It ensures this.state is tied to the right component instance

Every class component has its own instance of this.

By defining:

this.state = { ... }


inside the constructor, we make sure that the state belongs specifically to that component instance — not shared with others.

🔹 3. Performance efficiency

The constructor runs only once per component — when it’s created.
That means the state initialization happens once and doesn’t repeat unnecessarily during re-renders.

If you initialized the state in render(), it would reset on every render — causing bugs and infinite loops 😬.

🔹 4. It allows access to props

The constructor receives props as a parameter:

constructor(props) {
  super(props);
  this.state = { message: props.defaultMessage };
}


✅ This means you can set the initial state based on props before the first render.



# Setting up testing in our app:
- Install React Testing Library
- Instaled jest
- Installed Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration (npx create-jest)
- Install jsdom library
- Install @babel/preset-react: to make JSX work in test cases (it conerts JSX to HTML)
- Include @babel/preset-react inside babel.config.js
- install @testing-library/jest-dom