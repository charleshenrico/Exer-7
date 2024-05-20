document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("foodForm");
    const foodCards = document.getElementById('foodCards');

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        const foodName = formData.get("foodName");
        const description = formData.get("description");
        const imageUrl = formData.get("imageUrl");
        const rank = formData.get("rank");

        if (foodName !== null && description !== null && imageUrl !== null && rank !== null) {
            if (!isNaN(rank)) {
                foodCard(foodName, description, imageUrl, rank);
                form.reset(); 
            }
        }else {
            alert('Incorrect Inputs');
        }
    });

    function foodCard(foodName, description, imageUrl, rank) {
        const card = document.createElement("div");
        card.classList.add("foodCard");
        card.innerHTML = `
            <div id=${rank}>
            <h1>${foodName}</h1>
            <img src="${imageUrl}">
            <p>${description}</p>
            <button class="delete">Delete</button>
        `;
    
        const deleteBtn = card.querySelector(".delete");
        deleteBtn.addEventListener("click", () => {
            card.remove();
        });
    
        const existingCards = Array.from(foodCards.children);
        let inserted = false;
        for (let i = 0; i < existingCards.length; i++) {
            const cardRank = parseInt(existingCards[i].id);
            if (cardRank > rank) {
                foodCards.insertBefore(card, existingCards[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            foodCards.appendChild(card);
        }
    
        return card;
    }
});
