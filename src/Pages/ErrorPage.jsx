

const ErrorPage = () => {
    return (
        <div>
            <section className="page_404 bg-white py-10 font-serif">
  <div className="container">
    <div className="flex justify-center">
      <div className="w-full md:w-10/12 text-center">
        <div className="four_zero_four_bg h-96 bg-center bg-no-repeat" style="background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);">
          <h1 className="text-8xl text-center text-white">404</h1>
        </div>
        
        <div className="contant_box_404 mt-0 md:mt-[-50px]">
          <h3 className="text-8xl">Look like you are lost</h3>
          <p className="text-xl">The page you are looking for is not available!</p>
          <a href="#" className="link_404 text-white py-2 px-4 bg-green-500 hover:bg-green-600 mt-5 inline-block">Go to Home</a>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default ErrorPage;