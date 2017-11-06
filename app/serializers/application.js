import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
// });


// app/serializers/cat.js
export default DS.RESTSerializer.extend({
  host: "https://ember-interview.herokuapp.com",
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      friends: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  primaryKey: '_id'
});