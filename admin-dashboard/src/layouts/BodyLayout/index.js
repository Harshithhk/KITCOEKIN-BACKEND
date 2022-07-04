import { useState } from "react";
import NewsAndNotices from "../NewsAndNotices";


const BodyLayout = () => {
    return (
        <div  className="h-fit  flex-1 rounded-xl m-2 mt-8 z-0 bg-white drop-shadow-lg  ">
            <NewsAndNotices />
            {/* <Events />
            <ImageGallery /> */}
        </div>
    );
    
};

export default BodyLayout;