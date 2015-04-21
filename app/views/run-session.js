import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement : function(){
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function(){

			function footerStickyAlternative() {
				var paginator = $("#inline-pagination");
				var footer = $("#sticky-pagination");

				if(paginator.isOnScreen(0.2, 0.2)) {
					//footer.hide();
					footer.fadeOut("fast");
				} else {
					//footer.show();
					footer.fadeIn("fast");
				}
			}

			footerStickyAlternative();

			$(window).on('resize', null, footerStickyAlternative);

			$(window).on('scroll', null, footerStickyAlternative);
		});
	}
});
