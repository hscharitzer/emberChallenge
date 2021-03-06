import DS from 'ember-data';

//"id":9093682,
//"start_time": "2021-12-25T07:12:00.000Z",
//"end_time": "2021-12-25T08:22:28.000Z",
//"duration": 4228000,
//"distance": 12090,
//"encoded_trace": null,
//"sport_type_id": 1

export default DS.Model.extend({
	start_time:    DS.attr('date'),
	end_time:    DS.attr('date'),
	duration:    DS.attr('number'),
	distance:    DS.attr('number'),
	encoded_trace: DS.attr('string'),
	corrected_duration: function() {
		var duration = parseInt(this.get('duration'), 10);
		return  duration/1000;
	}.property('duration'),
	has_trace: function() {
		var encodedTrace = this.get('encoded_trace');
		return  encodedTrace ? true : false;
	}.property('encoded_trace')
});
