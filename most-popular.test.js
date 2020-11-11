it("should find the most popular", function() {
  expect(mostPopularLetter("abbaaac")).toEqual("a");
  expect(mostPopularLetter("vroom")).toEqual("o");
});

it("should handle ties correctly", function() {
  expect(mostPopularLetter("cabba")).toEqual("b");
  expect(mostPopularLetter("caabb")).toEqual("a");
});
