console.log("run baby run lala");

function Car(brand, type, year, month, price) {
  this.brandCar = brand;
  this.type = type;
  this.year = year;
  this.month = month;
  this.price = price;
}

function Person(name, age, nationaliity) {
  return {
    PersonName: name,
    PersonAge: age,
    PersonNationality: nationaliity,
  };
}

const MomCar = new Car("Mitsubishi", "Strada", 2015, "June", "Rp. 100.000.000");
MomCar.baru = "lalalala";
const DadCar = new Car("Toyota", "Camry", 2018, "May", "Rp. 400.0000.000");
console.log("Mom car", MomCar);
console.log("Dad car", DadCar);

const Johny = Person("Jony english", 35, "Indonesia");
Johny.job = "nothing";
const Stacy = Person("Stacy Gray", 23, "Ireland");
console.log(Johny);
console.log(Stacy);
