function pulseball (){
  this.rankingsTable = null
  this.sortRankingsTable = function() {
   function comparePts(a,b) {
      if (a.pts < b.pts)
        return -1;
      if (a.pts > b.pts)
        return 1;
      return 0;
    }
    this.rankingsTable.sort(comparePts).reverse()
  }
  this.findRankingsTablePosition = function(array, attr1,attr2, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr1][attr2] === value) {
            return i;
        }
    }
  }
}

pulseball.prototype.init = function( rankingsJson ) {
  this.rankingsTable = rankingsJson
};

pulseball.prototype.addMatch = function( match ) {
  var home = match.teams[0].name
  var away = match.teams[1].name
  var outcome = match.outcome
  var awayIndex = this.findRankingsTablePosition(this.rankingsTable, "team", "name", away)
  var homeIndex = this.findRankingsTablePosition(this.rankingsTable, "team", "name", home)
  var pointsDifference = parseFloat(((this.rankingsTable[homeIndex].pts+3) - this.rankingsTable[awayIndex].pts).toFixed(2))

  if (pointsDifference >=10) {
    pointsDifference = 10.00
  } else if (pointsDifference <= -10){
    pointsDifference = -10.00
  } else {
    pointsDifference
  }

  if (outcome == "B") {
    var pointsAvailable = parseFloat((1 + (pointsDifference/10)).toFixed(2))
    this.rankingsTable[awayIndex].pts += pointsAvailable
    this.rankingsTable[homeIndex].pts -= pointsAvailable
  } else if(outcome == "A") {
    var pointsAvailable = parseFloat((1 - (pointsDifference/10)).toFixed(2))
    this.rankingsTable[awayIndex].pts -= pointsAvailable
    this.rankingsTable[homeIndex].pts += pointsAvailable
  } else if(outcome == "D"){
    var pointsAvailable = parseFloat((pointsDifference/10).toFixed(2))
    this.rankingsTable[awayIndex].pts += pointsAvailable
    this.rankingsTable[homeIndex].pts += pointsAvailable
  } else {
    return this.sortRankingsTable();
  }

  this.sortRankingsTable();
};