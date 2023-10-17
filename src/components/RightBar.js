import React from 'react'
// import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [

    ],
    datasets: [{
        data: [10, 100],
        backgroundColor: [
            ' rgba(67, 56, 202)',
            'rgba(229, 231, 235)',

        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',

        ]
    }]
};


const RightBar = () => {
    return (
        <div className="bg-white  w-4/12 rounded-xl border border-gray-100">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">Header </p>
            </div>
            <div className="flex flex-col items-center p-3">
                <p className="font-semibold text-lg text-gray-800" > Title</p>
                <p className="text-gray-600 text-sm">Desc</p>
            </div>

            <div className="p-4  flex items-center justify-center">

                <div className="flex justify-center items-center     h-48 w-48   rounded-full" style={{ borderWidth: "16px" }} >
                    <div className="flex justify-center items-center  border-gray-200 h-44 w-44 rounded-full ">
                        <div className=" flex flex-col justify-center items-center shadow-2xl h-32 w-32 rounded-full  ">
                            <p className="text-gray-800 font-semibold"> total Registered</p>
                            <p className="text-blue-700 font-semibold text-sm"> View All</p>

                        </div>

                    </div>
                </div>

            </div>

            <div className="flex flex-col items-center p-3">
                <p className="text-gray-600 text-sm text-center"> Note Desc</p>
            </div>
        </div>
    )
}

export default RightBar
