var bingowords = ['Has had a picnic in their backyard',
'Started playing club penguin',
'Has tried camping in their backyard since iso',
'Sleep schedule is screwed ',
'Bought more than $100 worth of shit online',
'Cut/dyed their own hair and regretted it',
'Has had a cry about gym gains dying',
'Had parents walk in during a zoom tutorial',
'Received a personal email from Richard',
'Has burnt food whilst trying to cook',
'Made dalgona coffee ',
'Has had or attended a zoom birthday',
'Has broken something since iso started',
'Has woken up before 7am during quarantine',
'Has woken up after 12pm',
'Is not currently in Melbourne',
'Lives on res',
'Has more than one pet',
'Has “Medical student” on social media bio',
'Has a LinkedIn',
'Is an essential worker',
'Attended zoom tute from bed',
'Learnt a tiktok dance',
'Got lit before 2pm',
'Had breakfast at 5pm',
'Sold their soul to tom nook (picked up animal crossing)',
'Plays an instrument',
'Has attended a rave',
'Listens to K-Pop',
'Has been working out at home',
'Has gotten wasted at home by themselves',
'Has attempted to pick up a new hobby',
'Has tried to learn a new language via duolingo',
'Screen time of over 10 hours each day ',
'Has downloaded a dating app in iso',
'Has had their daily routine not change with iso',
'Has been asked for health advice by family'];

bingowords.sort(function(a, b){return 0.5 - Math.random()});

var result = '';

for (var row = 0; row < 5; row++) {
  result += '<tr>';
  for (var col = 0; col < 5; col++) {
    if (row == 2 && col == 2){
      result += '<td>' + "Free Space!" + '</td>';
    } else {
      result += '<td>' + bingowords[row*5 + col] + '<input type="text"></input>' + '</td>';
    }
  }
  result += '</tr>';
}
document.getElementById('bingoTable').innerHTML += result;
