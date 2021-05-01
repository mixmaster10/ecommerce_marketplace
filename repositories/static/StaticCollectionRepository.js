import collections from '../../public/static/data/static-collections';

class StaticCollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }

    getCollections(payload) {
        const result = collections.filter(({ slug }) => {
            return payload.includes(slug);
        });
        return result;
    }
}

export default new StaticCollectionRepository();
