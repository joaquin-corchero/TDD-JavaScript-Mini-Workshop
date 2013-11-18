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
    it('should call toggleCellState method when a table cell is clicked', function () {
        element.find('.grid tr:nth-child(4) td:nth-child(5)').click();

        expect(gameOfLife.toggleCellState).toHaveBeenCalledWith(3, 4, jasmine.any(Object));
    });
});
