import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
"mdbreact";

export class CarouselPage extends Component {
    render() {
        return (
            <MDBContainer fluid>
            <MDBRow>
            <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            id="Home_banner"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src="./images/temp/slider-mainbg-001.jpg" alt="First slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner1">
                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                <h2 className="ttm-textcolor-darkgrey flipInY">Lorem <strong className="ttm-textcolor-skincolor">ipsum </strong> dolor sit amet, consectetur adipiscing elit</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                            <p className="text">Pellentesque at lorem purus.<br /> Duis eros odio, aliquet eu turpis sed, vehicula pulvinar lacus</p>
                            </MDBAnimation>

                        </div>
                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="./images/temp/slider-mainbg-002.jpg" alt="Second slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner2">
                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                                <h2 className="ttm-textcolor-darkgrey">Lorem <strong className="ttm-textcolor-skincolor">ipsum </strong> dolor sit amet, consectetur adipiscing elit</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="5.5s" >
                                <p className="text">Pellentesque at lorem purus.<br /> Duis eros odio, aliquet eu turpis sed, vehicula pulvinar lacus</p>
                            </MDBAnimation>

                        </div>
                      </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default CarouselPage;