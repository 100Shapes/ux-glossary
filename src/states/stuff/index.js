export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.stuff', {
                    url: '/stuff/',
                    controller: 'StuffCtrl as vm',
                    template: require('./stuff.html'),
                    resolve: {

                        ContentService: 'ContentService',

                        everything: function(ContentService) {
                            return ContentService.all();
                        }

                    }
                })
            
        });

    //////////////////

    ngModule.controller('StuffCtrl', StuffCtrl);


    function StuffCtrl(everything) {
        let vm = this;

        vm.everything = everything;
    }

    //////////////////

    
}
