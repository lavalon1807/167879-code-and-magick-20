'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var WIZARD_EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizards = [
    {
      name: WIZARD_NAMES[getRandom(0, 7)],
      surname: WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: WIZARD_COAT[getRandom(0, 5)],
      eyesColor: WIZARD_EYES[getRandom(0, 4)]
    },
    {
      name: WIZARD_NAMES[getRandom(0, 7)],
      surname: WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: WIZARD_COAT[getRandom(0, 5)],
      eyesColor: WIZARD_EYES[getRandom(0, 4)]
    },
    {
      name: WIZARD_NAMES[getRandom(0, 7)],
      surname: WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: WIZARD_COAT[getRandom(0, 5)],
      eyesColor: WIZARD_EYES[getRandom(0, 4)]
    },
    {
      name: WIZARD_NAMES[getRandom(0, 7)],
      surname: WIZARD_SURNAME[getRandom(0, 7)],
      coatColor: WIZARD_COAT[getRandom(0, 5)],
      eyesColor: WIZARD_EYES[getRandom(0, 4)]
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

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
