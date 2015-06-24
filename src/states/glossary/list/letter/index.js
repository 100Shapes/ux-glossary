export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary.list.letter', {
                    url: '/{letter:[a-z]}/',
                    views: {
                        "terms": {
                            template: require('./glossary.list.letter.html')
                        }
                    }
                });
            
        });

    
}
