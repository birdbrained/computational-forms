/* eslint-env node */
'use strict';

module.exports = {
  name: '@centerforopenscience/computational-forms',
  treeForAddon: function(tree) {
    this.addonTree = tree;
    return this._super.treeForAddon.apply(this, arguments);
  },
  options: {
    babel: {
      plugins: ['transform-object-rest-spread']
    }
  }
};
