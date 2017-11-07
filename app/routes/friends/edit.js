import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    let m = this.get("store").find("friend", params.id);
    return m;
  },
  actions: {
    save: function(friend){
      let friendSince = moment(friend.get("friendSince")).format("YYYY-MM-DD");
      friend.set("friendsSince", friendSince);
      friend.save().then(function(){
        console.log("Gravado...")
      });
    }
  }
});