import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LayersIcon from '@mui/icons-material/Layers';
import LockIcon from '@mui/icons-material/Lock';



const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
            <div className=" border-b py-3 mt-1 flex justify-around ">
                <p className="text-xl  font-semibold">elrond</p>
                <p>|</p>
                <p className="text-gray-400 text-lg">wallet</p>

            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="text-gray-400">Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <DonutLargeIcon className=" text-gray-300" />
                            <p className=" "  >Dashbord</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ClearAllIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Transaction</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowUpwardIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Send</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowDownwardIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Receive</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SyncAltIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Buy</p>
                        </div>
                    </div>

                </div>
                <div className="space-y-6" >
                    <h1 className="text-gray-400">Delegation</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <LockIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Delegate</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <LockIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Claim Reward</p>
                        </div>
                    </div>

                </div>
                <div className="space-y-6" >
                    <h1 className="text-gray-400">taking    </h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <LayersIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Validate</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Sidebar
