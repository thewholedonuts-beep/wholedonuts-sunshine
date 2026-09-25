document.getElementById("walkIn").onclick = () => {
     document.getElementById("identitySelect").classList.remove("hidden");
};

document.querySelectorAll(".id-btn").forEach(btn => {
    btn.onclick = () => {
        const id = btn.dataset.id;
        document.getElementById("expTitle").innerText =
            id === "chef" ? "Chef Experience" : "Professor Experience";

        document.getElementById("experience").classList.remove("hidden");
    };
});

document.querySelectorAll(".exp-btn").forEach(btn => {
    btn.onclick = () => {
        document.getElementById("stillStanding").classList.remove("hidden");
    };
});
