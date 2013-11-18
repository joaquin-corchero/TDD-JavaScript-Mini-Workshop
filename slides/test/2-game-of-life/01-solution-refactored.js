/*global jQuery*/
var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.GameOfLifeWidget = function (gameOfLife, element, rows, columns) {
	'use strict';
	element.find('.grid td').each(function (index) {
		jQuery(this).click(gameOfLife.toggleCellState.bind(
			gameOfLife,
			Math.floor(index / columns),
			index % columns
		));
	});
};
