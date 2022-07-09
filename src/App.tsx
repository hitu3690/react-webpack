import axios from "axios";
import React, { useEffect } from "react";
import { Registry, TypelessContext } from "typeless";
import { convertToNewsState } from "./utils/services/getter";
import NewsHeaderView from "features/news/components/NewsHeaderView";
import NewsModule from "./features/news/module";

const registry = new Registry();
function App() {
  return (
    <TypelessContext.Provider value={{ registry }}>
      <div className="layout">
        {/* <Header /> */}
        <NewsModule />
        <div id="scrollTarget" className="wrapper">
          <div className="wrapper__main">
            {/* <AccordionButton
              isGray={isOpenedMenu}
              text="メニュー"
              emitToggleMenu={() => setIsOpenedMenu(!isOpenedMenu)}
            /> */}
            {/* <Sidebar isOpenedMenu={isOpenedMenu} />
            <div className="wrapper__main--content">
              <Searchbar placeholder={placeholder} />
              <span className="wrapper__main--content__title">{pageTitle}</span>
              <Routes>
                <Route
                  path="/news"
                  element={<NewsPage emitScrollEvent={() => scrollEvent()} />}
                ></Route>
                <Route path="/pokedex" element={<PokedexPage />}></Route>
              </Routes>
            </div> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </TypelessContext.Provider>
  );
}

export default App;
