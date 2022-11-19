'use strict';

function ClickButton() {
    return React.createElement(
  'button', {
      className: 'blue-button'
    },
      'Click To Reveal'
    );
  }

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(React.createElement(ClickableButton));