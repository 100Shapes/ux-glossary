export default ngModule => {

    require('./ux-letter-selector.less');
    
    function uxLetterSelector() {
        return {
            restrict: 'E',
            replace: true,
            template: require('./ux-letter-selector.html')
        }
    }

    ngModule.directive('uxLetterSelector', uxLetterSelector);
    
}
