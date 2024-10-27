document.getElementById('calculate-btn').addEventListener('click', () => {
    const name = document.getElementById("name").value;
    let price = Number(document.getElementById("startingbid").value);
    const education = Number(document.getElementById("education").value);
    const netWorth = Number(document.getElementById("networth").value);
    const caste = Number(document.getElementById("caste").value);
    const skills = document.getElementsByClassName("skills");
    const ageRadios = document.getElementsByName("age");
    const reputation = document.getElementsByClassName("reputation");
    const loveLetter = document.getElementById("loveletter").value;
    if (!name || !price) {
      alert("Enter a name and starting bid.");
      return;
    }
    price += caste;
    const skillPrice = Array.from(skills)
      .filter(skill => skill.checked)
      .reduce((total, skill) => total + Number(skill.value), 0);
    price += skillPrice;
    price *= education;
    price *= netWorth;
    ageRadios.forEach(age => {
      if (age.checked) {
        price *= parseFloat(age.value);
      }
    });
    for (let i = 0; i < reputation.length; i++) {
      if (reputation[i].checked) {
        if (Number(reputation[i].value) < 0) {
          price += Number(reputation[i].value);
        } else {
          price *= parseFloat(reputation[i].value);
        }
      }
    }
    const person = {
      name,
      price,
      loveLetter
    };
    document.getElementById("result").innerHTML = `The price for ${person.name} is ${person.price.toFixed(2)}$. Here is your love letter: "${person.loveLetter}"`;
  });
  