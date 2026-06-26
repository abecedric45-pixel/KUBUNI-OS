// ===================================
// KUBUNI Browser Prototype
// Version : V1
// ===================================

console.log("KUBUNI Browser démarré.");

const aiButton = document.querySelector(".ai-button");

if (aiButton) {
    aiButton.addEventListener("click", () => {
        alert("Bienvenue dans KUBUNI AI !");
    });
}

const addressBar = document.querySelector(".address-bar");

addressBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const query = addressBar.value.trim();

        if (query !== "") {

            const isUrl =
                query.startsWith("http://") ||
                query.startsWith("https://") ||
                query.includes(".");

            if (isUrl) {

                const url = query.startsWith("http")
                    ? query
                    : "https://" + query;

                window.open(url, "_blank");

            } else {

                window.open(
                    "https://www.google.com/search?q=" +
                    encodeURIComponent(query),
                    "_blank"
                );

            }

        }
    }
});


const goButton = document.querySelector(".go-button");

if (goButton) {
    goButton.addEventListener("click", () => {
        addressBar.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "Enter"
            })
        );
    });
}

