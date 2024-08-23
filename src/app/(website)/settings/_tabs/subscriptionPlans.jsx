import { Atm, CreditCard, RemoveRedEye } from "@mui/icons-material";
import { Card } from "@mui/material";

export const SubscriptionPlan = () => {
    return (<>

        {/* Header Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Current Plan</button>
            <div className="text-2xl mt-4 font-bold">
                You are now a PREMIUM user (MONTHLY subscription)
            </div>
            <p className="mt-2 text-sm text-gray-600">
                To upgrade or cancel your plan, contact us via pro.support@billdr.co
            </p>
        </div>

        {/* Saved Payment Card Section */}
        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Saved payment card</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg justify-between flex w-1/2 text-sm">
                <div className="left flex gap-2">
                    <CreditCard />
                    <span>mastercard</span>
                    <span>****9209 9/2026</span>
                </div>
                <button className="text-blue-600 hover:underline">Update</button>
            </div>
        </div>

        {/* Past Invoices Section */}
        <div className="mb-1 w-full">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Your past invoices</span>
            </div>
            <div className="text-base text-center bg-green-500 bg-opacity-10 border-green-500 border rounded-lg py-4 w-full text-gray-600">
                Your subscription of <span className="text-black font-bold">CAD $336</span> will be automatically renewed on <span className="text-black font-bold">September 10th 2024.</span> No refunds are made during the subscription period.
                <div>To upgrade or cancel your plan, contact us via pro.support@billdr.co</div>
            </div>
        </div>

        <div className="mb-6 overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Description</th>
                        <th className="px-4 py-2 text-left">Period</th>
                        <th className="px-4 py-2 text-left">Payment date</th>
                        <th className="px-4 py-2 text-right">Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="font-light">
                    <tr className="border-b">
                        <td className="px-4 py-2">1 × Billdr Pro - PREMIUM PLAN (at $320.00 / month)</td>
                        <td className="px-4 py-2">Aug 10th 24 - Sep 10th 24</td>
                        <td className="px-4 py-2">Aug 10th 24</td>
                        <td className="px-4 py-2 text-right">CAD $336.00</td>
                        <td className="px-8 cursor-pointer"><RemoveRedEye color="primary" /></td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2">1 × Billdr Pro - PREMIUM PLAN (at $320.00 / month)</td>
                        <td className="px-4 py-2">Jul 10th 24 - Aug 10th 24</td>
                        <td className="px-4 py-2">Jul 10th 24</td>
                        <td className="px-4 py-2 text-right">CAD $336.00</td>
                        <td className="px-8 cursor-pointer"><RemoveRedEye color="primary" /></td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Testimonials Section */}
        <div className="mb-6 w-full">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">What contractors are saying about Billdr PRO</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Testimonial
                    text="Using the platform is simple and easy."
                    details="Having used different tools in the past, this one makes our daily lives easier. I appreciate the continuous improvements made by the Billdr team. They are open and listen to our needs as general contractors."
                    name="Nadine, General Contractor"
                    imgSrc="https://img.freepik.com/free-photo/woman-grey-clothes-smiling_23-2147970475.jpg"
                />
                <Testimonial
                    text="Now we're able to quote on more jobs quicker"
                    details="We chose Billdr PRO because we wanted to have everything under one roof when it came to quoting, invoicing or scheduling. With Billdr PRO, there's quite a bit of savings when it comes to the quoting."
                    name="Gabor, General Contractor"
                    imgSrc="https://img.freepik.com/free-photo/woman-grey-clothes-smiling_23-2147970475.jpg"
                />
                <Testimonial
                    text="Simple and straight to the point, keep it that way"
                    details="I have little time to spend getting familiar with an entirely new platform, but the learning curve with Billdr pro was very minimal. I didn't expect it to be this easy!"
                    name="Tony, General Contractor"
                    imgSrc="https://img.freepik.com/free-photo/woman-grey-clothes-smiling_23-2147970475.jpg"
                />
                <Testimonial
                    text="Creating estimates is much better with Billdr PRO"
                    details="With Billdr PRO templates, generating estimates is great because everything is all laid out clearly with each category. All the prices are listed out for each task & the cost of materials are all very reasonable."
                    name="Farrah, Project Coordinator"
                    imgSrc="https://img.freepik.com/free-photo/woman-grey-clothes-smiling_23-2147970475.jpg"
                />
            </div>
        </div>
    </>)
}


const Testimonial = ({ text, details, name, imgSrc }) => (
    <div className="flex items-start bg-gray-50 p-4 rounded-lg relative pt-10 my-4">
        <div className="absolute top-0 transform translate-y-[-50%]">
            <Brackets />
        </div>
        <div>
            <div className="font-semibold">{text}</div>
            <div className="text-gray-600 text-sm my-4">{details}</div>
            <div className="flex items-center mt-4">
                <img className="w-12 h-12 rounded-full mr-4" src={imgSrc} alt={name} />
                <div className="text-gray-900 font-light">{name}</div>
            </div>
        </div>
    </div>
);


const Brackets = () => {
    return <svg width="46" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46 21.582c0 1.59-.278 3.074-.834 4.454a11.564 11.564 0 0 1-2.17 3.639 10.527 10.527 0 0 1-3.226 2.447 8.909 8.909 0 0 1-3.893.878 9.031 9.031 0 0 1-3.95-.878 10.116 10.116 0 0 1-3.226-2.447 11.564 11.564 0 0 1-2.169-3.639c-.52-1.38-.779-2.865-.779-4.454 0-1.924.223-3.89.668-5.898a35.098 35.098 0 0 1 1.835-5.834 35.8 35.8 0 0 1 2.837-5.396C32.17 2.74 33.337 1.254 34.597 0l8.01 4.705c-.779.711-1.576 1.61-2.392 2.698-.779 1.046-1.242 2.133-1.39 3.262 1.038.377 2.002.92 2.892 1.632.89.71 1.65 1.547 2.28 2.51.631.961 1.113 2.028 1.447 3.199.37 1.129.556 2.321.556 3.576Zm-25.753 0c0 1.59-.278 3.074-.835 4.454a11.56 11.56 0 0 1-2.169 3.639 10.525 10.525 0 0 1-3.226 2.447 8.908 8.908 0 0 1-3.894.878 9.032 9.032 0 0 1-3.949-.878 10.115 10.115 0 0 1-3.226-2.447 11.562 11.562 0 0 1-2.17-3.639C.26 24.656 0 23.171 0 21.582c0-1.924.222-3.89.667-5.898A35.094 35.094 0 0 1 2.503 9.85 35.802 35.802 0 0 1 5.34 4.454C6.415 2.74 7.583 1.254 8.844 0l8.01 4.705c-.779.711-1.576 1.61-2.392 2.698-.779 1.046-1.242 2.133-1.39 3.262 1.038.377 2.002.92 2.892 1.632.89.71 1.65 1.547 2.28 2.51.63.961 1.113 2.028 1.446 3.199.371 1.129.557 2.321.557 3.576Z" fill="#4959E4"></path></svg>;
}