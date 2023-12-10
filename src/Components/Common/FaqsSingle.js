import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
// import Skeleton from 'react-loading-skeleton'

const  FaqsSingle = ({ question, answer }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <div style={{
                width: 'calc(100% - 30px)',
                // background: '#F0FAFF',
                background: open? '#445658': '#2a3440',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                // color: 'black',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '5px 15px',
                marginTop: '10px',
                // border: '1px solid rgba(110, 110, 110, 0.580164)',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                
            }} onClick={handleOpen}>
                {/* {question || <Skeleton />} */}
                {question}
                {open ?
                    <AiOutlineDown onClick={handleOpen} />
                    :
                    <AiOutlineRight onClick={handleOpen} />
                }

            </div>
            {open && (
                <div style={{
                    width: 'calc(100% - 30px)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'black',
                    fontSize: '14px',
                    padding: '5px 15px',
                    border: '1px solid rgba(110, 110, 110, 0.580164)',

                }}>
                    {answer}
                </div>
            )}
        </>
    )
}

export default FaqsSingle