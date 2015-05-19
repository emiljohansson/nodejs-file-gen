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
 *
 * @return {Object}
 */
function createDirective() {
    /**
     * Returned object.
     * @type {Object}
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
         * @type {Object}
         */
        var vm = {};

        /**
         * ...
         * @type {String}
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
         * @type {String}
         */
        scope.aVar = "test";
    }
}
