import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get("store").createRecord("friend");
  },
  actions: {
    save: function(friend){
      console.log(friend.get("name"));
      console.log(friend.get("lastname"));
      console.log(friend.get("friendSince"));
      let friendSince = moment(friend.get("friendSince")).format("YYYY-MM-DD");
      friend.set("friendsSince", friendSince);
      friend.save().then(function(){
        console.log("Gravado...")
      });
    }
  }
});
