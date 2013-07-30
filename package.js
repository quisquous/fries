Package.describe({
  summary: "Fries Android framework, repackaged for Meteor, minus stack"
});

Package.on_use(function (api, where) {
  api.add_files('lib/fonts/icomoon.svg', 'client');
  api.add_files('lib/fonts/icomoon.ttf', 'client');
  api.add_files('lib/fonts/icomoon.woff', 'client');
  api.add_files('lib/fonts/icomoon.eot', 'client');
  api.add_files('lib/css/base.css', 'client');
  api.add_files('lib/css/typography.css', 'client');
  api.add_files('lib/css/content.css', 'client');
  api.add_files('lib/css/spinners.css', 'client');
  api.add_files('lib/css/sliders.css', 'client');
  api.add_files('lib/css/chevrons.css', 'client');
  api.add_files('lib/css/tabs.css', 'client');
  api.add_files('lib/css/icomoon.css', 'client');
  api.add_files('lib/css/lists.css', 'client');
  api.add_files('lib/css/action-bars.css', 'client');
  api.add_files('lib/css/forms.css', 'client');
  api.add_files('lib/css/buttons.css', 'client');
  api.add_files('lib/js/spinners.js', 'client');
  api.add_files('lib/js/tabs.js', 'client');
  api.add_files('lib/js/action-bars.js', 'client');
});
