'use strict';
(function () {
  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.colorize = function (element, constant, elType) {
    element.addEventListener('click', function () {
      var color = getRandom(0, 5);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = constant[color];
        elType.value = constant[color];
      } else {
        element.style.fill = constant[color];
        elType.value = constant[color];
      }
    });
  };
})();
