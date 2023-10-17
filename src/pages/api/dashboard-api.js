// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import axiosInstance from "../../network/api";

export default async function handler(req, res) {


    const { ward_id, token } = req.query;

    console.log(ward_id, "ASdfkwleoiqjaslkjfeqdioasjlk")
    let dashboard_data = {};
    let familiesList_data = {};
    let error = ""
    try {
        const response = await axios.get(`http://himstaging1.hp.gov.in/urban-dept/survey/report/count?wardId=${ward_id}`, {});
        console.log(response, "dashboard response")
        dashboard_data = response.data;



        const familiesList = await fetch(`http://himstaging1.hp.gov.in/urban-dept/familyList?page=0&size=10&wardId=${ward_id}`);
        familiesList_data = await familiesList.json();



        console.log(dashboard_data, "asdkjada")

    } catch (error) {
        console.log(error, "dashboard response");
        error = error;

    }






    console.log(dashboard_data, "ASdfqwkdolal")
    const data = {
        dashboard_data: dashboard_data,
        families_data: familiesList_data,
        ward_id: ward_id,
        error: error
    }


    res.status(200).json(data)
}
