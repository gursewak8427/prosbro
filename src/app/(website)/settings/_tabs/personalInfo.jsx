"use client"
import { profileAction } from "@/app/redux/AuthSlice";
import axiosInstance from "@/app/redux/AxiosInstance";
import { showToastPromise, updateToast } from "@/app/redux/toastSlice";
import { EditOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const PersonalInformation = () => {
    const profile = useSelector(store => store.userData.profile);
    const [userProfile, setUserProfile] = useState(profile[1]);
    const [profilestatus, setProfilestatus] = useState(false);
    const [userLogin, setUserLogin] = useState(profile[0]);
    const [loginstatus, setLoginstatus] = useState(false);
    const [errors, setErrors] = useState({});
    const toastId = useSelector((state) => state.toast.toastId);
    const dispatch = useDispatch();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value.trim()) error = 'Name is required';
                break;
            case 'email':
                if (!emailRegex.test(value)) error = 'Invalid email address';
                break;
            case 'secondaryemail':
                if (value && !emailRegex.test(value)) error = 'Invalid secondary email address';
                break;
            case 'mobile':
                if (!phoneRegex.test(value)) error = 'Invalid phone number';
                break;
            case 'language':
                if (!value) error = 'Language is required';
                break;
            default:
                break;
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));
    };

    const handleProfileChanges = (e) => {
        setProfilestatus(true);
        const { name, value } = e.target;
        setUserProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
        validateField(name, value);
    };

    const handleLoginChanges = (e) => {
        setLoginstatus(true);
        const { name, value } = e.target;
        setUserLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
        validateField(name, value);
    };

    const handleUpdateProfile = async () => {
        const data = {
            login: loginstatus,
            profile: profilestatus,
            email: userLogin.email,
            name: userProfile.name,
            secondaryemail: userProfile.secondaryemail,
            mobile: userProfile.mobile,
            language: userProfile.language,
        };

        const requestPromise = axiosInstance.put(`${process.env.NEXT_PUBLIC_API_URL}/fetchprofile/`, data);
        dispatch(showToastPromise({
            promise: requestPromise,
            messages: {
                pending: 'Updating Profile...',
                success: 'Profile updated successfully!',
                error: 'Failed to update profile, please contact the service team!!!',
            },
        }));

        try {
            const response = await requestPromise;
            dispatch(profileAction(response.data));
            dispatch(updateToast({
                toastId,
                options: { render: 'Data loaded!', type: 'success', isLoading: false },
            }));
        } catch (error) {
            dispatch(updateToast({
                toastId,
                options: { render: 'Failed to load data!', type: 'error', isLoading: false },
            }));
        }
    };

    useEffect(() => {
        setUserProfile(profile[1]);
        setUserLogin(profile[0]);
    }, [profile]);

    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="flex items-center space-x-4">
                <div className="w-44 h-44 overflow-hidden group relative">
                    <img
                        src="https://res.cloudinary.com/dzq7uzhji/image/upload/d_no-company-logo.jpg/pzpjqjmfhulxp4actfrc.jpg"
                        alt="Business Logo"
                        className="object-cover w-full h-full z-30 rounded-full"
                    />
                    <button className="bg-gray-200 bg-opacity-50 text-black px-3 py-1 rounded-full w-full h-full hidden group-hover:block absolute top-[50%] transform translate-y-[-50%] translate-x-[-50%] left-[50%] z-50">
                        <EditOutlined color="primary" />
                    </button>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    value={userProfile?.name}
                    className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                    onChange={handleProfileChanges}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userLogin?.email}
                        className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        onChange={handleLoginChanges}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Secondary email</label>
                    <input
                        type="email"
                        name="secondaryemail"
                        value={userProfile?.secondaryemail}
                        className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        onChange={handleProfileChanges}
                    />
                    {errors.secondaryemail && <p className="text-red-500 text-sm">{errors.secondaryemail}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone number</label>
                    <input
                        type="tel"
                        name="mobile"
                        value={userProfile?.mobile}
                        className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        onChange={handleProfileChanges}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Language</label>
                    <select
                        className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        name="language"
                        value={userProfile?.language}
                        onChange={handleProfileChanges}
                    >
                        <option value='English'>English</option>
                        <option value='French'>Français</option>
                    </select>
                    {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
                </div>
            </div>
            <div className="pt-4">
                <button
                    className={`px-4 py-2 rounded-lg ${loginstatus || profilestatus ? 'cursor-pointer bg-primary text-white' : 'cursor-not-allowed bg-gray-200 text-gray-700'}`}
                    disabled={!loginstatus && !profilestatus || Object.keys(errors).some((key) => errors[key])}
                    onClick={handleUpdateProfile}
                >
                    Save
                </button>
            </div>
        </div>
    );
}
