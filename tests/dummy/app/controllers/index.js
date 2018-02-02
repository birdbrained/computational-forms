import Ember from 'ember';
//import Compiler from 'npm:ember-source/dist/ember-template-compiler';

export default Ember.Controller.extend({

    parameters: Ember.computed("model", function() {
        return this.get("model.parameters");
    }),

    widgets: Ember.computed("model", function() {
        return this.get('model.widgets')
    }),

    /*
    description: "Hello World",

    caseDescriptionTemplate: Ember.computed(async function() {
        const refreshParameters = () => {
            this.get('store').findRecord('case', this.get('case.id'), { reload: true }).then((caxe) => {
                this.set('parameters', this.get('case.parameters').reduce((parameters, parameter) => {
                    parameters[parameter.get('name').replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })] = parameter.get('value');
                    return parameters;
                }, {}));
            });
        };
        refreshParameters();
        this.set('refreshParameters', setInterval(refreshParameters, 10000));
        const wf = await this.get('store').findRecord('workflow', this.get('case.workflow.id'), { reload: true });
        const templateName = `case-description-${this.get('case.id')}`;
        Ember.TEMPLATES[templateName] = Compiler.compile("{{cf-text-field label=\"Enter a value\" value=parameters.tf1}}{{cf-text-field label=\"the same value bound\" value=parameters.tf1}}");
        this.set('loading', false);
        return templateName;
    }),
    */
});
