// const heading = React.createElement(
//   "h1",
//   { id: "heading"},
//   "Hello from React"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Heading"),
    React.createElement("h1", {}, "Heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Heading"),
    React.createElement("h1", {}, "Heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
