export default ngModule => {

    
    ngModule
        .factory('ContentService', ContentService);

    ////////

    function ContentService(Prismic) {

        const contentService = {

            all() {
                return Prismic.documentTypes('blog-post').then(function(resp) {
                    return resp.results;
                });
            }
            
        };

        return contentService;
    }

}
