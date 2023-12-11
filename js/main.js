var arrayOfQuotes = [
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'

    },
    {'author': 'Epictetus', 
     'quote': "It's not what happens to you, but how you react to it that matters."

    },
    {'author': 'Elbert Hubbard', 
     'quote': "Do not take life too seriously. You will not get out alive."
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': "You miss 100% of the shots you don't take."
    },
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
   document.getElementById('quote').innerHTML = `\"${arrayOfQuotes[random].quote}\"`;
   document.getElementById('author').innerHTML = `--${arrayOfQuotes[random].author}`;
    
}