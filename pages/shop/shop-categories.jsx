import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import CatalogTop from '../../components/partials/shop/CatalogTop';
import CategoriesBestSeller from '../../components/partials/shop/CategoriesBestSeller';
import CategoriesRecommendItems from '../../components/partials/shop/CategoriesRecommendItems';
import ConsummerElectronics from '../../components/partials/shop/categories-box/ConsummerElectronics';
import ClothingAndApparel from '../../components/partials/shop/categories-box/ClothingAndApparel';
import GardenAndKitchen from '../../components/partials/shop/categories-box/GardenAndKitchen';
import MoreCategories from '../../components/partials/shop/MoreCategories';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import {
    clothingCollection,
    electronicCollection,
    kitchenCollection,
    categories,
} from '../../public/static/data/shopCategories';
import { getProducts } from '../../store/product/action';
import { getCollections } from '../../store/collection/action';

class ShopCategoriesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'Shop Categories',
                },
            ],
        };
    }

    componentDidMount() {
        const collectionsParams = [
            'shop_best_sale_items',
            'shop-recommend-items',
        ];
        this.props.dispatch(getCollections(collectionsParams));
        this.props.dispatch(getProducts());
    }

    render() {
        const { allProducts } = this.props;
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={this.state.breadCrumb} />
                <div className="ps-page--shop" id="shop-categories">
                    <div className="container">
                        <CatalogTop />
                        <CategoriesBestSeller
                            products={allProducts ? allProducts : []}
                        />
                        <CategoriesRecommendItems
                            products={allProducts ? allProducts : []}
                        />
                        <ConsummerElectronics data={electronicCollection} />
                        <ClothingAndApparel data={clothingCollection} />
                        <GardenAndKitchen data={kitchenCollection} />
                        <MoreCategories data={categories} />
                    </div>
                </div>
                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.product;
};
export default connect(mapStateToProps)(ShopCategoriesPage);
