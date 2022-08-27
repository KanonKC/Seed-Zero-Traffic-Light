import React, { useEffect, useState } from 'react'
import LED from '../components/LED'
import { getDataById, updateButtonById } from '../services/hardware.service'
import { USER_ID } from '../setting'

const Homepage = () => {

    const STATUS = [
        "รถกำลังวิ่ง อย่าพึ่งข้าม",
        "รถกำลังจะหยุด",
        "รถหยุดแล้ว วิ่งได้เลย"
    ]

    const [LEDValue, setLEDValue] = useState(0)
    const [loading, setLoading] = useState(false)

    const activatedButton = () => {
        updateButtonById(USER_ID, 1)
        //setLoading(true)
    }

    useEffect(() => {
        console.log("HelloWorld")
        setInterval(() => {
            getDataById(USER_ID).then((data) => {
                if (LEDValue == 3 && data.led == 1) {
                    setLoading(false)
                }
                if ((data.led == 2 || data.led == 3) && data.button == 1) {
                    updateButtonById(USER_ID, 0)
                }
                setLEDValue(Number(data.led))
            })
        }, 1000)
    }, [])

    return (
        <div>
            <h1 className='homepage-title'>TRAFFIC LIGHT</h1>
            <h1><b>สถานะ:</b> {STATUS[LEDValue - 1]}</h1>

            <div className='traffic-light-controller'>

                <div className='traffic-light'>
                    <LED isActive={LEDValue == 3} RGBColor={[255, 0, 0]} />
                    <LED isActive={LEDValue == 2} RGBColor={[255, 255, 0]} />
                    <LED isActive={LEDValue == 1} RGBColor={[0, 255, 0]} />
                </div>

                {!loading && <button className='btn btn-warning switch-btn' onClick={activatedButton}>คนจะเดิน รถหยุดหน่อย</button>}
                {loading && <div className="spinner-border text-warning" role="status"></div>}

            </div>
        </div>
    )
}

export default Homepage