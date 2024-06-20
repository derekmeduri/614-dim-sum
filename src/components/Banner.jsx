import bannerImage from "../assets/images/lanterns-banner.jpg"
const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between">
                <div className="banner-description w-full md:w-1/2 p-4">
                    <h2 className="mb-6 text-4xl font-bold text-red-600">
                        Columbus' New Chinese eatery located Downtown
                    </h2>
                    <p className="font-semibold text-lg py-2">
                        Try Us Today!
                    </p>
                </div>
                <div className="banner-image w-full md:w-1/2 p-3">
                    <img src={bannerImage} alt="laterns" className="max-h-95" />
                </div>
        </div>
    )
};

export default Banner;