// freelancers data
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const init = () => {

    // const body = document.body;
    const body = document.querySelector("body");

    // whole section includes section1 and section2
    const wholeSection = document.createElement("section");
    wholeSection.style.border = "1px solid black";
    wholeSection.style.padding = "5%";
    wholeSection.style.width = "50%";
    wholeSection.style.margin = "0 auto";
    wholeSection.style.backgroundColor = "#CCCCFF";

    //section 1 is for 'Freelancer Forum'
    //section 2 is for 'Available Freelancers'
    const section1 = document.createElement("section");
    const section2 = document.createElement("section");

    const div1 = document.createElement("div"); //It holds a title , an average price in section 1
    const div2 = document.createElement("div"); //It holds Name, Occupation, StringPrice in Section2

    const div2_contain = document.createElement("div"); //It holds div2_1, div2_2, div2_3
    div2_contain.style.display = "flex";

    const div2_1 = document.createElement("div"); //It holds Name info
    const div2_2 = document.createElement("div"); //It holds Occupation info
    const div2_3 = document.createElement("div"); //It holds Price info

    div2_1.style.marginLeft = "20%"
    div2_2.style.marginLeft = "10%"
    div2_3.style.marginLeft = "10%"

    const divHeaderName = document.createElement("div"); //div Name
    const divHeaderOccupation = document.createElement("div"); //div Occupation
    const divHeaderStartingPrice = document.createElement("div"); //div Price

    const h1_1 = document.createElement("h1");
    h1_1.style.textAlign = "center";
    const h1_2 = document.createElement("h1");
    h1_2.style.textAlign = "center";

    h1_1.innerText = `Freelancer Forum`;
    h1_2.innerText = `Available Freelancers`;

    // wholeSection including section 1 information is appended in body. 
    div1.append(h1_1);
    section1.append(div1);
    wholeSection.append(section1);
    body.append(wholeSection);

    // UI setting
    divHeaderName.innerHTML = "Name";
    divHeaderName.style.textDecoration = "underline";

    divHeaderOccupation.innerHTML = "Occupation";
    divHeaderOccupation.style.textDecoration = "underline";

    divHeaderStartingPrice.innerHTML = "StartingPrice";
    divHeaderStartingPrice.style.textDecoration = "underline";

    // append info
    div2_1.append(divHeaderName);
    div2_2.append(divHeaderOccupation);
    div2_3.append(divHeaderStartingPrice);

    // wholeSection including section 2 information is appended in body. 
    div2.append(h1_2);
    div2_contain.append(div2_1);
    div2_contain.append(div2_2);
    div2_contain.append(div2_3);
    div2.append(div2_contain);
    section2.append(div2);
    wholeSection.append(section2);
    body.append(wholeSection);

    let sumPrice = 0;
    let averagePrice = 0;

    const divSayAverage = document.createElement("div");

    for (let i = 0; i < freelancers.length; i++) {
        setTimeout(() => {

            // The average price will be calculated while for-loop
            sumPrice += freelancers[i].price;
            averagePrice = Math.round(sumPrice / (i+1));
            console.log(sumPrice, '/ ' ,averagePrice, '/ ' , i+1);
            divSayAverage.innerHTML = `The average starting price is $${averagePrice}.`;
            divSayAverage.style.textAlign = "center";
            div1.append(divSayAverage);
            section1.append(div1);
            wholeSection.append(section1);

            // title of name, occupation, starting price
            const divName = document.createElement("div");
            const divOccupation = document.createElement("div");
            const divStringPrice = document.createElement("div");

            // It collects freelancer information
            divName.innerText = freelancers[i].name;
            divOccupation.innerText = freelancers[i].occupation;
            divStringPrice.innerText = `$${freelancers[i].price}`;;
          
            // This is appending freelancer information
            div2_1.append(divName);
            div2_2.append(divOccupation);
            div2_3.append(divStringPrice);
            div2_contain.append(div2_1);
            div2_contain.append(div2_2);
            div2_contain.append(div2_3);
            div2.append(div2_contain);
            section2.append(div2);
            wholeSection.append(section2);
            body.append(wholeSection);

        }, i * 2000); // Delay increases with each iteration
    }
};

init();


