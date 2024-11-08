import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title = {"Privacy Policy"}>
        <div className="row privacy policy">
            <div className="col-md-12">
                <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
                <p className="text-justify center">
                This Privacy Policy describes how your personal information is collected, used, 
                and shared when you use [Your E-Commerce App Name] (the "App").
                <h4 className="p-2 text-black">1. Information We Collect</h4>
                We collect information you provide directly to us, such as your name, email address, 
                shipping address, and payment information when you make a purchase through the App.<br/>

                <h4 className="p-2 text-black">2. How We Use Your Information</h4>
                We use the information collected to process and fulfill orders, communicate with you, 
                and screen our orders for potential risk or fraud. Additionally, we may use this information 
                to provide you with targeted advertisements or marketing communications we believe may be of 
                interest to you.<br/>

                <h4 className="p-2 text-black">3. Sharing Your Information</h4>
                We may share your personal information with third parties to help us use your personal 
                information, as described above. For example, we use [Payment Processor Name] to handle payments. 
                We also use [Shipping Carrier Name] to fulfill and ship orders.<br/>

                <h4 className="p-2 text-black">4. Your Rights</h4>
                If you are a European resident, you have the right to access personal information we 
                hold about you and to ask that your personal information be corrected, updated, or deleted.
                 If you would like to exercise this right, please contact us through the contact
                information below.

                <h4 className="p-2 text-black">5. Data Retention</h4>
                We retain your personal information for as long as necessary to provide you with our services 
                and as described in our Privacy Policy. When you place an order through the App, we will maintain 
                your order information for our records unless and until you ask us to delete this information.<br/>

                <h4 className="p-2 text-black">6. Changes</h4>
                We may update this privacy policy from time to time to reflect, for example, changes to 
                our practices or for other operational, legal, or regulatory reasons.<br/>

                By using the App, you agree to the terms of this Privacy Policy.
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default Policy