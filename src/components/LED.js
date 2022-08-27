import React, { useEffect, useState } from 'react'

const LED = ({isActive,RGBColor}) => {

    const [LightOff,setLightOff] = useState('rgb(50,50,50)')
    const [LightOn,setLightOn] = useState('rgb(50,50,50)')
    
    useEffect(()=>{
        setLightOff(`rgb(${Math.floor(RGBColor[0]*0.2)},${Math.floor(RGBColor[1]*0.2)},${Math.floor(RGBColor[2]*0.2)})`)
        setLightOn(`rgb(${RGBColor[0]},${RGBColor[1]},${RGBColor[2]})`)
    },[RGBColor])

    return (
        <div className='led'>
            <div className='led-light' style={{
                backgroundColor: isActive ? LightOn : LightOff,
                boxShadow: isActive ? `0 0 100px ${LightOn}` : '0 0 0'
            }}></div>
        </div>
        
    )
}

LED.defaultProps = {
    isActive: false,
    RGBColor: 'rgb(50,50,50)'
}

export default LED