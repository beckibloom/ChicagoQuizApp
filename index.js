'use strict';

const STORE = [

    // 0
    {question: 'Question 1: What is one ingredient that should NEVER go on a hot dog?',
    answer1: 'Mustard',
    answer2: 'Relish',
    answer3: 'Peppers',
    answer4: 'Ketchup',
    correctAnswer: 'Ketchup',
    successtext: 'If you put ketchup on your hot dog, prepare to be the laughing stock of Wrigley Field!',
    successimage: '<img src="https://s3.amazonaws.com/cdn.tastesofchicago.com/images/uploads/category_954_7648.jpg" alt="Two delicious Chicago-style hot dogs" class="success-image">'},

    // 1
    {question: 'Question 2: Which of these restaurants serves the best deep dish pizza?',
    answer1: 'Giordano\'s',
    answer2: 'Lou Malnati\'s',
    answer3: 'Pequod\'s',
    answer4: 'Uno\'s',
    correctAnswer: 'Lou Malnati\'s',
    successtext: 'Lou Malnati\'s is objectively the best, and anyone saying otherwise is probably not a true Chicagoan.',
    successimage: '<img src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/1421050_10152086204949828_1243982359_o.jpg?_nc_cat=107&_nc_ht=scontent-ort2-1.xx&oh=050e3c99392ca998554ea9439018b46f&oe=5D32971F" alt="A cheesy tomato deep dish pizza, fresh out of the oven">'},

    // 2
    {question: 'Question 3: When you\'re craving some good curry, what street should you head toward?',
    answer1: 'Belmont',
    answer2: 'Lakeshore Drive',
    answer3: 'Devon',
    answer4: 'Damen',
    correctAnswer: 'Devon',
    successtext: 'Devon Street is known for it\'s many amazing and authentic Indian restaurants.',
    successimage: '<img src="https://assets3.thrillist.com/v1/image/1296125/size/tl-horizontal_main_2x.jpg" alt="Plate with butter chicken, rice, chickpeas, and naan bread.">'},

    // 3
    {question: 'Question 4: You\'re heading out for a night on the town, and looking for a neighborhood full of parties and <span class="PRIDE">PRIDE</span>. Where is your Lyft dropping you off?',
    answer1: 'Roscoe\'s',
    answer2: 'Subterranean',
    answer3: 'Wrigleyville North',
    answer4: 'The Sixth',
    correctAnswer: 'Roscoe\'s',
    successtext: 'Roscoe\'s is a great first stop for a fun night in Boystown on North Halsted Street. Boystown is a hot spot filled with fun bars for karaoke, drag shows, and dancing the night away!',
    successimage: '<img src="https://www.wfmt.com/wp-content/uploads/2018/07/Boystown_RainbowPylons.jpg" alt="Rainbow pride flags on display with rainbow signpost with signage for Northalsted in Boystown">'},

    // 4
    {question: 'Question 5: It\'s time for some dim sum. Which of these trains will take you directly to Chinatown?',
    answer1:'Blue line',
    answer2:'Purple line',
    answer3:'Brown line',
    answer4:'Red line',
    correctAnswer: 'Red line',
    successtext: 'The Red Line stops right in the heart of Chinatown for all of your dim sum and bubble tea needs. Yum!',
    successimage: '<img src="https://www.transitchicago.com/assets/1/6/ctamap_Lsystem.png" alt="Map of the L train system, from Chicago Transit Authority">'},

    // 5 
    {question: 'Question 6: They serve some of the best Italian beef sandwiches in the land, but their owner, Dick, can be kind of a... you-know-what. You\'re on your way to:',
    answer1:'Byron\'s',
    answer2:'Portillo\'s',
    answer3:'Buona Beef',
    answer4:'Al\'s Beef',
    correctAnswer: 'Portillo\'s',
    successtext: 'Portillo\'s is a Chicago staple, and the classic Italian beef sandwich comes with either sweet peppers or hot giardiniera, if you\'re feeling spicy.',
    successimage: '<img src="https://tribwxin.files.wordpress.com/2017/06/photo-credit-portillos-via-facebook.jpg?quality=85&strip=all&w=1200" alt="Italian beef sandwich with hot giardiniera and fries from Portillo\'s.">'},

    // 6
    {question: 'Question 7: Two massive lions have stood guard outside this building since the 1893 Chicago World\'s Fair. What is this building called?',
    answer1: 'The Field Museum of Natural History',
    answer2: 'The Art Institute of Chicago',
    answer3: 'The Chicago History Museum',
    answer4: 'The Richard H. Driehaus Museum',
    correctAnswer: 'The Art Institute of Chicago',
    successtext: 'The two iconic bronze lion statues outside of the Art Institute of Chicago weigh over two tons each! The one positioned north of the steps is "on the prowl" and the lion to the south is "in an attitude of defiance," according to sculptor Edward Kemeys.',
    successimage: '<img src="https://gcottraux.files.wordpress.com/2015/10/south-lion.jpg" alt="The south lion from the steps of The Art Institute of Chicago">'},

    // 7
    {question: 'Question 8: You\'re making your way downtown, walking fast, faces pass, and... taking some friends to see the bean! What\'s the closest attraction you could also show your friends, while they\'re visiting from out of town?',
    answer1:'Maggie Daley Park',
    answer2:'Buckingham Fountain',
    answer3:'The Adler Planetarium',
    answer4:'The Sears Tower',
    correctAnswer: 'Maggie Daley Park',
    successtext: 'Maggie Daley Park has got something fun for every season, and it\'s right near the bean in the heart of The Loop (our downtown area). Go rock climbing in the summer, ice skating in the winter, or play in the playground year-round!',
    successimage: '<img src="https://maggiedaleypark.com/maggiedaley/wp-content/uploads/2016/10/MaggieDaley1_%C2%A9LupuIonut-Flickr1.jpg" alt="An overhead view of Maggie Daley Park at sunset.">'},

    // 8 
    {question: 'Question 9: Much to everyone\'s dismay, the Sears Tower was actually renamed to what?',
    answer1:'Wacker Drive Tower',
    answer2:'Trump Tower',
    answer3:'Aon Center',
    answer4:'Willis Tower',
    correctAnswer: 'Willis Tower',
    successtext: 'The Willis Tower was renamed in 2009 after the Willis Group Holdings leased the naming rights... but nobody likes calling it that. Just ask the 50,000 people who signed the online petition at ItsTheSearsTower.com.',
    successimage: '<img src="https://carltongroup.com/wp-content/uploads/2015/08/willis-tower-chicago.jpg" alt="The Sears Tower (Willis Tower) illuminated at night.">'},

    // 9
    {question: 'Question 10: How many seasons does Chicago truly have?',
    answer1:'1: Winter (11 months) and summer (1 month)',
    answer2:'4: Winter, spring, summer, and fall',
    answer3:'8: Winter, colder winter, probably spring, gotcha winter, actual spring, finally summer, hot as heck, fall',
    answer4:'11: Winter, fool\'s spring, second winter, spring of deception, third winter, mud season, actual spring, summer, false fall, second summer (one week), actual fall',
    correctAnswer: '11: Winter, fool\'s spring, second winter, spring of deception, third winter, mud season, actual spring, summer, false fall, second summer (one week), actual fall',
    successtext: 'It\'s 11 seasons! Welcome to Chicago - if you don\'t like the weather, just wait 10 minutes! Sure, lots of people say that about their city, but they\'ve got nothing on us.',
    successimage: '<img src="https://memegenerator.net/img/instances/75901504/mother-nature-you-cannot-have-all-four-seasons-in-one-week-chicago-hold-my-beer.jpg" alt="Picture of Chicago with text: Mother Nature: You cannot have all four seasons in one week. Chicago: Hold my beer">'}
]

function renderChicagoQuiz(questionNumber) {
    console.log('`renderChicagoQuiz` ran');
    $('.start-quiz').click(function(event){
        renderQuizQuestion(questionNumber);
        $(this).closest('div').addClass('hidden');
        submitQuizAnswer(questionNumber);
    });
    $('.next-question').click(function(event){
        renderQuizQuestion(questionNumber);
        submitQuizAnswer(questionNumber);
    });
    // $('.quizForm').on('click', '.next-question', function(event) {
    //     event.preventDefault();
    //     console.log('Question submit button was clicked.');
    //     number +=1;
    //     renderQuizQuestion(number);
    // });
}

function currentQuizQuestion() {
    console.log('`currentQuizQuestion` ran');
    let questionNumber = $('.question-number').text();
    questionNumber = Number(questionNumber);
    renderChicagoQuiz(questionNumber);
    // console.log(`Inside currentQuizQuestion, questionNumber is ${questionNumber}`);
}

function renderQuizQuestion(questionNumber) {
    console.log('`renderQuizQuestion` ran');
    const quizQuestionString = generateQuizQuestion(STORE[questionNumber]);  
    $('.quizForm').html(quizQuestionString); 
    $('.question-number').text(questionNumber+1);
}

function generateQuizQuestion(item) {
    console.log('`generateQuizQuestion` ran');
    return `
    <div class="quiz-question">
      <form>
        <fieldset>
          <legend>${item.question}</legend>
          <ul>
            <li>
              <input type="radio" name="question${item}" value="${item.answer1}" required>${item.answer1} 
            </li>
            <li>
              <input type="radio" name="question${item}" value="${item.answer2}" required>${item.answer2} 
            </li>
            <li>
              <input type="radio" name="question${item}" value="${item.answer3}" required>${item.answer3} 
            </li>
            <li>
              <input type="radio" name="question${item}" value="${item.answer4}"required>${item.answer4} 
            </li>
          </ul>
          <button type="submit" value="Submit" class="submit-answer">Submit</button>
        </fieldset>
      </form>
    </div>`;
}

function submitQuizAnswer(questionNumber) {
    $('.submit-answer').click(function(event) {
        event.preventDefault();
        let answer = $('input:checked').val();
        evaluateAnswer(answer, questionNumber);
    });
}

function evaluateAnswer(answerVal, questionNumber) {
    if (answerVal === STORE[questionNumber].correctAnswer) {
        userFeedbackCorrect(STORE[questionNumber]);
        renderChicagoQuiz(questionNumber);
    }
    else {
        userFeedbackWrong();
    }
}

function userFeedbackCorrect(item) {
    $('.quizForm').html(`
    <div class="user-feedback">
    <h2>Correct!</h2>
    <div class="user-feedback-text">${item.successtext}</div>
    ${item.successimage}
    <button type="button" class="next-question">Continue</button>
    </div>`);
}

function userFeedbackWrong() {
    console.log('userFeedbackWrong ran.')
}

function renderAnswerSuccessPage() {
    // 7 - Upon submitting an answer, users should:
    // receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
    // be moved onto the next question (or interact with an element to move on).
    console.log('`renderAnswerSuccessPage` ran');
}

function updateCurrentScore() {
    // 6 - Users should also be able to see which question they're on 
    // (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
    console.log('`updateCurrentScore` ran');
}

function renderCurrentScore() {
    // Responsible for showing the updated amount of updateCurrentScore
    console.log('`renderCurrentScore` ran');
}

function renderQuizCompleted() {
    // 8 - Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
    console.log('`renderQuizCompleted` ran');
}

function restartQuiz() {
    // 9 - Users should be able to start a new quiz.
    console.log('`restartQuiz` ran');
}

function handleChicagoQuiz() {
    currentQuizQuestion();
}

$(handleChicagoQuiz);