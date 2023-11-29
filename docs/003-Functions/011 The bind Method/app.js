"use strict";

const AE86 = {
  brand: "Toyota",
  price: "5888",
  capacity: 50,
  driver: "Fujiwara Takumi",
  drift(driver = this.driver, location = "Akina-san") {
    console.log(`${driver} is drifting on the ${location}.`);
  },
};

const RX7 = {
  brand: "Mazda",
  price: "14740",
  capacity: 76,
  driver: "Takahashi Keisuke",
};

const GTR = {
  brand: "Nissan",
  price: "33500",
  capacity: 73.8,
  driver: "Nakazato Takeshi",
};

const drift = AE86.drift;
const driftRX7 = drift.bind(RX7);
driftRX7("Takahashi Keisuke", "Akagi yama"); // Takahashi Keisuke is drifting on the Akagi yama.
driftRX7(undefined, "Akagi yama");           // Takahashi Keisuke is drifting on the Akagi yama.
const driftGTR = drift.bind(GTR);
driftGTR("Nakazato Takeshi", "Akina-san"); // Nakazato Takeshi is drifting on the Akina-san.
driftGTR(undefined, "Akina-san");          // Nakazato Takeshi is drifting on the Akina-san.
