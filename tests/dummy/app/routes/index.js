import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            formComponents: [{
                kind: "cf-text-field",
                parameters: {}
            }, {
                kind: "cf-text-field",
                parameters: {}
            }]
        };
    },

    setupController(controller, model) {
        controller.set('textFieldParameters', {
            value: {
                value: "test"
            },
            description: {
                value: "The description."
            }
        })
    }
});
