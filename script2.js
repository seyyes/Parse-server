Parse.initialize("myAppId");
Parse.serverURL = "http://localhost:1337/parse";

var Team = Parse.Object.extend("Team");
var Player = Parse.Object.extend("Player");

var q = new Parse.Query("Team");
q.equalTo("code", "LFC");
q.find().then(function(results){
  console.log("## EQUALTO ##");
  console.log(results);
});


var q = new Parse.Query("Team");
q.equalTo("code", "LFC");
q.first().then(function(obj){
  console.log("## FIRST ##");
  console.log(obj);
});

var q = new Parse.Query("Team");
q.lessThan("squadMarketValue", 125000);
q.find().then(function(teams){
  for (var i=0; i<teams.length; i++){
    var team = teams[i];
    console.log(team.get("code") +"has a market value of " + team.get("squadMarketValue") + " that is < 125M");
  }
});

var q = new Parse.Query("Player");
//q.lessThan("marketValue", 5000);
//q.equalTo("position", "Keeper");
//q.descending("marketValue");
q.limit(1000);
q.skip(10);
q.find().then(function(players){
    console.log(players[0].id);
});