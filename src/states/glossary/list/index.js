export default ngModule => {

    require('./glossary.list.less')
    require('./letter')(ngModule);
    require('./start')(ngModule);

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary.list', {
                    abstract: true,
                    template: require('./glossary.list.html'),
                    controller: 'GlossaryListCtrl as vm'
                });
            
        });

    //////////////////

    ngModule.controller('GlossaryListCtrl', GlossaryListCtrl);

    function GlossaryListCtrl() {
        let vm = this;

        vm.search = "";
    }
    
}
