                    // ! CHAPTERS 49 - 52
                    // ? 9TH - JS - ASSIGNMENT
           // Q.1
function display() {
    let email = document.getElementById("E-mail").value;
    let password = document.getElementById("Password").value;
    document.getElementById("displayData").innerHTML = "<b><u>Your information is</u></b><br>" + "Email: " + email + "<br>Password: " + password;
    return false;
}
function redirectToSignup() {
    window.location.href = 'signup.html';
    document.getElementById("displayData").innerHTML = "<b><u>Your information is</u></b><br>" + "Email: " + email + "<br>Password: " + password;
}
function accountCreation() {
    let email = document.getElementById("E-mail").value;
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    if (password === confirmPassword) {
        document.getElementById("displayData").innerHTML = "<b><u>Your information is</u></b><br>" + "Email: " + email + "<br>Password: " + password;
    } else {
        document.getElementById("displayData").innerHTML = "Passwords do not match.";
    }
}
                    // Q.2
function toggleDetails() {
    var summary = document.querySelector('.details-summary');
    var fullDetails = document.querySelector('.full-details');
    var button = document.querySelector('button.toggle-button');

    if (fullDetails.style.display === 'none') {
        summary.style.display = 'none';
        fullDetails.style.display = 'block';
        button.textContent = 'Read less';
    } else {
        summary.style.display = 'block';
        fullDetails.style.display = 'none';
        button.textContent = 'Read more';
    }
}

                    // Q.3
function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;
    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
    cell4.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';
    document.getElementById("studentForm").reset();
}
function editStudent(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    document.getElementById("editName").value = cells[0].innerHTML;
    document.getElementById("editAge").value = cells[1].innerHTML;
    document.getElementById("editGrade").value = cells[2].innerHTML;
    document.getElementById("editForm").style.display = "block";
    document.getElementById("editForm").dataset.editRow = row.rowIndex;
}
function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function updateStudent() {
    var editRow = document.getElementById("editForm").dataset.editRow;
    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    var row = table.rows[editRow - 1];
    row.cells[0].innerHTML = document.getElementById("editName").value;
    row.cells[1].innerHTML = document.getElementById("editAge").value;
    row.cells[2].innerHTML = document.getElementById("editGrade").value;
    document.getElementById("editForm").style.display = "none";
    document.getElementById("editForm").reset();
}
function cancelEdit() {
    document.getElementById("editForm").style.display = "none";
    document.getElementById("editForm").reset();
}