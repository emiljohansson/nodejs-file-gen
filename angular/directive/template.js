/**
 * ...
 *
 * @author  {author}
 * @version {version}
 * @since   {date}
 */
"use strict";

exports = module.exports = createDirective;

/**
 * Factory method.
 */
function createDirective() {
    /**
     * Returned object.
     * @var {Object}
     */
    var directive = {
        restrict: 'EA',
        replace: true,
        template: '',
        scope: {},
        link: linkFn,
        controller: Controller,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    /**
     * Controller object.
     */
    function Controller() {
        /**
         * Returned object.
         * @var {Object}
         */
        var vm = {};

        /**
         * ...
         * @var {String}
         */
        vm.aVar = "test";

        /**
         * ...
         *
         * @return {Boolean}
         */
        vm.aMethod = function() {
            return true;
        };

        return vm;
    }

    /**
     * Create a link to the view.
     *
     * @param {Object} scope
     * @param {Object} el
     * @param {Object} attr
     * @param {Object} ctrl
     */
    function linkFn(scope, el, attr, ctrl) {
        /**
         * ...
         * @var {String}
         */
        scope.aVar = "test";
    }
}
