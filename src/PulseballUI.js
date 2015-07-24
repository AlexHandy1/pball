var PULSEBALL = new pulseball();
var exampleRankingsTable = [{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23},{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":54.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 }, { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }]

$(document).ready( function(){
    PULSEBALL.init(exampleRankingsTable)
    for (i=0; i < PULSEBALL.rankingsTable.length; i++) {
      $('#rankings').append('<tr> <td>' + PULSEBALL.rankingsTable[i]["team"]["name"] + '</td>' + '<td>' + PULSEBALL.rankingsTable[i]["pts"] + '</td></tr>');
    }
    //why do I have to click twice?
      $('#add-match').submit(function (e) {
        e.preventDefault();
        $("#match").unbind("click").click( function() {
        // $('#match').on('click', function(){
          var outcome = document.getElementById('outcome').value
          var homeTeam = document.getElementById('home-team').value
          var awayTeam = document.getElementById('away-team').value

          //why is this being incremented by 1 more each time
          console.log(outcome)
          console.log(homeTeam)
          console.log(awayTeam)

          var exampleHomeMatchWin = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": "Paris", "country": homeTeam}, "teams": [{"id": 2,"name": homeTeam, "abbreviation": "FRA"}, {"id": 1,"name": awayTeam, "abbreviation": "ENG"}],"scores": [ 23,19 ],"status": "C","outcome": outcome }

          PULSEBALL.addMatch(exampleHomeMatchWin)
          var table = document.getElementById("rankings");
          for(var i = table.rows.length - 1; i > 0; i--){
              table.deleteRow(i);
          }
          for (i=0; i < PULSEBALL.rankingsTable.length; i++) {
            $('#rankings').append('<tr> <td>' + PULSEBALL.rankingsTable[i]["team"]["name"] + '</td>' + '<td>' + PULSEBALL.rankingsTable[i]["pts"] + '</td></tr>');
          }
        })
      });
  });