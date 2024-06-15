import React, { ReactNode } from 'react'

type _props = {
    children: ReactNode
}
const Main = ({ children }: _props) => {
    return (
        <div className='main'>
            <div className='main-secondary'>
                <section className='main-section'>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        padding: '0px 0px 25px 0px',
                        textAlign: 'center',
                        justifyContent:'center',
                        margin:'0 auto'
                    }}>
                        <div style={{
                            height: '60px',
                            width: '60px',
                            backgroundColor: 'black',
                            borderRadius: '50%',
                            border: '1px solid red'
                        }}></div>
                        <div style={{}}>name</div>
                    </div>
                    <div className='main-section-topic'>
                        <div>Home</div>
                        <div>Cuisines</div>
                        <div>filter</div>
                        <div>settings</div>
                    </div>
                </section>
                <div>{children}</div>
            </div>

        </div>
    )
}

export default Main
