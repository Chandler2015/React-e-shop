import React from "react";

import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopItems} from '../../redux/shop/shop.selectors';

const Shoppage = ({collections})=>(

    <div className='shop-page'>
        {
            collections.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
    ); 

export default Shoppage;