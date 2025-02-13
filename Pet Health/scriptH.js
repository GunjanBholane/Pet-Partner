document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const petName = document.getElementById('petName').value;
    const selectedBreed = document.getElementById('breedSelect').value;
    const healthInfoElement = document.getElementById('healthInfo');
    
    // Get user responses to health questions
    const eating = document.querySelector('input[name="eating"]:checked').value;
    const drinking = document.querySelector('input[name="drinking"]:checked').value;
    const active = document.querySelector('input[name="active"]:checked').value;
    const coat = document.querySelector('input[name="coat"]:checked').value;

    // Check if any response is negative
    const hasNegativeResponse = [eating, drinking, active, coat].includes("no");

    if (hasNegativeResponse) {
        healthInfoElement.innerHTML = `
            <h2>Health Check-up Suggested for ${petName}:</h2>
            <p>Based on your responses, we recommend a health check-up for your pet.</p>
            <p>Here are some general tips:</p>
            <ul>
                <li>Ensure your pet is eating a balanced diet.</li>
                <li>Make sure your pet is drinking enough water daily.</li>
                <li>Keep your pet active with regular exercise and playtime.</li>
                <li>Monitor your pet's coat and skin for signs of dryness or irritation.</li>
            </ul>
        `;
    } else {
        healthInfoElement.innerHTML = `
            <h2>No Health Check-up Needed for ${petName}:</h2>
            <p>Your pet seems healthy based on your responses. Continue regular care to maintain your pet's well-being!</p>
        `;
    }

    // If a valid breed is selected, add specific tips
    if (selectedBreed && breedHealthTips[selectedBreed]) {
        const breed = breedHealthTips[selectedBreed];
        healthInfoElement.innerHTML += `
            <h2>Specific Health Tips for ${breed.name}:</h2>
            <ul>
                ${breed.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        `;
    }
});
