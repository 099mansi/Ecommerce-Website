import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title = {"About Us"}>
        <div className="row aboutus">
            <div className="col-md-6">
                <img 
                    src="/images/aboutUs.jpg"
                    alt="aboutus"
                    style={{ width: "100%" }}
                />
            </div>
            <div className="col-md-6">
                <h1 className="p-2 text-black text-center">ABOUT US</h1>
                <p className="text-justify mt-2">
                Welcome to [Your E-commerce App Name], where shopping meets convenience and style. 
                We are your go-to destination for all things fashion, electronics, home essentials, 
                and more. Our mission is to provide a seamless online shopping experience that caters 
                to your needs and desires.At [Your E-commerce App Name], we believe in the power of choice.
                 Explore our vast collection of high-quality products, carefully curated to suit diverse 
                 tastes. From the latest fashion trends to cutting-edge electronics, we've got you covered.
                Customer satisfaction is at the heart of what we do. Our dedicated team works tirelessly 
                to ensure that your shopping experience is not only enjoyable but also reliable. 
                We pride ourselves on prompt deliveries, secure transactions, and a user-friendly 
                interface that makes browsing and purchasing a breeze.Discover the joy of online shopping
                 with [Your E-commerce App Name]. Whether you're looking for a wardrobe refresh, upgrading 
                 your tech gadgets, or finding the perfect gift, we're here to make it happen. Join our 
                 community of savvy shoppers and experience the convenience of a world-class e-commerce
                  platform.Thank you for choosing [Your E-commerce App Name]. Happy shopping!
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default About