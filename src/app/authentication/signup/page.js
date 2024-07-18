const Page = () => {
    return (
        <div className="w-full bg-gray-200 min-h-screen">
        <div className="max-w-screen mx-auto p-6 bg-white shadow-md rounded-lg w-full h-screen flex justify-between">
          <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-left mb-4">
            <svg width="110" height="48" viewBox="0 0 140 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M55.854 29.495c1.661 0 2.958-.475 3.892-1.425.935-.95 1.402-2.146 1.402-3.588 0-1.548-.467-2.673-1.402-3.377-.899-.703-2.162-1.055-3.788-1.055h-9.237v9.445h9.133ZM46.721 6.49v7.598h9.081c2.907 0 4.36-1.266 4.36-3.8 0-1.336-.38-2.303-1.142-2.901-.727-.598-1.938-.897-3.633-.897h-8.666Zm-6.954 28.967V.422h16.97c3.39 0 5.968.862 7.732 2.586 1.765 1.688 2.647 4.01 2.647 6.964 0 1.513-.398 2.867-1.194 4.063-.796 1.16-1.799 1.988-3.01 2.48.727.281 1.401.65 2.024 1.108.657.422 1.211.985 1.66 1.688.485.669.866 1.478 1.142 2.427.277.915.416 2.006.416 3.272 0 3.2-1.056 5.751-3.166 7.65-2.11 1.865-5.345 2.797-9.705 2.797H39.767ZM69.675 35.457V9.497h6.746v25.96h-6.746Zm0-29.073V0h6.746v6.384h-6.746ZM79.3 35.457V0h6.747v35.457H79.3ZM88.676 35.457V0h6.746v35.457h-6.746ZM110.143 30.55c1.627 0 2.976-.686 4.048-2.058 1.107-1.372 1.661-3.166 1.661-5.382 0-5.628-1.886-8.442-5.657-8.442-3.875 0-5.812 2.674-5.812 8.02 0 2.322.536 4.221 1.609 5.699 1.072 1.442 2.456 2.163 4.151 2.163Zm5.605 4.907-.052-3.166c-1.557 2.568-3.926 3.852-7.109 3.852-1.627 0-3.114-.317-4.463-.95a9.764 9.764 0 0 1-3.477-2.744c-.97-1.195-1.73-2.655-2.284-4.379-.553-1.724-.83-3.676-.83-5.857 0-1.97.225-3.763.674-5.382.485-1.653 1.177-3.077 2.076-4.273.9-1.196 1.99-2.11 3.27-2.744 1.314-.668 2.802-1.003 4.463-1.003 3.148 0 5.674 1.355 7.577 4.063V0h6.642v35.457h-6.487ZM124.912 35.457V9.497h6.331v3.113c.554-.879 1.125-1.565 1.713-2.057.622-.493 1.245-.862 1.868-1.108a6.849 6.849 0 0 1 1.972-.528c.657-.07 1.332-.106 2.024-.106h.882v7.018a11.164 11.164 0 0 0-1.868-.158c-4.117 0-6.176 2.093-6.176 6.279v13.507h-6.746Z" fill="#191F2F"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.875 17.414v13.739c0 .919.704 1.663 1.573 1.663h14.506c4.03 0 7.298-3.455 7.298-7.717 0-4.261-3.266-7.715-7.295-7.717h-.003l-16.08.032Zm16.08-3.359-19.226.039v17.059c0 2.756 2.113 4.99 4.719 4.99h14.506c5.768 0 10.443-4.945 10.443-11.044 0-6.1-4.675-11.044-10.443-11.044Z" fill="#191F2F"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M24.458 3.327 3.875 32.297V3.327h20.583ZM5.078 36.143H3.101c-1.31 0-2.373-1.124-2.373-2.51V2.51C.729 1.124 1.792 0 3.102 0H26.6c1.038 0 1.92.705 2.243 1.687.168.514-.037 1.058-.346 1.493L5.077 36.143Z" fill="#191F2F"></path>
              <path d="M39.767 54.812V41.045h6.282c1.08 0 2.025.202 2.835.605.81.404 1.44.97 1.89 1.701.45.73.675 1.584.675 2.561 0 .986-.232 1.84-.696 2.561-.46.722-1.106 1.277-1.94 1.667-.829.39-1.798.585-2.907.585h-3.752V47.82h2.957c.464 0 .86-.076 1.186-.228.332-.157.586-.38.76-.666.18-.287.27-.625.27-1.015 0-.394-.09-.73-.27-1.008a1.664 1.664 0 0 0-.76-.646c-.326-.152-.722-.228-1.186-.228h-1.393v10.782h-3.951ZM52.9 54.812V41.045h6.281c1.08 0 2.026.186 2.836.558.81.372 1.44.908 1.89 1.607.45.699.675 1.537.675 2.514 0 .986-.232 1.817-.696 2.494-.46.676-1.107 1.187-1.94 1.532-.83.345-1.798.518-2.907.518h-3.752v-2.904h2.956c.465 0 .86-.054 1.187-.161.332-.112.585-.29.76-.531.18-.242.27-.558.27-.948 0-.394-.09-.715-.27-.961a1.501 1.501 0 0 0-.76-.552c-.327-.12-.722-.181-1.187-.181H56.85v10.782H52.9Zm8.527-6.319 3.638 6.319h-4.292l-3.553-6.319h4.207ZM80.365 47.929c0 1.532-.315 2.825-.945 3.878a6.189 6.189 0 0 1-2.55 2.386c-1.072.538-2.266.807-3.583.807-1.326 0-2.525-.271-3.595-.813a6.247 6.247 0 0 1-2.544-2.393c-.626-1.053-.938-2.342-.938-3.865 0-1.533.312-2.824.938-3.872a6.143 6.143 0 0 1 2.544-2.387c1.07-.542 2.269-.813 3.596-.813 1.317 0 2.51.271 3.581.813a6.132 6.132 0 0 1 2.551 2.387c.63 1.048.945 2.339.945 3.872Zm-4.064 0c0-.825-.117-1.52-.349-2.084-.227-.57-.566-1-1.016-1.29-.445-.297-.995-.444-1.649-.444-.653 0-1.205.148-1.655.443-.446.291-.784.722-1.017 1.29-.227.566-.34 1.26-.34 2.085 0 .824.113 1.521.34 2.09.233.565.571.995 1.017 1.29.45.292 1.002.438 1.655.438.654 0 1.204-.146 1.65-.437.45-.296.788-.726 1.015-1.29.233-.57.349-1.267.349-2.091Z" fill="#4959E4"></path>
            </svg>
          </div>
            <h2 className="text-3xl font-bold mb-6 mt-5 ">Sign up</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id=""
                value=""
                className="w-full  px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value=""
                className="w-full  px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
                 Phone number
              </label>
              <input
                type="number"
                id="number"
                value=""
                className="w-full  px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="000-000-000"
              />
            </div>

            <div className="mb-4 flex justify-between">
              <button className="bg-indigo-600 w-1./2 h-12 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
                Create my account
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-5">By creating an account, I accept Billdr's terms and conditions</p>
            <div className="flex justify-left">
              <h2>Already a member? </h2>
              <button className="font-semibold text-indigo-600 ml-2 ">Log in </button>
            </div>
          </div>
          <div className="w-2/3 h-full">
            <img
              src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fsignup-step2.jpg&w=1920&q=100"
              alt="Sign Up Step"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
      </div>
    )
}

export default Page;