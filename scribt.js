// var inputVal =document.getElementById("birthDate").value;
// console.log(inputVal)
// var date = new Date(inputVal);
// var year= date.getFullYear();
// var month =date.getMonth();
// var day =date.getDate();
// console.log(date.getFullYear())

function calculate_age(){
    var birth_date =new Date(document.getElementById("birth_date").value);
    var birth_date_day=birth_date.getDate();
    var birth_date_month=birth_date.getMonth();
    var birth_date_year=birth_date.getFullYear();

    var today_date =new Date();
    var today_date_day=today_date.getDate();
    var today_date_month=today_date.getMonth();
    var today_date_year=today_date.getFullYear();

    var calculated_age=0;
    if(today_date_month>birth_date_month) calculated_age = today_date_year-birth_date_year;
    else if(today_date_month==birth_date_month){
        if(today_date_day>=birth_date_day) calculated_age = today_date_year-birth_date_year;
        else calculated_age = today_date_year-birth_date_year -1;
    }
    else calculated_age = today_date_year-birth_date_year-1;
    

    
    var output_val_inYears =calculated_age;
    document.getElementById("calculated_age").innerHTML=calculated_age;

    var output_val_inMonth =calculated_age*12;
    document.getElementById("calculated_age_in_month").innerHTML=calculated_age*12;

    var output_val_inDays =output_val_inMonth*30;
    document.getElementById("calculated_age_in_days").innerHTML=output_val_inMonth*30;



}
