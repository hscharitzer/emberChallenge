import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement : function(){
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function(){
			var mapContainer = $("#run-trace");

			var encodedTrace = mapContainer.data('trace');
			var decoded = google.maps.geometry.encoding.decodePath(encodedTrace);

			var mapProp = {
				center: decoded[0],
				zoom:12,
				mapTypeId:google.maps.MapTypeId.ROADMAP
			};

			var trace = new google.maps.Polyline({
				path: decoded,
				geodesic: true,
				strokeColor: '#1976D2',
				strokeOpacity: 1.0,
				strokeWeight: 4
			});

			var map = new google.maps.Map(mapContainer[0] ,mapProp);

			trace.setMap(map);
		});
	}
});
