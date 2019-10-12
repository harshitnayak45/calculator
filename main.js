$(document).ready(function() {
$(".finalEmi").text("$"+0);
$('.term1').val(0);
$('.slidervalue').text(numberWithCommas("$"+10000));

$(".calcualtePriceAmt").click(function(){
 calcualtePrice()
});
$('.loan_rate').on('input',function(event) {

var rate_val=$('.loan_rate').val();
 $('.loan_rate1').val(rate_val);

});
$('.loan_rate1').on('input',function(event) {
    var rate_val=$('.loan_rate1').val();
     $('.loan_rate').val(rate_val);
    
    });
    $('.sliderVal').on('input',function(event) {
        var s_val=$('.sliderVal').val();
         $('.slidervalue').text('$'+numberWithCommas(s_val));
        
        });

});

function numberWithCommas(x){
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcualtePrice(val){
    var sliderVal =$('.sliderVal').val();
var term =$('.loan_term').val();
var rate =$('.loan_rate1').val();
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