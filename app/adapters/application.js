import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: "https://ember-interview.herokuapp.com"
});