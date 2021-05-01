import products from '../../public/static/data/static-products';
import brands from '../../public/static/data/static-brands';
import categories from '../../public/static/data/static-categories.json';

class StaticProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    getRecords() {
        return products;
    }
    getTotalRecords() {
        return products.length;
    }

    getBrands() {
        return brands;
    }

    getProductCategories() {
        return categories;
    }

    getProductsById(payload) {
        return products.find(product => (product.id = payload));
    }

    getProductsByCategory(payload) {
        console.log(payload);
        const category = categories.find(category => category.slug === payload);
        if (category !== undefined) {
            return category.products;
        } else {
            return [];
        }
    }

    getProductsByBrands(payload) {
        const result = brands.filter(({ id }) => {
            return payload.includes(id);
        });
        return result;
    }

    getProductsByPriceRange(payload) {
        return products.filter(
            product =>
                product.price >= payload.price_gt &&
                product.price <= payload.price_lt
        );
    }
    getProductsByKeyword(payload) {
        let regexp = new RegExp(payload.toLowerCase(), 'g');
        return products.filter(product =>
            product.title.toLowerCase().match(regexp)
        );
    }
}

export default new StaticProductRepository();
