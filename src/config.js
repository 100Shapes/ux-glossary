export default ngModule => {

    ngModule

        // Redirect to playlist.list
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        })

        // Use HTML5 pushstate (nice URLs)
        .config(function($locationProvider) {
            $locationProvider.hashPrefix('!');
        })

        // Configure Prismic
        .config(function(PrismicProvider) {
            PrismicProvider.setApiEndpoint('https://ux-glossary.prismic.io/api');
            PrismicProvider.setAccessToken('');
            PrismicProvider.setClientId('');
            PrismicProvider.setClientSecret('');
            PrismicProvider.setLinkResolver(function(ctx, doc) {
                return `/#!/${doc.id}/`;
            });
        })
        
        ;
    
}
