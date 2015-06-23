// Libs
const angular = require('angular');
require('angular-ui-router');
require('angular-animate');

// Styles
require('css/main.less');


const ngModule = angular.module('app', [
    'ui.router',
    'ngAnimate'
]);

require('./config')(ngModule);
require('./shared')(ngModule);
require('./states')(ngModule);
require('./constants')(ngModule);


angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});