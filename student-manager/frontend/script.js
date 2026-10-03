async function addStudent() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    const response = await fetch("/students", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            age: Number(age),
            course: course
        })
    });

    const data = await response.json();

    console.log(data);

    loadStudents();
}


async function loadStudents() {

    const response = await fetch("/students");

    const students = await response.json();

    const container = document.getElementById("students");

    container.innerHTML = "";

    students.forEach(student => {

        container.innerHTML += `
            <p>
                ${student.name} -
                ${student.age} -
                ${student.course}
            </p>
        `;

    });
}


loadStudents();