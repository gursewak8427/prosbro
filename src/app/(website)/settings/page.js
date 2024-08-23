"use client"
import React, { useEffect, useState } from 'react'
import { Business } from './_tabs/business'
import { PersonalInformation } from './_tabs/personalInfo'
import { ProjectSettings } from './_tabs/projectsSettings'
import { SubscriptionPlan } from './_tabs/subscriptionPlans'
import { AppIntegration } from './_tabs/AppIntegration'
import { useRouter, useSearchParams } from 'next/navigation'

function page() {
    const [tab, setTab] = useState(0)
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        router.push(`/settings?activeTab=${tab}`)
    }, [tab])

    useEffect(() => {
        setTab(searchParams.get('activeTab') || 0)
    }, [])


    return (
        <div className='p-6 flex-1 min-h-screen bg-gray-200 shadow-md'>
            <div className=' mb-5'>
                <h1 className='text-3xl font-bold'>Settings</h1>
            </div>
            <div className='flex gap-5'>
                <aside class="flex h-full w-1/5 flex-col gap-4">
                    <div class="flex flex-col">
                        <div onClick={() => setTab(0)} class={`mb-1 flex items-center justify-between rounded-r-xl border-l-4 bg-white px-2 py-3 cursor-pointer gap-3 ${tab == 0 ? "border-primary" : "border-white"}`}>
                            <div class="flex flex-1 flex-col justify-end gap-1">
                                <h3 class="text-base leading-5 font-semibold">Business</h3>
                                <p class="whitespace-pre-line text-xs">Logo, address, documents, bank account</p>
                            </div>
                        </div>
                        <div onClick={() => setTab(1)} class={`mb-1 flex items-center justify-between rounded-r-xl border-l-4 bg-white px-2 py-3 cursor-pointer gap-3 ${tab == 1 ? "border-primary" : "border-white"}`}>
                            <div class="flex flex-1 flex-col justify-end gap-1">
                                <h3 class="text-base leading-5 font-semibold">Personal information</h3>
                                <p class="whitespace-pre-line text-xs ">Contact information, language</p>
                            </div>
                        </div>
                        <div onClick={() => setTab(2)} class={`mb-1 flex items-center justify-between rounded-r-xl border-l-4 bg-white px-2 py-3 cursor-pointer gap-3 ${tab == 2 ? "border-primary" : "border-white"}`}>
                            <div class="flex flex-1 flex-col justify-end gap-1">
                                <h3 class="text-base leading-5 font-semibold">Project settings</h3>
                                <p class="whitespace-pre-line text-xs">Default terms and conditions</p>
                            </div>
                        </div>
                        <div onClick={() => setTab(3)} class={`mb-1 flex items-center justify-between rounded-r-xl border-l-4 bg-white px-2 py-3 cursor-pointer gap-3 ${tab == 3 ? "border-primary" : "border-white"}`}>
                            <div class="flex flex-1 flex-col justify-end gap-1">
                                <h3 class="text-base leading-5 font-semibold">Subscription plan</h3>
                                <p class="whitespace-pre-line text-xs ">Plan management, billing</p>
                            </div>
                        </div>
                        <div onClick={() => setTab(4)} class={`mb-1 flex items-center justify-between rounded-r-xl border-l-4 bg-white px-2 py-3 cursor-pointer gap-3 ${tab == 4 ? "border-primary" : "border-white"}`}>
                            <div class="flex flex-1 flex-col justify-end gap-1">
                                <h3 class="text-base leading-5 font-semibold">App integration</h3>
                                <p class="whitespace-pre-line text-xs ">Quickbooks</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-4">
                        <a target="_blank" rel="noopener noreferrer" class="child:p-0" href="https://pro.billdr.co/resources/video-tutorials">
                            <button class="text-primary hover:text-black flex items-center cursor-pointer rounded-xl box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row gap-1 justify-start bg-transparent text-primary hover:text-secondary p-0 text-sm font-normal" type="button" data-headlessui-state="">
                                Tutorial videos
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" class="child:p-0" href="https://calendly.com/billdr-pro-aes/robin-en">
                            <button class="text-primary hover:text-black flex items-center cursor-pointer rounded-xl box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row gap-1 justify-start bg-transparent text-primary hover:text-secondary p-0 text-sm font-normal" type="button" data-headlessui-state="">
                                Book a demo
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </a>
                        <a href="https://billdr.co/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer" class="child:p-0">
                            <button class="text-primary hover:text-black flex items-center cursor-pointer rounded-xl box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row gap-1 justify-start bg-transparent text-primary hover:text-secondary p-0 text-sm font-normal" type="button" data-headlessui-state="">
                                Terms &amp; conditions
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </a>
                        <a href="https://billdr.co/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer" class="child:p-0">
                            <button class="text-primary hover:text-black flex items-center cursor-pointer rounded-xl box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row gap-1 justify-start bg-transparent text-primary hover:text-secondary p-0 text-sm font-normal" type="button" data-headlessui-state="">
                                Marketplaces-Policies
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </a>
                        <a href="https://billdr.co/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer" class="child:p-0">
                            <button class="text-primary hover:text-black flex items-center cursor-pointer rounded-xl box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row gap-1 justify-start bg-transparent text-primary hover:text-secondary p-0 text-sm font-normal" type="button" data-headlessui-state="">
                                Product roadmap
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </a>
                        <a href="https://billdr.co/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer" class="child:p-0">
                            <button class="text-primary hover:text-black flex items-center cursor-pointer rounded-xl box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row gap-1 justify-start bg-transparent text-primary hover:text-secondary p-0 text-sm font-normal" type="button" data-headlessui-state="">
                                Log out
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </aside>
                <main className='w-4/5 h-full rounded-xl flex flex-col gap-4'>
                    {
                        tab == 0 ? <Business /> :
                            tab == 1 ? <PersonalInformation /> :
                                tab == 2 ? <ProjectSettings /> :
                                    tab == 3 ? <SubscriptionPlan /> :
                                        tab == 4 && <AppIntegration />
                    }
                </main>
            </div>
        </div>
    )
}

export default page