import { useEffect } from "react";
import FullScreenWrapper from "../../components/container/FullScreenWrapper";
import FullSizeSpaceContainer from "../../components/container/FullSizeSpaceContainer";
import "../../styles/home/Home.css";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <FullScreenWrapper>
      <FullSizeSpaceContainer>
        <div className="container">
          <h1 className="title">Welcome to group 12's web store.</h1>
          <p className="description">
            Browse our products and find the perfect item for you.
          </p>
        </div>
      </FullSizeSpaceContainer>
    </FullScreenWrapper>
  );
};

export default HomePage;
