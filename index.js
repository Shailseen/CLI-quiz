 var readlinesync = require('readline-sync');
 var username = readlinesync.question("What is your name? ");
const chalk = require('chalk');
const log = console.log;
console.log('Welcome!',chalk.blue(username),"to the quiz game");
console.log(chalk.yellow.italic('Quiz Rules :'));
console.log(chalk.cyan.bold('1) '),'This game has',chalk.yellow('Four'),'option of each questions');
console.log(chalk.cyan.bold('2) '),'You can answer of the question by selecting the option',chalk.green('1/2/3/4'));

// frameworks = ['Express', 'hapi', 'flatiron', 'MEAN', 'locomotive'];
// index = readlinesync.keyInSelect(frameworks,"Select the option :",{cancel : false});
// console.log(frameworks[index] + ' is enabled.');


var allsets = [
  {
    question :  "When was Ratan Tata born ?",
    answer : "28-DEC-37",
    options : ["28-DEC-37","12-JAN-38","30-DEC-36","28-NOV-37"]
  },
  {
    question : "Ratan Tata was the recipient of how many civilian award ?",
    answer : "2",
    options : ["1","2","3","4"]
  },
  {
    question :"Which firm has Ratan Tata invested on 10 feb 2016 ?",
    answer :"Invictus Oncology Pvt Ltd",
    options : ["Tracxn","DogSpot","Invictus Oncology Pvt Ltd","FirstCry"]

  },
  {
    question :"From where did Ratan Tata completed his Advance Management Program ?",
    answer :"Harvard Buiness School",
    options : ["London School of Economics","Coventry Univerity","Middlesex University","Harvard Buiness School"]
  },
  {
    question :"When was Ratan Tata appointed as the chairman of Tata Group ?",
    answer :"1991",
    options : ["1962","1991","1994","1990"]
  },
  {
    question : "Under his Supervision Tata Tea acquired ?",
    answer : "Tetley",
    options : ["Lipton","Lipton","BrookeBond","Twinings"]
  },
  {
    question : "Under his leadership,Tata Motors acquired which Britih auto company ?",
    answer : "Jauguar Land Rover",
    options : ["Audi","BMW","Mercedes","Jauguar Land Rover"]
  },
  {
    question : "In which year Ratan Tata took an advisory role at Kalari Capital ?",
    answer : "2015",
    options : ["2014","2015","2016","2017"]
  },
  {
    question : "Government of France awarded him with which Honour ?",
    answer : "Commander of the Legion of Honour",
    options : ["Commander of the Legion of Honour","Grand Cordon","Honorary Knight","Grand Officer"]
  },
  {
    question : "Who is the father of Ratan Tata ?",
    answer : "Naval Tata",
    options : ["Naval Tata","Navajbai Tata","J.R.D Tata","Noel Tata"]
  }
]
var score = 0;
console.log(" ");
console.log(chalk.grey('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
var totalques = readlinesync.question("How many questions DO YOU want to attempt(1-10)? ");
if(totalques <=10 && totalques>0)
{
console.clear();
for(var i=0;i<totalques;i++)
{
  console.log(chalk.black.bgYellow.bold('Quiz :'),"About",chalk.magenta('RATAN NAVEL TATA'));
  console.log(" ");
  console.log(chalk.grey('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
  console.log(" ");
  console.log(chalk.cyan.strikethrough('Ques'),chalk.cyan.strikethrough(i+1),chalk.cyan.strikethrough(':'),allsets[i].question);
  var index = readlinesync.keyInSelect(allsets[i].options,"Select the options from :",{cancel : false});
  if(allsets[i].options[index] === allsets[i].answer )
  {
    console.log(chalk.green('Right!'));
    score = score + 4;
    console.log("Current Score =",chalk.green(score));
    //console.log("Enter",chalk.cyan('1'),"to continue");
    var query = readlinesync.question("Press Enter to continue ");
    console.clear();
  }
  else
  {
    console.log(chalk.red('Wrong!'));
    score = score - 1;
    console.log("Current Score =",chalk.red(score));
    //console.log("Enter",chalk.cyan('1'),"to continue");
    var query = readlinesync.question("Press enter to continue");
    console.clear();
  }
}
var allplayer = ["Shailesh","Rahul   ","Ravi    ","Raj     "];
var allscore = ["40","33","26","20"];
console.log(chalk.black.bgYellow.bold('Quiz :'),"About",chalk.magenta('RATAN NAVEL TATA'));
console.log(" ");
console.log("Your total score :",chalk.green(score));
console.log("Your name :",chalk.black.italic.bgMagenta(username));
console.log("You can comapre your score with the PLAYERS:");
console.log(chalk.black.bgGreen.underline('Players Name'),"  ",chalk.black.bgWhite.underline('Players score'));
for(var j=0;j<4;j++)
{
  console.log(chalk.cyan(allplayer[j]),"         ",chalk.cyan(allscore[j]));
}
}
else{
  console.log("Input a valid Number!");
}

// console.log(allsets[0].question);