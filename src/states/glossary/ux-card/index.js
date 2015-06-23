export default ngModule => {

    require('./ux-card.less');
    
    function uxCard() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                term: "="
            },
            template: require('./ux-card.html')
        }
    }

    ngModule.directive('uxCard', uxCard);
    
}
