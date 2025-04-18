document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Indian Tourism Knowledge Base
    const indiaTravel = {
        regions: {
            north: {
                name: 'North India',
                states: [
                    {
                        name: 'Rajasthan',
                        capital: 'Jaipur',
                        attractions: [
                            { name: 'Hawa Mahal, Jaipur', description: 'Palace of Winds, iconic pink sandstone building', bestTime: 'October to March' },
                            { name: 'City Palace, Udaipur', description: 'Royal palace complex with lakes and gardens', bestTime: 'September to March' },
                            { name: 'Mehrangarh Fort, Jodhpur', description: 'Massive hilltop fort with museums', bestTime: 'November to February' },
                            { name: 'Jaisalmer Fort', description: 'Living desert fort made of yellow sandstone', bestTime: 'November to February' }
                        ],
                        cuisine: [
                            { name: 'Dal Baati Churma', description: 'Baked wheat balls served with lentils and sweet crushed wheat' },
                            { name: 'Laal Maas', description: 'Spicy meat curry' },
                            { name: 'Ker Sangri', description: 'Traditional desert vegetable dish' }
                        ]
                    },
                    {
                        name: 'Uttar Pradesh',
                        capital: 'Lucknow',
                        attractions: [
                            { name: 'Taj Mahal, Agra', description: 'Iconic white marble mausoleum', bestTime: 'October to March' },
                            { name: 'Varanasi Ghats', description: 'Sacred riverfront steps along River Ganges', bestTime: 'October to March' },
                            { name: 'Fatehpur Sikri', description: 'Ancient capital city of Mughal Empire', bestTime: 'November to February' }
                        ],
                        cuisine: [
                            { name: 'Tunday Kebab', description: 'Famous minced meat kebabs of Lucknow' },
                            { name: 'Chaat', description: 'Various street food snacks' },
                            { name: 'Paan', description: 'Betel leaf with various fillings' }
                        ]
                    },
                    {
                        name: 'Himachal Pradesh',
                        capital: 'Shimla',
                        attractions: [
                            { name: 'Shimla', description: 'Former summer capital of British India', bestTime: 'March to June' },
                            { name: 'Manali', description: 'Popular hill station and adventure sports destination', bestTime: 'October to June' },
                            { name: 'Dharamshala', description: 'Home to Dalai Lama and Tibetan community', bestTime: 'March to June' }
                        ],
                        cuisine: [
                            { name: 'Dham', description: 'Traditional festive meal' },
                            { name: 'Siddu', description: 'Stuffed bread with poppy seed paste' },
                            { name: 'Thukpa', description: 'Tibetan noodle soup' }
                        ]
                    }
                ]
            },
            south: {
                name: 'South India',
                states: [
                    {
                        name: 'Kerala',
                        capital: 'Thiruvananthapuram',
                        attractions: [
                            { name: 'Alleppey Backwaters', description: 'Network of lagoons, lakes, and canals', bestTime: 'September to March' },
                            { name: 'Munnar', description: 'Hill station with tea plantations', bestTime: 'September to March' },
                            { name: 'Fort Kochi', description: 'Historic coastal area with colonial architecture', bestTime: 'October to February' }
                        ],
                        cuisine: [
                            { name: 'Kerala Fish Curry', description: 'Spicy fish curry with coconut milk' },
                            { name: 'Appam', description: 'Rice pancakes with stew' },
                            { name: 'Sadya', description: 'Traditional feast served on banana leaf' }
                        ]
                    },
                    {
                        name: 'Tamil Nadu',
                        capital: 'Chennai',
                        attractions: [
                            { name: 'Meenakshi Temple, Madurai', description: 'Ancient temple with intricate architecture', bestTime: 'October to March' },
                            { name: 'Ooty', description: 'Queen of hill stations', bestTime: 'October to June' },
                            { name: 'Shore Temple, Mahabalipuram', description: 'UNESCO World Heritage site', bestTime: 'November to February' }
                        ],
                        cuisine: [
                            { name: 'Dosa', description: 'Crispy rice crepe with various fillings' },
                            { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil soup' },
                            { name: 'Chettinad Cuisine', description: 'Spicy traditional dishes' }
                        ]
                    }
                ]
            },
            east: {
                name: 'East India',
                states: [
                    {
                        name: 'West Bengal',
                        capital: 'Kolkata',
                        attractions: [
                            { name: 'Victoria Memorial, Kolkata', description: 'Marble building dedicated to Queen Victoria', bestTime: 'October to March' },
                            { name: 'Darjeeling', description: 'Hill station famous for tea plantations', bestTime: 'March to May' },
                            { name: 'Sundarbans', description: 'Largest mangrove forest and tiger reserve', bestTime: 'December to February' }
                        ],
                        cuisine: [
                            { name: 'Rosogolla', description: 'Sweet cottage cheese balls in syrup' },
                            { name: 'Fish Curry Rice', description: 'Bengali style fish curry' },
                            { name: 'Biryani', description: 'Kolkata style biryani with potato' }
                        ]
                    },
                    {
                        name: 'Sikkim',
                        capital: 'Gangtok',
                        attractions: [
                            { name: 'Nathula Pass', description: 'High altitude mountain pass', bestTime: 'March to May' },
                            { name: 'Lake Tsomgo', description: 'Sacred high altitude lake', bestTime: 'May to September' },
                            { name: 'Pelling', description: 'View point for Kanchenjunga', bestTime: 'March to May' }
                        ],
                        cuisine: [
                            { name: 'Momos', description: 'Steamed dumplings with various fillings' },
                            { name: 'Thukpa', description: 'Noodle soup with vegetables' },
                            { name: 'Gundruk', description: 'Fermented leafy green dish' }
                        ]
                    }
                ]
            },
            west: {
                name: 'West India',
                states: [
                    {
                        name: 'Maharashtra',
                        capital: 'Mumbai',
                        attractions: [
                            { name: 'Gateway of India, Mumbai', description: 'Historic arch monument', bestTime: 'October to March' },
                            { name: 'Ajanta & Ellora Caves', description: 'Ancient rock-cut temples', bestTime: 'November to March' },
                            { name: 'Shirdi', description: 'Famous spiritual destination', bestTime: 'Year-round' }
                        ],
                        cuisine: [
                            { name: 'Vada Pav', description: 'Spicy potato patty in bread' },
                            { name: 'Puran Poli', description: 'Sweet flatbread' },
                            { name: 'Misal Pav', description: 'Spicy sprouts curry with bread' }
                        ]
                    },
                    {
                        name: 'Gujarat',
                        capital: 'Gandhinagar',
                        attractions: [
                            { name: 'Rann of Kutch', description: 'White salt desert', bestTime: 'November to February' },
                            { name: 'Gir National Park', description: 'Home to Asiatic Lions', bestTime: 'December to March' },
                            { name: 'Sabarmati Ashram', description: 'Gandhi\'s former residence', bestTime: 'October to March' }
                        ],
                        cuisine: [
                            { name: 'Dhokla', description: 'Steamed fermented rice and split chickpeas cake' },
                            { name: 'Thepla', description: 'Spiced flatbread' },
                            { name: 'Fafda', description: 'Crunchy snack made from chickpea flour' }
                        ]
                    }
                ]
            },
            northeast: {
                name: 'Northeast India',
                states: [
                    {
                        name: 'Assam',
                        capital: 'Dispur',
                        attractions: [
                            { name: 'Kaziranga National Park', description: 'Home to one-horned rhinoceros', bestTime: 'November to April' },
                            { name: 'Majuli Island', description: 'Largest river island in world', bestTime: 'November to March' },
                            { name: 'Tea Gardens', description: 'Famous Assam tea plantations', bestTime: 'October to March' }
                        ],
                        cuisine: [
                            { name: 'Assam Tea', description: 'World-famous black tea' },
                            { name: 'Masor Tenga', description: 'Sour fish curry' },
                            { name: 'Pitha', description: 'Rice-based sweet and savory snacks' }
                        ]
                    },
                    {
                        name: 'Meghalaya',
                        capital: 'Shillong',
                        attractions: [
                            { name: 'Living Root Bridges', description: 'Natural bridges made from tree roots', bestTime: 'September to May' },
                            { name: 'Cherrapunji', description: 'One of the wettest places on Earth', bestTime: 'September to May' },
                            { name: 'Shillong Peak', description: 'Highest point in state', bestTime: 'September to May' }
                        ],
                        cuisine: [
                            { name: 'Jadoh', description: 'Rice and pork dish' },
                            { name: 'Tungrymbai', description: 'Fermented soybean dish' },
                            { name: 'Doh Khleh', description: 'Pork salad with onions and chillies' }
                        ]
                    }
                ]
            }
        },
        festivals: [
            { name: 'Diwali', time: 'October/November', description: 'Festival of lights celebrated nationwide' },
            { name: 'Holi', time: 'March', description: 'Festival of colors' },
            { name: 'Durga Puja', time: 'September/October', description: 'Major festival in East India' },
            { name: 'Onam', time: 'August/September', description: 'Harvest festival of Kerala' }
        ],
        bestTimeToVisit: {
            winter: {
                months: 'November to February',
                description: 'Best time for most tourist destinations, comfortable weather',
                idealFor: ['Rajasthan', 'Taj Mahal', 'Kerala', 'Goa']
            },
            summer: {
                months: 'March to June',
                description: 'Ideal for hill stations',
                idealFor: ['Himachal Pradesh', 'Uttarakhand', 'Sikkim', 'Darjeeling']
            },
            monsoon: {
                months: 'July to September',
                description: 'Beautiful but travel can be challenging',
                idealFor: ['Kerala', 'Valley of Flowers', 'Meghalaya']
            }
        }
    };

    // Context tracking
    let conversationContext = {
        currentRegion: null,
        currentState: null,
        currentTopic: null
    };

    // Add a typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return typingDiv;
    }

    // Add a message to the chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Find state information
    function findState(stateName) {
        for (const region of Object.values(indiaTravel.regions)) {
            const state = region.states.find(s => s.name.toLowerCase() === stateName.toLowerCase());
            if (state) {
                conversationContext.currentState = state.name;
                conversationContext.currentRegion = region.name;
                return state;
            }
        }
        return null;
    }

    // Generate response based on user input
    function generateResponse(input) {
        input = input.toLowerCase();

        // Greetings
        if (input.match(/^(hi|hello|hey|namaste)/i)) {
            return "Namaste! 🙏 I'm your Indian travel guide. I can help you discover:\n" +
                   "🏰 Tourist attractions across Indian states\n" +
                   "🍜 Local cuisines and delicacies\n" +
                   "🎨 Festivals and cultural experiences\n" +
                   "🌤️ Best times to visit\n\n" +
                   "Which aspect of India would you like to explore?";
        }

        // State specific queries
        for (const region of Object.values(indiaTravel.regions)) {
            for (const state of region.states) {
                if (input.includes(state.name.toLowerCase())) {
                    conversationContext.currentState = state.name;
                    return `📍 ${state.name} (Capital: ${state.capital})\n\n` +
                           "🏰 Famous Attractions:\n" +
                           state.attractions.map(attr => `• ${attr.name}: ${attr.description}\n  Best Time: ${attr.bestTime}`).join('\n\n') +
                           "\n\n🍜 Local Cuisine:\n" +
                           state.cuisine.map(dish => `• ${dish.name}: ${dish.description}`).join('\n');
                }
            }
        }

        // Region specific queries
        for (const [regionKey, region] of Object.entries(indiaTravel.regions)) {
            if (input.includes(regionKey) || input.includes(region.name.toLowerCase())) {
                conversationContext.currentRegion = region.name;
                return `${region.name} includes these states:\n\n${region.states.map(state => 
                    `🏷️ ${state.name}\nTop attraction: ${state.attractions[0].name}\nMust-try food: ${state.cuisine[0].name}`
                ).join('\n\n')}`;
            }
        }

        // Food queries
        if (input.includes('food') || input.includes('cuisine') || input.includes('dish')) {
            if (conversationContext.currentState) {
                const state = findState(conversationContext.currentState);
                return `Famous dishes from ${state.name}:\n${state.cuisine.map(dish => 
                    `🍜 ${dish.name}: ${dish.description}`
                ).join('\n')}`;
            }
            return "India has diverse cuisines! Tell me which state or region you're interested in, and I'll share its special dishes!";
        }

        // Festival queries
        if (input.includes('festival')) {
            return "Major Indian Festivals:\n" +
                   indiaTravel.festivals.map(festival => 
                       `🎉 ${festival.name}\nWhen: ${festival.time}\n${festival.description}`
                   ).join('\n\n');
        }

        // Best time to visit queries
        if (input.includes('when') || input.includes('best time') || input.includes('weather')) {
            if (conversationContext.currentState) {
                const state = findState(conversationContext.currentState);
                return `For ${state.name}, the best time to visit is:\n${state.attractions[0].bestTime}`;
            }
            return "Best time to visit India varies by region:\n\n" +
                   "❄️ Winter (November to February):\n" +
                   "Perfect for: " + indiaTravel.bestTimeToVisit.winter.idealFor.join(', ') + "\n\n" +
                   "☀️ Summer (March to June):\n" +
                   "Perfect for: " + indiaTravel.bestTimeToVisit.summer.idealFor.join(', ') + "\n\n" +
                   "🌧️ Monsoon (July to September):\n" +
                   "Perfect for: " + indiaTravel.bestTimeToVisit.monsoon.idealFor.join(', ');
        }

        // Help or unclear queries
        if (input.includes('help') || input.includes('what')) {
            return "I can help you discover India! Ask me about:\n" +
                   "1. 🏰 Specific states (e.g., 'Tell me about Kerala')\n" +
                   "2. 🍜 Local cuisine (e.g., 'What to eat in Gujarat')\n" +
                   "3. 🎉 Festivals (e.g., 'Indian festivals')\n" +
                   "4. 🌤️ Best time to visit\n" +
                   "5. 🗺️ Different regions of India\n\n" +
                   "What would you like to know?";
        }

        // Default response
        return "I'm your guide to India's wonders! You can ask about:\n" +
               "- Any Indian state or region\n" +
               "- Local food and cuisines\n" +
               "- Festivals and cultural events\n" +
               "- Best times to visit\n\n" +
               "What interests you about India?";
    }

    // Handle form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        
        if (userMessage) {
            addMessage(userMessage, true);
            chatInput.value = '';

            const typingIndicator = showTypingIndicator();

            setTimeout(() => {
                typingIndicator.remove();
                const botResponse = generateResponse(userMessage);
                addMessage(botResponse, false);
            }, 1000 + Math.random() * 1000);
        }
    });

    // Initial greeting
    setTimeout(() => {
        addMessage("Namaste! 🙏 Welcome to your Indian Travel Guide!\n\n" +
                  "I can help you explore:\n" +
                  "🏰 India's magnificent destinations\n" +
                  "🍜 Diverse local cuisines\n" +
                  "🎉 Vibrant festivals\n" +
                  "🌤️ Best times to visit\n\n" +
                  "Which part of India would you like to discover?", false);
    }, 500);
});