export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary.list.start', {
                    url: '/',
                    views: {
                        "terms": {
                            template: require('./glossary.list.start.html')
                        }    
                    }
                });
            
        });

    
    
}
