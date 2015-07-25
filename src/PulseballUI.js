var PULSEBALL = new pulseball();
var exampleRankingsTable = [{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23},{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":54.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 }, { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }]

$(document).ready( function(){
    PULSEBALL.init(exampleRankingsTable)
    for (i=0; i < PULSEBALL.rankingsTable.length; i++) {
      $('#rankings').append('<tr> <td>' + PULSEBALL.rankingsTable[i]["team"]["name"] + '</td>' + '<td>' + parseFloat(Math.round(PULSEBALL.rankingsTable[i]["pts"] * 100) / 100).toFixed(2) + '</td></tr>');
    }

    $("#match").unbind("click").click( function(e) {
      e.preventDefault()
      var outcome = document.getElementById('outcome').value
      var homeTeam = document.getElementById('home-team').value
      var awayTeam = document.getElementById('away-team').value
      var city = document.getElementById('city').value

      var matchToAdd = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": city, "country": homeTeam}, "teams": [{"id": 2,"name": homeTeam, "abbreviation": homeTeam.substring(0,3).toUpperCase()}, {"id": 1,"name": awayTeam, "abbreviation": awayTeam.substring(0,3).toUpperCase()}],"scores": [ 23,19 ],"status": "C","outcome": outcome }

      PULSEBALL.addMatch(matchToAdd)

      var table = document.getElementById("rankings");
      for(var i = table.rows.length - 1; i > 0; i--){
          table.deleteRow(i);
      }
      for (i=0; i < PULSEBALL.rankingsTable.length; i++) {
        $('#rankings').append('<tr> <td>' + PULSEBALL.rankingsTable[i]["team"]["name"] + '</td>' + '<td>' + parseFloat(Math.round(PULSEBALL.rankingsTable[i]["pts"] * 100) / 100).toFixed(2) + '</td></tr>');
      }
    });
  });