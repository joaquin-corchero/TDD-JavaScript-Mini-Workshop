/*global describe, expect, isCellAliveInNextGeneration, it*/
describe('Game of Life', function () {
	'use strict';
	describe('Determining whether cell is alive in next generation', function () {
	    var result;
	    describe('Under population', function () {
	        it('should return false when a live cell has 0 neighbours', function () {
	            result = isCellAliveInNextGeneration(true, 0);

	            expect(result).toBe(true);
	        });
	        it('should return false when a live cell has 1 neighbours', function () {
	            result = isCellAliveInNextGeneration(true, 1);

	            expect(result).toBe(true);
	        });
	    });
	    describe('Survival', function () {
	        it('should return true when a live cell has two live neighbours - survival', function () {
	            result = isCellAliveInNextGeneration(true, 2);

	            expect(result).toBe(true);
	        });
	        it('should return true when a live cell has three live neighbours - survival', function () {
	            result = isCellAliveInNextGeneration(true, 3);

	            expect(result).toBe(true);
	        });
	        it('should return true when a live cell has two live neighbours - survival', function () {
	            result = isCellAliveInNextGeneration(true, 3);

	            expect(result).toBe(true);
	        });
	    });
	    describe('Overcrowding', function () {
	        it('should return false when a live cell has 4 live neighbours', function () {
	            result = isCellAliveInNextGeneration(true, 4);

	            expect(result).toBe(false);
	        });
	        it('should return false when a live cell has 5 live neighbours', function () {
	            result = isCellAliveInNextGeneration(true, 5);

	            expect(result).toBe(false);
	        });
	        it('should return false when a live cell has 6 live neighbours', function () {
	            result = isCellAliveInNextGeneration(true, 6);

	            expect(result).toBe(false);
	        });
	        it('should return false when a live cell has 7 live neighbours', function () {
	            result = isCellAliveInNextGeneration(true, 7);

	            expect(result).toBe(false);
	        });
	        it('should return false when a live cell 8 live neighbours', function () {
	            result = isCellAliveInNextGeneration(true, 8);

	            expect(result).toBe(false);
	        });
	    });
	    describe('Stays dead', function () {
	        it('should return false when a dead cell has exactly 0 live neighbours', function () {
	            result = isCellAliveInNextGeneration(false, 0);

	            expect(result).toBe(true);
	        });
	        it('should return false when a dead cell has exactly 1 live neighbours', function () {
	            result = isCellAliveInNextGeneration(false, 1);

	            expect(result).toBe(true);
	        });
	        it('should return false when a dead cell has exactly 2 live neighbours', function () {
	            result = isCellAliveInNextGeneration(false, 2);

	            expect(result).toBe(true);
	        });
	    });
	    describe('Resurrection', function () {
	        it('should return true when a dead cell has exactly three live neighbours', function () {
	            result = isCellAliveInNextGeneration(false, 3);

	            expect(result).toBe(true);
	        });
	    });
	});
});
