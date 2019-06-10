Parse.initialize("myAppId");
Parse.serverURL = "http://localhost:1337/parse";

var Team = Parse.Object.extend("Team");
var Player = Parse.Object.extend("Player");

//var q = new Parse.Query("Player");
//q.containedIn("position", ["Centre Back", "Centre Forward"]);//Si besoin on peut mettre le contraire notContainedIn
//q.limit(1000);
//q.find().then(function(players){
//    console.log(players.length);
//});


//var q = new Parse.Query("Player");
//q.containedIn("position", ["Centre Back", "Centre Forward"]);//Si besoin on peut mettre le contraire notContainedIn
//q.limit(1000);
//q.count().then(function(count){
//    console.log(count);
//});


//Faire un select
//var q = new Parse.Query("Player");
//q.select("name");
//q.find().then(function(results){
//    console.log("Name of the first player");
//    console.log(results[0].get("position"));
//    console.log(results[0].attributes);
//    results[0].fetch(function(){
//      console.log(results[0].get("position"));
//      console.log(results[0].attributes);
//    })
//});


//var expensiveTeamsQuery = new Parse.Query("Team");
//expensiveTeamsQuery.greaterThan("squadMarketValue", 100000); 
//var teamCodes = [];
//expensiveTeamsQuery.find().then(function(results){
//  for (var i=0; i<results.length; i++){
//    teamCodes.push(results[i].get("code"));
//  }
//  console.log(teamCodes);
//  var q = new Parse.Query("Player");
//q.containedIn("teamCode", teamCodes);
//q.count().then(function(count){
//  console.log("Found " + count + " players in expensive teams");
//});
//});

//var expensiveTeamsQuery = new Parse.Query("Team");
//expensiveTeamsQuery.greaterThan("squadMarketValue", 100000); 
//var q = new Parse.Query("Player");
//q.matchesKeyInQuery("teamCode", "code", expensiveTeamsQuery);

//Matches key
//q.count().then(function(count){
//  console.log("Found " + count + " players in expensive teams");
//});


//Players who are english or their marketValue is less  than 5000
//var q1 = new Parse.Query("Player");
//q1.equalTo("nationality", "England");

//var q2 = new Parse.Query("Player");
//q2.lessThan("marketValue", 5000);

//var q = Parse.Query.or(q1, q2);
//q.count.then(function(count){
//  console.log("Found" + count + "players in who are from england or cheap");
//});

//var q = new Parse.Query("Team");
//q.equalTo("code", "LFC");
//q.first().then(function(team){
//  console.log(team.attributes);
  
//  var q = new Parse.Query("Player");
//  q.equalTo("teamCode", team);
//  q.find().then(function(players){
//    for (var i=0; i<players.length; i++){
//     console.log(players[i].get("name"));
//  }  
//});
//});




var expensiveTeamsQuery = new Parse.Query("Team");
expensiveTeamsQuery.greaterThan("squadMarketValue", 100000); 
var q = new Parse.Query("Player");
q.matchesQuery("team", expensiveTeamsQuery);
q.count().then(function(count){
  console.log("Found " + count + " players in expensive teams");
});

