const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`);
});

let avengers = [{
    name: 'Iron Man',
    beratBadan: 85,
    tinggiBadan: 175,
},
{
    name: 'Captain America',
    beratBadan: 86,
    tinggiBadan: 183,
},
{
    name: 'Thor',
    beratBadan: 90,
    tinggiBadan: 178,
},
{
    name: 'Dr.Strange',
    beratBadan: 73,
    tinggiBadan: 181,
},
{
    name: 'Hulk',
    beratBadan: 300,
    tinggiBadan: 250,
},];

function bmi(beratBadan, tinggiBadan) {
    return beratBadan / Math.pow(tinggiBadan / 100, 2);
}

function index(bmi) {
    if (bmi > 30) {
        return "Obesity";
    } else if (30 > bmi && bmi >= 25) {
        return "OverWeight";
    } else if (25 > bmi && bmi >= 18.5) {
        return "Normal weight";
    } else {
        return "Underweight";
    }
}

for (a of avengers) {
    let newBmi = bmi(a.beratBadan, a.tinggiBadan)

    console.log("Nama : " + a.name);
    console.log("Kategori : " + index(newBmi));
}

for (a of avengers) {
    let newBmi = bmi(a.beratBadan, a.tinggiBadan)
    a.bmi = newBmi;
    a.kategori = index(newBmi);
}

console.log(JSON.stringify(avengers))