import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['offset'],
    offset: 0,

    itemsPerPage: 20,

    actions: {
        nextPage() {
            this.transitionToRoute('pokemon', { 
                queryParams: { 
                    offset: Number(this.offset) + this.itemsPerPage
                }
            });
        },
        
        previousPage() {
            this.transitionToRoute('pokemon', { 
                queryParams: { 
                    offset: Number(this.offset) - this.itemsPerPage
                }
            });
        }
    }
});
