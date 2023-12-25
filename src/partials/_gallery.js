import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Fancybox from "./fancybox";


function ImageGallery(props) {
    return (
        <div>
            {props.images.length > 0 && (
                <div id="gallery-wrap">
                    <Fancybox
                        options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}
                    >
                        {props.images.map((item, index) => (
                            <a key={item.id + '-gallery-' + { index }} className="image-item" data-fancybox="gallery" href={item.src?item.src:undefined}>
                                <LazyLoadImage src={item.src?item.src:''} alt={item.name} ></LazyLoadImage>
                                <div className="hovereffects-det">
                                    <i className="fa fa-search-plus" aria-hidden="true"></i>
                                </div>
                            </a>
                        ))}
                    </Fancybox>
                </div>

            )}
        </div>
    );
}
export default ImageGallery;