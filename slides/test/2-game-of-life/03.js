/*global _, Backbone, beforeEach, describe, expect, it, jasmine, jQuery, SAMURAIPRINCIPLE*/
describe('Game of Life Widget', function () {
    'use strict';
    var gameOfLife, element, gameOfLifeWidget;
    beforeEach(function () {
        gameOfLife = _.extend(
            jasmine.createSpyObj('gameOfLife', ['toggleCellState']),
            Backbone.Events
        );
        element = jQuery('#gameOfLifeWidget').clone().appendTo('body');
        gameOfLifeWidget = new SAMURAIPRINCIPLE.GameOfLifeWidget(gameOfLife, element, 10, 10);
    });
	it('should add class alive when cell becomes alive', function () {
		gameOfLife.trigger('cellStateChanged', 3, 4);

		expect(element.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
	});
});
