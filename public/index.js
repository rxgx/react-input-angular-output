// React Input Component
var InputComponent = React.createClass({
  render: function() {
    var DOM = React.DOM;
    return DOM.form(
      { className: 'form' },
      DOM.label({ htmlFor: 'message' }, 'Enter Message'),
      DOM.input({ id: 'message', ref: 'input', name: 'message', onChange: this.props.onChange, type: 'text' })
    )
  }
});



// Application
var app = angular.module('app', []);



// Input Directive
(function() {
  'use strict';

  angular.module('app').directive('exampleInput', directive);

  directive.$inject = ['$rootScope'];

  function directive($rootScope) {
    return {
      restrict: 'A',
      controller: controller,
      link: link
    };

    function controller() {
      return {
        setMessage: function(event) {
          $rootScope.$emit('message', event.target.value);
        }
      }
    }

    function link(scope, element, attrs, controller) {
      var input = React.createElement(InputComponent, { onChange: controller.setMessage });
      React.render(input, element[0]);
    }
  }
})();



// Output Directive
(function() {
  'use strict';

  angular.module('app').directive('exampleOutput', ExampleOutputDirective);

  ExampleOutputDirective.$inject = ['$rootScope'];

  function ExampleOutputDirective($rootScope) {
    var controller = function() {

    };

    var link = function(scope, element, attrs, controller) {
      scope.$on('message', function(event, data) {
        console.log("output received", data);
        scope.output = data;
        scope.$apply()
      });

      scope.output = 'default message';
    };

    return {
      restrict: 'A',
      controller: controller,
      link: link
    };
  }
})();
