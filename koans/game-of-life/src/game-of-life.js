var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};

SAMURAIPRINCIPLE.GameOfLife = function () {
    'use strict';
    var self = this;
    _.extend(this, Backbone.Events);

    this.toggleCellState = function (row, column) {
        self.trigger('cellStateChange', row, column, true);
    };

    this.tick = function () {
    };
};

SAMURAIPRINCIPLE.GameOfLifeWidget = function (gameOfLife, element, rows, columns, duration) {
    'use strict';
    element.find('.grid td').each(function (index) {
        jQuery(this).click(gameOfLife.toggleCellState.bind(
            gameOfLife,
            Math.floor(index / columns),
            index % columns
            ));
    });

    element.find('.tick').click(function () {
        gameOfLife.tick();
    });

    gameOfLife.on('cellStateChanged', function (row, column) {
        if (!duration) {
            element.find('tr:nth-child(' + (row + 1) + ') td:nth-child(' + (column + 1) + ')')
              .toggleClass('alive');
            return;
        }

        setTimeout(
            function () {
                element.find('tr:nth-child(' + (row + 1) + ') td:nth-child(' + (column + 1) + ')')
                .toggleClass('alive');
            },
        duration);
    });
};