function data() {
    var a = [{
            "string": "Facebook turned me down. It was a great opportunity to connect with some fantastic people. Looking forward to life's next adventure. - Brian Acton."
        },

        {
            "string": "Hello Twitterverse! We r now LIVE tweeting from the International Space Station -- the 1st live tweet from Space! :) More soon, send your ?s - TL Creamer."
        },

        {
            "string": "Thank you for everything. My last ask is the same as my first. I'm asking you to believe - not in my ability to create change, but in yours. - Barack Obama"
        },

        {
            "string": "Ambulances are the original Transformers because sometimes they transform mid-ride into hearses - Megan Amram."
        },

        {
            "string": "The worst part about being a giraffe is having a lot of time to think about your mistakes when you're sinking into quicksand."
        },

        {
            "string": "Oh hi Becky who refused to kiss me during spin the bottle in 6th grade & now wants to play FarmVille, looks like tables have fucking turned"
        },

        {
            "string": "I wonder if Sallys parents were like 'Yeah great idea Sally. Sell seashells. On the seashore. Where there are tons of free shells. Idiot.'"
        },

        {
            "string": "Spent the whole day at the beach, but forgot to take a picture to post on Instagram. So that was a waste of time."
        },

        {
            "string": "When parents say to kids 'go to ur room & think about what you've done' it's really good practice for what you'll do every night as an adult"
        },

        {
            "string": "What if I told you that even before coronavirus I preferred strangers to stay 6ft away from me #WearAMask #SocialDistancing #introvertproblems"
        },

        {
            "string": "Something about having your dog on walks invites conversation, and my wireless earbuds aren't conspicuous enough. #introvertproblems"
        },

        {
            "string": "I know the list of Terrible Things is long but I’d like to add the moment at the end of the zoom when you say goodbye and press leave but everyone is still staring at you and you are staring at them."
        },

        {
            "string": "good morning I hope you have a super great day and that zoom call meeting gets cancelled"
        },
        {
            "string": "Introverts for mask wearing! Hide your face so acquaintances don’t recognize you and stop for an awkward conversation!"
        },
        {
            "string": "I’m not saying my wife orders a lot of stuff online, I’m just saying my dog recognizes the sound of an Amazon Prime van approaching."
        },
        {
            "string": "no greater shame than redownloading a dating app.... it’s like yes, I would like to be disrespected by a stranger"
        },
        {
            "string": "Bumble is a fun app because it goes to great lengths to paint the illusion that you won't die alone."
        },
        {
            "string": "My son got a donut from a kid in school who had a birthday and he saved it and brought it home for me and I've always told my three sons that I don't have a favorite but now I think I have to tell them I have a favorite."
        },
        {
            "string": "Friendly reminder that what you see when you accidentally open your front-facing camera is the same thing your kids see anytime they look up at you."
        },
        {
            "string": "Thoughts & prayers for my son who thought his phone was charging overnight only to find he must go to school on 6%."
        },
        {
            "string": "My 8yo just asked me if I'd rather live with an orange-sized eyeball that was constantly hanging out of its socket or a testicle as big as a car. My answer was: 'go to bed.'"
        },
        {
            "string": "Don't be afraid of failures in life, unless you want to live in the shadow, waiting for the sun that may never come."
        },
        {
            "string": "I could accomplish so much if i wasn’t using all my mental energy getting into imaginary fights with people who aren’t wearing masks"
        },
        {
            "string": "Don't marry based on love or money he has. Marry the one who makes you love yourself the way you are and supports you to earn money yourself."
        },
        {
            "string": "I quit watching How to Get Away With Murder a few seasons back because I didn’t feel like I was learning anything."
        },
        {
            "string": "For a brief moment, I got excited because I thought my toothpaste said anti-plague instead of anti-plaque."
        },
        {
            "string": "Despite a valiant effort put forth by my dog from our living room window, our neighbor has once again successfully entered his own home."
        },
        {
            "string": "When my wife was younger she thought she would marry a Navy SEAL, but instead she just married me, a man with the body of a seal."
        },
        {
            "string": "I wish my wife was one of those government agents who aren’t allowed to talk about what they did at work all day."
        },
        {
            "string": "You don't need committees to solve things. Just find two women who are in a real mood about some shit and send them on an evening fitness walk."
        },
        {
            "string": "The internet has revolutionized the way companies try to sell you something you bought six months ago."
        },
        {
            "string": "The person next to me on this train hasn't stopped talking loudly the whole journey! I'm starting to regret marrying her."
        },
        {
            "string": "A child in this grocery store is crying and eating a cookie while she's riding in a shopping cart, and I want to ask her how she got this job."
        },
        {
            "string": "I pray my friends get through the battles that they don't tell me about"
        },
        {
            "string": "my morning routine includes 20 minutes of staring at the ceiling thinking about how tired i am and debating if i really need to live today"
        },
        {
            "string": "Knowing when it is your mistake and apologising at the right moment is a very under-appreciated personality trait."
        },
        {
            "string": "All the problems of the world seem small when your father keeps his hand on your shoulder and says, 'tu tension kyu leta hai mai hun na'"
        },
        {
            "string": "Domestic help came home today for the first time in 4 months. Haven't wept with this much joy since UCL Final 2008."
        },
        {
            "string": "DUDE my roommate just cut his hand open cutting onions because he put on sunglasses so he wouldn't cry as much, but HE JUST COULDNT SEE"
        },
        {
            "string": "my favorite part of working from home is when my roommate doesn't realize i'm here and i get to hear her telling my cats she's their real mom"
        },
        {
            "string": "I attended my 5 year old's junior kindergarten graduation today. It was emotional for him (he cried because the staple in his hat fell out)."
        },
        {
            "string": "You're my wife and I love you dearly, we’re ride or die and we share many things but this charger is mine. Find your own."
        },
        {
            "string": "Hey if anyone has insomnia my husband is available to give a detailed account of how he solved the email issue on my computer."
        },
        {
            "string": "If you’re overly competitive about being more tired than someone else, marriage might be for you."
        },
        {
            "string": "I sent my husband to the grocery store for fresh parsley, he came home with a snowblower and a jar of dehydrated onions. Marriage is delightful."
        }
    ];

    let num = a.length;
    let randomIndex = Math.floor(Math.random() * num);
    return a[randomIndex].string;
}


//call the problem as data()



//to change the question
function newProblem() {
    var newQuestion = data();
    $("#tweet").html(newQuestion);
}



var score = 0;


function startTimer() {
    console.log("Timer Started.");
}

//modular gameplay
function main() {

    //put up new problem
    var que = newProblem();

    //clear textarea
    $("#answer").html("");

    //start the timer.
    startTimer();

    

    while(true)
    {
        console.log(que);
    }
    
    //keep track of the input for each character entered.


    //if he fcuks up a char..gameover


    //else get the score, display and recurse the function



}




main();