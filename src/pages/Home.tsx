import { lazy, Suspense } from "react";
import "../App.css";
import { LoadingProvider } from "../context/LoadingProvider";

const CharacterModel = lazy(() => import("../components/Character"));
const MainContainer = lazy(() => import("../components/MainContainer"));

const Home = () => {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <Suspense>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default Home;
