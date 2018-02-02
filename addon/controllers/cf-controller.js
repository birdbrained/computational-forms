import Ember from 'ember';

export default Ember.Controller.extend({

    parameters: Ember.computed("model", function() {
        return this.get("model.parameters");
    }),

    widgets: Ember.computed("model", function() {
        return this.get('model.widgets')
    }),

});

