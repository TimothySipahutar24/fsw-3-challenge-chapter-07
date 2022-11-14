import React from "react";
import styles from "./Cars.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Cars = () => {
  const [carData, setCarData] = useState([]);
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [capacityInput, setCapacityInput] = useState("");
  const [carFiltered, setCarFiltered] = useState([]);

  useEffect(() => {
    const getCarsData = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        )
        .then((res) => {
          setCarData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getCarsData();
  }, []);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const populateCars = carData.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );

    return {
      ...car,
      availableAt,
    };
  });

  const newDateTimeFormat = new Date(`${dateInput} ${timeInput}`);
  const getEpochTime = newDateTimeFormat.getTime();

  const filterCar = populateCars.filter(
    (car) => car.capacity >= capacityInput && car.availableAt >= getEpochTime
  );

  const handleFilterCar = (e) => {
    e.preventDefault();

    setCarFiltered(filterCar);
  };

  console.log(carFiltered);

  const renderCar = carFiltered.map((car) => {
    return (
      <div className={`col-lg-4 card ${styles.cardResults}`}>
        <img
          src={require("../../assets/images/car_image.png")}
          alt={car.manufacture}
          style={{ maxWidth: "250px", margin: "24px 0 16px 24px" }}
        />
        <p style={{ fontSize: "14px" }}>
          {car.manufacture} {car.model}
        </p>
        <h4 style={{ fontWeight: "bold" }}>Rp {car.rentPerDay} / hari</h4>
        <p style={{ fontSize: "14px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="d-flex flex-row">
          <div style={{ marginRight: "10px" }}>
            <img src={require("../../assets/images/fi_users.png")} alt="" />
          </div>
          <p>maks {car.capacity} orang</p>
        </div>
        <div className="d-flex flex-row">
          <div style={{ marginRight: "10px" }}>
            <img src={require("../../assets/images/fi_settings.png")} alt="" />
          </div>

          <p>{car.transmission}</p>
        </div>
        <div className="d-flex flex-row">
          <div style={{ marginRight: "10px" }}>
            <img src={require("../../assets/images/fi_calendar.png")} alt="" />
          </div>

          <p>Buatan tahun {car.year}</p>
        </div>
        <button type="button" className="btn btn-success">
          Pilih Mobil
        </button>
      </div>
    );
  });

  return (
    <div>
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
        <section id={styles.heroSection}>
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

        <section>
          <div
            class={`${styles.searchBox} p-4 row row-cols-xl-auto mx-auto mb-4 justify-content-around`}
          >
            <div class="col-lg col-md-6 col-sm-6 col-xs-12 p-2 input-driver">
              <label class="pb-2">Tipe Driver</label>
              <select class="form-select" id="driver" required>
                <option hidden>Pilih Tipe Driver</option>
                <option style={{ fontSize: "12px" }}>Dengan Supir</option>
                <option style={{ fontSize: "12px" }}>
                  Tanpa Supir(Lepas Kunci)
                </option>
              </select>
            </div>
            <div class="col-lg col-md-6 col-sm-6 col-xs-12 p-2">
              <label class="pb-2">Tanggal</label>
              <input
                type="date"
                id="date"
                class="form-control"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                required
              />
            </div>
            <div class="col-lg col-md-6 col-sm-6 col-xs-12 p-2">
              <label class="pb-2">Waktu Jemput/Ambil</label>
              <input
                type="time"
                id="time"
                class="form-control"
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
                required
              />
            </div>
            <div
              class="col-lg col-md-6 col-sm-6 col-xs-12 p-2"
              style={{ minWidth: "200px" }}
            >
              <label class="pb-2">Jumlah Penumpang</label>
              <input
                type="number"
                class="form-control"
                id="capacity"
                placeholder="Jumlah Penumpang"
                value={capacityInput}
                onChange={(e) => setCapacityInput(e.target.value)}
              />
            </div>
            <div
              class="col-lg p-2"
              style={{
                display: "inline-block",
                alignSelf: "flex-end",
                height: "100%",
              }}
            >
              <button
                class="btn btn-success"
                type="submit"
                id="load-btn"
                onClick={handleFilterCar}
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </section>

        <section id="results" className="mt-4">
          <div className={`row gap-4 ${styles.resultsContainer}`}>
            {carFiltered.length > 0 ? (
              renderCar
            ) : (
              <div className="text-center">
                <h1>Data Tidak Ditemukan</h1>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        <div
          class="d-flex justify-content-center"
          style={{ marginBottom: "100px", marginTop: "100px" }}
        >
          <div class="d-flex flex-column flex-lg-row">
            <div style={{ maxWidth: "268px", marginRight: "86px" }}>
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div
              class={`${styles.footerContainer}`}
              style={{ marginRight: "86px" }}
            >
              <a class="nav-link" href="/our-services">
                Our Services
              </a>
              <a class="nav-link" style={{ marginTop: "16px" }} href="/why-us">
                Why Us
              </a>
              <a
                class="nav-link"
                style={{ marginTop: "16px" }}
                href="/testimony"
              >
                Testimonial
              </a>
              <a class="nav-link" style={{ marginTop: "16px" }} href="/faq">
                FAQ
              </a>
            </div>
            <div
              class={`${styles.footerContainer}`}
              style={{ marginRight: "86px" }}
            >
              <p>Connect with us</p>
              <div class="d-flex flex-row" style={{ minWidth: "268px" }}>
                <img
                  src={require("../../assets/images/icon_facebook.png")}
                  alt=""
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={require("../../assets/images/icon_instagram.png")}
                  alt=""
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={require("../../assets/images/icon_twitter.png")}
                  alt=""
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={require("../../assets/images/icon_mail.png")}
                  alt=""
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={require("../../assets/images/icon_twitch.png")}
                  alt=""
                />
              </div>
            </div>
            <div class={`${styles.footerContainer}`}>
              <p>Copyright Binar 2022</p>
              <a href="/">
                <div
                  style={{
                    width: "100px",
                    height: "34px",
                    backgroundColor: "#0d28a6",
                  }}
                ></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cars;
