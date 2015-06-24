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
                    controller: 'GlossaryListCtrl as vm',
                    resolve: {

                        ContentService: 'ContentService',

                        terms: function(ContentService) {
                            return ContentService.all();
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('GlossaryListCtrl', GlossaryListCtrl);

    function GlossaryListCtrl(terms) {
        let vm = this;

        vm.terms = terms;
        vm.search = "";
    }
    
}
