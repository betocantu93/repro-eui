'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const path = require('path');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here

    fingerprint: {
      enabled: true,
      generateAssetMap: true,
      prepend: '/',
    },

    'ember-fetch': {
      preferNative: true, // Recommended to enable faster preloading for browsers that support it.
    },

    svgJar: {
      sourceDirs: [
        'public/assets',
        path.join(__dirname, '../../node_modules/@ember-eui/core/vendor/icon'),
      ],
    },
  });
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  //Momentarelly manually until we can get modern css working
  app.import('node_modules/@ember-eui/core/vendor/eui_theme_light.min.css');
  app.import('node_modules/@ember-eui/core/dist/styles/ember-eui.css');

  const { maybeEmbroider } = require('@embroider/test-setup');

  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
