describe ("PULSEBALL", function() {
  var PULSEBALL;

  beforeEach( function(){
    PULSEBALL = new pulseball();
  });

  it("has an empty rankings table property when function is created", function(){
    expect(PULSEBALL.rankingsTable).toEqual(null);
  })

  it("has a full rankings table processed from a JSON input when initialized", function(){
    PULSEBALL.init([{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23},{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":54.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 }, { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }])
    expect(PULSEBALL.rankingsTable).toEqual([{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23},{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":54.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 }, { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }])
  })

  it("can sort the rankings table by pts", function(){
    PULSEBALL.init([{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23},{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":59.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 56.95 }, { "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 53.50 }])
    PULSEBALL.sortRankingsTable();
    expect(PULSEBALL.rankingsTable).toEqual([{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts":59.00 },{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 56.95 },{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23}, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 53.50 },{ "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 }])
  })
})


