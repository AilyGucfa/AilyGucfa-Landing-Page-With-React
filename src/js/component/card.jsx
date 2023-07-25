import React from 'react'

const Card = () => {
    return (
        <div className="container d-flex flex-wrap">
            <div className="row mt-4  ">
                 <div className="col-12 col-lg-3">
                    <div className="card" >
                        <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-footer"><a href="#" className="btn btn-primary btn-sm">Find out more</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="card me-1">
                        <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-footer"> <a href="#" className="btn btn-primary btn-sm">Find out more</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                     <div className="card">
                        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-footer"><a href="#" className="btn btn-primary btn-sm">Find out more</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="card">
                        <img src="https://picsum.photos/200/300.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="card-footer"><a href="#" className="btn btn-primary btn-sm">Find out more</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Card;