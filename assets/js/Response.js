
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("successAlert").style.display = "none";
    document.getElementById("errorAlert").style.display = "none";

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById ("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    

    if (name && phone && email.includes("@") && message) {
        fetch("https://script.google.com/macros/s/AKfycbwfPcZ0wwJOA856iXtE_M6lYzKsQOivav6kZGbLz12OgeXyqc5fCz-K--k-qIN9MpuP/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, phone, email, message })
        })

        .then(res => {
            if (res.ok) {
                document.getElementById("successAlert").style.display = "block";
                document.getElementById("contactForm").reset();
            } else {
                document.getElementById("errorAlert").style.display = "block";
            }
        })
        .catch(() => {
            document.getElementById("errorAlert").style.display = "block";
        });
    } else {
        document.getElementById("errorAlert").style.display = "block";
    }
});

