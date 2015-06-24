export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.glossary.list.letter', {
                    url: '/{letter:[a-z]}/',
                    views: {
                        "terms": {
                            template: require('./glossary.list.letter.html'),
                            controller: 'GlossaryListLetterCtrl as vm',
                            resolve: {
                                letter: function($stateParams){
                                    return $stateParams.letter;
                                }
                            }
                        }
                    }
                });
            
        });

    /////////////

    ngModule.controller('GlossaryListLetterCtrl', GlossaryListLetterCtrl)

    function GlossaryListLetterCtrl(letter) {
        let vm = this;

        vm.letter = letter;

    }

    
}
