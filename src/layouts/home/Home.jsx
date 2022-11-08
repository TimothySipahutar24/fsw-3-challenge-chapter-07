import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      {/* Komponen Header nanti */}
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light nav-header ${styles.navBoxModelLg}`}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand"
              style={{
                width: "100px",
                height: "34px",
                backgroundColor: " #0d28a6",
              }}
              href="/"
            ></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              data-bs-scroll="true"
              tabIndex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
              style={{ textAlign: "end" }}
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <ul className={`navbar-nav ${styles.navList}`}>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#our-services">
                    Our Services
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#testimony">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="btn btn-success" href="/">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero-section">
          <div className="d-flex flex-column flex-lg-row">
            <div className="">
              <div className={`${styles.heroDescription}`}>
                <p className="fw-bold" style={{ fontSize: "36px" }}>
                  Sewa & Rental Mobil Terbaik di kawasan Bekasi
                </p>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <a className="btn btn-success" href="/cars">
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  src={require("../../assets/images/mercedes.png")}
                  alt="mercedes"
                  className={`${styles.imageHeroSection}`}
                />
                <div className={`${styles.bgCar}`}></div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-services">
          <div className="d-flex flex-column flex-lg-row">
            <div className={`${styles.ourServicesImgContainer}`}>
              <img
                src={require("../../assets/images/img_our_service.png")}
                alt="our-services"
                className={`${styles.imageOurServices}`}
              />
            </div>
            <div className={`${styles.ourServicesDescription}`}>
              <p className="h4 fw-bold">
                Best Car Rental for any kind of trip in Bekasi!
              </p>
              <p style={{ fontSize: "14px" }}>
                Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div style={{ fontSize: "14px" }}>
                <div className="d-flex">
                  <img
                    src={require("../../assets/images/list-style.png")}
                    alt=""
                  />
                  <div className="ms-2 ms-lg-3">
                    Sewa Mobil Dengan Supir di Bekasi 12 Jam
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <img
                    src={require("../../assets/images/list-style.png")}
                    alt=""
                  />
                  <div className="ms-2 ms-lg-3">
                    Sewa Mobil Lepas Kunci di Bekasi 24 Jam
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <img
                    src={require("../../assets/images/list-style.png")}
                    alt=""
                  />
                  <div className="ms-2 ms-lg-3">
                    Sewa Mobil Jangka Panjang Bulanan
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <img
                    src={require("../../assets/images/list-style.png")}
                    alt=""
                  />
                  <div className="ms-2 ms-lg-3">
                    Gratis Antar - Jemput Mobil di Bandara
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <img
                    src={require("../../assets/images/list-style.png")}
                    alt=""
                  />
                  <div className="ms-2 ms-lg-3">
                    Layanan Airport Transfer / Drop In Out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="d-flex justify-content-center">
          <div style={{ marginBottom: "100px" }}>
            <div className={`${styles.whyUsContainer}`}>
              <p className="h4 fw-bold" style={{ marginBottom: "16px" }}>
                Why Us?
              </p>
              <p>Mengapa harus pilih Binar Car Rental</p>
            </div>
            <div
              className="d-flex flex-column flex-lg-row"
              style={{ marginTop: "40px" }}
            >
              <div className={`card ${styles.cardTestimonies}`}>
                <div>
                  <img
                    src={require("../../assets/images/icon_complete.png")}
                    className=""
                    alt="icon"
                  />
                </div>
                <div className="">
                  <h5 className={`${styles.cardTitle} fw-bold`}>
                    Mobil Lengkap
                  </h5>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>

              <div className={`card ${styles.cardTestimonies}`}>
                <div>
                  <img
                    src={require("../../assets/images/icon_price.png")}
                    className=""
                    alt="icon"
                  />
                </div>
                <div className="">
                  <h5 className={`${styles.cardTitle} fw-bold`}>Harga Murah</h5>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>

              <div className={`card ${styles.cardTestimonies}`}>
                <div>
                  <img
                    src={require("../../assets/images/icon_24hrs.png")}
                    className=""
                    alt="icon"
                  />
                </div>
                <div className="">
                  <h5 className={`${styles.cardTitle} fw-bold`}>
                    Layanan 24 Jam
                  </h5>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>

              <div className={`card ${styles.cardTestimonies}`}>
                <div>
                  <img
                    src={require("../../assets/images/icon_professional.png")}
                    className=""
                    alt="icon"
                  />
                </div>
                <div className="">
                  <h5 className={`${styles.cardTitle} fw-bold`}>
                    Sopir Profesional
                  </h5>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="autoplay">
          <div className="container-carousel">
            <div className="d-flex" style={{ margin: "69px 46px 69px 32px" }}>
              <div style={{ marginRight: "46px" }}>
                {/* <img src="/images/img_photo.png" alt="photo"> */}
              </div>
              <figure>
                <blockquote className="blockquote">
                  <p style={{ fontSize: "14px" }}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  John Dee 32, <cite title="Source Title">Bromo</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="container-carousel">
            <div className="d-flex" style={{ margin: "69px 46px 69px 32px" }}>
              <div style={{ marginRight: "46px" }}>
                {/* <img src="/images/img_photo.png" alt="photo"> */}
              </div>
              <figure>
                <blockquote className="blockquote">
                  <p style={{ fontSize: "14px" }}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  John Dee 32, <cite title="Source Title">Bromo</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="container-carousel">
            <div className="d-flex" style={{ margin: "69px 46px 69px 32px" }}>
              <div style={{ marginRight: "46px" }}>
                {/* <img src="/images/img_photo.png" alt="photo"> */}
              </div>
              <figure>
                <blockquote className="blockquote">
                  <p style={{ fontSize: "14px" }}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  John Dee 32, <cite title="Source Title">Bromo</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="container-carousel">
            <div className="d-flex" style={{ margin: "69px 46px 69px 32px" }}>
              <div style={{ marginRight: "46px" }}>
                {/* <img src="/images/img_photo.png" alt="photo"> */}
              </div>
              <figure>
                <blockquote className="blockquote">
                  <p style={{ fontSize: "14px" }}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  John Dee 32, <cite title="Source Title">Bromo</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="container-carousel">
            <div className="d-flex" style={{ margin: "69px 46px 69px 32px" }}>
              <div style={{ marginRight: "46px" }}>
                {/* <img src="/images/img_photo.png" alt="photo"> */}
              </div>
              <figure>
                <blockquote className="blockquote">
                  <p style={{ fontSize: "14px" }}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  John Dee 32, <cite title="Source Title">Bromo</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div className="text-center text-white loan-banner">
            <p className="fw-bold" style={{ fontSize: "36px" }}>
              Sewa Mobil di Bekasi Sekarang
            </p>
            <div className="d-flex justify-content-center">
              <p
                style={{
                  maxWidth: "468px",
                  fontWeight: "300",
                  fontSize: "14px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <a
              className="btn btn-success"
              href="/cars"
              style={{ marginTop: "52px" }}
            >
              Mulai Sewa Mobil
            </a>
          </div>
        </div>

        <section id="faq">
          <div className="faq-container">
            <div className="row">
              <div className="col-sm-3 faq-description">
                <p className="fw-bold" style={{ fontSize: "24px" }}>
                  Frequently Ask Question
                </p>
                <p style={{ fontSize: "14px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="col-sm-7">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> className. This is the
                        first item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> className. This is the
                        second item's accordion body. Let's imagine this being
                        filled with some actual content.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> className. This is the
                        third item's accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Apakah Ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> className. This is the
                        third item's accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Bagaimana jika terjadi kecelakaan
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> className. This is the
                        third item's accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
