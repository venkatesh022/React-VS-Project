import React from 'react'

const Countries = () => {
  return (
    <React.Fragment>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-secondary text-light">
                            <p className="h2">Countries</p>
                        </div>
                        <div className="card-body">
                            <p className="h3">G7 Summit Countries</p>
                            <ul className='countriesList'>
                                <li>India</li>
                                <li>Germany</li>
                                <li>Argentina</li>
                                <li>South Africa</li>
                                <li>Indonesia</li>
                                <li>Ukraine</li>
                                <li>Senegal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Countries