export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary', {
                    url: '',
                    abstract: true,
                    template: `<ui-view></ui-view>`
                })

                .state('main.glossary.list', {
                    url: '/',
                    template: require('./glossary.list.html')
                })

                .state('main.glossary.term', {
                    url: '/:slug',
                    template: require('./glossary.term.html')
                })

                ;
            
        });

    //////////////////


    
}
