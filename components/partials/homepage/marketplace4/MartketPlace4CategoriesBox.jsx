import React, { Component } from 'react';
import CategoriesBoxConsumerElectronics from './modules/CategoriesBoxConsumerElectronics';
import CategoriesBoxClothings from './modules/CategoriesBoxClothings';
import CategoriesBoxGardenAndKitchen from './modules/CategoriesBoxGardenAndKitchen';

class MartketPlace4CategoriesBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ps-categories-box">
                <div className="container">
                    <CategoriesBoxConsumerElectronics />
                    <CategoriesBoxClothings />
                    <CategoriesBoxGardenAndKitchen />
                </div>
            </div>
        );
    }
}

export default MartketPlace4CategoriesBox;
