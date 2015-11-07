## How To Use React Components in Angular Directives

#### How to run this example in your browser

If you already have Bower installed you can skip the `npm` command. After cloning this project, run the following commands in your terminal.

```shell
npm install
npm run install
npm start
```

#### How does this work?

Inside the directive `link` function, mount the React component to the `element` argument. Because the `element` argument is a jQuery-like object, use `element[0]` to get the DOM node. Then, using the `controller` attribute, the values and functions can be sent to the component as `props`.

```javascript
function link(scope, element, attrs, controller) {
  // Render the React component
  var input = React.createElement(InputComponent, { onChange: controller.setMessage });
  React.render(input, element[0]);
  
  // Cleanup when destroyed
  element.on('$destroy', function() {
    React.unmountComponentAtNode(element[0]);
  });
}
```
