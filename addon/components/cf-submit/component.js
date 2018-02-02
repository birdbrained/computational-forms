import Ember from 'ember';
import CFWidget from '@centerforopenscience/computational-forms/components/cf-widget/component';
import layout from '@centerforopenscience/computational-forms/components/cf-submit/template';

export default CFWidget.extend({

    layout,

    widgetClasses: ['section-submit-button'], // eslint-disable-line ember/avoid-leaking-state-in-components
    widgetClassString: Ember.computed('widgetClasses', function() {
        const classes = this.get('widgetClasses');
        if (classes === undefined ||
            classes.constructor !== Array
        ) {
            return '';
        }
        return classes.join(' ');
    }),

    actions: {
        async pressButton() {
            const parameters = this.attrs.widget.value.parameters;
            this.attrs.saveParameter(parameters.parameter, {
                value: await this.get('action')(this),
                state: ['defined'],
            });
        },
    },

});
