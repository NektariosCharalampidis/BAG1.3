const questions = [
    { question: "Σε ένα πολυκύτταρο οργανισμό τα κύτταρα του είναι:", options: ["όλα ίδια μορφολογικά", "άλλα ίδια και άλλα διαφορετικά", "όλα διαφορετικά"], answer: 1 },
    { question: "Τα φύλλα των φυτών είναι:", options: ["όργανα", "συστήματα οργάνων", "ακυτταρικές δομές"], answer: 0 },
    { question: "Το κυκλοφορικό στον άνθρωπο είναι:", options: ["όργανο", "σύστημα οργάνων", "κύτταρο"], answer: 1 },
    { question: "Τα πτηνά:", options: ["είναι ένα είδος", "είναι αυτότροφοι οργανισμοί", "είναι πολλά διαφορετικά είδη"], answer: 2 },
    { question: "Στη βιόσφαιρα δεν ανήκει:", options: ["ένα δάσος", "ο κρατήρας ενός ενεργού ηφαιστείου", "μια βαθιά λίμνη"], answer: 1 },
    { question: "Τα ερυθρά αιμοσφαίρια:", options: ["μεταφέρουν οξυγόνο", "μεταφέρουν μηνύματα", "βοηθούν στη στήριξη"], answer: 0 },
    { question: "Η καρδιά:", options: ["είναι ένα όργανο", "αποτελείται μόνο από μυϊκά κύτταρα", "βοηθά στην πέψη"], answer: 0 },
    { question: "Η καρδιά, οι αρτηρίες και οι φλέβες αποτελούν το:", options: ["νευρικό σύστημα", "μυϊκό σύστημα", "κυκλοφορικό σύστημα"], answer: 2 },
    { question: "Είδος είναι:", options: ["τα έντομα", "τα ψάρια", "οι άνθρωποι"], answer: 2 },
    { question: "Τα νευρικά κύτταρα:", options: ["μεταφέρουν οξυγόνο", "μεταφέρουν μηνύματα", "βοηθούν στην άμυνα"], answer: 1 }
];

function startQuiz() {
    document.getElementById("theory").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = "";

    questions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach((option, i) => {
            questionBlock.innerHTML += `<input type="radio" name="q${index}" value="${i}"> ${option}<br>`;
        });
        questionsDiv.appendChild(questionBlock);
    });
}

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let score = 0;
    let incorrect = [];
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        } else {
            incorrect.push(`${index + 1}. ${q.question} (Σωστή απάντηση: ${q.options[q.answer]})`);
        }
    });
    
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<h3>Αποτέλεσμα: ${score} / ${questions.length}</h3>`;
    
    if (incorrect.length > 0) {
        resultsDiv.innerHTML += "<h4>Λάθη:</h4><ul>";
        incorrect.forEach(err => {
            resultsDiv.innerHTML += `<li>${err}</li>`;
        });
        resultsDiv.innerHTML += "</ul>";
    } else {
        resultsDiv.innerHTML += "<h4>Μπράβο! Όλες οι απαντήσεις είναι σωστές!</h4>";
    }
});
