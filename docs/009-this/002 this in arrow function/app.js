'use strict';

const betty = {
  name: "Betty",
  gender: "F",
  birthYear: 1999,
  height: 1.65,
  weight: 55,
  healthStatus() {
    console.log(this);

    // old school solution(將this 放到一個變數中傳遞下去)
    const that = this;
    function calcBodyFatPercentage() {
      // console.log(that);
      const bmiRsult = that.weight / that.height ** 2;
      const age = new Date().getFullYear() - that.birthYear;
      const genderRate = that.gender === "F" ? 0 : 10.8;
      // console.log(`BMI: ${Math.round(bmiRsult*100)/100}`);
      const bodyFatPercentResult =
        1.2 * bmiRsult + (0.23 * age - 5.4) - genderRate;
      // console.log(`Body Fat Percentage: ${Math.round(bodyFatPercentResult*100)/100}`)
      return {
        bmi: Math.round(bmiRsult * 100) / 100,
        bodyFatPercent: Math.round(bodyFatPercentResult * 100) / 100,
      };
    }

    // // Solution 2(使用arrow function的this去得到 parent scope 或 global scope)
    // const calcBodyFatPercentage = () => {
    //     console.log(this);
    //     const bmiRsult = this.weight / this.height ** 2;
    //     const age = new Date().getFullYear() - this.birthYear;
    //     const genderRate = this.gender === "F" ? 0 : 10.8;
    //     // console.log(`BMI: ${Math.round(bmiRsult*100)/100}`);
    //     const bodyFatPercentResult = (1.2 * bmiRsult) + (0.23 * age - 5.4) - genderRate;
    //     // console.log(`Body Fat Percentage: ${Math.round(bodyFatPercentResult*100)/100}`)
    //     return { bmi: Math.round(bmiRsult*100)/100, bodyFatPercent: Math.round(bodyFatPercentResult*100)/100 }
    // }
    return calcBodyFatPercentage();
  },
};

const { bmi, bodyFatPercent } = betty.healthStatus();
console.log(bmi); // 20.2
console.log(bodyFatPercent); // 24.36
