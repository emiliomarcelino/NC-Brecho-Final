document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#filters .btn");
    const products = document.querySelectorAll(".item");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const filterText = button.textContent.trim().substring(0, 4).toLowerCase();
            
            products.forEach(product => {
                const productText = product.querySelector("h4").textContent.trim().substring(0, 4).toLowerCase();
                if (productText === filterText) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});
