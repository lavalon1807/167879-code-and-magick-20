'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var wizards = [
    {
      name: window.constants.WIZARD_NAMES[getRandom(0, 7)],
      surname: window.constants.WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: window.constants.WIZARD_COAT[getRandom(0, 5)],
      eyesColor: window.constants.WIZARD_EYES[getRandom(0, 4)]
    },
    {
      name: window.constants.WIZARD_NAMES[getRandom(0, 7)],
      surname: window.constants.WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: window.constants.WIZARD_COAT[getRandom(0, 5)],
      eyesColor: window.constants.WIZARD_EYES[getRandom(0, 4)]
    },
    {
      name: window.constants.WIZARD_NAMES[getRandom(0, 7)],
      surname: window.constants.WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: window.constants.WIZARD_COAT[getRandom(0, 5)],
      eyesColor: window.constants.WIZARD_EYES[getRandom(0, 4)]
    },
    {
      name: window.constants.WIZARD_NAMES[getRandom(0, 7)],
      surname: window.constants.WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: window.constants.WIZARD_COAT[getRandom(0, 5)],
      eyesColor: window.constants.WIZARD_EYES[getRandom(0, 4)]
    }
  ];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };
  /* создание коробки и добавление в нее элементов */
  var createFragment = function (frag, block) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild((frag));
    block.appendChild(fragment);
  };

  /* добавление волшебников */
  for (var i = 0; i < wizards.length; i++) {
    createFragment(renderWizard(wizards[i]), similarListElement);
  }
})();
