
function displayQuote(){
let index=Math.floor(Math.random()*quotes.length);

//display the quote of that index
let div=document.querySelector('#quote');
let quote=`<div class="card">
<img src="icons/favicon.png">
<p>${quotes[index]}</p>
<img src="icons/favicon.png">
</div>
`;
div.innerHTML=quote;
}

let btn=document.querySelector('.btn');
btn.addEventListener('click', displayQuote);


var quotes = [
  'Happy Birthday to this young, intelligent, and very enterprising brother of mine, with of course very high moral values! I am proud to have met you and the PGM is also grateful to have you around. Wish you many more years to come! Blessings. - SENNEH MOIJUEH (PGM)',
  'Happy Birthday Pa Faidowor. I wish you many years wiv abundant blessings. - ISHIAKA BIANGO',
  'Blessed bday bro. Best wishes on ur new age. - MEDBOCKS (PGM)',
  'Happy birthday brother Umaru... Live long to enjoy the goodness in humanity. - PHILIP BONA (PGM)',
  'Happy Birthday sweetheart, age gracefully. - JAY LOVE (PGM)',
  'Happy Birthday brother man. Best wishes and more wins as you celebrate your natal day. May God grant you your heart desire and all the best thigs in life that you wish for yourself. Have a blast man. - M I K - The Legend (PGM)',
  'Happy Birthday Umaru... Allah\'s richest blessings upon you. - Jay Love (PGM)',
  'Happy Birthday sweetheart, age gracefully. - EL-HAJ UMAR (PGM)',
  'Cheers to celebrating another natal day brother. Happy +1 brother. Live it loud 🎂🍸 - ABRAHAM PRINCE GBONDO',
  'Happiest birthday blesings broda man. Wish you all the best in life. - FADIA (PGM',
  'Happy natal day bro. Age with baraka. Wishing you all the goodies that life could best offer. - KOMBA ANSUMANA',
  'Happy Birthday dear. Age with baraka. I wish you more years to celebrate with health, wealth, peace, love and all the best you could wish for yourself. Once again, happy, happy, birthday to you. May you always be happy and Blessed. - BAH MO JALLOH',
  'Happy Birthday Sir, wishibng you all good things you wish for yourself. - SOLOMON LEBBIE',
  'A happy natal day bro. Long life and Allah\'s richest blessings will reign on you. Have a blast bro. - DR. LOVE JALLOH',
  'May Jah downpour more blessings on \'ur honored sould! As He is leting you through this one gifted life thing, many you be blessed with all the good you wish upon youself! Happy Twenty-Five (25). Blessings!. - SULAIMAN NDAMISA (Jack Fish)',
  'Happy Birthday dear, I wish you all the happiness in life. - FINDA NGAUJAH',
  'Your thoughts has been well expressed, there is fact in what you are saying. I stand with you boss. Happy, happy birthday Mr. Esoteric. May God bless your new age. - SAHR ZADOK SENESIE',
  'Happy Birthday sweetheart! I wish you all the best u wish for yourself. - WILIYASA WILLIAMS',
  'It\'s your birthday! Wishing yu an awesome day, and brilliant year ahead. - MOHAMED JULA-FOFANAH',
  'Happy Birthday, beloved Uncle! You already know my wishes for you. Cheers to your new age!. - APOLLOS KAI FODAY',
  'Still a small boy. Now u are about to grow up, I am wishing you all the best. - AHMED KAMANO',
  'Happy happy birthday Konomansa, wish u long life, Good health and prosperity and have a wonderful blast, my bro. - ELISHA JAMES',
  'Happy birthday to u Mr Biango. Age with grace. May u live long in the name of Allah. - FEA ANNAH JOHNNY'
];
