import React from 'react'

export default function Card() {
    const dropDownData = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            <div className="card mt-3" style={{ width: '250px' }}>
                <img src="https://source.unsplash.com/random/300×300/?fruit" class="card-img-top" alt="..." style={{ maxHeight: '150px', objectFit: 'cover !important' }} />
                <div class="card-body" >
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded'>
                            {dropDownData.map((item, i) => {
                                return <option className='m-2' key={i} value={i} >{item}</option>
                            })}

                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option className='m-2' key={'half'} value={'half'} >Half</option>
                            <option className='m-2' key={'full'} value={'half'} >full</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
