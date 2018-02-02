import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ["widget"],

    init() {
        this._super()
        const widget = this.get("widget");
        if (widget.mappings) {
            Object.entries(widget.mappings).map(([k, v]) =>
                this.set(k, Ember.computed(`parameters.${v}`, {
                    get: () => {
                        return this.get(`parameters.${v}`)
                    },
                    set: (key, value) => {
                        this.set(`parameters.${v}`, value);
                        return value;
                    }
                })));
        }
        Object.entries(widget).map(([k, v]) => this.set(k, v));
    },

    editing: true,

});
