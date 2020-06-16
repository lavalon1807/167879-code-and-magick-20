'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.constants.COUNT_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i + getRandom(1, 15)]));
    }
    similarListElement.appendChild(fragment);
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
