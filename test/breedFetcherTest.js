
const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      // compare returned description
      assert.equal(expectedDesc.trim(), desc.trim());

      done();
    });
  });
  it('returns "no match" when an invalid entry is given', (done) => {
    fetchBreedDescription('poop', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, "no match");

      done();
    });
  });
  it('returns "Breed not found" when an invalid entry is given', (done) => {
    fetchBreedDescription('', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, "Breed not found");

      done();
    });
  });
});


