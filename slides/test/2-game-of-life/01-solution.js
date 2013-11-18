var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.GameOfLifeWidget = function (gameOfLife, element, rows, columns) {
	'use strict';
	element.find('.grid td').click(gameOfLife.toggleCellState.bind(gameOfLife, 3, 4));
};
