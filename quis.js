
//inisiasi soal dalam quiz
const questions = [
   
    {
        question:'Rukun islam ada berapa?',
        optionA: '2',
        optionB: '5',
        optionC: '6',
        optionD: '3',
        correctOption: "optionB"
    },
    {
        question:'Apa tugas Malaikat Izrail?',
        optionA: 'Mencabut nyawa manusia',
        optionB: 'Meniup terompet sangkakala',
        optionC: 'Menyampaikan wahyu pada nabi',
        optionD: 'Mencatat amal buruk manusia',
        correctOption: "optionA"
    },
    {
        question:'Rukun iman ada berapa?',
        optionA: '4',
        optionB: '5',
        optionC: '6',
        optionD: '3',
        correctOption: "optionC"
    },
    {
        question:'Apa tugas Malaikat Mikail?',
        optionA: 'Menyampaikan wahyu pada nabi',
        optionB: 'Mencatat amal buruk manusia',
        optionC: 'Menyampaikan wahyu pada nabi',
        optionD: 'Mengatur alam semesta',
        correctOption: "optionD"
    },
    {
        question:'Manakah nama nabi yang salah?',
        optionA: 'Nabi Nuh AS',
        optionB: 'Nabi Ismail AS ',
        optionC: 'Nabi Luth AS',
        optionD: 'Nabi Munkar AS',
        correctOption: "optionD"
    },
    {
        question:'Allah memiliki sifat wajib salah satunya ialah Wujud. Apa arti dari Wujud?',
        optionA: 'Ada',
        optionB: 'Terdahulu',
        optionC: 'Kekal',
        optionD: 'Berkuasa',
        correctOption: "optionA"
    },
    {
        question:'Apa tugas Malaikat Atid?',
        optionA: 'Mencabut nyawa manusia',
        optionB: 'Meniup terompet sangkakala',
        optionC: 'Menyampaikan wahyu pada nabi',
        optionD: 'Mencatat amal buruk manusia',
        correctOption: "optionD"
    },
    {
        question:'Rasul memiliki sifat wajib salah satunya ialah Shidiq. Apa arti dari Shidiq?',
        optionA: 'Selalu Benar',
        optionB: 'Pandai',
        optionC: 'Menyampaikan perintah dan larangan',
        optionD: 'Dapat dipercaya',
        correctOption: "optionA"
    },
    {
        question:'Sifat wajib rasul  ada berapa?',
        optionA: '2',
        optionB: '5',
        optionC: '4',
        optionD: '3',
        correctOption: "optionC"
    },
    {
        question:'Allah memiliki sifat wajib salah satunya ialah Iradat. Apa arti dari Iradat?',
        optionA: 'berkehendak',
        optionB: 'mengetahui',
        optionC: 'hidup',
        optionD: 'melihat',
        correctOption: "optionA"
    },
    {
        question:'Manakah rukun iman yang salah?',
        optionA: 'Iman kepada allah',
        optionB: 'Iman kepada malaikat ',
        optionC: 'Iman kepada iblis',
        optionD: 'Iman kepada kitab',
        correctOption: "optionC"
    },
    {
        question:'Rasul memiliki sifat wajib salah satunya ialah Fathonah. Apa arti dari Fathonah?',
        optionA: 'Selalu Benar',
        optionB: 'Pandai',
        optionC: 'Menyampaikan perintah dan larangan',
        optionD: 'Dapat dipercaya',
        correctOption: "optionB"
    },
    {
        question:'Manakah rukun islam yang salah?',
        optionA: 'Mengerjakan puasa di bulan ramadhan',
        optionB: 'Mengucapkan 2 kalimat syahadat ',
        optionC: 'Mendirikan sholat',
        optionD: 'Melaksanakan haji bila tidak mampu',
        correctOption: "optionD"
    },
    {
        question:'Apa tugas Malaikat Jibril?',
        optionA: 'Mencabut nyawa manusia',
        optionB: 'Meniup terompet sangkakala',
        optionC: 'Menyampaikan wahyu pada nabi',
        optionD: 'Mencatat amal buruk manusia',
        correctOption: "optionC"
    },
    {
        question:'Manakah rukun islam yang salah?',
        optionA: 'Melaksanakan haji bila mampu',
        optionB: 'Mengucapkan 2 kalimat syahadat ',
        optionC: 'melaksanakan wudhu',
        optionD: 'Menunaikan zakat',
        correctOption: "optionC"
    },
    {
        question:'Rasul memiliki sifat wajib salah satunya ialah Tabligh. Apa arti dari Tabligh?',
        optionA: 'Selalu Benar',
        optionB: 'Pandai',
        optionC: 'Menyampaikan perintah dan larangan',
        optionD: 'Dapat dipercaya',
        correctOption: "optionC"
    },
    {
        question:'Manakah rukun islam yang salah?',
        optionA: 'Mengucap bismillah',
        optionB: 'Mengucapkan 2 kalimat syahadat ',
        optionC: 'Mendirikan sholat',
        optionD: 'Menunaikan zakat',
        correctOption: "optionA"
    },
    {
        question:'Apa tugas malaikat Raqib?',
        optionA: 'Mencatat amal baik manusia',
        optionB: 'Meniup terompet sangkakala',
        optionC: 'Menyampaikan wahyu pada nabi',
        optionD: 'Mencatat amal buruk manusia',
        correctOption: "optionA"
    },
    {
        question:'Sifat mustahil rasul ada berapa?',
        optionA: '2',
        optionB: '5',
        optionC: '4',
        optionD: '3',
        correctOption: "optionC"
    },
    {
        question:'Manakah nama malaikat yang salah?',
        optionA: 'Malaikat Malik ',
        optionB: 'Malaikat Ridwan ',
        optionC: 'Malaikat Isa ',
        optionD: 'Malaikat Nakir',
        correctOption: "optionC"
    },
    {
        question:'Allah memiliki sifat wajib salah satunya ialah Baqa. Apa arti dari Baqa?',
        optionA: 'Ada',
        optionB: 'Terdahulu',
        optionC: 'Kekal',
        optionD: 'Berkuasa',
        correctOption: "optionC"
    },
    {
        question:'Manakah rukun iman yang salah?',
        optionA: 'Iman kepada allah',
        optionB: 'Iman kepada langit dan bumi ',
        optionC: 'Iman kepada hari akhir',
        optionD: 'Iman kepada rasul',
        correctOption: "optionB"
    },
    {
        question:'Allah memiliki sifat wajib salah satunya ialah Ilmu. Apa arti dari Ilmu?',
        optionA: 'berkehendak',
        optionB: 'mengetahui',
        optionC: 'hidup',
        optionD: 'melihat',
        correctOption: "optionB"
    },
    {
        question:'Sifat jaiz allah ada berapa?',
        optionA: '2',
        optionB: '1',
        optionC: '6',
        optionD: '3',
        correctOption: "optionB"
    },
    {
        question:'Manakah nama malaikat yang salah?',
        optionA: 'Malaikat Nuh ',
        optionB: 'Malaikat Ridwan ',
        optionC: 'Malaikat Munkar ',
        optionD: 'Malaikat Nakir',
        correctOption: "optionA"
    },
    {
        question:'Allah memiliki sifat wajib salah satunya ialah Qidam. Apa arti dari Qidam?',
        optionA: 'Ada',
        optionB: 'Terdahulu',
        optionC: 'Kekal',
        optionD: 'Berkuasa',
        correctOption: "optionB"
    },
    {
        question:'Sifat jaiz rasul ada berapa?',
        optionA: '2',
        optionB: '1',
        optionC: '6',
        optionD: '3',
        correctOption: "optionB"
    },
    {
        question:'Rasul memiliki sifat wajib salah satunya ialah Amanah. Apa arti dari Amanah?',
        optionA: 'Selalu Benar',
        optionB: 'Pandai',
        optionC: 'Menyampaikan perintah dan larangan',
        optionD: 'Dapat dipercaya',
        correctOption: "optionD"
    },
    {
        question:'Allah memiliki sifat wajib salah satunya ialah Qudrat. Apa arti dari Qudrat?',
        optionA: 'Ada',
        optionB: 'Terdahulu',
        optionC: 'Kekal',
        optionD: 'Berkuasa',
        correctOption: "optionD"
    },
    {
        question:'Apa tugas Malaikat Israfil?',
        optionA: 'Mencabut nyawa manusia',
        optionB: 'Meniup terompet sangkakala',
        optionC: 'Menyampaikan wahyu pada nabi',
        optionD: 'Mencatat amal buruk manusia',
        correctOption: "optionD"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}