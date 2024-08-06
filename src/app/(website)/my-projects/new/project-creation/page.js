"use client";
import { formoneAction } from '@/app/redux/Project/NewProjectSlice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MapComponent from './MapComponent';

const Page = () => {
  const [form, setForm] = useState({ name: '', address: '', url: '' });
  const [errors, setErrors] = useState({ name: '', address: '' });
  const [places, setPlaces] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Simple validation on change
    if (name === 'name' && !value) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Project name is required' }));
    } else if (name === 'name') {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }

    if (name === 'address' && !value) {
      setErrors((prevErrors) => ({ ...prevErrors, address: 'Project address is required' }));
    } else if (name === 'address') {
      setErrors((prevErrors) => ({ ...prevErrors, address: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Project name is required' }));
    }
    if (!form.address) {
      setErrors((prevErrors) => ({ ...prevErrors, address: 'Project address is required' }));
    }
    if (form.name && form.address) {
      // Proceed with form submission or navigation
      dispatch(formoneAction(form));
      router.push('/my-projects/new/client-flow-selection');
    }
  };

  useEffect(() => {
    if (places && places.length > 0) {
      // console.log(places[0]);
      // // console.log(places[0]?.geometry.viewport.Gh.hi);
      // // console.log(places[0]?.geometry.viewport.Yh.hi);
      setForm({ ...form, ['address']: places[0]?.formatted_address, ['url']: places[0]?.url,['lat']:places[0]?.geometry.viewport.Yh.hi,['lng']:places[0]?.geometry.viewport.Gh.hi });
    }
  }, [places])
  return (
    <div className="w-full bg-gray-200 min-h-screen">
      <div className="max-w-screen mx-auto p-6 bg-white shadow-md rounded-lg w-full h-screen flex justify-between">

        <div className="w-2/3 h-full">
          <img
            src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fliving_room.png&w=3840&q=75"
            alt="Sign Up Step"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-10">
            <button className="text-indigo-600 text-sm font-semibold">
              <Link href={'/my-projects'}>
                <ArrowBackIosIcon className="text-sm text-center" />Back
              </Link>
            </button>
            <h2 className="text-3xl font-bold mt-5 mb-10">Create a new project</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold">
                Project name
              </label>
              <input
                name="name"
                placeholder="Bathroom makeover"
                className={`w-full h-14 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-indigo-600'}`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold">
                Project address
              </label>
              <MapComponent errors={errors} setPlaces={setPlaces} />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="mb-4 flex justify-between">
              <button
                type="submit"
                className="bg-gray-300 w-full text-sm font-semibold text-gray-600 px-4 py-2 rounded-xl h-14 hover:bg-gray-400 transition-colors"
              >
                Continue and enter client details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
