import Ember from 'ember';
import CFWidget from '@centerforopenscience/computational-forms/components/cf-widget/component';
import layout from '@centerforopenscience/computational-forms/components/cf-text-area/template';


export default CFWidget.extend({

    layout,

    editing: true,
    description: 'Enter a title for the preprint.',

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
    },

});
