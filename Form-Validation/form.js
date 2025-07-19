document.getElementById('submit').addEventListener('click', function () {
    const fields = ['fname', 'lname', 'email'];
    let fieldsvalid = true;

    fields.forEach(field => {
        const inp = document.getElementById(field)
        const existingerror = inp.nextElementSibling;
        if (inp.value.trim() == "") {
            if (!existingerror || !existingerror.classList.contains('error')) {
                const errorspan = document.createElement('span')
                errorspan.classList.add('error')
                errorspan.textContent = ` --${field} is required`
                inp.insertAdjacentElement('afterend', errorspan)
            }
            fieldsvalid = false;
        } else {
            if (existingerror && existingerror.classList.contains('error')) {
                existingerror.remove()
            }
        }
    })
    if (fieldsvalid) {
        createtable();
    } else {
        document.getElementById('table1').innerHTML = ""
    }
    document.getElementById('form').reset();
})

document.getElementById('cancel').addEventListener('click', function () {
    const forms = document.getElementById('form')
    forms.reset()
    document.querySelectorAll('.error').forEach(errorspan => errorspan.remove())
    document.getElementById('table1').innerHTML = "";

})


function createtable() {
    const Firstname = document.getElementById('fname').value.trim();
    const lastname = document.getElementById('lname').value.trim();
    const age = document.getElementById('age').value.trim() || "-";
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "None";
    const profession = Array.from(document.querySelectorAll('input[name="options"]:checked')).map(element => element.value).join(', ') || "None";
    const comment = document.getElementById('comment').value.trim() || "-";
    const income = document.getElementById('income').value || "-";

    const tableHTML = `
        <h2>Check your data: </h2>
        <table class = "tt" border="1" cellpadding="8">
            <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Luxury</th>
            <th>Comment</th>
            <th>Income</th>
            </tr>
            <tr>
            <td>${Firstname}</td>
            <td>${lastname}</td>
            <td>${age}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${profession}</td>
            <td>${comment}</td>
            <td>${income}</td>
            </tr>
        </table>
    `
    document.getElementById('table1').innerHTML = tableHTML;
    alert("Form submitted: check your details below the form");

}