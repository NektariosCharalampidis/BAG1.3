const questions = [
    { question: "Σε έναν πολυκύτταρο οργανισμό τα κύτταρα είναι:", options: ["Όλα ίδια μορφολογικά", "Άλλα ίδια και άλλα διαφορετικά", "Όλα διαφορετικά"], answer: 1 },
    { question: "Τα φύλλα των φυτών είναι:", options: ["Όργανα", "Συστήματα οργάνων", "Ακυτταρικές δομές"], answer: 0 },
    { question: "Το κυκλοφορικό στον άνθρωπο είναι:", options: ["Όργανο", "Σύστημα οργάνων", "Κύτταρο"], answer: 1 },
    { question: "Τα πτηνά:", options: ["Είναι ένα είδος", "Είναι αυτότροφοι οργανισμοί", "Είναι πολλά διαφορετικά είδη"], answer: 2 },
    { question: "Στη βιόσφαιρα δεν ανήκει:", options: ["Ένα δάσος", "Ο κρατήρας ενός ενεργού ηφαιστείου", "Μια βαθιά λίμνη"], answer: 1 },
    { question: "Τα ερυθρά αιμοσφαίρια:", options: ["Μεταφέρουν οξυγόνο", "Μεταφέρουν μηνύματα", "Βοηθούν στη στήριξη"], answer: 0 },
    { question: "Η καρδιά:", options: ["Είναι ένα όργανο", "Αποτελείται μόνο από μυϊκά κύτταρα", "Βοηθά στην πέψη"], answer: 0 },
    { question: "Η καρδιά, οι αρτηρίες και οι φλέβες αποτελούν:", options: ["Το νευρικό σύστημα", "Το μυϊκό σύστημα", "Το κυκλοφορικό σύστημα"], answer: 2 },
    { question: "Είδος είναι:", options: ["Τα έντομα", "Τα ψάρια", "Οι άνθρωποι"], answer: 2 },
    { question: "Τα νευρικά κύτταρα:", options: ["Μεταφέρουν οξυγόνο", "Μεταφέρουν μηνύματα", "Βοηθούν στην άμυνα"], answer: 1 }
];

function startQuiz() {
    document.getElementById("theory").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    const questionContainer = document.getElementById("questions");
    questionContainer.innerHTML = "";

    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question");
        div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, i) => {
            div.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label><br>
            `;
        });

        questionContainer.appendChild(div);
    });
}

function checkAnswers() {
    let score = 0;
    let incorrectAnswers = [];
    
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            if (parseInt(selected.value) === q.answer) {
                score++;
            } else {
                incorrectAnswers.push({ question: q.question, correct: q.options[q.answer] });
            }
        } else {
            incorrectAnswers.push({ question: q.question, correct: q.options[q.answer] });
        }
    });

    document.getElementById("score").innerText = `Σωστές απαντήσεις: ${score} / ${questions.length}`;
    
    const correctionDiv = document.getElementById("corrections");
    correctionDiv.innerHTML = "";
    
    if (incorrectAnswers.length > 0) {
        correctionDiv.innerHTML = "<h3>Λάθη:</h3>";
        incorrectAnswers.forEach(item => {
            correctionDiv.innerHTML += `<p><strong>Ερώτηση:</strong> ${item.question}<br><strong>Σωστή απάντηση:</strong> ${item.correct}</p>`;
        });
    }

    document.getElementById("results").style.display = "block";
}

function restartQuiz() {
    document.getElementById("results").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}
