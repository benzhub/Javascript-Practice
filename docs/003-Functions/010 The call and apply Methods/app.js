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

const drift = AE86.drift;
drift.call(RX7, RX7.driver, "Akagi yama"); // Takahashi Keisuke is drifting on the Akagi yama.
drift.call(RX7, undefined, "Akagi yama"); // Takahashi Keisuke is drifting on the Akagi yama.

// apply(基本上現代JS已經幾乎不用apply了，基本上都是使用call)
const driverData = ["Takahashi Ryōsuke", "Akagi yama"];
drift.apply(RX7, driverData); // Takahashi Ryōsuke is drifting on the Akagi yama.
drift.call(RX7, ...driverData); // Takahashi Ryōsuke is drifting on the Akagi yama.
