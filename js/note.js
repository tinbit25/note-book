document.addEventListener('DOMContentLoaded', function() {
    let addNote = document.getElementById("addNote");
    let icon = document.getElementById("icon");
    let addBtn = document.getElementById("addBtn");

    addNote.addEventListener("click", function() {
        document.querySelector(".addForm").style.display = "block";
        document.getElementById("title").value = "";
        document.getElementById("description").value = ""; // Fixed ID name
    });

    icon.addEventListener("click", function() {
        document.querySelector(".addForm").style.display = "none";
    });

    addBtn.addEventListener("click", function() {
        let title = document.getElementById("title").value.trim();
        let description = document.getElementById("description").value.trim(); // Fixed ID name

        if (title === "" || description === "") {
            alert("Please fill in both the title and description.");
            return;
        }

        document.querySelector(".addForm").style.display = "none";

        let div = document.createElement("div");
        div.classList.add("myNote");
        div.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <button>DELETE</button>
        `;
        
        div.querySelector("button").addEventListener("click", function() {
            div.remove();
        });

        document.querySelector(".newNote").appendChild(div);
    });
});
