import Ember from 'ember';

export default Ember.Route.extend({

    model: () => ({
        parameters: {
            value1: "",
            value2: "",
            description1: "The description.",
            "submit-url": "http://google.com/",
            tf1: "Title",
            "file-name": "",
            "file-data": null,
        },
        widgets: [{
            kind: "cf-container",
            label: "Basic Info",
            description: "Your personal information will never be shared. In fact, it's not even uploaded when you submit the form! It is required in order to press the submit button though :)",
            widgets: [{
                kind: "cf-text-field",
                label: "First Name",
                mappings: {
                    value: "value1",
                }
            }, {
                kind: "cf-text-field",
                label: "Last Name",
                mappings: {
                    value: "value2"
                }
            }]
        }, {
            kind: "cf-text-field",
            label: "Enter Your Last Name",
            mappings: {
                value: "value2"
            }
        }, {
            kind: "cf-text-field",
            label: "",
            mappings: {
                value: "value1"
            }
        }, {
            kind: "cf-file-picker",
            mappings: {
                fileName: "file-name",
                fileData: "file-data"
            }
        }, {
            kind: "cf-text-field",
            label: "Enter a title for the file.",
            mappings: {
                predictionValue: "file-name",
                value: "file-title"
            }
        }, {
            kind: "cf-submit",
            label: "Submit",
            url: "submit-url",
            mappings: {
                
            },
        }]
    })


});
