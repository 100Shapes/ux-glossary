export default ngModule => {

    
    ngModule
        .factory('ContentService', ContentService);

    ////////

    function ContentService(Prismic, CONTENT_TYPE_TERM) {

        const contentService = {

            all() {
                return Prismic.documentTypes(CONTENT_TYPE_TERM).then(function(resp) {
                    return resp.results;
                });
            },

            one(idString) {
                return Prismic.document(idString);
            }
            
        };

        return contentService;
    }

}
