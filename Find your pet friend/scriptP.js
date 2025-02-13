document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = {
        weekend: formData.get('weekend'),
        experience: formData.get('experience'),
        environment: formData.get('environment'),
        caretime: formData.get('caretime'),
        personality: formData.get('personality'),
        maintenance: formData.get('maintenance'),
        activity: formData.get('activity'),
        allergies: formData.get('allergies'),
        pet_size: formData.get('pet_size'),
        space: formData.get('space'),
        grooming: formData.get('grooming'),
        lifespan: formData.get('lifespan'),
        companionship: formData.get('companionship'),
        trainability: formData.get('trainability'),
        exotic_pets: formData.get('exotic_pets'),
        budget: formData.get('budget')
    };
    const petMatch = getPetMatch(answers);
    displayResult(petMatch);
});

function getPetMatch(answers) {
    // Example logic to determine the best pet match based on user's answers
    if (answers.weekend === 'outdoors' && answers.activity === 'very_active') {
        if (answers.pet_size === 'large') {
            return { match: "Active Large Dog (e.g., German Shepherd)", img: "german_shepherd.jpg" };
        } else if (answers.pet_size === 'medium') {
            return { match: "Active Medium Dog (e.g., Border Collie)", img: "border_collie.jpg" };
        } else {
            return { match: "Active Small Dog (e.g., Jack Russell Terrier)", img: "jack_russell.jpg" };
        }
    } else if (answers.weekend === 'indoors' && answers.experience === 'yes') {
        if (answers.maintenance === 'yes') {
            return { match: "Low-Maintenance Cat (e.g., Ragdoll)", img: "ragdoll.jpg" };
        } else {
            return { match: "Small, Independent Pet (e.g., Hamster)", img: "hamster.jpg" };
        }
    } else if (answers.weekend === 'indoors' && answers.experience === 'no') {
        if (answers.grooming === 'yes') {
            return { match: "Calm, Low-Maintenance Dog (e.g., Shih Tzu)", img: "shih_tzu.jpg" };
        } else {
            return { match: "Small Pet (e.g., Guinea Pig)", img: "guinea_pig.jpg" };
        }
    } else if (answers.exotic_pets === 'yes') {
        return { match: "Exotic Pet (e.g., Parrot or Gecko)", img: "gecko.jpg" };
    } else if (answers.allergies === 'yes') {
        return { match: "Hypoallergenic Pet (e.g., Sphynx Cat or Poodle)", img: "poodle.jpg" };
    } else {
        return { match: "Small, Easy to Care for Pet (e.g., Fish or Turtle)", img: "fish.jpg" };
    }
}

function displayResult(petMatch) {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('pet-result').innerText = petMatch.match;
    document.getElementById('pet-image').src = `images/${petMatch.img}`; // Assuming images are stored in the "images" folder
}

function restartQuiz() {
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz-form').reset();
}
