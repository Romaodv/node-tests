const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);

        expect(res).toBe(44).toBeA('number');
    });
  });

  // Async sum
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  // Basic square
  it('should square a number', () => {
    var res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
  });

  // Async square

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (square) => {
      expect(square).toBe(25).toBeA('number');
      done();
    });
  });
});

// Testing

// Basic sum


// Object Testing

//should verify first and last names are set
// assert it includes firstName and lastName with proper values

it('should verify first and last name', () => {
  var user = {
    age: 19,
    location: 'Brazil'
  }
  var name = 'Guilherme Romão';

  var res = utils.setName(user, name);

  expect(res).toInclude({
    firstName: 'Guilherme',
    lastName: 'Romão'
  }).toBeA('object');

});


// Just a playground

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'Guilherme',
//     age: 19,
//     location: 'Brazil'
//   }).toExclude({
//     age: 23
//   })
// });
