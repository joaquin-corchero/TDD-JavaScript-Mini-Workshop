/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE*/
describe('Game of Life', function () {
	'use strict';
	var gameOfLife, cellStateChangedListener;
	beforeEach(function () {
		gameOfLife = new SAMURAIPRINCIPLE.GameOfLife();
		cellStateChangedListener = jasmine.createSpy('cellStateChangedListener');
		gameOfLife.on('cellStateChanged', cellStateChangedListener);
	});
	it('2 - should dispatch cellStateChanged event when dead cell becomes alive', function () {
		gameOfLife.toggleCellState(2, 3);

		expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, true);
	});
});
