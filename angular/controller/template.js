/**
 * ...
 *
 * @author  {author}
 * @version {version}
 * @since   {date}
 */
"use strict";

exports = module.exports = createController;

/**
 * Controller object.
 *
 * @return {Object}
 */
function createController() {
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
