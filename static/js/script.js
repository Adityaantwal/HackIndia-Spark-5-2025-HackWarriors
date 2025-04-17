// City database with information about popular destinations
const cityDatabase = {
    'paris': {
        description: 'Paris, the City of Light, is known for its romantic atmosphere, world-class museums, and iconic landmarks.',
        places: [
            'Eiffel Tower',
            'Louvre Museum',
            'Notre-Dame Cathedral',
            'Champs-Élysées',
            'Montmartre',
            'Seine River Cruise'
        ],
        hotels: [
            'The Ritz Paris (Luxury)',
            'Hotel du Louvre (Mid-range)',
            'Hotel des Arts (Budget)'
        ]
    },
    'tokyo': {
        description: 'Tokyo is a vibrant metropolis where traditional culture meets cutting-edge technology.',
        places: [
            'Senso-ji Temple',
            'Shibuya Crossing',
            'Meiji Shrine',
            'Tokyo Skytree',
            'Tsukiji Fish Market'
        ],
        hotels: [
            'The Peninsula Tokyo (Luxury)',
            'Hotel Gracery Shinjuku (Mid-range)',
            'Capsule Hotel Anshin Oyado (Budget)'
        ]
    },
    'new york': {
        description: 'New York City, the city that never sleeps, offers endless entertainment, culture, and iconic landmarks.',
        places: [
            'Times Square',
            'Central Park',
            'Statue of Liberty',
            'Empire State Building',
            'Broadway Shows'
        ],
        hotels: [
            'The Plaza Hotel (Luxury)',
            'The New Yorker Hotel (Mid-range)',
            'Pod Times Square (Budget)'
        ]
    },
    'rome': {
        description: 'Rome, the Eternal City, is a living museum of ancient history, art, and culture.',
        places: [
            'Colosseum',
            'Vatican City',
            'Trevi Fountain',
            'Pantheon',
            'Roman Forum'
        ],
        hotels: [
            'Hotel de Russie (Luxury)',
            'Hotel Artemide (Mid-range)',
            'Hotel Delle Nazioni (Budget)'
        ]
    },
    'delhi': {
        description: 'Delhi, India\'s capital, is a vibrant mix of history and modernity, featuring ancient monuments, bustling markets, and rich cultural heritage.',
        places: [
            'Red Fort',
            'Qutub Minar',
            'India Gate',
            'Lotus Temple',
            'Humayun\'s Tomb',
            'Chandni Chowk'
        ],
        hotels: [
            'The Oberoi (Luxury)',
            'The Park (Mid-range)',
            'Hotel Broadway (Budget)'
        ]
    },
    'mumbai': {
        description: 'Mumbai, the financial capital of India, is known for its Bollywood industry, colonial architecture, and vibrant street food culture.',
        places: [
            'Gateway of India',
            'Marine Drive',
            'Elephanta Caves',
            'Chhatrapati Shivaji Terminus',
            'Juhu Beach',
            'Haji Ali Dargah'
        ],
        hotels: [
            'Taj Mahal Palace (Luxury)',
            'Trident Nariman Point (Mid-range)',
            'Hotel Suba Palace (Budget)'
        ]
    },
    'jaipur': {
        description: 'Jaipur, the Pink City, is famous for its royal palaces, vibrant bazaars, and rich Rajput heritage.',
        places: [
            'Hawa Mahal',
            'Amber Fort',
            'City Palace',
            'Jantar Mantar',
            'Nahargarh Fort',
            'Jal Mahal'
        ],
        hotels: [
            'Rambagh Palace (Luxury)',
            'Hotel Pearl Palace (Mid-range)',
            'Hotel Meghniwas (Budget)'
        ]
    },
    'goa': {
        description: 'Goa is India\'s beach paradise, known for its golden sands, Portuguese heritage, and vibrant nightlife.',
        places: [
            'Calangute Beach',
            'Basilica of Bom Jesus',
            'Dudhsagar Falls',
            'Fort Aguada',
            'Anjuna Flea Market',
            'Chapora Fort'
        ],
        hotels: [
            'Taj Exotica Resort (Luxury)',
            'The Park Calangute (Mid-range)',
            'Hotel O Pescador (Budget)'
        ]
    },
    'varanasi': {
        description: 'Varanasi, the spiritual capital of India, is one of the world\'s oldest living cities, known for its ghats and religious significance.',
        places: [
            'Dashashwamedh Ghat',
            'Kashi Vishwanath Temple',
            'Sarnath',
            'Assi Ghat',
            'Manikarnika Ghat',
            'Ramnagar Fort'
        ],
        hotels: [
            'Taj Ganges (Luxury)',
            'Hotel Surya (Mid-range)',
            'Hotel Buddha (Budget)'
        ]
    },
    'kerala': {
        description: 'Kerala, God\'s Own Country, is famous for its backwaters, lush landscapes, and rich cultural traditions.',
        places: [
            'Alleppey Backwaters',
            'Munnar Tea Gardens',
            'Kochi Fort',
            'Kovalam Beach',
            'Periyar Wildlife Sanctuary',
            'Varkala Beach'
        ],
        hotels: [
            'Taj Malabar Resort (Luxury)',
            'Spice Village (Mid-range)',
            'Hotel Sea Face (Budget)'
        ]
    },
    'agra': {
        description: 'Agra is home to the iconic Taj Mahal and other magnificent Mughal-era monuments.',
        places: [
            'Taj Mahal',
            'Agra Fort',
            'Fatehpur Sikri',
            'Itmad-ud-Daulah\'s Tomb',
            'Mehtab Bagh',
            'Jama Masjid'
        ],
        hotels: [
            'The Oberoi Amarvilas (Luxury)',
            'Hotel Clarks Shiraz (Mid-range)',
            'Hotel Kamal (Budget)'
        ]
    },
    'udaipur': {
        description: 'Udaipur, the City of Lakes, is known for its beautiful palaces, lakes, and romantic ambiance.',
        places: [
            'City Palace',
            'Lake Pichola',
            'Jag Mandir',
            'Jagdish Temple',
            'Sajjangarh (Monsoon Palace)',
            'Fateh Sagar Lake'
        ],
        hotels: [
            'Taj Lake Palace (Luxury)',
            'Hotel Lakend (Mid-range)',
            'Hotel Krishna Niwas (Budget)'
        ]
    }
};

// City coordinates for mapping
const cityCoordinates = {
    'delhi': { lat: 28.6139, lng: 77.2090 },
    'mumbai': { lat: 19.0760, lng: 72.8777 },
    'jaipur': { lat: 26.9124, lng: 75.7873 },
    'goa': { lat: 15.2993, lng: 74.1240 },
    'varanasi': { lat: 25.3176, lng: 82.9739 },
    'kerala': { lat: 10.8505, lng: 76.2711 },
    'agra': { lat: 27.1767, lng: 78.0081 },
    'udaipur': { lat: 24.5854, lng: 73.7125 }
};

// Function to calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

let map;
let directionsService;
let directionsRenderer;
let currentMarkers = [];
let currentDirectionsRenderer = null;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google Maps
    const script = document.createElement('script');
    // Replace YOUR_API_KEY with your actual Google Maps API key
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places,directions&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = function() {
        console.error('Failed to load Google Maps API');
        document.getElementById('map').innerHTML = '<div class="error-message">Failed to load Google Maps. Please check your internet connection and try again.</div>';
    };
    document.head.appendChild(script);

    // Get DOM elements
    const searchInput = document.getElementById('city-search');
    const searchButton = document.getElementById('search-button');
    const modal = document.getElementById('search-modal');
    const closeModal = document.querySelector('.close-modal');
    const cityName = document.getElementById('city-name');
    const cityDescription = document.getElementById('city-description');
    const placesToVisit = document.getElementById('places-to-visit');
    const hotelsList = document.getElementById('hotels-list');
    const travelDistance = document.getElementById('travel-distance');
    const mapContainer = document.getElementById('map-container');

    // Initialize map when Google Maps API is loaded
    window.initMap = function() {
        try {
            if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
                console.error('Google Maps API not loaded');
                document.getElementById('map').innerHTML = '<div class="error-message">Google Maps API failed to load. Please refresh the page.</div>';
                return;
            }

            directionsService = new google.maps.DirectionsService();
            console.log('Directions service initialized successfully');
        } catch (error) {
            console.error('Error initializing directions service:', error);
            document.getElementById('map').innerHTML = '<div class="error-message">Error initializing Google Maps. Please try again later.</div>';
        }
    };

    // Function to create a new map instance
    function createNewMap() {
        try {
            if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
                console.error('Google Maps API not loaded');
                document.getElementById('map').innerHTML = '<div class="error-message">Google Maps API not loaded. Please refresh the page.</div>';
                return false;
            }

            const mapElement = document.getElementById('map');
            if (!mapElement) {
                console.error('Map container not found');
                return false;
            }

            // Clear the map container
            mapElement.innerHTML = '';
            
            // Create new map instance
            map = new google.maps.Map(mapElement, {
                zoom: 7,
                center: { lat: 20.5937, lng: 78.9629 }, // Center of India
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    position: google.maps.ControlPosition.TOP_RIGHT
                }
            });
            
            // Create new directions renderer
            directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            
            console.log('New map instance created successfully');
            return true;
        } catch (error) {
            console.error('Error creating map:', error);
            document.getElementById('map').innerHTML = '<div class="error-message">Error creating map. Please try again.</div>';
            return false;
        }
    }

    // Function to calculate distance and show directions
    function calculateDistanceAndShowDirections(userLat, userLon, city) {
        try {
            // Create a new map instance
            if (!createNewMap()) {
                console.error('Failed to create map instance');
                return;
            }
            
            const cityCoords = cityCoordinates[city.toLowerCase()];
            if (!cityCoords) {
                console.error('Coordinates not found for city:', city);
                return;
            }

            const distance = calculateDistance(userLat, userLon, cityCoords.lat, cityCoords.lng);
            travelDistance.textContent = `Approximately ${Math.round(distance)} km from your current location`;

            // Show map container
            mapContainer.style.display = 'block';

            // Update Google Maps link
            const mapsLink = document.getElementById('maps-link');
            const debugMessage = document.getElementById('debug-message');
            
            // Create Google Maps URL with directions
            const mapsUrl = `https://www.google.com/maps/dir/${userLat},${userLon}/${cityCoords.lat},${cityCoords.lng}`;
            
            // Debug information
            debugMessage.textContent = `URL: ${mapsUrl}`;
            console.log('Google Maps URL:', mapsUrl);
            console.log('City coordinates:', cityCoords);
            
            // Create a new link element
            const newLink = document.createElement('a');
            newLink.href = mapsUrl;
            newLink.target = '_blank';
            newLink.rel = 'noopener noreferrer';
            newLink.style.display = 'inline-block';
            newLink.style.padding = '10px 20px';
            newLink.style.backgroundColor = '#4CAF50';
            newLink.style.color = 'white';
            newLink.style.textDecoration = 'none';
            newLink.style.borderRadius = '5px';
            newLink.style.fontWeight = 'bold';
            newLink.style.cursor = 'pointer';
            newLink.innerHTML = '<i class="fas fa-map-marker-alt"></i> View on Google Maps';

            // Replace the old link with the new one
            mapsLink.parentNode.replaceChild(newLink, mapsLink);

            // Calculate and display route
            const request = {
                origin: { lat: userLat, lng: userLon },
                destination: { lat: cityCoords.lat, lng: cityCoords.lng },
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, function(result, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(result);
                    
                    // Add markers for start and end points
                    new google.maps.Marker({
                        position: { lat: userLat, lng: userLon },
                        map: map,
                        title: 'Your Location'
                    });

                    new google.maps.Marker({
                        position: { lat: cityCoords.lat, lng: cityCoords.lng },
                        map: map,
                        title: city.charAt(0).toUpperCase() + city.slice(1)
                    });
                } else {
                    console.error('Directions request failed:', status);
                }
            });
        } catch (error) {
            console.error('Error in calculateDistanceAndShowDirections:', error);
        }
    }

    // Function to get user's location
    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLat = position.coords.latitude;
                    const userLon = position.coords.longitude;
                    const currentCity = cityName.textContent.toLowerCase();
                    console.log('User location:', userLat, userLon);
                    console.log('City:', currentCity);
                    calculateDistanceAndShowDirections(userLat, userLon, currentCity);
                },
                error => {
                    travelDistance.textContent = 'Unable to get your location. Please enable location access.';
                    mapContainer.style.display = 'none';
                    document.getElementById('maps-link').style.display = 'none';
                    console.error('Geolocation error:', error);
                }
            );
        } else {
            travelDistance.textContent = 'Geolocation is not supported by your browser.';
            mapContainer.style.display = 'none';
            document.getElementById('maps-link').style.display = 'none';
        }
    }

    // Function to display city information
    function displayCityInfo(city) {
        const cityData = cityDatabase[city.toLowerCase()];
        if (cityData) {
            cityName.textContent = city.charAt(0).toUpperCase() + city.slice(1);
            cityDescription.textContent = cityData.description;
            
            placesToVisit.innerHTML = '';
            hotelsList.innerHTML = '';
            
            cityData.places.forEach(place => {
                const li = document.createElement('li');
                li.textContent = place;
                placesToVisit.appendChild(li);
            });
            
            cityData.hotels.forEach(hotel => {
                const li = document.createElement('li');
                li.textContent = hotel;
                hotelsList.appendChild(li);
            });
            
            getUserLocation();
            modal.style.display = 'block';
        } else {
            alert('City not found in our database. Please try another city.');
        }
    }

    // Event listeners for search functionality
    searchButton.addEventListener('click', () => {
        const city = searchInput.value.trim();
        if (city) {
            displayCityInfo(city);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = searchInput.value.trim();
            if (city) {
                displayCityInfo(city);
            }
        }
    });

    // Modal close handlers
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scrolling navigation
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 