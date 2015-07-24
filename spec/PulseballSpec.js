describe ("PULSEBALL", function() {
  var PULSEBALL;
  var exampleRankingsTable;
  var unsortedRankingsTable;
  var exampleHomeMatchWin;
  var exampleAwayMatchWin;
  var exampleDraw;
  var examplePlusTenDiffHomeMatchWin;
  var noResultMatch;


  beforeEach( function(){
    PULSEBALL = new pulseball();
    exampleRankingsTable = [{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23},{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":54.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 }, { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }]
    unsortedRankingsTable = [{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23},{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":59.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 56.95 }, { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 53.50 }]
    exampleHomeMatchWin = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": "Paris", "country": "France"}, "teams": [{"id": 2,"name": "France", "abbreviation": "FRA"}, {"id": 1,"name": "England", "abbreviation": "ENG"}],"scores": [ 23,19 ],"status": "C","outcome": "A" }
    exampleAwayMatchWin = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": "Paris", "country": "France"}, "teams": [{"id": 2,"name": "France", "abbreviation": "FRA"}, {"id": 1,"name": "England", "abbreviation": "ENG"}],"scores": [ 19,23 ],"status": "C","outcome": "B" }
    exampleDraw = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": "Paris", "country": "France"}, "teams": [{"id": 2,"name": "France", "abbreviation": "FRA"}, {"id": 1,"name": "England", "abbreviation": "ENG"}],"scores": [ 19,19 ],"status": "C","outcome": "D" }
     examplePlusTenDiffHomeMatchWin = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": "Sydney", "country": "Australia"}, "teams": [{"id": 32,"name": "Australia", "abbreviation": "AUS"}, {"id": 24,"name": "Romania", "abbreviation": "ROM"}],"scores": [ 23,19 ],"status": "C","outcome": "A" }
     examplePlusTenDiffAwayMatchWin = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": "Sydney", "country": "Australia"}, "teams": [{"id": 32,"name": "Australia", "abbreviation": "AUS"}, {"id": 24,"name": "Romania", "abbreviation": "ROM"}],"scores": [ 19,23 ],"status": "C","outcome": "B" }
     noResultMatch = {"matchId": 2524, "description": "Match 2", "venue": {"id": 900,"name": "Stadium", "city": "Sydney", "country": "Australia"}, "teams": [{"id": 32,"name": "Australia", "abbreviation": "AUS"}, {"id": 24,"name": "Romania", "abbreviation": "ROM"}],"scores": [ 19,23 ],"status": "C","outcome": "N" }
    });

  it("has an empty rankings table property when function is created", function(){
    expect(PULSEBALL.rankingsTable).toEqual(null);
  })

  it("has a full rankings table processed from a JSON input when initialized", function(){
    PULSEBALL.init(exampleRankingsTable)
    expect(PULSEBALL.rankingsTable).toEqual(exampleRankingsTable)
  })

  it("can sort the rankings table by pts", function(){
    PULSEBALL.init(unsortedRankingsTable)
    PULSEBALL.sortRankingsTable();
    expect(PULSEBALL.rankingsTable).toEqual([{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":59.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 56.95 },{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23}, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 53.50 },{ "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }])
  })

    it("can find the position of a team within the rankings table to support adding a match", function() {
      PULSEBALL.init(exampleRankingsTable)
      expect(PULSEBALL.findRankingsTablePosition(PULSEBALL.rankingsTable, "team", "name", "England")).toEqual(3)
    })

      it("can add an away match win and update the rankings table pts rounded to 2 decimal places", function() {
        PULSEBALL.init(exampleRankingsTable)
        PULSEBALL.addMatch(exampleAwayMatchWin)
        expect(PULSEBALL.rankingsTable[2]["team"]["name"]).toEqual("England")
        expect(PULSEBALL.rankingsTable[2].pts).toEqual(53.68)
        expect(PULSEBALL.rankingsTable[3]["team"]["name"]).toEqual("France")
        expect(PULSEBALL.rankingsTable[3].pts).toEqual(51.59)
        })

      it("can add a home match win and update the rankings table pts rounded to 2 decimal places", function() {
        PULSEBALL.init(exampleRankingsTable)
        PULSEBALL.addMatch(exampleHomeMatchWin)
        expect(PULSEBALL.rankingsTable[2]["team"]["name"]).toEqual("France")
        expect(PULSEBALL.rankingsTable[2].pts).toEqual(53.59)
        expect(PULSEBALL.rankingsTable[3]["team"]["name"]).toEqual("England")
        expect(PULSEBALL.rankingsTable[3].pts).toEqual(51.68)
      })

      it("can add a draw and update the rankings table pts rounded to 2 decimal places", function() {
        PULSEBALL.init(exampleRankingsTable)
        PULSEBALL.addMatch(exampleDraw)
        expect(PULSEBALL.rankingsTable[2]["team"]["name"]).toEqual("France")
        expect(PULSEBALL.rankingsTable[2].pts).toEqual(53.31)
        expect(PULSEBALL.rankingsTable[3]["team"]["name"]).toEqual("England")
        expect(PULSEBALL.rankingsTable[3].pts).toEqual(52.68)
        })

      it("can add a match where ratings point difference is greater than 10", function() {
        PULSEBALL.init(exampleRankingsTable)
        PULSEBALL.addMatch(examplePlusTenDiffHomeMatchWin)
        expect(PULSEBALL.rankingsTable).toEqual(exampleRankingsTable)
      })

      it ("can add a match where ratings point difference is greater than -10", function() {
        PULSEBALL.init(exampleRankingsTable)
        PULSEBALL.addMatch(examplePlusTenDiffAwayMatchWin)
        expect(PULSEBALL.rankingsTable[0]["team"]["name"]).toEqual("New Zealand")
         expect(PULSEBALL.rankingsTable[3]["team"]["name"]).toEqual("Australia")
        expect(PULSEBALL.rankingsTable[3].pts).toEqual(52.23)
        expect(PULSEBALL.rankingsTable[4]["team"]["name"]).toEqual("Romania")
        expect(PULSEBALL.rankingsTable[4].pts).toEqual(45.50)
      })

      it ("makes no changes to table if there is No Result completed in match", function() {
         PULSEBALL.init(exampleRankingsTable)
         PULSEBALL.addMatch(noResultMatch)
         expect(PULSEBALL.rankingsTable).toEqual(exampleRankingsTable)
      })

      it("can process multiple match results", function() {
        PULSEBALL.init(exampleRankingsTable)
        PULSEBALL.addMatch(exampleHomeMatchWin)
        PULSEBALL.addMatch(exampleAwayMatchWin)
        PULSEBALL.addMatch(exampleDraw)
        expect(PULSEBALL.rankingsTable[2]["team"]["name"]).toEqual("England")
        expect(PULSEBALL.rankingsTable[2].pts).toEqual(53.36)
        expect(PULSEBALL.rankingsTable[3]["team"]["name"]).toEqual("France")
        expect(PULSEBALL.rankingsTable[3].pts).toEqual(52.29)
      })
})

