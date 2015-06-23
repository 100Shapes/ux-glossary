export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary.term', {
                    url: '/:slug',
                    controller: 'GlossaryTermCtrl as vm',
                    template: require('./glossary.term.html')
                });
            
        });

    //////////////////

    ngModule.controller('GlossaryTermCtrl', GlossaryTermCtrl);

    function GlossaryTermCtrl() {
        let vm = this;
    }
    
}
