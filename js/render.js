'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similar = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (wizards) {
    var takeNumber = wizards.length > window.constants.COUNT_WIZARDS ? window.constants.COUNT_WIZARDS : wizards.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(wizards[i]));
    }
    similar.classList.remove('hidden');
  };
})();
