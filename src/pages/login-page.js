import Header from "../Components/Header";
import Carousel from "../Components/Carousel";


function Home({ images }) {
    return (
      <div className="App">
        <Header />
        <Carousel images={images} />
      </div>
    );
  }
  export default Home;