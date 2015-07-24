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
}

pulseball.prototype.init = function( rankingsJson ) {
  this.rankingsTable = rankingsJson
};