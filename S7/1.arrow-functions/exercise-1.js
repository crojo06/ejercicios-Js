function suma(a = 10, b = 5) {
    console.log(a + b);
}
const sumaParameters = (a = 10, b = 5) => { console.log(a + b) };
//suma();
//suma(6);
//suma(12, 6);

sumaParameters();
sumaParameters(6);
sumaParameters(12, 6);