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
            },

            forLetter(letter) {

                return Prismic.query(`[[:d = any(document.tags, ["${letter.toUpperCase()}"])][:d = at(document.type, "${CONTENT_TYPE_TERM}")]]`).then(
                    (resp) => {
                        return resp.results;
                    }
                );
            }
            
        };

        return contentService;
    }

}
