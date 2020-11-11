it('should price books correctly', function () {
  expect(getPrice(books[2])).toEqual(10.8); 
  expect(getPrice(books[0])).toEqual(5.4);  
});


// TODO: additional tests here ...

it('should decrease amount of copies correctly', function() {
  expect(sellBook(books[3])).
})
