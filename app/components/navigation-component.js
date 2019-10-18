import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    previousPageButtonIsDisabled: computed("offset", function() {
        return this.offset === 0 ;
    }), 

    nextPageButtonIsDisabled: computed("offset", "count", function() {
        return this.offset + this.itemsPerPage >= this.count;
    }),
});
