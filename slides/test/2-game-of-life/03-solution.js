/*global _, Backbone, jQuery*/
var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.GameOfLife = function () {
	'use strict';
	var self = this;
	_.extend(this, Backbone.Events);
	this.toggleCellState = function (row, column) {
		self.trigger('cellStateChanged', row, column, true);
	};
};
SAMURAIPRINCIPLE.GameOfLifeWidget = function (gameOfLife, element, rows, columns) {
	'use strict';
	element.find('.grid td').each(function (index) {
		jQuery(this).click(gameOfLife.toggleCellState.bind(
			gameOfLife,
			Math.floor(index / columns),
			index % columns
		));
	});
	gameOfLife.on('cellStateChanged', function (row, column) {
		element
			.find('tr:nth-child(' + (row + 1) + ') td:nth-child(' + (column + 1) + ')')
			.toggleClass('alive');
	});
};
