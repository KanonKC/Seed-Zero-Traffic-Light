const axios = require('axios')
const API = "https://zeedzero-hardware.herokuapp.com/users"

export async function getDataById(userid){
    const { data } =  await axios.get(`${API}/${userid}`)
    return data
}

export async function updateLEDById(userid,value){
    console.log("Update LED")
    const result = await axios.put(`${API}/${userid}/update`,{
        'led': String(value)
    })
    return result
}

export async function updateButtonById(userid,value){
    console.log("Update Button")
    const result = await axios.put(`${API}/${userid}/update`,{
        'button': String(value)
    })
    return result
}
