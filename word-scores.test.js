it("should find the scores for each word", function() {
  expect(calculateWordScores(["a", "b", "c"])).toEqual([1, 3, 3]);
  expect(calculateWordScores(["apple", "banana", "cherry"])).toEqual([9, 8, 14]);
  expect(calculateWordScores(["ha", "sh", "yo", "ax", "hm"]))
    .toEqual([5, 5, 5, 9, 7]);
});

it("should handle inputs with non-letter characters", function() {
  expect(calculateWordScores(["hi!!!", "hello???"])).toEqual([null, null]);
  expect(calculateWordScores(["When", "I'm", "64"])).toEqual([10, null, null]);
  expect(calculateWordScores(["what", "", "a", "", "strange", "", "arrray", "!"]))
    .toEqual([10, 0, 1, 0, 8, 0, 9, null]);
});
