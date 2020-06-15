'use strict';
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardNameInput = document.querySelector('input[name="eyes-color"]');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var fireballMainInput = document.querySelector('input[name="fireball-color"]');

  // меняем цвет основного волшебника и фаерболла
  window.colorize(wizardCoat, window.constants.WIZARD_COAT, wizardCoatInput);
  window.colorize(wizardEyes, window.constants.WIZARD_EYES, wizardNameInput);
  window.colorize(setupFireballWrap, window.constants.SETUP_FIREBALL, fireballMainInput);
})();
