export const CostSummary = ({ }) => {

    const data = [
        {
            "item": "General conditions",
            "amount": "$9,120.00",
            "taskList": [
                {
                    "title": "General admin fees",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Plans and permitting",
            "amount": "$4,189.00",
            "taskList": [
                {
                    "title": "Aluminum roof covering budget & design",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Advanced protection of aluminum (New product above the garage with a report)",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Multitrade",
            "quantity": "1 each",
            "amount": "$1,720.35",
            "taskList": [
                {
                    "title": "Coordinate and enable management",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Insurance and license fees",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Site supervision and management",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Prepare the floor areas to install the fittings of each",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Demolition",
            "quantity": "1 each",
            "amount": "$1,752.36",
            "taskList": [
                {
                    "title": "Remove and dispose wood ceilings",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Remove and dispose drywall ceilings",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Cutting the wooden channels (remove old wood ceiling drainage, switch/plug-in identity outlets, etc.)",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Structural wood",
            "quantity": "1 each",
            "amount": "$971.11",
            "taskList": [
                {
                    "title": "Supply and install 2x4 SPF channel wood for 2’ High",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install 2x4 SPF channel wood for 1’ High",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Flooring",
            "quantity": "1 each",
            "amount": "$112.64",
            "taskList": [
                {
                    "title": "Supply and install hardwood flooring at kitchen (overall 48x16 - 32x12 sqft)",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Painting",
            "quantity": "1 each",
            "amount": "$90.35",
            "taskList": [
                {
                    "title": "Supply and install painting 2 doors + 2 front side walls",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install painting 2 doors + 2 inside walls",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install painting 2 front side walls",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install painting 2 inside walls",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Electrical",
            "quantity": "1 each",
            "amount": "$5,599.60",
            "taskList": [
                {
                    "title": "Supply and install 10x 14.5W energy efficient recessed light fixture",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install 12x 14.5W energy efficient recessed light fixture",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install new kitchen & bathroom electrical wires to budget constraint (3 outlets)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install new outlets, light switches, and plates",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install 14x 15W energy efficient recessed light fixture",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install existing standard light switches & plates (2 outlets)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install new dining chandelier light fixture & wire (2 outlets)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install existing standard electrical outlet and wall charger",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Doors and windows",
            "quantity": "1 each",
            "amount": "$1,270.00",
            "taskList": [
                {
                    "title": "Supply and install windows - install window in bedroom & bathroom 22x24 - supply & install change hinge door with",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install front door window - change 2x windows with white aluminum frame",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Plumbing",
            "quantity": "1 each",
            "amount": "$2,578.99",
            "taskList": [
                {
                    "title": "Supply and install kitchen sink with garbage disposal (in new location)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install washing machine & dryer - new location 1 each (change 2x)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install new location, sink - basement",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install all plumbing lines + kitchen island plumbing",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "HVAC",
            "quantity": "1 each",
            "amount": "$1,056.06",
            "taskList": [
                {
                    "title": "Supply and install ventilation over hood fan",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install heat recovery system - install new air vent + exhaust outlet",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install new heater at basement",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Walls - interior",
            "quantity": "1 each",
            "amount": "$556.41",
            "taskList": [
                {
                    "title": "Supply and install Gypcrete flooring at kitchen (8’ height max - supply & install 12 studs)",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Walls - insulation",
            "quantity": "1 each",
            "amount": "$1,209.86",
            "taskList": [
                {
                    "title": "Supply and install new soundproofing insulation",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install Gypcrete 12” insulation panels at new wood partition walls (overall size 32.5 x 12 sqft)",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Ceiling",
            "quantity": "1 each",
            "amount": "$74.06",
            "taskList": [
                {
                    "title": "Supply and install 1/2” TPI ceiling drywall",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Ceiling - insulation",
            "quantity": "1 each",
            "amount": "$208.50",
            "taskList": [
                {
                    "title": "Supply and install new flooring insulation & install a sound insulation membrane at living room ceiling",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Kitchen fixtures",
            "quantity": "1 each",
            "amount": "$518.00",
            "taskList": [
                {
                    "title": "Supply and install kitchen island new above the counter",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Kitchen cabinetry",
            "quantity": "1 each",
            "amount": "$3,717.00",
            "taskList": [
                {
                    "title": "Install cabinetry and island - L-shape (36”x 30”)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install base cabinet and island refrigerator wall",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install fridge panel and kitchen island cooktop",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install glass upper cabinet + lower drawers + island & island drawers",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install island cabinet (approx 22” x 30”)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install island + hood fan",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Install kitchen island with base cabinet, sink, dishwasher, and garbage disposal",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
        {
            "item": "Kitchen countertops",
            "quantity": "1 each",
            "amount": "$2,805.00",
            "taskList": [
                {
                    "title": "Supply and install quartz countertops (26” linear foot countertop)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install granite island countertop (12” x 16” granite top)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install backsplash (4.5 sqft)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install waterfall countertop island (26 linear ft, 16 ft by 16 ft)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install new single basin sink (undermount)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install faucet 1 each (4 ft 4)",
                    "quantity": 1,
                    "quantityType": "each"
                },
                {
                    "title": "Supply and install faucet + disposal air switch",
                    "quantity": 1,
                    "quantityType": "each"
                }
            ]
        },
    ]

    return <div className="mt-4 bg-gray-50">
        <h1 className='my-2 mt-6 font-semibold'>Cost summary</h1>

        {/* Header */}
        <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t-lg">
            <div className="w-2/3">Task</div>
            <div className="w-1/6 text-right">Quantity</div>
            <div className="w-1/6 text-right">Amount</div>
        </div>

        {/* Task List */}
        <div className="bg-white rounded-b-lg shadow overflow-hidden">
            {data.map((item, index) => (
                <div key={index} className="border-b last:border-none p-4">
                    <div className="flex justify-between">
                        <div className="w-2/3 font-semibold">{item.item}</div>
                        <div className="w-1/6 text-right font-bold">{item.amount}</div>
                    </div>
                    {item.taskList && (
                        <table className="py-2 text-gray-600 w-full">
                            {item.taskList.map((task, taskIndex) => (
                                <tr key={taskIndex} className='w-full py-4 border-b'>
                                    <td className='w-4/5 py-4'>{task?.title}</td>
                                    <td>{task?.quantity} {task?.quantityType}</td>
                                </tr>
                            ))}
                        </table>
                    )}
                </div>
            ))}
        </div>


        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h1 className='font-bold text-xl'>Appliances</h1>
            <div className="flex flex-row justify-end">
                <div className="w-1/3">
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-gray-700">Subtotal:</div>
                        <div className="text-gray-700">$108,264.80</div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-gray-700">GST 5%:</div>
                        <div className="text-gray-700">$5,413.24</div>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg">
                        <div>Total:</div>
                        <div>$113,678.04</div>
                    </div>
                </div>
            </div>
        </div>



        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h1 className='text-xl'>Payment schedule</h1>
            <div className="flex flex-row justify-start mt-2">
                <table className="w-1/3">
                    <tr className="">
                        <td className="text-gray-700">Beginning of project</td>
                        <td className="text-gray-700">40%</td>
                        <td className="text-gray-700">$15,108.80</td>
                    </tr>
                    <tr className="">
                        <td className="text-gray-700">Middle of project</td>
                        <td className="text-gray-700">40%</td>
                        <td className="text-gray-700">$15,108.80</td>
                    </tr>
                    <tr className="">
                        <td className="text-gray-700">End of project</td>
                        <td className="text-gray-700">20%</td>
                        <td className="text-gray-700">$15,108.80</td>
                    </tr>
                </table>
            </div>
        </div>



        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h1 className='font-bold text-xl'>Construction schedule</h1>
            {/* Make table here  */}
        </div>



        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h1 className='font-bold text-xl'>Quote validity</h1>
            <p className=''>7 days - August 22nd 2024</p>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Purpose</h2>
                <p>
                    The purpose of this Agreement is to set forth the terms and conditions under which Contractor will perform the construction work described above for Client.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Scope of Work</h2>
                <p>
                    The Contractor shall perform the construction work described in this quote in accordance with all applicable laws and regulations and in accordance with the plans and specifications provided.
                </p>
                <p>
                    The Contractor must at all times comply with the applicable regulations and codes in force, the best practices applicable, and the terms and conditions of this contract. He is also responsible for the work carried out by his workers and those carried out by the subcontractors he hires.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Security and Maintenance of the Premises</h2>
                <p>
                    The Contractor must ensure the safety of the premises, keep the premises clean, and prevent any accumulation of unusable materials or other nuisances. The Contractor must protect the work, Client property, and property adjacent to the site of the work from damage. Upon completion of the work, the Contractor must remove all construction debris and clean the site of dirt caused by the work, at its sole cost.
                </p>
                <p>
                    The Contractor shall be solely responsible for taking the necessary steps to protect the health and ensure the safety and physical well-being of construction workers.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Insurance</h2>
                <p>
                    The Contractor confirms that he has adequate and sufficient civil liability insurance for the performance of the work provided for in the contract and that this insurance covers the subcontractors and the Client. The Contractor confirms that he has adequate and sufficient damage insurance coverage protecting the value of the Client property, as well as his materials and equipment.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Payment Terms</h2>
                <p>
                    Client shall pay Contractor in accordance with the payment schedule set forth in the contract. Change orders must be approved and paid in advance of work completion.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Change Orders</h2>
                <p>
                    Any changes to the scope of work shall be set forth in a written change order signed by both parties. No change order shall be binding unless it is signed by both parties. Change orders must be approved and paid in advance of work completion.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Warranties</h2>
                <p>
                    The Contractor undertakes to provide the Client if requested, at the end of the work, with the documents setting out the guarantees from the manufacturers and sellers in connection with the products or materials installed. In addition to applicable legal guarantees, the Client shall benefit from the Contractor's contractual guarantee for a minimal period of one year.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Default on the part of the Contractor or Client and termination of the contract</h2>
                <p>
                    The Contractor is in default if he breaches any of his obligations under this contract. If the breach is material, the Client may terminate the contract if the Contractor does not correct the breach within the time limit provided in the written notice sent to him by the Client. The Client is in default if he breaches one of his obligations under this contract. If the breach is material, the Contractor may terminate the contract if the Client does not correct the breach within the time limit provided for in the written notice sent to him by the Contractor. The contract is terminated if the Contractor becomes insolvent, goes bankrupt, or makes a general assignment of its assets for the benefit of its creditors, or if a bankruptcy receiver is appointed for the contractor.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Unilateral termination of the contract</h2>
                <p>
                    The Contractor may terminate the contract unilaterally only for a serious reason, and never at an inopportune moment. Upon termination of the contract, the Client is bound to pay to the Contractor the value of the work performed before the end of the contract or before the notification of termination, as well as the value of the goods which have been handed over to him and which are usable, if any. For his part, the Contractor is bound to repay any advances he has received in excess of what he has earned.
                </p>
                <p>
                    The Client can unilaterally terminate the contract at any time even if the work has started. On the other hand, he must pay the Contractor the value of the work performed before the end of the contract or before the notification of termination, as well as the value of the goods which have been handed over to him and which are usable, if any. Each party may be liable for the damage suffered by the other.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Material Price Fluctuation</h2>
                <p>
                    The Contractor reserves the right to review with the Client the amount of the quote attributed to materials that will have undergone an increase of more than 10% between the time of signing the contract and the first day of work. Any revision to the contract must be approved by the Client and the Contractor before work begins.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
                <p>
                    This Agreement shall be governed by and construed in accordance with the laws of the contractor's company address.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Entire Agreement</h2>
                <p>
                    This Agreement constitutes the entire agreement between the parties and supersedes all prior negotiations, understandings, and agreements between the parties relating to the subject matter of this Agreement.
                </p>
            </section>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h1 className='font-bold text-xl'>Attached documents</h1>
            {/* Files List here */}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h1 className='font-bold text-xl'>Signatures</h1>
            {/* Make table here  */}
            <div className="flex flex-row mt-4">
                <div className="w-1/2 py-2 border-dotted border-b-4 mr-8">
                    <span className="italic text-gray-500">Client signature</span>
                </div>
                <div className="w-1/2 py-2 border-dotted border-b-4">
                    <span className="">Gurwinder Singh</span>
                </div>
            </div>
        </div>
    </div>
}