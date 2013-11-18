/*global _, afterEach, Backbone, beforeEach, describe, expect, it, jasmine, jQuery, runs, SAMURAIPRINCIPLE, sinon, waits*/
describe('Game of Life Widget', function () {
	'use strict';
	var gameOfLife, widget;
	beforeEach(function () {
		gameOfLife = _.extend(jasmine.createSpyObj('gameOfLife', ['tick', 'toggleCellState']), Backbone.Events);
		widget = jQuery('#gameOfLifeWidget').clone().appendTo('body');
		new SAMURAIPRINCIPLE.GameOfLifeWidget(gameOfLife, widget, 10, 10);
	});
	it('1 - should call toggleCellState method when a table cell is clicked', function () {
		widget.find('.grid tr:nth-child(4) td:nth-child(5)').click();

		expect(gameOfLife.toggleCellState).toHaveBeenCalledWith(3, 4, jasmine.any(Object));
	});
	it('3- should add class alive when cell becomes alive', function () {
		gameOfLife.trigger('cellStateChanged', 3, 4);

		expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
	});
	it('5 - should remove class alive when cell dies', function () {
		gameOfLife.trigger('cellStateChanged', 3, 4);

		gameOfLife.trigger('cellStateChanged', 3, 4);

		expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
	});
	it('6 - should call tick method when tick button is clicked', function () {
		widget.find('.tick').click();

		expect(gameOfLife.tick).toHaveBeenCalled();
	});
	it('8 - should animate cell state changes if animation duration parameter is passed', function () {
		widget = jQuery('#gameOfLifeWidget').clone().appendTo('body');
		new SAMURAIPRINCIPLE.GameOfLifeWidget(gameOfLife, widget, 10, 10, 250);

		gameOfLife.trigger('cellStateChanged', 3, 4);

		expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
		waits(300);
		runs(function () {
			expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
		});
	});
});
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
	it('4 - should dispatch cellStateChanged event when alive cell dies', function () {
		gameOfLife.toggleCellState(2, 3);

		gameOfLife.toggleCellState(2, 3);

		expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, false);
	});
	it('7 - should set the cell state to dead in next generation if the cell is alive in current generation and has less than 2 neighbours', function () {
		gameOfLife.toggleCellState(2, 3);

		gameOfLife.tick();

		expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, false);
	});
	it('7 - should keep the cell alive in next generation if the cell has two or three live neighbours', function () {
		gameOfLife.toggleCellState(2, 3).toggleCellState(2, 4).toggleCellState(2, 5);

		gameOfLife.tick();

		expect(cellStateChangedListener).not.toHaveBeenCalledWith(2, 4, false);
	});
	it('7 - should set the cell state to dead in next generation if the cell is alive in current generation and has more than 3 neighbours', function () {
		gameOfLife.toggleCellState(2, 2).toggleCellState(2, 3).toggleCellState(2, 4)
										.toggleCellState(3, 3)
										.toggleCellState(4, 3);

		gameOfLife.tick();

		expect(cellStateChangedListener).not.toHaveBeenCalledWith(2, 3, false);
	});
	it('7 - should set the cell state to alive in next generation if the cell is dead and has three live neighbours', function () {
		gameOfLife.toggleCellState(2, 3).toggleCellState(2, 4).toggleCellState(2, 5);

		gameOfLife.tick();

		expect(cellStateChangedListener).toHaveBeenCalledWith(3, 4, true);
	});
});
describe('Game of Life Widget - now with sinon.js', function () {
	'use strict';
	var clock;
	beforeEach(function () {
		clock = sinon.useFakeTimers();
	});
	afterEach(function () {
		clock.restore();
	});
	it('9 - should animate cell state changes if animation duration parameter is passed', function () {
		var gameOfLife = _.extend(jasmine.createSpyObj('gameOfLife', ['tick', 'toggleCellState']), Backbone.Events),
			widget;
		widget = jQuery('#gameOfLifeWidget').clone().appendTo('body');
		new SAMURAIPRINCIPLE.GameOfLifeWidget(gameOfLife, widget, 10, 10, 250);

		gameOfLife.trigger('cellStateChanged', 3, 4);

		clock.tick(200);
		expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
		clock.tick(100);
		expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
	});
});
