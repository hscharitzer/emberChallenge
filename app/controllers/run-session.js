import Ember from 'ember';

export default Ember.ArrayController.extend({
	queryParams: {
		page: {
			refreshModel: true
		},
		order: {
			refreshModel: true
		},
		sortBy: {
			refreshModel: true
		}
	},
	page: 1,
	order: 'desc',
	sortBy: 'id',

	actions: {
		prevPage: function() {
			var page = this.get('page');
			page--;
			this.set('page', page);

			this.send('invalidateModel');
		},
		nextPage: function() {
			var page = this.get('page');
			page++;
			this.set('page', page);

			this.send('invalidateModel');
		},
		sortBy: function(_sortBy){
			var sortBy = this.get('sortBy');
			var order = this.get('order');

			if(_sortBy === sortBy) {
				if(order === 'desc') {
					order = 'asc';
				} else {
					order = 'desc';
				}
			} else {
				sortBy = _sortBy;
				order = 'desc';
			}

			this.set('sortBy', sortBy);
			this.set('order', order);

			this.send('invalidateModel');
		},
	}
});
