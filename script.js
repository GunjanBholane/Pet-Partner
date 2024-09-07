// Example city data based on country and animal
const data = {
    "USA": {
        "Cat": ["New York", "Los Angeles", "Chicago"],
        "Dog": ["Houston", "Miami", "San Francisco"],
        "Bird": ["Phoenix", "Philadelphia", "Dallas"],
        // Add more animals and cities as needed
    },
    "India": {
        "Cat": ["Delhi", "Mumbai", "Bangalore"],
        "Dog": ["Chennai", "Kolkata", "Pune"],
        "Bird": ["Hyderabad", "Ahmedabad", "Jaipur"],
    },
    "UK": {
        "Cat": ["London", "Manchester", "Liverpool"],
        "Dog": ["Birmingham", "Glasgow", "Edinburgh"],
    },
    "Germany": {
        "Cat": ["Berlin", "Munich", "Frankfurt"],
        "Dog": ["Hamburg", "Cologne", "Stuttgart"],
    },
    "Canada": {
        "Cat": ["Toronto", "Vancouver", "Montreal"],
        "Dog": ["Calgary", "Ottawa", "Edmonton"],
    },
    "Australia": {
        "Cat": ["Sydney", "Melbourne", "Brisbane"],
        "Dog": ["Perth", "Adelaide", "Canberra"],
    },
    "France": {
        "Cat": ["Paris", "Lyon", "Marseille"],
        "Dog": ["Nice", "Toulouse", "Nantes"],
    },
    "Italy": {
        "Cat": ["Rome", "Milan", "Naples"],
        "Dog": ["Turin", "Venice", "Florence"],
    },
    "Spain": {
        "Cat": ["Madrid", "Barcelona", "Valencia"],
        "Dog": ["Seville", "Bilbao", "Malaga"],
    },
    "Brazil": {
        "Cat": ["São Paulo", "Rio de Janeiro", "Brasília"],
        "Dog": ["Salvador", "Curitiba", "Fortaleza"],
    },
    "China": {
        "Cat": ["Beijing", "Shanghai", "Guangzhou"],
        "Dog": ["Shenzhen", "Chengdu", "Wuhan"],
    },
    "Russia": {
        "Cat": ["Moscow", "Saint Petersburg", "Kazan"],
        "Dog": ["Sochi", "Novosibirsk", "Yekaterinburg"],
    },
    "Japan": {
        "Cat": ["Tokyo", "Osaka", "Kyoto"],
        "Dog": ["Yokohama", "Sapporo", "Nagoya"],
    },
    "South Africa": {
        "Cat": ["Johannesburg", "Cape Town", "Durban"],
        "Dog": ["Pretoria", "Port Elizabeth", "Bloemfontein"],
    },
    "Mexico": {
        "Cat": ["Mexico City", "Guadalajara", "Monterrey"],
        "Dog": ["Cancun", "Tijuana", "Puebla"],
    },
    "Argentina": {
        "Cat": ["Buenos Aires", "Cordoba", "Rosario"],
        "Dog": ["Mendoza", "La Plata", "Mar del Plata"],
    },
    "Egypt": {
        "Cat": ["Cairo", "Alexandria", "Giza"],
        "Dog": ["Luxor", "Aswan", "Sharm El Sheikh"],
    },
    "Turkey": {
        "Cat": ["Istanbul", "Ankara", "Izmir"],
        "Dog": ["Bursa", "Antalya", "Gaziantep"],
    },
    "South Korea": {
        "Cat": ["Seoul", "Busan", "Incheon"],
        "Dog": ["Daegu", "Daejeon", "Gwangju"],
    },
    "Saudi Arabia": {
        "Cat": ["Riyadh", "Jeddah", "Mecca"],
        "Dog": ["Medina", "Dammam", "Al Khobar"],
    }
};

function loadCities() {
    document.getElementById('citySection').style.display = 'none';
    document.getElementById('cityList').innerHTML = "";
}

function showCities() {
    const country = document.getElementById('country').value;
    const animal = document.getElementById('animal').value;

    if (country && animal) {
        const cities = data[country][animal] || [];
        const cityList = document.getElementById('cityList');
        cityList.innerHTML = "";  // Clear previous list

        if (cities.length > 0) {
            cities.forEach(city => {
                const li = document.createElement('li');
                li.textContent = city;
                cityList.appendChild(li);
            });
            document.getElementById('citySection').style.display = 'block';
        } else {
            cityList.innerHTML = "<li>No cities available for this selection</li>";
        }
    }
}

function redirectToGoogleMaps() {
    window.open("https://maps.google.com", "_blank");
}
