import aboutImage from "../../src/assets/images/aboutusimage.jpg"
const About = () => {
    return (
        <section id="about">
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div>
                    <h2 className="text-2xl font-medium mb-4">
                        About Us                        
                    </h2>
                    <p className="text-lg">
                    Welcome to 614 Dim Sum, where tradition meets taste! Nestled in the heart of Columbus, Ohio, our dim sum restaurant is a tribute to the rich culinary heritage of China, celebrating the art of dim sum with every dish we serve.
                    <br/>
                    Our story begins with the cherished family recipes passed down through generations. Here at 614 Dim Sum, we believe in preserving these authentic flavors and sharing them with our community. Each dumpling, bun, and roll is crafted with love, using the finest ingredients to ensure a delightful dining experience.
                    <br/>
                    Our chefs are passionate about their craft, combining time-honored techniques with the freshest produce, premium meats, and select spices. From the delicate folds of our dumplings to the aromatic herbs in our broths, every element is carefully chosen to honor the essence of traditional Chinese cuisine.
                    <br/>
                    Join us for a meal that's more than just food; it's a journey through history, culture, and the warmth of family gatherings. Whether you're a dim sum enthusiast or new to this delectable world, we invite you to savor the flavors, embrace the tradition, and create new memories with us at 614 Dim Sum.
                    <br/>
                    *Written with ChatGPT*
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="aboutimage" className="w-[500px] h-[500x] object-cover" />
                </div>
            </div>

        </div>
        </section>
    )
}

export default About;