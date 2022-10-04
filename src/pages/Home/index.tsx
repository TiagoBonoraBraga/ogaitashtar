import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";

const Home = () => {
  return <S.Home>
          <S.HomeContent>
            <header>
              <S.HomeHeaderDetails>
                <div>
                  <S.HomeHeaderDetailsLogo>Ogait Ashtar</S.HomeHeaderDetailsLogo>
                  <S.HomeHeaderDetailsDate>Data</S.HomeHeaderDetailsDate>
                </div>
                <S.HomeHeaderDetailsSearch>
                  <Search/>
                  <input type="text"  placeholder="Procure pela Música"/>
                </S.HomeHeaderDetailsSearch>
              </S.HomeHeaderDetails>
            </header>
            <div>
              <S.HomeProductTitle>
                <b>Músicas</b>
              </S.HomeProductTitle>
              <S.HomeProductList>
                <p>Lista de músicas aki</p>
              </S.HomeProductList>
            </div>
          </S.HomeContent>
          
        </S.Home>;
};

export default Home;
