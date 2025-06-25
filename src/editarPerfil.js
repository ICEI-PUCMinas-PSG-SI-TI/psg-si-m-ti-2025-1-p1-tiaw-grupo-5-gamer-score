// editarPerfil.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("edit-form");

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
        form.username.value = savedUser.username || "";
        form.image.value = savedUser.image || "";
        form.cover.value = savedUser.cover_image || "";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const updatedUser = {
            username: form.username.value,
            image: form.image.value,
            cover_image: form.cover.value,
            role: savedUser?.role || "User"
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Perfil atualizado com sucesso!");
        window.location.href = "index.html";
    });
});
