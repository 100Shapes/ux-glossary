export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary', {
                    url: '',
                    abstract: true,
                    template: `<ui-view></ui-view>`
                });
            
        });

    //////////////////


    require('./list')(ngModule);
    require('./term')(ngModule);

    
}