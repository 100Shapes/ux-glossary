export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary.term', {
                    url: '/:letter/:termId',
                    controller: 'GlossaryTermCtrl as vm',
                    template: require('./glossary.term.html'),
                    resolve: {

                        ContentService: 'ContentService',

                        termId: function($stateParams){
                            return $stateParams.termId;
                        },

                        term: function(ContentService, termId) {
                            return ContentService.one(termId);
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('GlossaryTermCtrl', GlossaryTermCtrl);

    function GlossaryTermCtrl(term) {
        let vm = this;

        vm.term = term;
    }
    
}
