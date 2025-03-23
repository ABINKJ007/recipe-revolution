function getRecipes() {
    let ingredients = document.getElementById("ingredients").value;

    // Simulated recipe (Replace with backend response later)
    let recipe = `Grilled Cheese Sandwich using ${ingredients}`;

    document.getElementById("result").innerHTML = `
        <h3>Suggested Recipe</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Dish:</strong> ${recipe}</p>
    `;

    // Show QR Code button
    document.getElementById("generateQR").style.display = "block";
}

function generateQRCode() {
    let recipeText = document.getElementById("result").innerText;

    let qr = new QRious({
        element: document.getElementById("qrcode"),
        value: recipeText,
        size: 200
    });
}