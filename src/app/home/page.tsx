"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import cx from "../home/index.module.scss";
import { Button, Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // $ = jQuery = require("jquery");
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { bag1, bag3, bag4, trolleyBagNew, trolleyBagNew1, trolleyBagNew2, brand1, brand2, trolleyBag7, trolleyBag8, trolleyBag3, trolleyBag5, travelBag, trolleyBag9, trolleyBag10 } from "../../../public/images";

const HomePage = () => {
  useEffect(() => { }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      // once: false,
    })
  }, [])

  const settings = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const options = {
    dots: false,
    loop: false,
    margin: 10,
    items: 4,
    autoplay: false,
    nav: true,
    // navText:,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
    },
  };
  const options2 = {
    dots: false,
    loop: false,
    margin: 10,
    items: 4,
    autoplay: false,
    nav: true,
    // navText:,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };
  const options3 = {
    dots: true,
    loop: false,
    margin: 10,
    items: 4,
    autoplay: true,
    nav: true,
    // navText:,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  };
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  return (
    <>
      <Header />

      <main id="mainContent">

        <section className={`${cx.mainSlide_section} overflow-hidden `} >
          <Container fluid className="p-0">
            <OwlCarousel className="owl-theme sliderRow" {...options3}>
              <div className="item">
                <div className={`${cx.mainSlide_box} overflow-hidden position-relative `}>
                  <Image src={trolleyBagNew2} alt="lines" className={`${cx.slider_img} w-100 h-100`} />
                  <div className={`${cx.content_absolute}`}>
                    <div className="container height-inherit d-flex align-items-center justify-content-end">
                      <div className={`${cx.content_box}`} data-aos="fade-up" data-aos-duration="700">
                        <p>Top Branded</p>
                        <h2>Best Trolley Bags 2024</h2>
                        <Link className="btn" href={"#"}>Shop Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className={`${cx.mainSlide_box} overflow-hidden position-relative `}>
                  <Image src={travelBag} alt="lines" className={`${cx.slider_img} w-100 h-100`} />
                  <div className={`${cx.content_absolute}`}>
                    <div className="container height-inherit d-flex align-items-center justify-content-start">
                      <div className={`${cx.content_box}`} data-aos="fade-up" data-aos-duration="700">
                        <p>Top Branded</p>
                        <h2>Best Trolley Bags 2023</h2>
                        <Link className="btn" href={"#"}>Shop Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className={`${cx.mainSlide_box} overflow-hidden position-relative `}>
                  <Image src={trolleyBagNew2} alt="lines" className={`${cx.slider_img} w-100 h-100`} />
                  <div className={`${cx.content_absolute}`}>
                    <div className="container height-inherit d-flex align-items-center justify-content-end">
                      <div className={`${cx.content_box}`} data-aos="fade-up" data-aos-duration="700">
                        <p>Top Branded</p>
                        <h2>Best Trolley Bags 2022</h2>
                        <Link className="btn" href={"#"}>Shop Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </Container>
        </section>


        {/* banner start */}
        <section className={`${cx.banner_section} mt-100 overflow-hidden `}>
          <div className={`${cx.banner_section_inner}`}>
            <Container>
              <Row className="justify-content-center">
                <Col lg={6} md={6} xs={12} data-aos="fade-right" data-aos-duration="1200">
                  <Link
                    href={"#"}
                    className={`${cx.banner_item} position-relative rounded`}
                  >
                    <Image
                      src={trolleyBag9}
                      alt="lines"
                      className={`${cx.banner_img} w-100 h-100`}
                    />

                    <div className={`${cx.content_absolute} content-slide`}>
                      <div className="container height-inherit d-flex align-items-center">
                        <div className="content-box banner-content p-4">
                          <p className={`${cx.heading_18} mb-3`}>
                            Mini Trolley Bag
                          </p>
                          <h2 className={`${cx.heading_34}`}>
                            25% off on <br /> all trolley bags
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col lg={6} md={6} xs={12} data-aos="fade-left" data-aos-duration="1200">
                  <Link
                    href={"#"}
                    className={`${cx.banner_item} position-relative rounded`}
                  >
                    <Image
                      src={trolleyBag10}
                      alt="lines"
                      className={`${cx.banner_img} w-100 h-100`}
                    />

                    <div className={`${cx.content_absolute} content-slide`}>
                      <div className="container height-inherit d-flex align-items-center">
                        <div className="content-box banner-content p-4">
                          <p className={`${cx.heading_18} mb-3`}>
                            New Year Sell
                          </p>
                          <h2 className={`${cx.heading_34}`}>
                            25% off on <br /> all trolley bags
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* banner end */}

        {/* feature start */}
        <section className={`${cx.featured_collection} mt-100 overflow-hidden`}>
          <Container>
            <Row>
              <div className="text-center">
                <h2 className={`${cx.section_heading}`}>Popular Products</h2>
                <p className={`${cx.section_sub_heading}`}>Travel with Ease: Explore Our Top Trolleybag</p>
              </div>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                <div className={`${cx.product_card}`}>
                  <div className={`${cx.product_card_img}`}>
                    <Link href={"#"} className={`${cx.hover_switch}`}>
                      <Image
                        src={trolleyBagNew}
                        alt="lines"
                        className={`${cx.secondary_img} w-100 h-100`}
                      />
                      <Image
                        src={trolleyBagNew1}
                        alt="lines"
                        className={`${cx.primary_img} w-100 h-100`}
                      />
                    </Link>
                    <div
                      className={`${cx.product_card_action} ${cx.product_card_action_2}`}
                    >
                      <Link
                        href={"#quickview-modal"}
                        className={`${cx.quickview_btn} btn-primary btn`}
                      >
                        QUICKVIEW
                      </Link>
                      <Link
                        href={"#"}
                        className={`${cx.addtocart_btn} btn-primary btn`}
                      >
                        ADD TO CART
                      </Link>
                    </div>

                    <Link
                      href={"#"}
                      className={`${cx.wishlist_btn} ${cx.card_wishlist}`}
                    >
                      <svg
                        className={`${cx.icon} ${cx.icon_wishlist}`}
                        width="26"
                        height="22"
                        viewBox="0 0 26 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className={`${cx.wishlist_btn} text-center`}>
                    <h3 className={`${cx.product_card_title}`}>
                      <Link href={"#"}>Black Trolley Bag</Link>
                    </h3>
                    <div className={`${cx.product_card_price}`}>
                      <span className={`${cx.card_price_regular}`}>$1529</span>
                      <span
                        className={`${cx.card_price_compare} text-decoration-line-through`}
                      >
                        $1759
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* feature end */}

        {/* shop by category start */}
        <section className={`${cx.shop_category} mt-100 overflow-hidden`}>
          <Container>
            <Row>
              <div className="text-center mb-4">
                <h2 className={`${cx.section_heading}`}>Shop By Category</h2>
                <p className={`${cx.section_sub_heading}`}>Travel with Ease: Explore Our Top Trolleybag</p>
              </div>

              <Col md={4} data-aos="fade-left" data-aos-duration="700">
                <div className={`${cx.img_box} ${cx.img_box_left}`}>
                  <Link href={"#"} className={`${cx.shop_link_box} `}>
                    <Image
                      src={trolleyBagNew}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                    <div className={`${cx.shop_contentBox}`}>
                      <p className={`${cx.primary_color}`}>New Arrivals</p>
                      <h2 className={`${cx.heading_18} mb-0`}>
                        Duffle Bags
                      </h2>
                      <span
                        className={`${cx.text_12} text-decoration-underline`}
                      >
                        SHOP COLLECTION
                      </span>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col md={8} data-aos="fade-right" data-aos-duration="700">
                <Row>
                  <Col md={6}>
                    <div className={`${cx.img_box} ${cx.img_box_rightTop}`}>
                      <Link
                        href={"#"}
                        className={`${cx.shop_link_box} ${cx.bg_light_blue}`}
                      >
                        <Image
                          src={trolleyBagNew1}
                          alt="lines"
                          className={`${cx.imgs} w-100 h-100`}
                        />
                        <div className={`${cx.shop_contentBox}`}>
                          <p className={`${cx.primary_color}`}>New Arrivals</p>
                          <h2 className={`${cx.heading_18} mb-0`}>
                            Basket Bag
                          </h2>
                          <span
                            className={`${cx.text_12} text-decoration-underline`}
                          >
                            SHOP COLLECTION
                          </span>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={`${cx.img_box} ${cx.img_box_rightTop}`}>
                      <Link href={"#"} className={`${cx.shop_link_box}`}>
                        <Image
                          src={trolleyBagNew}
                          alt="lines"
                          className={`${cx.imgs} w-100 h-100`}
                        />
                        <div className={`${cx.shop_contentBox}`}>
                          <p className={`${cx.primary_color}`}>New Arrivals</p>
                          <h2 className={`${cx.heading_18} mb-0`}>
                            Rolling Suitcase
                          </h2>
                          <span
                            className={`${cx.text_12} text-decoration-underline`}
                          >
                            SHOP COLLECTION
                          </span>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className={`${cx.img_box} ${cx.img_box_rightBottom}`}>
                      <Link
                        href={"#"}
                        className={`${cx.shop_link_box} ${cx.bg_light_blue}`}
                      >
                        <Image
                          src={trolleyBagNew}
                          alt="lines"
                          className={`${cx.imgs} w-100 h-100`}
                        />
                        <div className={`${cx.shop_contentBox}`}>
                          <p className={`${cx.primary_color}`}>New Arrivals</p>
                          <h2 className={`${cx.heading_18} mb-0`}>
                            Wheel Duffle Bags
                          </h2>
                          <span
                            className={`${cx.text_12} text-decoration-underline`}
                          >
                            SHOP COLLECTION
                          </span>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col md={8}>
                    <div className={`${cx.img_box} ${cx.img_box_rightBottom}`}>
                      <Link
                        href={"#"}
                        className={`${cx.shop_link_box} ${cx.bg_light_blue}`}
                      >
                        <Image
                          src={trolleyBagNew1}
                          alt="lines"
                          className={`${cx.imgs} w-100 h-100`}
                        />
                        <div
                          className={`${cx.shop_contentBox} left-inherit end-0 text-end`}
                        >
                          <p className={`${cx.primary_color}`}>New Arrivals</p>
                          <h2 className={`${cx.heading_18} mb-0`}>
                            Rolling Suitcase
                          </h2>
                          <span
                            className={`${cx.text_12} text-decoration-underline`}
                          >
                            SHOP COLLECTION
                          </span>
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        {/* shop by category end */}

        {/* Latest blogs start */}
        <section className={`${cx.latest_blog_sec} mt-100 pt-100 pb-100 bg-pink overflow-hidden`}>
          <Container>
            <Row>
              <div className="text-center mb-4">
                <h2 className={`${cx.section_heading}`}>Latest blogs</h2>
                <p className={`${cx.section_sub_heading}`}>Travel with Ease: Explore Our Top Trolleybag</p>
              </div>
              <OwlCarousel className="owl-theme sliderRow" {...options}>
                <div className="item">
                  <div className={`${cx.blog_card}`} data-aos="fade-up" data-aos-duration="700">
                    <Link href={"#"} className={`${cx.blog_imgsBox}`}>
                      <Image src={trolleyBag5} alt="lines" className={`${cx.blogs_img} w-100 h-100`} />
                    </Link>
                    <div className={`${cx.blog_content}`}>
                      <p>30 July 2022</p>
                      <Link href={"#"} className={`${cx.blog_para}`}>
                        <h4>The fairycore trend is a 2022 fashion hit as fairies.</h4>
                      </Link>
                      <Link className={`${cx.blog_readMore}`} href={"#"}>Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className={`${cx.blog_card}`} data-aos="fade-up" data-aos-duration="700">
                    <Link href={"#"} className={`${cx.blog_imgsBox}`}>
                      <Image src={trolleyBag5} alt="lines" className={`${cx.blogs_img} w-100 h-100`} />
                    </Link>
                    <div className={`${cx.blog_content}`}>
                      <p>30 July 2022</p>
                      <Link href={"#"} className={`${cx.blog_para}`}>
                        <h4>The fairycore trend is a 2022 fashion hit as fairies.</h4>
                      </Link>
                      <Link className={`${cx.blog_readMore}`} href={"#"}>Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className={`${cx.blog_card}`} data-aos="fade-up" data-aos-duration="700">
                    <Link href={"#"} className={`${cx.blog_imgsBox}`}>
                      <Image src={trolleyBag5} alt="lines" className={`${cx.blogs_img} w-100 h-100`} />
                    </Link>
                    <div className={`${cx.blog_content}`}>
                      <p>30 July 2022</p>
                      <Link href={"#"} className={`${cx.blog_para}`}>
                        <h4>The fairycore trend is a 2022 fashion hit as fairies.</h4>
                      </Link>
                      <Link className={`${cx.blog_readMore}`} href={"#"}>Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className={`${cx.blog_card}`} data-aos="fade-up" data-aos-duration="700">
                    <Link href={"#"} className={`${cx.blog_imgsBox}`}>
                      <Image src={trolleyBag5} alt="lines" className={`${cx.blogs_img} w-100 h-100`} />
                    </Link>
                    <div className={`${cx.blog_content}`}>
                      <p>30 July 2022</p>
                      <Link href={"#"} className={`${cx.blog_para}`}>
                        <h4>The fairycore trend is a 2022 fashion hit as fairies.</h4>
                      </Link>
                      <Link className={`${cx.blog_readMore}`} href={"#"}>Read More</Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </Row>
          </Container>
        </section>
        {/* Latest blogs end */}

        {/* Insta Section start */}
        <section className={`${cx.insta_section} mt-100 overflow-hidden`}>
          <Container>
            <Row>
              <div className="text-center mb-4">
                <div className={`${cx.insta_icon}`}>
                  <FaInstagram />
                </div>
                <h2 className={`${cx.section_heading} mb-0`}>Bag & Water pot</h2>
                <p className={`${cx.section_sub_heading}`}>Travel with Ease: Explore Our Top Trolleybag</p>
              </div>
              <OwlCarousel className="owl-theme sliderRow" {...options2}>
                <div className="item">
                  <Link href={"#"} className={`${cx.bag_product} w-100 h-100`} data-aos="fade-up" data-aos-duration="700">
                    <Image src={trolleyBag7} alt="lines" className={`${cx.bags_img} w-100 h-100`} />
                  </Link>
                </div>
                <div className="item">
                  <Link href={"#"} className={`${cx.bag_product} w-100 h-100`} data-aos="fade-up" data-aos-duration="700">
                    <Image src={trolleyBag8} alt="lines" className={`${cx.bags_img} w-100 h-100`} />
                  </Link>
                </div>
                <div className="item">
                  <Link href={"#"} className={`${cx.bag_product} w-100 h-100`} data-aos="fade-up" data-aos-duration="700">
                    <Image src={trolleyBag7} alt="lines" className={`${cx.bags_img} w-100 h-100`} />
                  </Link>
                </div>
                <div className="item">
                  <Link href={"#"} className={`${cx.bag_product} w-100 h-100`} data-aos="fade-up" data-aos-duration="700">
                    <Image src={trolleyBag8} alt="lines" className={`${cx.bags_img} w-100 h-100`} />
                  </Link>
                </div>
                <div className="item">
                  <Link href={"#"} className={`${cx.bag_product} w-100 h-100`} data-aos="fade-up" data-aos-duration="700">
                    <Image src={trolleyBag7} alt="lines" className={`${cx.bags_img} w-100 h-100`} />
                  </Link>
                </div>
                <div className="item">
                  <Link href={"#"} className={`${cx.bag_product} w-100 h-100`} data-aos="fade-up" data-aos-duration="700">
                    <Image src={trolleyBag8} alt="lines" className={`${cx.bags_img} w-100 h-100`} />
                  </Link>
                </div>
              </OwlCarousel>
            </Row>
          </Container>
        </section>
        {/* newsletter start */}
        <section className={`${cx.newsletter_section} mt-100 overflow-hidden`}>
          <Container>
            <div className="bg-pink rounded">
              <Row className="align-items-center">
                <Col md={6} data-aos="fade-left" data-aos-duration="700">
                  <div className={`${cx.newsletter_content}`}>
                    <div className={`${cx.newsletter_header}`}>
                      <p>News Letter</p>
                      <h2>Subscribe to our newsletter</h2>
                    </div>
                    <div className={`${cx.newsletter_form_wrapper}`}>
                      <form
                        className={`${cx.newsletter_form} d-flex align-items-center rounded`}
                      >
                        <input
                          type="e-mail"
                          placeholder="Enter your e-mail"
                          className={`${cx.newsletter_input} bg-transparent border-0`}
                        />
                        <button
                          type="submit"
                          className={`${cx.newsletter_btn}`}
                        >
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.11539 -0.000488604L7.50417 1.99951L11.5769 5.59951L0.500001 5.59951L0.500001 8.19951L11.7049 8.19951L7.50417 11.4995L8.70513 13.9995L16.5 7.19951L9.11539 -0.000488604Z"
                              fill="#FEFEFE"
                            />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </Col>
                <Col md={6} data-aos="fade-right" data-aos-duration="700">
                  <div className={`${cx.newsletter_image}`}>
                    <Image
                      src={trolleyBagNew2}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        {/* newsletter end */}

        {/* brand logo start */}
        <section className={`${cx.brand_logo_section} mt-100`}>
          <Container>
            <div className="overflow-hidden">
              <div
                className={`${cx.scroll_horizontal} row align-items-center flex-nowrap`}
              >
                <Col xl={2} lg={3} md={4} sm={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                  <Link
                    href={"#"}
                    className="brand-logo d-flex align-items-center justify-content-center"
                  >
                    <Image
                      src={brand1}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                  </Link>
                </Col>
                <Col xl={2} lg={3} md={4} sm={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                  <Link
                    href={"#"}
                    className="brand-logo d-flex align-items-center justify-content-center"
                  >
                    <Image
                      src={brand2}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                  </Link>
                </Col>
                <Col xl={2} lg={3} md={4} sm={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                  <Link
                    href={"#"}
                    className="brand-logo d-flex align-items-center justify-content-center"
                  >
                    <Image
                      src={brand1}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                  </Link>
                </Col>
                <Col xl={2} lg={3} md={4} sm={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                  <Link
                    href={"#"}
                    className="brand-logo d-flex align-items-center justify-content-center"
                  >
                    <Image
                      src={brand2}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                  </Link>
                </Col>
                <Col xl={2} lg={3} md={4} sm={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                  <Link
                    href={"#"}
                    className="brand-logo d-flex align-items-center justify-content-center"
                  >
                    <Image
                      src={brand1}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                  </Link>
                </Col>
                <Col xl={2} lg={3} md={4} sm={6} xs={6} data-aos="fade-up" data-aos-duration="700">
                  <Link
                    href={"#"}
                    className="brand-logo d-flex align-items-center justify-content-center"
                  >
                    <Image
                      src={brand2}
                      alt="lines"
                      className={`${cx.imgs} w-100 h-100`}
                    />
                  </Link>
                </Col>
              </div>
            </div>
          </Container>
        </section>
        {/* brand logo end */}
      </main>

      <footer className={`${cx.footer_sec} mt-100 overflow-hidden`}>
        <div className={`${cx.footer_top}`}>
          <Container>
            <Row className="justify-content-between">
              <Col xl={2} lg={2} md={6} xs={12} className="footer-widget">
                <div className={`${cx.footer_widget_inner}`}>
                  <div className={`${cx.footer_heading}`}>
                    <h4>About</h4>
                  </div>
                  <ul className={`${cx.footer_menu} list-unstyled mb-0 p-0`}>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Press center
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Work with us
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Press center
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Work with us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={2} md={6} xs={12} className="footer-widget">
                <div className={`${cx.footer_widget_inner}`}>
                  <div className={`${cx.footer_heading}`}>
                    <h4>Shopping</h4>
                  </div>
                  <ul className={`${cx.footer_menu} list-unstyled mb-0 p-0`}>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Discount codes
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Work with us
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Press center
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Work with us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={2} md={6} xs={12} className="footer-widget">
                <div className={`${cx.footer_widget_inner}`}>
                  <div className={`${cx.footer_heading}`}>
                    <h4>Help</h4>
                  </div>
                  <ul className={`${cx.footer_menu} list-unstyled mb-0 p-0`}>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Trolley Bag
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link className={`${cx.items}`} href={"#"}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={5} md={6} xs={12} className="footer-widget">
                <div className={`${cx.footer_widget_inner}`}>
                  <div className={`${cx.footer_logo}`}>
                    <Link href={"#"}>
                      {" "}
                      <h4>Logo</h4>{" "}
                    </Link>
                  </div>
                  <div className={`${cx.footer_newsletter}`}>
                    <p>Stay up to date with all the news.</p>

                    <div className={`${cx.newsletter_wrapper}`}>
                      <form
                        action="#"
                        className={`${cx.footer_newsletter_form} d-flex align-items-center`}
                      >
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          className="footer-newsletter-input bg-transparent"
                        />
                        <button className="footer-newsletter-btn">
                          SIGN UP
                        </button>
                      </form>
                    </div>

                    <div className={`${cx.footer_social_wrapper}`}>
                      <ul>
                        <li>
                          <Link className={`${cx.social_items}`} href={"#"}>
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link className={`${cx.social_items}`} href={"#"}>
                            <FaFacebookSquare />
                          </Link>
                        </li>
                        <li>
                          <Link className={`${cx.social_items}`} href={"#"}>
                            <FaInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link className={`${cx.social_items}`} href={"#"}>
                            <FaLinkedin />
                          </Link>
                        </li>
                        <li>
                          <Link className={`${cx.social_items}`} href={"#"}>
                            <FaYoutube />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={`${cx.footer_bottom}`}>
          <Container>
            <div
              className={`${cx.footer_bottom_inner} d-flex flex-wrap justify-content-md-between justify-content-center align-items-center`}
            >
              <ul
                className={`${cx.footer_Bottom_menu} list-unstyled d-flex flex-wrap align-items-center mb-0 gap-4`}
              >
                <li>
                  <Link className={`${cx.bottom_items}`} href={"#"}>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className={`${cx.bottom_items}`} href={"#"}>
                    Privacy policy
                  </Link>
                </li>
              </ul>
              <p className={`${cx.copy_right}`}>
                ©<span>2024 Ecommerce</span>
              </p>
            </div>
          </Container>
        </div>
      </footer>

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
