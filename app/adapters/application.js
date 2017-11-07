// import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
//     host: "https://ember-interview.herokuapp.com"
// });

import LSAdapter from 'ember-localstorage-adapter';

export default LSAdapter.extend({
  namespace: 'friendsapi'
});