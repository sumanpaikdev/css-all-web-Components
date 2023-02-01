import React from "react"
import "./App.css"
import Homepage from "./homepage/Homepage"


// img home 
import navAppleLogo from "./homepageIMG/apple-logo.png"
import navSearchIcon from "./homepageIMG/search-interface-symbol.png"
import navStoreIcon from "./homepageIMG/shop-bag.png"
import divpng from "./homepageIMG/div.png"
import iphonefourteen from "./homepageIMG/iphone14.png"
import itemimgone from "./homepageIMG/divone.png"
import itemimgtwo from "./homepageIMG/divfour.png"
import itemimgthree from "./homepageIMG/divthree.png"
import itemimgfour from "./homepageIMG/divtwo.png"
import itemimgfive from "./homepageIMG/divfive.png"
import itemimgsix from "./homepageIMG/disix.png"

export default function App() {
  return(
    <div className="app-container">
      <Homepage
        navAppleLogo={navAppleLogo}
        navSearchIcon={navSearchIcon}
        navStoreIcon={navStoreIcon}
        divpng={divpng}
        iphonefourteen={iphonefourteen}
        itemimgone={itemimgone}
        itemimgtwo={itemimgtwo}
        itemimgthree={itemimgthree}
        itemimgfour={itemimgfour}
        itemimgfive={itemimgfive}
        itemimgsix={itemimgsix}

      />
    </div>
  )
}