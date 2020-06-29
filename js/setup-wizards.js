'use strict';
(function () {
  var colorCoat = 'rgb(101, 137, 164)';
  var colorEyes = 'black';
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    colorEyes = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    colorCoat = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
    node.style.position = 'absolute';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
})();
