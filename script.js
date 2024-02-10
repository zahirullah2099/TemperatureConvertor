 

 const calculateTemp = ()=>{

   let tempValue = document.getElementById("temp").value;

   // console.log(tempValue);

   const tempSelected = document.getElementById("temp_diff");

   const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

   const celToFah= (cel)=>{
      let Fahrenhiet = Math.round(cel*(9/5)+32);
      return Fahrenhiet;
   }
   const fahToCel= (fah)=>{
      let celcius = Math.round((fah-32)*5/9);
      return celcius;
   } 
   

    let result; 
    if (valueTemp == "cel") {
      result = celToFah(tempValue);
      document.getElementById("resultContaier").innerText = `= ${result} °Fahrenhiet`;
    }
    else {
      result = fahToCel(tempValue);
      document.getElementById("resultContaier").innerText = `= ${result} °Celcius`;
    } 
 }