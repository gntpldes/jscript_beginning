//Score Declarations
var jScore1, jScore2, jScore3, mScore1, mScore2, mScore3; 
jScore1 = 89;
jScore2 = 120; 
jScore3 = 103; 
mScore1 = 116;
mScore2 = 94; 
mScore3 = 123; 

//Score Means
jMean = (jScore1+jScore2+jScore3)/3; 
mMean = (mScore1+mScore2+mScore3)/3;

//Results
if (jMean > mMean){
    alert('John wins ' + jMean);
} else if (jMean === mMean){
    alert('It\'s a tie!');
} else{
    alert('Mark Wins! ' + mMean);
}
