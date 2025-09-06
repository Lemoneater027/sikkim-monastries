// Enhanced JavaScript for Sacred Monasteries of Sikkim - Fixed Version

// Enhanced monastery data with comprehensive information
const monasteriesData = [
    {
        id: 1,
        name: "Rumtek Monastery",
        subtitle: "Dharma Chakra Centre - Seat of the Karmapa",
        description: "The largest and most significant monastery in Sikkim, Rumtek serves as the seat of the 17th Karmapa. This architectural masterpiece replicates the original Tsurphu Monastery of Tibet and houses some of the world's rarest Buddhist religious artifacts.",
        location: "24 km from Gangtok, East Sikkim",
        coordinates: "27°17'19\"N 88°33'41\"E",
        established: "1734 (rebuilt 1966)",
        sect: "Karma Kagyu",
        bestTime: "October to December, March to May",
        altitude: 1500,
        altitudeDisplay: "1,500m (4,921 feet)",
        entryFee: "₹10 per person",
        visitingHours: "6:00 AM to 6:00 PM daily",
        district: "East Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014599/pplx_project_search_images/41c316c88c2b59f8207b63639ad1351ff121b869.png",
        travelOptions: {
            fromGangtok: {
                taxi: {
                    distance: "24 km",
                    time: "45 minutes",
                    cost: "₹1,000-1,300",
                    route: "Take MG Marg → National Highway 10 → Turn right at Deorali → Follow signs to Rumtek through scenic villages and paddy fields"
                },
                sharedTaxi: {
                    distance: "24 km", 
                    time: "45-60 minutes",
                    cost: "₹100-150 per person",
                    pickup: "Deorali Taxi Stand near Hotel Hungry Jack on NH31A"
                },
                bus: {
                    distance: "24 km",
                    time: "1 hour",
                    cost: "₹25-40",
                    route: "SNT Bus from Gangtok Bus Stand to Rumtek"
                }
            }
        },
        detailedDirections: [
            "From Gangtok MG Marg, head east toward National Highway 10",
            "Drive 6 km to Deorali and turn right at the prominent chorten",
            "Continue 8 km through Ranipool village crossing the bridge over Rani Khola",
            "Pass through Ranka village (Lingdum Monastery turnoff on left)",
            "Ascend winding mountain road for 10 km through terraced fields",
            "Reach Rumtek village - monastery is 1 km uphill from main road",
            "Park at designated area and walk 200m uphill to main monastery gate"
        ],
        highlights: [
            "Largest monastery in Sikkim",
            "Seat of 17th Karmapa",
            "Golden stupa with relics",
            "Traditional Tibetan architecture",
            "Rare religious artifacts",
            "Karma Shri Nalanda Institute"
        ],
        visitingTips: "Carry ID cards for entry. Photography restricted in main prayer hall. Early morning visits (7-9 AM) offer peaceful atmosphere and better light. Modest dress required - cover shoulders and legs.",
        permits: "None required for Indian nationals. Foreign tourists need valid Sikkim RAP",
        culturalSignificance: "Most important monastery in Sikkim, center of Karma Kagyu teachings worldwide"
    },
    {
        id: 2,
        name: "Pemayangtse Monastery",
        subtitle: "Perfect Sublime Lotus - Premier Nyingma Monastery",
        description: "One of Sikkim's oldest and most premier monasteries, Pemayangtse controls all other Nyingma monasteries in the state. Famous for its seven-tiered wooden masterpiece depicting Guru Rinpoche's heavenly palace.",
        location: "2 km from Pelling, West Sikkim (110 km from Gangtok)",
        coordinates: "27°18'16\"N 88°15'10\"E",
        established: "1705",
        sect: "Nyingma",
        bestTime: "March to June, October to November",
        altitude: 2085,
        altitudeDisplay: "2,085m (6,841 feet)",
        entryFee: "₹5 per person",
        visitingHours: "9:00 AM to 6:00 PM daily",
        district: "West Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014599/pplx_project_search_images/3351b0e3cdc91c08f5e0975d8c3c46e3071607f1.png",
        travelOptions: {
            fromGangtok: {
                taxi: {
                    distance: "130 km",
                    time: "4-5 hours",
                    cost: "₹3,500-4,500",
                    route: "Gangtok → Singtam → Jorethang → Geyzing → Pelling → Pemayangtse"
                }
            },
            fromPelling: {
                taxi: {
                    distance: "2 km",
                    time: "10 minutes",
                    cost: "₹180-230"
                },
                walking: {
                    distance: "2 km",
                    time: "25-30 minutes",
                    difficulty: "Easy to moderate"
                }
            }
        },
        detailedDirections: [
            "From Gangtok take NH10 toward Siliguri",
            "Turn left at Singtam toward Jorethang",
            "Cross Rangit River and continue to Geyzing",
            "Follow signs to Pelling",
            "Turn right for Pemayangtse 2 km before Pelling town"
        ],
        highlights: [
            "Premier Nyingma monastery",
            "Seven-tiered Zangdokpalri wooden model",
            "Only for pure lineage monks",
            "Spectacular Kanchenjunga views",
            "Ancient Buddhist manuscripts"
        ],
        visitingTips: "Famous wooden masterpiece on top floor is the main attraction. Remove shoes before entering. Best visited early morning for clear mountain views.",
        permits: "None required",
        culturalSignificance: "Controls all Nyingma monasteries in Sikkim, only admits monks of pure Tibetan lineage"
    },
    {
        id: 3,
        name: "Enchey Monastery",
        subtitle: "The Solitary Monastery - Heart of Gangtok",
        description: "Located in the heart of Gangtok, this peaceful monastery offers stunning city views and serves as a spiritual sanctuary. Home to 90 monks and famous for its annual Cham dance festival.",
        location: "3 km from Gangtok center, East Sikkim",
        coordinates: "27°20'9\"N 88°37'9\"E",
        established: "1909",
        sect: "Nyingma",
        bestTime: "March to June, September to October",
        altitude: 1700,
        altitudeDisplay: "1,700m (5,577 feet)",
        entryFee: "Free",
        visitingHours: "6:00 AM to 6:00 PM daily",
        district: "East Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014599/pplx_project_search_images/475e6066868420c50d04182108f1c05912ad48b4.png",
        travelOptions: {
            fromGangtokCenter: {
                taxi: {
                    distance: "3 km",
                    time: "15-20 minutes",
                    cost: "₹200-300",
                    route: "MG Marg → Tibet Road → Ridge Road → Enchey Monastery Road"
                },
                walking: {
                    distance: "2.5 km",
                    time: "30-40 minutes", 
                    difficulty: "Easy to moderate",
                    route: "Via Tibet Road and Ridge Road with beautiful mountain views throughout"
                }
            }
        },
        detailedDirections: [
            "From MG Marg head up Tibet Road",
            "Continue on Ridge Road",
            "Look for TV Tower",
            "Monastery is below the tower on Enchey Monastery Road"
        ],
        highlights: [
            "Closest monastery to Gangtok city",
            "Stunning valley and mountain views",
            "Annual Detor Cham dance festival",
            "Peaceful meditation gardens"
        ],
        visitingTips: "Visit early morning for best light and peaceful atmosphere. Famous Detor Cham festival in September/October. Easily combined with city sightseeing.",
        permits: "None required",
        culturalSignificance: "First formal monastery of Gangtok, city grew around this monastery"
    },
    {
        id: 4,
        name: "Tashiding Monastery",
        subtitle: "The Devoted Central Glory - Holiest Monastery",
        description: "Perched on a heart-shaped hill between two sacred rivers, Tashiding is considered the holiest monastery in Sikkim. Famous for the sacred Bumchu festival and sin-cleansing chorten.",
        location: "Between Rangit and Rathong Rivers, West Sikkim",
        coordinates: "27°19'12\"N 88°16'48\"E",
        established: "1641",
        sect: "Nyingma",
        bestTime: "March to June, October to November",
        altitude: 1465,
        altitudeDisplay: "1,465m (4,806 feet)",
        entryFee: "Free (donations appreciated)",
        visitingHours: "7:00 AM to 6:00 PM daily",
        district: "West Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014600/pplx_project_search_images/67eaf682e0a919463d1ea85e0e8eb3821d3dd1aa.png",
        travelOptions: {
            fromPelling: {
                taxi: {
                    distance: "40 km",
                    time: "1.5 hours",
                    cost: "₹1,200-1,500",
                    route: "Pelling → Geyzing → Legship → Tashiding village → 20-minute uphill climb"
                }
            },
            fromYuksom: {
                taxi: {
                    distance: "19 km",
                    time: "45 minutes",
                    cost: "₹800-1,000",
                    route: "Yuksom → Tashiding village → Climb stairs to monastery"
                }
            }
        },
        detailedDirections: [
            "All routes lead to Tashiding village at base of hill",
            "From village, climb 15-20 minutes up stone stairs through forest",
            "Well-maintained stone steps with rest areas",
            "Path winds through rhododendron forest",
            "Entry gate at top with monk residences visible"
        ],
        highlights: [
            "Holiest monastery in Sikkim",
            "Sacred Bumchu water ceremony",
            "Thongwa Rangdol sin-cleansing chorten",
            "Location between two holy rivers"
        ],
        visitingTips: "Famous Bumchu festival in February/March predicts the coming year based on water level in sacred vase. Climb requires good fitness. Carry water and wear good walking shoes.",
        permits: "None required",
        culturalSignificance: "Holiest monastery in Sikkim, site of important Bumchu water prediction ceremony"
    },
    {
        id: 5,
        name: "Dubdi Monastery", 
        subtitle: "The Hermit's Cell - Oldest Monastery in Sikkim",
        description: "Sikkim's oldest monastery, built in 1701, requiring a scenic forest trek from Yuksom. This historic gompa was the site of the first Chogyal's coronation and offers magnificent Himalayan views.",
        location: "3 km trek from Yuksom, West Sikkim",
        coordinates: "27°18'36\"N 88°13'12\"E",
        established: "1701",
        sect: "Nyingma", 
        bestTime: "March to May, October to November",
        altitude: 2100,
        altitudeDisplay: "2,100m (6,890 feet)",
        entryFee: "Free",
        visitingHours: "Sunrise to sunset",
        district: "West Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014599/pplx_project_search_images/acc867ba8c20677e5cb9aa17519ca37ce0b65c93.png",
        travelOptions: {
            fromYuksom: {
                trekking: {
                    distance: "3 km",
                    time: "1-1.5 hours",
                    difficulty: "Moderate uphill trek",
                    route: "Well-marked trail through rhododendron and oak forest"
                }
            }
        },
        detailedDirections: [
            "From Yuksom Norbugang Park cross suspension bridge",
            "Follow blue arrow markers",
            "Ascend through forest",
            "Reach monastery on ridge",
            "Trail well-marked but can be slippery in monsoon"
        ],
        highlights: [
            "Oldest monastery in Sikkim (1701)",
            "Historic coronation site of first Chogyal",
            "Spectacular Himalayan panoramic views",
            "Ancient artifacts and manuscripts"
        ],
        visitingTips: "Requires good fitness for uphill trek. Wear proper trekking shoes with good grip. Best visited in clear weather for mountain views. Early morning start recommended.",
        permits: "None required",
        culturalSignificance: "Site of first Chogyal's coronation in 1642, oldest monastery in Sikkim with immense historical importance"
    },
    {
        id: 6,
        name: "Phodong Monastery",
        subtitle: "Mountain Monastery - Home to 260 Monks",
        description: "A beautiful monastery in North Sikkim housing 260 monks, famous for its stunning murals, Loosang festival in December, and breathtaking mountain valley views.",
        location: "40 km from Gangtok, North Sikkim",
        coordinates: "27°28'30\"N 88°45'15\"E",
        established: "18th century (rebuilt multiple times)",
        sect: "Kagyu",
        bestTime: "March to May, October to December",
        altitude: 1372,
        altitudeDisplay: "1,372m (4,501 feet)",
        entryFee: "₹10 per person",
        visitingHours: "9:00 AM to 5:00 PM daily",
        district: "North Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1756637502/pplx_project_search_images/11a308c6af049b6b25ee4d5576cacbf97c1b518d.png",
        travelOptions: {
            fromGangtok: {
                taxi: {
                    distance: "40 km",
                    time: "1.5-2 hours",
                    cost: "₹1,800-2,500",
                    route: "Gangtok → Tadong → Ranipool → Singtam → Dikchu → Phodong"
                }
            }
        },
        detailedDirections: [
            "From Gangtok take NH10 toward North Sikkim",
            "Pass through Ranipool",
            "Continue to Singtam",
            "Turn right toward Dikchu",
            "Follow road to Phodong monastery"
        ],
        highlights: [
            "Home to 260 resident monks",
            "Stunning murals and frescoes",
            "Famous Loosang festival in December",
            "Beautiful mountain valley location"
        ],
        visitingTips: "December Loosang festival is spectacular with masked dances. Photography allowed in courtyard areas. Beautiful morning light for photography.",
        permits: "RAP required for foreign nationals",
        culturalSignificance: "Important center of Kagyu teachings in North Sikkim with large monastic community"
    },
    {
        id: 7,
        name: "Lingdum Monastery",
        subtitle: "Ranka Monastery - Popular Film Location",
        description: "A modern monastery surrounded by forested mountains, famous as a Bollywood filming location. Completed in 1999, it offers beautiful prayer wheels and peaceful mountain settings.",
        location: "20 km from Gangtok, East Sikkim",
        coordinates: "27°22'30\"N 88°42'15\"E",
        established: "1998 (completed 1999)",
        sect: "Kagyu",
        bestTime: "March to May, September to October",
        altitude: 1800,
        altitudeDisplay: "1,800m (5,905 feet)",
        entryFee: "₹20 per person",
        visitingHours: "6:00 AM to 6:00 PM daily",
        district: "East Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014600/pplx_project_search_images/f01bbae42aa2ad0afdd986dd62412d7f05c9a7d2.png",
        travelOptions: {
            fromGangtok: {
                taxi: {
                    distance: "20 km",
                    time: "45 minutes to 1 hour",
                    cost: "₹800-1,200",
                    route: "Gangtok → Deorali → Ranipool → Ranka → Lingdum Monastery"
                }
            }
        },
        detailedDirections: [
            "From Gangtok take NH10",
            "Pass Deorali",
            "Continue to Ranipool",
            "Turn right toward Ranka village",
            "Follow signs to Lingdum Monastery uphill"
        ],
        highlights: [
            "Popular Bollywood filming location",
            "Modern monastery architecture",
            "Beautiful prayer wheels at entrance",
            "Forested mountain setting"
        ],
        visitingTips: "Most photogenic monastery in Sikkim. Prayer wheels at parking area are beautiful photo spots. Often combined with Rumtek monastery visit.",
        permits: "None required",
        culturalSignificance: "Newest major monastery in Sikkim, represents modern Buddhist architecture"
    },
    {
        id: 8,
        name: "Sanga Choeling Monastery",
        subtitle: "Island of Esoteric Teaching - Ancient Forest Monastery",
        description: "One of Sikkim's oldest monasteries built in 1697, requiring a scenic 50-minute forest walk from Pelling. Offers beautiful prayer flags and serene mountain settings.",
        location: "9 km from Pelling, West Sikkim",
        coordinates: "27°17'45\"N 88°14'30\"E",
        established: "1697",
        sect: "Nyingma",
        bestTime: "November to February, March to May",
        altitude: 2100,
        altitudeDisplay: "2,100m (6,890 feet)",
        entryFee: "Free",
        visitingHours: "Sunrise to sunset",
        district: "West Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014600/pplx_project_search_images/67eaf682e0a919463d1ea85e0e8eb3821d3dd1aa.png",
        travelOptions: {
            fromPelling: {
                walking: {
                    distance: "9 km",
                    time: "50 minutes uphill",
                    difficulty: "Moderate to difficult",
                    route: "Forest path through rhododendron and oak trees"
                }
            }
        },
        detailedDirections: [
            "From Pelling head toward Upper Pelling",
            "Follow forest trail markers",
            "Steep uphill climb through forest",
            "Reach monastery on ridge"
        ],
        highlights: [
            "One of oldest monasteries (1697)",
            "Beautiful forest trek required",
            "Spectacular prayer flag displays",
            "Serene mountain meditation setting"
        ],
        visitingTips: "Requires good fitness for uphill forest walk. Wear proper trekking shoes. Start early for best light and cooler temperatures. Very peaceful and spiritual atmosphere.",
        permits: "None required",
        culturalSignificance: "One of the earliest Nyingma monasteries in Sikkim, established by Lhatsun Chenpo"
    },
    {
        id: 9,
        name: "Phensang Monastery",
        subtitle: "Sangag Choling - Home to 300 Lamas",
        description: "One of the largest monasteries in Sikkim housing 300 lamas, rebuilt after a devastating fire in 1947. Located in beautiful mountain valley with traditional architecture.",
        location: "25 km from Gangtok, North Sikkim",
        coordinates: "27°35'15\"N 88°38'30\"E",
        established: "1721 (rebuilt 1947)",
        sect: "Nyingma",
        bestTime: "March to May, October to December",
        altitude: 1500,
        altitudeDisplay: "1,500m (4,921 feet)",
        entryFee: "₹15 per person",
        visitingHours: "8:00 AM to 5:00 PM daily",
        district: "North Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014599/pplx_project_search_images/3351b0e3cdc91c08f5e0975d8c3c46e3071607f1.png",
        travelOptions: {
            fromGangtok: {
                taxi: {
                    distance: "25 km",
                    time: "1.5 hours",
                    cost: "₹1,200-1,800",
                    route: "Gangtok → Tadong → Ranipool → continue toward North Sikkim → Phensang"
                }
            }
        },
        detailedDirections: [
            "From Gangtok take NH10 toward North Sikkim",
            "Pass Tadong and Ranipool",
            "Continue on mountain road",
            "Turn right for Phensang monastery"
        ],
        highlights: [
            "Houses 300 lamas",
            "Rebuilt after 1947 fire",
            "Large monastery complex",
            "Traditional Nyingma architecture"
        ],
        visitingTips: "One of the largest monastic communities in Sikkim. Best visited during prayer sessions for cultural experience. Good base for exploring North Sikkim.",
        permits: "RAP required for foreign nationals",
        culturalSignificance: "Major center of Nyingma Buddhist learning with large community of monks"
    },
    {
        id: 10,
        name: "Lachen Monastery",
        subtitle: "Ngodub Choling - High Altitude Gateway",
        description: "A scenic monastery in the high-altitude village of Lachen, serving as the gateway to Gurudongmar Lake. Features colorful prayer flags and traditional North Sikkim culture.",
        location: "Lachen Village, North Sikkim",
        coordinates: "27°41'30\"N 88°32'45\"E",
        established: "1858",
        sect: "Nyingma",
        bestTime: "March to June, September to October",
        altitude: 2750,
        altitudeDisplay: "2,750m (9,022 feet)",
        entryFee: "Free",
        visitingHours: "7:00 AM to 6:00 PM daily",
        district: "North Sikkim",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757014599/pplx_project_search_images/44041532573d4cefaa57c991cad54d496ebebb0a.png",
        travelOptions: {
            fromGangtok: {
                taxi: {
                    distance: "120 km",
                    time: "5-6 hours",
                    cost: "₹6,000-8,000",
                    route: "Gangtok → Mangan → Chungthang → Lachen"
                }
            }
        },
        detailedDirections: [
            "Gangtok take NH10 toward North Sikkim",
            "Pass Singtam and Dikchu",
            "Continue to Mangan (district headquarters)",
            "Proceed to Chungthang (confluence point)",
            "Continue 50 km to Lachen village"
        ],
        highlights: [
            "High altitude monastery (2,750m)",
            "Gateway to Gurudongmar Lake",
            "Colorful prayer flags display",
            "Traditional North Sikkim culture"
        ],
        visitingTips: "Requires North Sikkim permits - apply through travel agencies only. High altitude - acclimatize properly. Best combined with North Sikkim tour including Gurudongmar Lake.",
        permits: "North Sikkim RAP + PAP required for all visitors. Must apply through registered travel agency. Minimum 2 people required.",
        culturalSignificance: "Important monastery for high-altitude Buddhist practices, gateway to sacred Gurudongmar Lake"
    }
];

// Application State
let filteredMonasteries = [...monasteriesData];
let isModalOpen = false;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    renderMonasteries();
    animateCounters();
    initializeAnimations();
});

// Setup Event Listeners
function setupEventListeners() {
    // Search and Filters
    const searchInput = document.getElementById('searchInput');
    const sectFilter = document.getElementById('sectFilter');
    const districtFilter = document.getElementById('districtFilter');
    const altitudeFilter = document.getElementById('altitudeFilter');
    
    if (searchInput) searchInput.addEventListener('input', debounce(handleSearch, 300));
    if (sectFilter) sectFilter.addEventListener('change', handleFilter);
    if (districtFilter) districtFilter.addEventListener('change', handleFilter);
    if (altitudeFilter) altitudeFilter.addEventListener('change', handleFilter);
    
    // Navigation
    const navToggle = document.getElementById('navToggle');
    if (navToggle) navToggle.addEventListener('click', toggleMobileNav);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleContactForm);
    
    // Modal close handlers
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isModalOpen) closeModal();
    });
    
    // Modal backdrop close
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    
    // Close mobile nav when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('navMenu');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle Search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    applyFilters(searchTerm);
}

// Handle Filters
function handleFilter() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    applyFilters(searchTerm);
}

// Apply Filters and Search
function applyFilters(searchTerm = '') {
    const sectFilter = document.getElementById('sectFilter');
    const districtFilter = document.getElementById('districtFilter');
    const altitudeFilter = document.getElementById('altitudeFilter');
    
    const selectedSect = sectFilter ? sectFilter.value : '';
    const selectedDistrict = districtFilter ? districtFilter.value : '';
    const selectedAltitude = altitudeFilter ? altitudeFilter.value : '';
    
    filteredMonasteries = monasteriesData.filter(monastery => {
        // Search match
        const matchesSearch = !searchTerm || 
            monastery.name.toLowerCase().includes(searchTerm) ||
            monastery.subtitle.toLowerCase().includes(searchTerm) ||
            monastery.description.toLowerCase().includes(searchTerm) ||
            monastery.location.toLowerCase().includes(searchTerm) ||
            monastery.sect.toLowerCase().includes(searchTerm) ||
            monastery.highlights.some(h => h.toLowerCase().includes(searchTerm));
        
        // Sect match
        const matchesSect = !selectedSect || monastery.sect === selectedSect;
        
        // District match
        const matchesDistrict = !selectedDistrict || monastery.district === selectedDistrict;
        
        // Altitude match
        let matchesAltitude = true;
        if (selectedAltitude) {
            switch (selectedAltitude) {
                case 'low':
                    matchesAltitude = monastery.altitude < 2000;
                    break;
                case 'medium':
                    matchesAltitude = monastery.altitude >= 2000 && monastery.altitude <= 2500;
                    break;
                case 'high':
                    matchesAltitude = monastery.altitude > 2500;
                    break;
            }
        }
        
        return matchesSearch && matchesSect && matchesDistrict && matchesAltitude;
    });
    
    renderMonasteries();
}

// Clear All Filters
function clearFilters() {
    const searchInput = document.getElementById('searchInput');
    const sectFilter = document.getElementById('sectFilter');
    const districtFilter = document.getElementById('districtFilter');
    const altitudeFilter = document.getElementById('altitudeFilter');
    
    if (searchInput) searchInput.value = '';
    if (sectFilter) sectFilter.value = '';
    if (districtFilter) districtFilter.value = '';
    if (altitudeFilter) altitudeFilter.value = '';
    
    filteredMonasteries = [...monasteriesData];
    renderMonasteries();
}

// Render Monasteries
function renderMonasteries() {
    const monasteriesGrid = document.getElementById('monasteriesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!monasteriesGrid) return;
    
    // Clear existing content
    monasteriesGrid.innerHTML = '';
    
    // Show/hide no results message
    if (noResults) {
        if (filteredMonasteries.length === 0) {
            noResults.classList.remove('hidden');
            return;
        } else {
            noResults.classList.add('hidden');
        }
    }
    
    // Create monastery cards
    filteredMonasteries.forEach((monastery, index) => {
        const card = createMonasteryCard(monastery, index);
        monasteriesGrid.appendChild(card);
    });
    
    // Animate cards
    setTimeout(() => animateCards(), 100);
}

// Create Monastery Card
function createMonasteryCard(monastery, index) {
    const card = document.createElement('div');
    card.className = 'monastery-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${monastery.name}`);
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Determine altitude category for styling
    let altitudeClass = 'low';
    if (monastery.altitude >= 2000 && monastery.altitude <= 2500) altitudeClass = 'medium';
    else if (monastery.altitude > 2500) altitudeClass = 'high';
    
    card.innerHTML = `
        <img src="${monastery.image}" 
             alt="${monastery.name}" 
             class="monastery-image"
             loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="image-fallback" style="display: none;">
            <span>🏛️ ${monastery.name}</span>
        </div>
        <div class="monastery-content">
            <h3 class="monastery-title">${monastery.name}</h3>
            <p class="monastery-subtitle">${monastery.subtitle}</p>
            <p class="monastery-description">${monastery.description}</p>
            
            <div class="monastery-details">
                <div class="monastery-detail">
                    <span class="detail-icon">📍</span>
                    <span>${monastery.location}</span>
                </div>
                <div class="monastery-detail">
                    <span class="detail-icon">🏛️</span>
                    <span>Est. ${monastery.established}</span>
                </div>
                <div class="monastery-detail">
                    <span class="detail-icon">⛰️</span>
                    <span>${monastery.altitudeDisplay}</span>
                </div>
                <div class="monastery-detail">
                    <span class="detail-icon">🌅</span>
                    <span>${monastery.bestTime}</span>
                </div>
                <div class="monastery-detail">
                    <span class="detail-icon">🎫</span>
                    <span>${monastery.entryFee}</span>
                </div>
                <div class="monastery-detail">
                    <span class="detail-icon">🕒</span>
                    <span>${monastery.visitingHours}</span>
                </div>
            </div>
            
            <div class="monastery-tags">
                <span class="monastery-tag sect">${monastery.sect}</span>
                <span class="monastery-tag">${monastery.district}</span>
                <span class="monastery-tag altitude-${altitudeClass}">${altitudeClass} altitude</span>
            </div>
        </div>
    `;
    
    // Add event listeners - Pass monastery object directly
    card.addEventListener('click', () => openModal(monastery));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(monastery);
        }
    });
    
    return card;
}

// Open Modal with Monastery Details - Fixed to show correct monastery
function openModal(monastery) {
    const modal = document.getElementById('monasteryModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    isModalOpen = true;
    
    // Create detailed modal content with the SPECIFIC monastery data
    modalContent.innerHTML = `
        <div class="modal-hero">
            <img src="${monastery.image}" 
                 alt="${monastery.name}" 
                 class="modal-hero-image"
                 onerror="this.style.display='none';">
            <div class="modal-hero-overlay">
                <h1 class="modal-title">${monastery.name}</h1>
                <p class="modal-subtitle">${monastery.subtitle}</p>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="modal-section">
                <h3>📝 About This Sacred Place</h3>
                <p class="modal-description">${monastery.description}</p>
                
                <div class="cultural-significance">
                    <h4>🕉️ Cultural Significance</h4>
                    <p>${monastery.culturalSignificance}</p>
                </div>
            </div>
            
            <div class="modal-info-grid">
                <div class="modal-info-card">
                    <h4>📍 Location & Access</h4>
                    <div class="info-item"><strong>Location:</strong> ${monastery.location}</div>
                    <div class="info-item"><strong>Coordinates:</strong> ${monastery.coordinates}</div>
                    <div class="info-item"><strong>Altitude:</strong> ${monastery.altitudeDisplay}</div>
                    <div class="info-item"><strong>District:</strong> ${monastery.district}</div>
                </div>
                
                <div class="modal-info-card">
                    <h4>🏛️ Monastery Details</h4>
                    <div class="info-item"><strong>Established:</strong> ${monastery.established}</div>
                    <div class="info-item"><strong>Buddhist Sect:</strong> ${monastery.sect}</div>
                    <div class="info-item"><strong>Entry Fee:</strong> ${monastery.entryFee}</div>
                    <div class="info-item"><strong>Visiting Hours:</strong> ${monastery.visitingHours}</div>
                </div>
                
                <div class="modal-info-card">
                    <h4>🌤️ Visit Planning</h4>
                    <div class="info-item"><strong>Best Time:</strong> ${monastery.bestTime}</div>
                    <div class="info-item"><strong>Permits:</strong> ${monastery.permits}</div>
                </div>
            </div>
            
            ${monastery.travelOptions ? createTravelOptionsSection(monastery.travelOptions) : ''}
            ${monastery.detailedDirections ? createDirectionsSection(monastery.detailedDirections) : ''}
            
            <div class="modal-section">
                <h3>✨ Highlights & Features</h3>
                <div class="highlights-grid">
                    ${monastery.highlights.map(highlight => `
                        <div class="highlight-item">
                            <span class="highlight-icon">🌟</span>
                            <span>${highlight}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>💡 Visiting Tips</h3>
                <div class="tips-box">
                    <p>${monastery.visitingTips}</p>
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="shareMonastery('${monastery.name}', '${monastery.description}')">
                    <span>📱 Share This Place</span>
                </button>
                <button class="btn btn-secondary" onclick="printMonasteryInfo('${monastery.name}')">
                    <span>🖨️ Print Guide</span>
                </button>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) closeButton.focus();
}

// Create Travel Options Section
function createTravelOptionsSection(travelOptions) {
    let html = '<div class="modal-section"><h3>🚗 How to Get There</h3><div class="travel-options">';
    
    Object.entries(travelOptions).forEach(([fromLocation, options]) => {
        const locationName = fromLocation.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        html += `<div class="travel-from"><h4>From ${locationName}</h4>`;
        
        Object.entries(options).forEach(([mode, details]) => {
            const modeName = mode.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            html += `
                <div class="travel-option">
                    <h5>${getTransportIcon(mode)} ${modeName}</h5>
                    <div class="travel-details">
                        <span><strong>Distance:</strong> ${details.distance}</span>
                        <span><strong>Time:</strong> ${details.time}</span>
                        ${details.cost ? `<span><strong>Cost:</strong> ${details.cost}</span>` : ''}
                        ${details.difficulty ? `<span><strong>Difficulty:</strong> ${details.difficulty}</span>` : ''}
                        ${details.route ? `<p><strong>Route:</strong> ${details.route}</p>` : ''}
                        ${details.pickup ? `<p><strong>Pickup:</strong> ${details.pickup}</p>` : ''}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
    });
    
    html += '</div></div>';
    return html;
}

// Create Directions Section
function createDirectionsSection(directions) {
    return `
        <div class="modal-section">
            <h3>🧭 Step-by-Step Directions</h3>
            <ol class="directions-list">
                ${directions.map((step, index) => `
                    <li class="direction-step">
                        <span class="step-number">${index + 1}</span>
                        <span class="step-text">${step}</span>
                    </li>
                `).join('')}
            </ol>
        </div>
    `;
}

// Get Transport Icon
function getTransportIcon(mode) {
    const icons = {
        taxi: '🚕',
        sharedTaxi: '🚐',
        bus: '🚌',
        walking: '🚶‍♂️',
        trekking: '🥾'
    };
    return icons[mode] || '🚗';
}

// Close Modal - Fixed
function closeModal() {
    const modal = document.getElementById('monasteryModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        isModalOpen = false;
    }
}

// Share Monastery - Fixed parameters
function shareMonastery(name, description) {
    if (navigator.share) {
        navigator.share({
            title: `${name} - Sacred Sikkim`,
            text: description,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback for browsers without native sharing
        const url = window.location.href;
        const text = `${name} - ${description}\n\n${url}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Link copied to clipboard!');
            }).catch(() => {
                showToast('Unable to copy to clipboard');
            });
        } else {
            showToast('Sharing not supported on this browser');
        }
    }
}

// Print Monastery Info - Fixed parameters
function printMonasteryInfo(name) {
    const monastery = monasteriesData.find(m => m.name === name);
    if (!monastery) return;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${monastery.name} - Travel Guide</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
                    h1 { color: #2c5530; border-bottom: 2px solid #2c5530; }
                    h2 { color: #2c5530; margin-top: 30px; }
                    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
                    .highlight { background: #f0f8ff; padding: 10px; border-left: 3px solid #2c5530; }
                    ul { margin-left: 20px; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                <h1>${monastery.name}</h1>
                <h2>${monastery.subtitle}</h2>
                <p>${monastery.description}</p>
                
                <div class="info-grid">
                    <div>
                        <h3>Location Details</h3>
                        <p><strong>Location:</strong> ${monastery.location}</p>
                        <p><strong>Coordinates:</strong> ${monastery.coordinates}</p>
                        <p><strong>Altitude:</strong> ${monastery.altitudeDisplay}</p>
                        <p><strong>Established:</strong> ${monastery.established}</p>
                    </div>
                    <div>
                        <h3>Visit Information</h3>
                        <p><strong>Best Time:</strong> ${monastery.bestTime}</p>
                        <p><strong>Entry Fee:</strong> ${monastery.entryFee}</p>
                        <p><strong>Hours:</strong> ${monastery.visitingHours}</p>
                        <p><strong>Permits:</strong> ${monastery.permits}</p>
                    </div>
                </div>
                
                <h3>Highlights</h3>
                <ul>
                    ${monastery.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                
                <div class="highlight">
                    <h3>Visiting Tips</h3>
                    <p>${monastery.visitingTips}</p>
                </div>
                
                <p style="margin-top: 30px; color: #666; font-size: 0.9em;">
                    Generated from Sacred Sikkim Travel Guide - ${new Date().toLocaleDateString()}
                </p>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

// Show Toast Notification
function showToast(message) {
    // Remove any existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--color-primary);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        z-index: 3000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInUp 0.3s ease-out;
    `;
    
    // Add keyframes for toast animation
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideInUp {
                from { transform: translateY(30px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideOutDown {
                from { transform: translateY(0); opacity: 1; }
                to { transform: translateY(30px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.3s ease-in forwards';
        setTimeout(() => {
            if (toast.parentElement) toast.remove();
        }, 300);
    }, 3000);
}

// Toggle Mobile Navigation
function toggleMobileNav() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Handle Smooth Scroll - Fixed to work properly
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToSection(targetId);
}

// Scroll to Section - Fixed function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 100; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Animate Counters
function animateCounters() {
    const counterElements = document.querySelectorAll('.stat-number[data-target]');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const increment = Math.ceil(target / 100);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current = Math.min(current + increment, target);
                element.textContent = current;
                setTimeout(updateCounter, 20);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    counterElements.forEach(el => observer.observe(el));
}

// Initialize Animations
function initializeAnimations() {
    // Add modal styles to document
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-hero-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: var(--radius-base) var(--radius-base) 0 0;
            }
            
            .modal-hero-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(transparent, rgba(0,0,0,0.8));
                padding: 2rem;
                color: white;
            }
            
            .modal-hero {
                position: relative;
                margin: -2rem -2rem 2rem -2rem;
            }
            
            .modal-title {
                font-size: 2rem;
                margin-bottom: 0.5rem;
            }
            
            .modal-subtitle {
                font-size: 1.2rem;
                opacity: 0.9;
                font-style: italic;
            }
            
            .modal-info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin: 2rem 0;
            }
            
            .modal-info-card {
                background: var(--color-bg-1);
                padding: 1.5rem;
                border-radius: var(--radius-base);
                border: 1px solid var(--color-border);
            }
            
            .modal-info-card h4 {
                color: var(--color-primary);
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .info-item {
                margin-bottom: 0.75rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid var(--color-border);
            }
            
            .info-item:last-child {
                border-bottom: none;
            }
            
            .highlights-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
            }
            
            .highlight-item {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem;
                background: var(--color-bg-2);
                border-radius: var(--radius-base);
                border-left: 3px solid var(--color-primary);
            }
            
            .highlight-icon {
                font-size: 1.2rem;
            }
            
            .tips-box {
                background: var(--color-bg-3);
                padding: 1.5rem;
                border-radius: var(--radius-base);
                border-left: 4px solid var(--color-primary);
            }
            
            .modal-actions {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 1px solid var(--color-border);
            }
            
            .travel-options {
                display: grid;
                gap: 2rem;
            }
            
            .travel-from h4 {
                color: var(--color-primary);
                margin-bottom: 1rem;
            }
            
            .travel-option {
                background: var(--color-bg-1);
                padding: 1.5rem;
                border-radius: var(--radius-base);
                margin-bottom: 1rem;
            }
            
            .travel-option h5 {
                color: var(--color-primary);
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .travel-details {
                display: grid;
                gap: 0.5rem;
            }
            
            .travel-details span {
                padding: 0.25rem 0;
            }
            
            .directions-list {
                list-style: none;
                counter-reset: step-counter;
            }
            
            .direction-step {
                counter-increment: step-counter;
                display: flex;
                align-items: flex-start;
                gap: 1rem;
                margin-bottom: 1rem;
                padding: 1rem;
                background: var(--color-bg-1);
                border-radius: var(--radius-base);
            }
            
            .step-number {
                background: var(--color-primary);
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                flex-shrink: 0;
            }
            
            .step-number::before {
                content: counter(step-counter);
            }
            
            .cultural-significance {
                background: var(--color-bg-4);
                padding: 1.5rem;
                border-radius: var(--radius-base);
                margin-top: 1rem;
                border-left: 4px solid var(--gold, #FFD700);
            }
            
            .cultural-significance h4 {
                color: var(--color-primary);
                margin-bottom: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .modal-actions {
                    flex-direction: column;
                }
                
                .modal-info-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Animate Cards
function animateCards() {
    const cards = document.querySelectorAll('.monastery-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Handle Contact Form - Fixed to work properly
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};
    
    // Collect form data
    for (let [key, value] of formData.entries()) {
        if (key === 'interests') {
            if (!data.interests) data.interests = [];
            data.interests.push(value);
        } else {
            data[key] = value;
        }
    }
    
    // Simple validation
    if (!data.firstName || !data.lastName || !data.email || !data.groupSize || !data.travelDate) {
        showToast('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showToast('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalHTML = submitButton.innerHTML;
    
    submitButton.innerHTML = '<span>Sending...</span>';
    submitButton.disabled = true;
    
    setTimeout(() => {
        showToast('Thank you! We\'ll create your perfect monastery journey and contact you within 24 hours.');
        e.target.reset();
        
        submitButton.innerHTML = originalHTML;
        submitButton.disabled = false;
    }, 2000);
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.closeModal = closeModal;
window.clearFilters = clearFilters;
window.shareMonastery = shareMonastery;
window.printMonasteryInfo = printMonasteryInfo;