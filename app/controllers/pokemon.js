import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['offset'],
    offset: 0,

    previousPageButtonIsDisabled: computed("model.offset", function() {
        return this.offset === 0 ;
    }), 

    nextPageButtonIsDisabled: computed("model.{offset,count}", function() {
        const offset = this.offset;
        const itemsPerPage = 20;
        const totalItemCount = this.model.count
        return offset + itemsPerPage >= totalItemCount;
      }),

    actions: {
        nextPage() {
            this.transitionToRoute('pokemon', { 
                queryParams: { 
                    offset: Number(this.offset) + 20
                }
            });
        },
        
        previousPage() {
            this.transitionToRoute('pokemon', { 
                queryParams: { 
                    offset: Number(this.offset) - 20
                }
            });
        }
    }
});
