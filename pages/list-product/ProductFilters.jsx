import React from 'react';

const ProductFilters = (props) => {
    return (
        <div className="filters-widget box-shadow __card">
            <h5 className="__landing-title">Filters</h5>
            <div className="filters-box">
                <div className="accordion" id="accordion">
                    <div className="card">
                        <div className=" accordion-icon card-header" id="headingOne">
                            <h5 className="accordion-title mb-0">
                                <button className="btn btn-link d-flex align-items-center ml-auto" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Dress Style</button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show accordion-content" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="filters-list">
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1">
                                                Fit & Flare
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                            <label className="form-check-label" for="defaultCheck2">
                                                Fitted
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                            <label className="form-check-label" for="defaultCheck3">
                                                Gown
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                                            <label className="form-check-label" for="defaultCheck4">
                                                Maxi
                                </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className=" accordion-icon card-header" id="headingTwo">
                            <h5 className="accordion-title mb-0">
                                <button className="btn btn-link d-flex align-items-center ml-auto collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Fabric</button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse accordion-content" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="filters-list">
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                                            <label className="form-check-label" for="defaultCheck5">
                                                100% Cotton
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                                            <label className="form-check-label" for="defaultCheck6">
                                                Blends
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck7" />
                                            <label className="form-check-label" for="defaultCheck7">
                                                Linen
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck8" />
                                            <label className="form-check-label" for="defaultCheck8">
                                                Polyester
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck9" />
                                            <label className="form-check-label" for="defaultCheck9">
                                                Silk
                                </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className=" accordion-icon card-header" id="headingthree">
                            <h5 className="accordion-title mb-0">
                                <button className="btn btn-link d-flex align-items-center ml-auto collapsed" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">Sleeve Type</button>
                            </h5>
                        </div>
                        <div id="collapsethree" className="collapse accordion-content" aria-labelledby="headingthree" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="filters-list">
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck10" />
                                            <label className="form-check-label" for="defaultCheck10">
                                                Strapless
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck11" />
                                            <label className="form-check-label" for="defaultCheck11">
                                                Sleeveless
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck12" />
                                            <label className="form-check-label" for="defaultCheck12">
                                                Short Sleeve
                                </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck13" />
                                            <label className="form-check-label" for="defaultCheck13">
                                                Long Sleeve
                                </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filters-color">
                    <h4 className="widget-title">Color</h4>
                    <a href="#" className="bg-red"></a>
                    <a href="#" className="bg-black"></a>
                    <a href="#" className="bg-orange"></a>
                    <a href="#" className="bg-gray"></a>
                    <a href="#" className="bg-blue"></a>
                    <a href="#" className="bg-hoki"></a>
                    <a href="#" className="bg-light"></a>
                    <a href="#" className="bg-dark-red"></a>
                    <a href="#" className="bg-green"></a>
                </div>

                <div className="filters-size">
                    <h4 className="widget-title">Petite Size</h4>
                    <a href="#">14</a>
                    <a href="#">16</a>
                    <a href="#">18</a>
                    <a href="#">20</a>
                    <a href="#">22</a>
                    <a href="#">24</a>
                    <a href="#">26</a>
                    <a href="#">28</a>
                    <a href="#">30</a>
                    <a href="#">32</a>
                </div>

            </div>
        </div>
    );
};

export default ProductFilters;
