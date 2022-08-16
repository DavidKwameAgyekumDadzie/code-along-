//This component branch to import image from assets folder
//to be use by the Image function to display in image in the browser

import download from "../assets/image/download.jpeg";


export const Image = () => {

    return <img src={download} alt=""/>;

}
