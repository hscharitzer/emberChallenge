import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement : function(){
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function(){

			var mapProp = {
				center:new google.maps.LatLng(51.508742,-0.120850),
				zoom:5,
				mapTypeId:google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById("run-trace"),mapProp);

		});
	}
});
