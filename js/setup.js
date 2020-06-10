'use strict';
(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardNameInput = document.querySelector('input[name="eyes-color"]');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var fireballMainInput = document.querySelector('input[name="fireball-color"]');

  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

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

  var SETUP_FIREBALL = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
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

  setup.querySelector('.setup-similar').classList.remove('hidden');

  // взаимодействие с окном
  var onPopupEscPress = function (evt) {
    if (userNameInput !== document.activeElement) {
      if (evt.key === ESC_KEY) {
        closePopup();
      }
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };


  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });

  //переводим ошибки на русский
  userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  // меняем цвет основного волшебника и фаерболла
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = WIZARD_COAT[getRandom(0, 5)];
    wizardCoatInput.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = WIZARD_EYES[getRandom(0, 4)];
    wizardNameInput.value = wizardEyes.style.fill;
  });

  setupFireballWrap.addEventListener('click', function () {
    var randomFireballColor = SETUP_FIREBALL[getRandom(0, 5)];
    setupFireballWrap.style.backgroundColor = randomFireballColor;
    fireballMainInput.value = randomFireballColor;
  });

})();
