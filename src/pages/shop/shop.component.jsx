import React from "react";
import Shopdata from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

class Shoppage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : Shopdata
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollectionProps})=>(
                       <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        ); 
    }
}

export default Shoppage;