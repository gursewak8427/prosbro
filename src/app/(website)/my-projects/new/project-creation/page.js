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
      setForm({ ...form, ['address']: places[0]?.formatted_address, ['url']: places[0]?.url, ['lat']: places[0]?.geometry?.viewport?.Yh?.hi, ['lng']: places[0]?.geometry?.viewport?.Gh?.hi });
    }
  }, [places])
  return (
    <div className="w-full bg-gray-200 min-h-screen">
      <div className="max-w-screen mx-auto bg-white shadow-md rounded-lg w-full h-screen flex justify-between">
        <div className="relative z-10 hidden h-full sm:flex md:w-full lg:w-[65%]">
          <img
            src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fliving_room.png&w=3840&q=75"
            alt="Sign Up Step"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full px-12 md:w-full lg:w-[35%] tablet:px-6">
          <div class="flex h-20 w-full items-center justify-between">
            <button
              className="rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row text-base justify-center bg-transparent text-primary hover:text-secondary p-0 flex cursor-pointer items-center gap-1"
              type="button"
              data-headlessui-state=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path></svg>
              <Link href={'/my-projects'}>Back</Link>
            </button>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-8 w-8 cursor-pointer"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>
          </div>
          <div className="flex h-5/6 flex-col">
            <h2 className="text-3xl font-bold mt-5 mb-10">Create a new project</h2>
            <div className="flex h-full flex-col justify-center">
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
                    className="bg-primary w-full text-sm font-semibold px-4 py-2 rounded-xl h-14 transition-colors"
                  >
                    Continue and enter client details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
