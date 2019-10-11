

let p = []
for (let i = 10; i <=100; i++) {
    p.push(i*1000)
}
console.log(p);
let p1 = []
for (let i = 6; i <=14; i++) {
    p1.push(i)
}

$(document).ready(function() {
$(".finalEmi").text("$"+0);
$('.term1').val(0);

$("#slider_amirol").slider({
range: "min",
animate: true,
min: 1,
max: 90,
step: 1,
slide: 
    function(event, ui) 
    {
        update(1,ui.value); //changed
     
    }
});

$("#slider_amirol1").slider({
range: "min",
animate: true,
min: 0,
max: 8,
step: 1,
slide: 
    function(event, ui) 
    {
        $('.term1').val(ui.value);
        update1(1,ui.value); //changed
     
    }
});

$(".calcualtePriceAmt").click(function(){
 calcualtePrice()
});
$('.loan_rate').on('input',function(event) {

var rate_val=$('.loan_rate').val();
var step_count= parseInt(rate_val)-6;
$('.term1').val(step_count);
var pos=step_count*12+"%";
if(undefined == step_count || step_count<=0){
    step_count = 0;
} 
 $(".fixed-int .ui-corner-all").css("left", pos);
 update1(1,step_count);
});
update();
update1();

});

function numberWithCommas(x){
// return x;
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function update(slider,val) {
if(undefined == val || val<=0){
val = 0;
} 
var amount = p[val];
$('#sliderVal').val(amount);

$('#slider_amirol a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> $'+numberWithCommas(amount)+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}
function update1(slider,val) {

if(undefined == val || val<=0){
val = 0;
} 
var amount1 = p1[val];
$('.loan_rate').val(amount1);
$('#slider_amirol1 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span>'+(amount1)+'% <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function calcualtePrice(val){
var term =$('.loan_term').val();
var rate =$('.loan_rate').val();
var sliderVal =$('#sliderVal').val();
var fee=250;
const r = rate / 12 / 100;
const P = sliderVal
const n = term
const tEmi = (P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)))
let servise = sliderVal * 8 / 100;
const total_interest_pay = ((tEmi * n) - sliderVal);
const total_interest_pay_text = ((tEmi * n) - sliderVal).toFixed(2);
if (sliderVal >= 10000 && sliderVal <= 19999) {
    servise = sliderVal * 8 / 100;
} else if (sliderVal >= 20000 && sliderVal <= 49999) {
    servise = sliderVal * 7 / 100;
} else if (sliderVal >= 50000 && sliderVal <= 107000) {
    servise = sliderVal * 6 / 100;
}

const total_amt = (parseFloat(sliderVal) + parseFloat(total_interest_pay) + parseFloat(servise) + parseFloat(fee)).toFixed(2);
const FinalEmi = (total_amt / parseInt(term)).toFixed(2);

$(".loanAmt").val("$"+numberWithCommas(sliderVal));
$(".total_interest_pay_text").val("$"+numberWithCommas(total_interest_pay_text));
$(".fee").val(numberWithCommas("$"+fee));
$(".servise").val(numberWithCommas("$"+servise));
$(".total_amt").val(numberWithCommas("$"+total_amt));
$(".finalEmi").text(numberWithCommas("$"+FinalEmi));

}