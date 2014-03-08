/*global describe, expect, isCellAliveInNextGeneration, it*/
describe('Game of Life', function () {
	'use strict';
	describe('Determining whether cell is alive in next generation', function () {
	    var result;
		it('should return false when a live cell has fewer than two live neighbours - under-population', function () {
			result = isCellAliveInNextGeneration(true, 0);

			expect(result).toBe(true);
		});
		it('should return true when a live cell has two or three live neighbours - survival', function () {
		    result = isCellAliveInNextGeneration(true, 2);

		    expect(result).toBe(true);
		});
		it('should return false when a live cell has more than three live neighbours - overcrowding', function () {
		    result = isCellAliveInNextGeneration(true, 4);

		    expect(result).toBe(false);
		});
		it('should return true when a dead cell has exactly three live neighbours - reproduction', function () {
		});
	});
});
