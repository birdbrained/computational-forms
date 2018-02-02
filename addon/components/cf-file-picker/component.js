import Ember from 'ember';
import CFWidget from '@centerforopenscience/computational-forms/components/cf-widget/component';
import layout from '@centerforopenscience/computational-forms/components/cf-file-picker/template';

export default CFWidget.extend({

    layout,

    fileChosen: false,

    actions: {

        uploadFile(ev) {
            const reader = new FileReader();
            const fileHandle = ev.target.files[0];
            const filenameParts = ev.currentTarget.value.split('\\');
            const filename = filenameParts[filenameParts.length - 1];

            reader.onloadend = (ev) => {
                this.set('fileName', filename);
                this.set('fileChosen', true);
                const result = ev.target.result;
                this.set('fileData', result);
            };
            reader.readAsDataURL(fileHandle);
        }

    },

});
