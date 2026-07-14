// Batch 2: IDs 27-40
import { Destination } from './types';

export const BATCH_2_DESTINATIONS: Destination[] = [
  {
    id: 'sekaten',
    name: 'Sekaten',
    tagline: 'Where Royal Ritual Meets Joyous Night Fair',
    category: 'weekend',
    location: 'Alun-Alun Utara & Area Sekitar, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Gunungan_darat_during_Garebeg_Mulud_Yogyakarta_Dec_2017_Pj_IMG_4517sm.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Nasigurih_sekaten_yogya_Pj_DSC_3073.jpg'
    ],
    rating: 4.7,
    reviewCount: 3150,
    description: 'The grand annual celebration of the Prophet Muhammad\'s birthday held by the Yogyakarta Sultanate, featuring lively night fairs, traditional music, culinary bazaars, and the spectacular Gunungan parade bearing ceremonial offerings.',
    story: 'Sekaten has been celebrated since the 15th century and is one of the most sacred royal traditions in Java. During the event, two sacred gamelan instruments from the Kraton—Kyai Nogowilogo and Kyai Guntur Sari—are played publicly for seven nights, and it is believed their melodies carry blessings of prosperity across the kingdom.',
    ticketPrice: 'Free Entry',
    openingHours: 'Evening events, 06:00 PM - 11:00 PM (During Sekaten week)',
    facilities: ['Night Market Stalls', 'Traditional Music Performances', 'Food Bazaars', 'Cultural Processions', 'Family-Friendly Rides'],
    travelTips: [
      'Arrive early in the evening to secure a good spot along the Gunungan parade route.',
      'Try the classic Sekaten night-market snacks like bakmi goreng and es campur from the street vendors.',
      'The climactic Garebeg Mulud ceremony on the final morning is not to be missed—watch the giant Gunungan of produce carried from the Kraton.'
    ],
    bestTime: 'September to October (During the Sekaten ceremonial week)',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Sekaten.'
    },
    latitude: -7.8015,
    longitude: 110.3662,
    reviews: [
      { id: 'r-sekaten-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-sekaten-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-sekaten-1',
        name: 'HotelRoyal Yogyakarta',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=600',
        rating: 4.7,
        price: 'IDR 850,000 / night',
        distance: '0.8 km from Alun-Alun Utara',
        description: 'A heritage boutique hotel steps away from the Sultan\'s Palace, blending classic Javanese architecture with modern comfort.',
        address: 'Jl. Rotowijayan No. 20, Kota Yogyakarta',
        promotion: '10% off during Sekaten week',
        phone: '+62 274 561234',
        coordinates: { lat: -7.8030, lng: 110.3655 }
      },
      {
        id: 'p-sekaten-2',
        name: 'Warung Sekaten Nusantara',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600',
        rating: 4.5,
        price: 'IDR 25,000 - 50,000 / person',
        distance: 'On-Site (Alun-Alun Utara)',
        description: 'Authentic Javanese street food stall serving beloved Sekaten night-market specialties including nasi kucing and wedang ronde.',
        address: 'Alun-Alun Utara, Kraton, Yogyakarta',
        promotion: 'Combo meal deal during festival nights',
        phone: '+62 812-9876-5432',
        coordinates: { lat: -7.8010, lng: 110.3660 }
      }
    ],
    faqs: [
      { q: 'When exactly does Sekaten take place?', a: 'The main celebrations occur annually around the Prophet\'s birthday (Maulid Nabi), typically in September or October. Night events last for seven consecutive evenings.' },
      { q: 'Is the Gunungan parade open to tourists?', a: 'Yes, tourists are welcome to watch the colorful Garebeg Mulud procession from designated viewing areas near the Kraton.' }
    ]
  },
  {
    id: 'prambanan-jazz-festival',
    name: 'Prambanan Jazz Festival',
    tagline: 'World-Class Jazz Beneath Ancient Spires',
    category: 'weekend',
    location: 'Kompleks Candi Prambanan, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/Prambananjazz-6-2020.png'
    ],
    rating: 4.9,
    reviewCount: 2480,
    description: 'An international jazz music festival held against the breathtaking backdrop of the Prambanan Hindu temple complex at sunset. The festival brings together legendary Indonesian and world musicians for a spectacular open-air celebration of music and culture.',
    story: 'First held in 2012, the Prambanan Jazz Festival was conceived to blend Indonesia\'s musical artistry with its greatest architectural heritage. Performing artists often describe the moment when the sun sets behind the towering Shiva spire mid-performance as one of the most transcendent concert experiences in Southeast Asia.',
    ticketPrice: 'IDR 250,000+',
    openingHours: 'Festival hours vary (Typically 04:00 PM - 11:00 PM)',
    facilities: ['Open-Air Main Stage', 'VIP Viewing Areas', 'Food Court Village', 'Artisan Craft Stalls', 'Official Merchandise Tent'],
    travelTips: [
      'Purchase tickets well in advance as they sell out quickly, especially for the opening night.',
      'Bring a light jacket—the evening mountain breeze can be surprisingly cool after sunset.',
      'Combine the concert with a daytime visit to the Prambanan Temple complex to fully appreciate the UNESCO World Heritage site.'
    ],
    bestTime: 'June to July (Festival Period)',
    weather: {
      temp: '26°C',
      condition: 'Clear Evening',
      status: 'Enjoy pleasant tropical weather at Prambanan Jazz Festival.'
    },
    latitude: -7.7525,
    longitude: 110.4918,
    reviews: [
      { id: 'r-prambanan-jazz-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-prambanan-jazz-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-pjf-1',
        name: 'Lafayette Boutique Hotel',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600',
        rating: 4.8,
        price: 'IDR 1,200,000 / night',
        distance: '4.5 km from Prambanan',
        description: 'A refined European-inspired boutique hotel offering luxury rooms with serene garden views and easy access to the Prambanan complex.',
        address: 'Jl. Raya Solo-Yogyakarta Km 8, Sleman',
        promotion: 'Free shuttle to Prambanan Jazz Festival',
        phone: '+62 274 667890',
        coordinates: { lat: -7.7480, lng: 110.4780 }
      },
      {
        id: 'p-pjf-2',
        name: 'Rumah Makan Prambanan Indah',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600',
        rating: 4.5,
        price: 'IDR 40,000 - 80,000 / person',
        distance: '1.2 km from Prambanan',
        description: 'A beloved local restaurant known for its ayam bakar and traditional Javanese cuisine, popular among festival-goers.',
        address: 'Jl. Raya Prambanan, Sleman',
        promotion: 'Festival combo meal with drink',
        phone: '+62 274 890123',
        coordinates: { lat: -7.7510, lng: 110.4860 }
      }
    ],
    faqs: [
      { q: 'Can I attend even if I don\'t know much about jazz?', a: 'Absolutely! The festival features a wide range of genres including world music, fusion, and acoustic sets. The atmosphere and stunning temple backdrop make it enjoyable for everyone.' },
      { q: 'Are there seating options or is it standing only?', a: 'General admission is standing/lawn area. VIP and platinum tickets include reserved seating closer to the stage with better views of the illuminated temple.' }
    ]
  },
  {
    id: 'gudeg-wijilan',
    name: 'Gudeg Wijilan',
    tagline: 'The Legendary Heart of Yogyakarta\'s Cuisine',
    category: 'culinary',
    location: 'Jl. Wijilan, Kraton, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Nasi_Gudeg.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gudeg_Wijilan_Yogyakarta_Ayam.JPG'
    ],
    rating: 4.8,
    reviewCount: 4320,
    description: 'The most legendary gudeg culinary hub in Yogyakarta, lining the historic Wijilan street with dozens of family-run stalls serving sweet stewed young jackfruit with coconut cream (areh), spicy beef skin stew (krecek), and tender free-range chicken.',
    story: 'Gudeg has been the soul food of the Yogyakarta Sultanate for centuries. Legend holds that each Wijilan gudeg family guards a unique recipe passed down through generations, and the prized areh (coconut milk reduction) is simmered for over six hours to achieve its distinctive creamy sweetness that defines authentic Jogja gudeg.',
    ticketPrice: 'IDR 20,000 - IDR 50,000',
    openingHours: '06:00 AM - 10:00 PM Daily (Best in morning or evening)',
    facilities: ['Multiple Family Stalls', 'Open-Air Seating', 'Takeaway Packaging', 'Free Parking on Side Streets', 'Vegetarian Gudeg Options'],
    travelTips: [
      'Visit Gudeg Yu Djum or Gudeg Bu Tegar for the most celebrated family recipes along Wijilan.',
      'Ask for gudeg kering (drier version) if you prefer a richer, less saucy texture.',
      'Pair your gudeg with a cup of sweet teh tubruk (Javanese palm sugar tea) for the complete experience.'
    ],
    bestTime: 'Morning or evening, when the gudeg is freshly prepared and most aromatic.',
    weather: {
      temp: '28°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Gudeg Wijilan.'
    },
    latitude: -7.8041,
    longitude: 110.3683,
    reviews: [
      { id: 'r-gudeg-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-gudeg-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-gudeg-1',
        name: 'Royal Ambarrukmo Hotel',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600',
        rating: 4.9,
        price: 'IDR 1,800,000 / night',
        distance: '3.5 km from Wijilan',
        description: 'A majestic royal heritage hotel once used as a rest palace by the Sultan, offering five-star Javanese luxury and legendary hospitality.',
        address: 'Jl. Sangiran, Ambarrukmo, Sleman',
        promotion: 'Complimentary gudeg welcome basket',
        phone: '+62 274 566666',
        coordinates: { lat: -7.7812, lng: 110.3965 }
      },
      {
        id: 'p-gudeg-2',
        name: 'Kedai Gudeg Ndelik',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600',
        rating: 4.6,
        price: 'IDR 18,000 - 35,000 / person',
        distance: '0.3 km from Wijilan',
        description: 'A hidden gem among Wijilan stalls, famous for extra-thick areh and hand-pounded krecek that melts in your mouth.',
        address: 'Jl. Wijilan No. 42, Kraton, Yogyakarta',
        promotion: 'Buy 5 gudeg packs get 1 free',
        phone: '+62 813-5555-7777',
        coordinates: { lat: -7.8045, lng: 110.3690 }
      }
    ],
    faqs: [
      { q: 'What exactly is gudeg?', a: 'Gudeg is a traditional Javanese dish of young jackfruit slow-stewed for hours with coconut milk, palm sugar, and teak leaves, which give it its distinctive deep reddish-brown color.' },
      { q: 'Can gudeg be taken home as a souvenir?', a: 'Yes! Most Wijilan stalls sell gudeg in practical takeaway containers packed with nasi, ayam opor, areh, and krecek. It keeps well for up to two days.' }
    ]
  },
  {
    id: 'museum-benteng-vredeburg',
    name: 'Museum Benteng Vredeburg',
    tagline: 'A Colonial Fortress Telling Tales of Independence',
    category: 'heritage',
    location: 'Jl. Margo Mulyo No. 6, Ngupasan, Gondomanan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d6/Fort_Vredeburg_1.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Museum_Benteng_Vredeburg_-_29.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Museum_Benteng_Vredeburg_01.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Fort_Vredeburg_Museum_(inside)%2C_Yogyakarta.jpg'
    ],
    rating: 4.6,
    reviewCount: 2890,
    description: 'A beautifully preserved Dutch colonial fort-turned-museum displaying immersive dioramas chronicling Indonesia\'s heroic struggle for independence. Located at the heart of Yogyakarta, it offers a fascinating journey through pivotal moments of the nation\'s history.',
    story: 'Fort Vredeburg was built by the Dutch in 1760 to monitor the nearby Sultan\'s Palace. Ironically, during the independence war, it became the site where Indonesian youth fighters launched daring attacks. Today it houses over 50 lifelike diorama scenes depicting key moments from the freedom struggle.',
    ticketPrice: 'IDR 10,000',
    openingHours: '08:00 AM - 03:00 PM Daily (Closed on Mondays)',
    facilities: ['Immersive Diorama Halls', 'Audio Guide Rental', 'Air-Conditioned Exhibition Rooms', 'Souvenir Gift Shop', 'Spacious Courtyard'],
    travelTips: [
      'Combine your visit with nearby Malioboro Street and Pasar Beringharjo—both are within easy walking distance.',
      'Ask at the entrance for the guided group tour schedule to get the most from the historical dioramas.',
      'Free entry on national holidays—check the museum website for the annual schedule.'
    ],
    bestTime: '08:00 AM to 11:00 AM when the galleries are cool and less crowded.',
    weather: {
      temp: '28°C',
      condition: 'Partly Cloudy',
      status: 'Enjoy pleasant tropical weather at Museum Benteng Vredeburg.'
    },
    latitude: -7.8001,
    longitude: 110.3663,
    reviews: [
      { id: 'r-vredeburg-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-vredeburg-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-vredeburg-1',
        name: 'Meliah Hotel Yogyakarta',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=600',
        rating: 4.5,
        price: 'IDR 650,000 / night',
        distance: '0.5 km from Fort Vredeburg',
        description: 'A comfortable budget-friendly heritage hotel with clean modern rooms, just steps from the historic Zero Point intersection.',
        address: 'Jl. Suryatmajayan No. 10, Yogyakarta',
        promotion: 'Free breakfast buffet',
        phone: '+62 274 562345',
        coordinates: { lat: -7.7998, lng: 110.3670 }
      },
      {
        id: 'p-vredeburg-2',
        name: 'Cafe Batik Vredeburg',
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600',
        rating: 4.4,
        price: 'IDR 30,000 - 60,000 / person',
        distance: '0.2 km from Fort Vredeburg',
        description: 'A charming colonial-era cafe serving single-origin Javanese coffee and classic nasi goreng with a nostalgic ambience.',
        address: 'Jl. Margo Mulyo No. 12, Yogyakarta',
        promotion: '10% off for museum ticket holders',
        phone: '+62 274 567890',
        coordinates: { lat: -7.8005, lng: 110.3658 }
      }
    ],
    faqs: [
      { q: 'How long does a typical visit take?', a: 'Most visitors spend 1 to 1.5 hours exploring the diorama halls and reading the detailed historical panels.' },
      { q: 'Is there an English audio guide available?', a: 'Yes, audio guides in English and Bahasa Indonesia can be rented at the entrance for a small additional fee.' }
    ]
  },
  {
    id: 'pasar-beringharjo',
    name: 'Pasar Beringharjo',
    tagline: 'Centuries of Commerce Under One Grand Roof',
    category: 'culinary',
    location: 'Jl. Margo Mulyo No. 16, Ngupasan, Gondomanan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/Bringharjo_Market_Yogyakarta_-_Pasar_Bringharjo_Jogja_%282025%29_-_img_06.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jalan-jalan_ke_Pasar_Beringharjo-9.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bringharjo_Market%2C_Yogyakarta_17-11-2013_10.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bringharjo_Market_Yogyakarta_-_Pasar_Bringharjo_Jogja_(2025)_-_img_04.jpg'
    ],
    rating: 4.7,
    reviewCount: 5100,
    description: 'The oldest and largest traditional market in Yogyakarta, established in 1758, offering an endless labyrinth of stalls selling hand-drawn batik, herbal tonics (jamu), traditional Javanese snacks, fragrant spices, and authentic batik sarongs at incredibly affordable prices.',
    story: 'Pasar Beringharjo has been the commercial heart of Yogyakarta for over 260 years. During the Java War of 1825-1830, the market was deliberately burned by Sultan Hamengkubuwono II to prevent Dutch forces from using it as a base—and was rebuilt by the community within months, earning its name "Beringharjo" meaning "prosperous banyan tree."',
    ticketPrice: 'Free Entry',
    openingHours: '08:00 AM - 04:00 PM Daily (Some food stalls open until 09:00 PM)',
    facilities: ['Thousands of Batik Stalls', 'Traditional Jamu Stands', 'Herbal Spice Market', 'Food Court Area', 'Upper-Level Batik Wholesale'],
    travelTips: [
      'Start on the ground floor for the bustling food and jamu section, then head upstairs for the best batik deals.',
      'Bargaining is expected and encouraged—start at about 60% of the asking price for a fair deal.',
      'Bring cash in small denominations as most vendors do not accept digital payments.'
    ],
    bestTime: '08:00 AM to 02:00 PM when all stalls are open and the morning bustle is at its peak.',
    weather: {
      temp: '28°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pasar Beringharjo.'
    },
    latitude: -7.7984,
    longitude: 110.3659,
    reviews: [
      { id: 'r-beringharjo-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-beringharjo-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-beringharjo-1',
        name: 'Inna Garuda Hotel',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600',
        rating: 4.5,
        price: 'IDR 750,000 / night',
        distance: '0.3 km from Pasar Beringharjo',
        description: 'A classic heritage hotel directly facing the famous Malioboro Street, offering a nostalgic colonial-era atmosphere with modern comforts.',
        address: 'Jl. Malioboro No. 22, Yogyakarta',
        promotion: 'Free welcome drink and sarong souvenir',
        phone: '+62 274 563456',
        coordinates: { lat: -7.7945, lng: 110.3655 }
      },
      {
        id: 'p-beringharjo-2',
        name: 'Batik Tulis Handarbeni',
        category: 'souvenir',
        image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=600',
        rating: 4.8,
        price: 'IDR 50,000 - 500,000 per piece',
        distance: 'Inside Pasar Beringharjo (2nd floor)',
        description: 'A renowned family stall specializing in authentic hand-drawn batik tulis (written batik), each piece taking weeks to complete.',
        address: 'Lantai 2, Pasar Beringharjo, Yogyakarta',
        promotion: 'Free batik stamping demonstration',
        phone: '+62 812-3333-4444',
        coordinates: { lat: -7.7988, lng: 110.3662 }
      }
    ],
    faqs: [
      { q: 'How do I find the best batik deals?', a: 'Head to the second floor where wholesale batik vendors offer significant discounts for bulk purchases. Always compare prices at 3-4 stalls before committing.' },
      { q: 'What should I try in the food section?', a: 'Don\'t miss gudeg krecek, bakpia pathok (sweet mung bean pastries), and a fresh glass of jamu kunyit (turmeric tonic) from the ground-floor herbal stalls.' }
    ]
  },
  {
    id: 'taman-pintar-yogyakarta',
    name: 'Taman Pintar Yogyakarta',
    tagline: 'Where Young Minds Explore the Wonders of Science',
    category: 'family',
    location: 'Jl. Panembahan Senopati No. 1-3, Ngupasan, Gondomanan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Taman_Pintar_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Front_gate_of_Taman_Pintar.jpg'
    ],
    rating: 4.6,
    reviewCount: 3450,
    description: 'A beloved interactive science park and educational center designed for children and families, featuring a planetarium, earthquake simulation lab, hands-on technology exhibits, and engaging science shows that make learning an adventure.',
    story: 'Opened in 2004, Taman Pintar was established with a vision to make science accessible and fun for all Indonesian children. The iconic bubble-shaped planetarium dome has become a beloved landmark in central Yogyakarta, and the park hosts thousands of school groups annually for its award-winning STEM education programs.',
    ticketPrice: 'IDR 25,000',
    openingHours: '09:00 AM - 04:00 PM Tuesday to Sunday (Closed Mondays)',
    facilities: ['Planetarium Theater', 'Earthquake Simulation Room', 'Interactive Science Exhibits', 'Children\'s Science Library', 'Outdoor Discovery Zone'],
    travelTips: [
      'Visit on weekday mornings for the smallest crowds—weekends and school holidays are very busy.',
      'Check the daily schedule board upon entry for planetarium showtimes and live science demonstration slots.',
      'The outdoor discovery zone in the back has water play features, so bring a change of clothes for young children.'
    ],
    bestTime: '09:00 AM to 12:00 PM when energy levels are high and all interactive stations are fully staffed.',
    weather: {
      temp: '28°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Taman Pintar Yogyakarta.'
    },
    latitude: -7.8007,
    longitude: 110.3678,
    reviews: [
      { id: 'r-taman-pintar-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-taman-pintar-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-taman-pintar-1',
        name: 'Harris Hotel Yogyakarta',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600',
        rating: 4.6,
        price: 'IDR 550,000 / night',
        distance: '1.0 km from Taman Pintar',
        description: 'A modern family-friendly hotel with spacious interconnecting rooms, a kids\' play area, and an outdoor swimming pool.',
        address: 'Jl. Jend. Sudirman No. 39, Yogyakarta',
        promotion: 'Kids stay free with family package',
        phone: '+62 274 561111',
        coordinates: { lat: -7.7965, lng: 110.3650 }
      },
      {
        id: 'p-taman-pintar-2',
        name: 'Sate Kambing Pak Dwijo',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600',
        rating: 4.7,
        price: 'IDR 35,000 - 65,000 / person',
        distance: '0.4 km from Taman Pintar',
        description: 'A legendary Yogyakarta goat satay stall serving tender charcoal-grilled skewers with rich sweet soy sauce and a steaming bowl of clear broth.',
        address: 'Jl. Bintaran Kulon No. 3, Yogyakarta',
        promotion: 'Family platter special for 4 people',
        phone: '+62 813-6666-7777',
        coordinates: { lat: -7.8012, lng: 110.3685 }
      }
    ],
    faqs: [
      { q: 'Is Taman Pintar suitable for teenagers?', a: 'While primarily designed for children ages 3-12, older kids and teenagers enjoy the earthquake simulator, planetarium, and advanced technology exhibits.' },
      { q: 'Can we bring outside food?', a: 'Light snacks and water bottles are allowed. A small canteen inside the park serves affordable Indonesian meals and snacks.' }
    ]
  },
  {
    id: 'candi-sambisari',
    name: 'Candi Sambisari',
    tagline: 'A Hidden Temple Buried Beneath volcanic ash',
    category: 'heritage',
    location: 'Sambisari, Purwomartani, Kalasan, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Sambisari_Panorama_%2829_December_2013%29.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Candi_Sambisari%2C_Hindu_Temple_of_Java_Indonesia_2013_b.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Candi_Sambisari%2C_Hindu_Temple_of_Java_Indonesia_2013_e.jpg'
    ],
    rating: 4.6,
    reviewCount: 1820,
    description: 'A remarkable 9th-century Hindu temple uniquely situated 6.5 meters below ground level, buried for centuries by volcanic ash from Mount Merapi eruptions and only rediscovered in 1966 by a farmer plowing his field.',
    story: 'For over a thousand years, Candi Sambisari lay completely hidden beneath layers of volcanic sediment. In 1966, a local farmer named Sumarto accidentally struck a stone while plowing his rice field, triggering a three-year excavation that revealed this stunning hidden temple—one of the most dramatic archaeological discoveries in Javanese history.',
    ticketPrice: 'IDR 10,000',
    openingHours: '08:00 AM - 05:00 PM Daily',
    facilities: ['Guided Heritage Walks', 'Underground Courtyard Viewing', 'Archaeological Information Boards', 'Shaded Rest Areas', 'Small Parking Area'],
    travelTips: [
      'Late afternoon light creates the most dramatic photos when sunlight streams down into the excavated courtyard.',
      'The temple is an easy combined visit with nearby Candi Kalasan and Candi Ijo—plan a half-day temple circuit.',
      'Wear sun protection when walking from the parking area to the temple entrance as there is little shade.'
    ],
    bestTime: 'Morning or late afternoon for the softest light and coolest temperatures in the excavated courtyard.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Candi Sambisari.'
    },
    latitude: -7.7626,
    longitude: 110.4471,
    reviews: [
      { id: 'r-sambisari-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-sambisari-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-sambisari-1',
        name: 'Greenhost Boutique Hotel',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=600',
        rating: 4.7,
        price: 'IDR 680,000 / night',
        distance: '4.2 km from Candi Sambisari',
        description: 'An eco-friendly boutique hotel with lush rooftop gardens, offering a tranquil retreat close to Sleman\'s temple circuit.',
        address: 'Jl. P. Diponegoro No. 23, Yogyakarta',
        promotion: 'Complimentary temple tour map and mineral water',
        phone: '+62 274 566789',
        coordinates: { lat: -7.7810, lng: 110.3890 }
      },
      {
        id: 'p-sambisari-2',
        name: 'Warung Sambisari Ndeso',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600',
        rating: 4.4,
        price: 'IDR 15,000 - 30,000 / person',
        distance: '0.5 km from Candi Sambisari',
        description: 'A charming rural Javanese warung serving home-style nasi pecel, tempeh goreng, and fresh coconut water in a peaceful rice-field setting.',
        address: 'Jl. Purwomartani, Kalasan, Sleman',
        promotion: 'Free traditional kripik tempe with every meal',
        phone: '+62 812-4444-8888',
        coordinates: { lat: -7.7640, lng: 110.4455 }
      }
    ],
    faqs: [
      { q: 'Why is the temple underground?', a: 'Successive eruptions of Mount Merapi over several centuries deposited thick layers of volcanic ash and sediment, gradually burying the entire temple structure until its accidental rediscovery.' },
      { q: 'Is it less crowded than Prambanan?', a: 'Yes, significantly. Sambisari receives far fewer visitors, making it a peaceful and intimate temple experience—perfect for contemplation and photography.' }
    ]
  },
  {
    id: 'candi-ijo',
    name: 'Candi Ijo',
    tagline: 'Yogyakarta\'s Highest Temple with Sweeping Panorama',
    category: 'heritage',
    location: 'Sambirejo, Prambanan, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Candi_Ijo_%281%29.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Main_temple_at_Candi_Ijo%2C_Sleman%2C_Yogyakarta%2C_2014-05-31.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Panoramic_view_from_Candi_Ijo%2C_Sleman%2C_2014-05-31.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Candi_Perwara_Candi_Ijo.jpg'
    ],
    rating: 4.7,
    reviewCount: 2100,
    description: 'Perched at 410 meters above sea level, Candi Ijo is the highest-elevation temple in the Yogyakarta region, crowning a hilltop with a spectacular panoramic view stretching over Prambanan plains, Adisutjipto runway, and the distant southern ocean.',
    story: 'The name "Ijo" comes from the Javanese word for "green," referencing the lush emerald hillside on which the temple sits. Built between the 10th and 11th centuries, it was originally a sacred meditation site for Hindu priests who believed the elevated position brought them closer to the heavens.',
    ticketPrice: 'IDR 10,000',
    openingHours: '08:00 AM - 05:00 PM Daily',
    facilities: ['Panoramic Hilltop Viewpoint', 'Information Boards', 'Shaded Picnic Areas', 'Small Parking Area', 'Nearby Warung Stalls'],
    travelTips: [
      'Arrive by 04:30 PM for the famous sunset view—the temple faces west and the light during golden hour is extraordinary.',
      'The access road is winding and steep; use a motorbike or hire a local transport service if you\'re not comfortable driving uphill.',
      'Combine with nearby Tebing Breksi and Candi Sambisari for a full-day temple circuit around Sleman.'
    ],
    bestTime: '04:30 PM to 06:00 PM daily for the legendary hilltop sunset panorama.',
    weather: {
      temp: '25°C',
      condition: 'Cool Breeze',
      status: 'Enjoy pleasant tropical weather at Candi Ijo.'
    },
    latitude: -7.7838,
    longitude: 110.5126,
    reviews: [
      { id: 'r-candi-ijo-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-candi-ijo-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-candi-ijo-1',
        name: 'Jeep Tour Merapi & Candi Ijo',
        category: 'rental',
        image: 'https://images.unsplash.com/photo-1467489904517-075c242c2b4f?q=80&w=600',
        rating: 4.8,
        price: 'IDR 350,000 / Jeep',
        distance: 'On-Site (Tour Base)',
        description: 'Experienced local Jeep guides offering combined Merapi lava tour and Candi Ijo sunset circuit through scenic highland roads.',
        address: 'Kaliurang, Sleman',
        promotion: 'Free GoPro sunset video recording',
        phone: '+62 813-7777-2222',
        coordinates: { lat: -7.7850, lng: 110.5100 }
      },
      {
        id: 'p-candi-ijo-2',
        name: 'Warung Sunset Candi Ijo',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600',
        rating: 4.5,
        price: 'IDR 20,000 - 45,000 / person',
        distance: '0.8 km from Candi Ijo',
        description: 'A hillside warung with open-air bamboo seating and sweeping views, serving warm soto ayam and hot drinks while you watch the sun go down.',
        address: 'Sambirejo, Prambanan, Sleman',
        promotion: 'Free warm ginger tea with sunset snack combo',
        phone: '+62 812-9999-3333',
        coordinates: { lat: -7.7825, lng: 110.5115 }
      }
    ],
    faqs: [
      { q: 'Is the road to Candi Ijo difficult to drive?', a: 'The final stretch is a steep, winding uphill road. It\'s manageable for most motorbikes and cars, but take it slow. Alternatively, hire a local driver.' },
      { q: 'Can you camp overnight at the temple?', a: 'Camping is not permitted at the temple grounds. However, nearby Tebing Breksi occasionally hosts stargazing events with local guide groups.' }
    ]
  },
  {
    id: 'candi-kalasan',
    name: 'Candi Kalasan',
    tagline: 'The Oldest Buddhist Temple in Yogyakarta',
    category: 'heritage',
    location: 'Kalibening, Tirtomartani, Kalasan, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Kalasan_Temple_from_the_north-east%2C_23_November_2013.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Prambanan_-_Candi_Kalasan_-_011_(8633247140).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Renovation_of_the_Temple.jpg'
    ],
    rating: 4.5,
    reviewCount: 1580,
    description: 'The oldest Buddhist temple in the Yogyakarta region, dating to 778 AD, celebrated for its exceptionally fine Vajralepa stone stucco carvings and its dedication to the goddess Tara—a revered figure in Mahayana Buddhism.',
    story: 'Candi Kalasan bears an ancient stone inscription (Prasasti Kalasan) that is one of the oldest written records in Java, written in Sanskrit using early Javanese script. It was built by the Sanjaya dynasty king Tejapurnapana Panangkaran as an offering to the Buddhist goddess Tara, demonstrating the remarkable religious harmony that existed in ancient Java.',
    ticketPrice: 'IDR 10,000',
    openingHours: '08:00 AM - 05:00 PM Daily',
    facilities: ['Heritage Interpretation Boards', 'Shaded Rest Areas', 'Small Parking Area', 'Guided Walk Circuits'],
    travelTips: [
      'Visit Candi Kalasan early in the morning when the east-facing stone carvings catch the golden sunlight beautifully.',
      'Combine with nearby Candi Sambisari (2 km away) for a quick but rewarding double-temple visit.',
      'Bring binoculars to admire the intricate relief details on the upper sections of the temple that are otherwise hard to see.'
    ],
    bestTime: '08:00 AM to 10:00 AM when morning light illuminates the eastern stone carvings.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Candi Kalasan.'
    },
    latitude: -7.7672,
    longitude: 110.4721,
    reviews: [
      { id: 'r-candi-kalasan-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-candi-kalasan-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-candi-kalasan-1',
        name: 'Sleman Heritage Villas',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600',
        rating: 4.7,
        price: 'IDR 950,000 / night',
        distance: '3.0 km from Candi Kalasan',
        description: 'A collection of private Javanese joglo villas set amid rice paddies, offering a serene cultural retreat near the temple circuit.',
        address: 'Jl. Kalasan-Tepus, Sleman',
        promotion: 'Complimentary guided temple walking tour',
        phone: '+62 274 444555',
        coordinates: { lat: -7.7700, lng: 110.4680 }
      },
      {
        id: 'p-candi-kalasan-2',
        name: 'Rumah Makan Kalasan Ayam Penyet',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600',
        rating: 4.5,
        price: 'IDR 18,000 - 35,000 / person',
        distance: '1.5 km from Candi Kalasan',
        description: 'A popular roadside warung serving crispy smashed fried chicken (ayam penyet) with fiery sambal, fresh vegetables, and steamed rice.',
        address: 'Jl. Raya Kalasan, Sleman',
        promotion: 'Extra sambal on the house',
        phone: '+62 813-2222-5555',
        coordinates: { lat: -7.7690, lng: 110.4705 }
      }
    ],
    faqs: [
      { q: 'How does Candi Kalasan differ from Prambanan?', a: 'Candi Kalasan is a Buddhist temple (predating Prambanan by about 80 years) and is much smaller and quieter, while Prambanan is a massive Hindu complex. Both are worth visiting.' },
      { q: 'Is there an entrance fee separate from the main temple ticket?', a: 'No, the IDR 10,000 ticket covers full access to the temple grounds and surrounding garden area.' }
    ]
  },
  {
    id: 'kaliadem-batu-alien',
    name: 'Kaliadem Batu Alien',
    tagline: 'Where Volcanic Fire Shaped an Alien World',
    category: 'nature',
    location: 'Kepuharjo, Cangkringan, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bunker_Kaliadem.jpg'
    ],
    rating: 4.4,
    reviewCount: 1950,
    description: 'A dramatic volcanic landscape featuring massive boulders hurled from Mount Merapi\'s crater, including the famous "Batu Alien" rock formation whose eerie shape resembles a human face—a silent testament to the awesome destructive power of Indonesia\'s most active volcano.',
    story: 'During Merapi\'s catastrophic 2006 eruption, an enormous volcanic boulder was flung kilometers from the summit and came to rest in the Kaliadem area. Over time, locals noticed its uncanny resemblance to a human face and named it "Batu Alien." The surrounding area still shows raw scars from pyroclastic flows, creating an otherworldly moonscape.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 05:00 PM Daily',
    facilities: ['Volcanic Relic Viewing Area', 'Information Boards', 'Warung Stalls', 'Motorbike Parking', 'Merapi Museum Nearby'],
    travelTips: [
      'Visit early morning when the volcanic landscape is most atmospheric with rising mist around the boulders.',
      'Wear sturdy closed-toe shoes—the terrain is uneven with sharp volcanic rock fragments.',
      'The nearby Sisa Hartaku Museum (My Remaining Treasure) tells the deeply moving stories of the 2006 eruption survivors.'
    ],
    bestTime: '07:00 AM to 09:00 AM when morning mist adds an eerie atmosphere to the volcanic boulder field.',
    weather: {
      temp: '23°C',
      condition: 'Cool Mountain Air',
      status: 'Enjoy pleasant tropical weather at Kaliadem Batu Alien.'
    },
    latitude: -7.6114,
    longitude: 110.4526,
    reviews: [
      { id: 'r-batu-alien-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-batu-alien-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-batu-alien-1',
        name: 'Merapi Hotel & Lava Tour',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=600',
        rating: 4.5,
        price: 'IDR 480,000 / night',
        distance: '2.5 km from Batu Alien',
        description: 'A cozy mountain lodge offering direct Merapi views, a volcanic stone garden, and easy access to lava tour Jeep departure points.',
        address: 'Kaliurang, Hargobinangun, Sleman',
        promotion: 'Free guided Merapi sunrise walk',
        phone: '+62 274 899000',
        coordinates: { lat: -7.6090, lng: 110.4510 }
      },
      {
        id: 'p-batu-alien-2',
        name: 'Kopi Merapi Volcanic Cafe',
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600',
        rating: 4.6,
        price: 'IDR 15,000 - 35,000 / person',
        distance: '1.0 km from Batu Alien',
        description: 'A unique cafe built from volcanic stone ruins, serving robust Merapi-grown arabica coffee while you gaze directly at the volcano\'s summit.',
        address: 'Kepuharjo, Cangkringan, Sleman',
        promotion: 'Free volcanic rock souvenir with any coffee order',
        phone: '+62 813-8888-1111',
        coordinates: { lat: -7.6105, lng: 110.4530 }
      }
    ],
    faqs: [
      { q: 'Is the area safe given Merapi is still active?', a: 'The site is within a monitored zone and local authorities maintain safety protocols. Follow all posted warnings and evacuation route signs.' },
      { q: 'Can I see the Batu Alien up close?', a: 'Yes, there is a clearly marked pathway leading directly to the famous rock formation with interpretive signage explaining the eruption history.' }
    ]
  },
  {
    id: 'blue-lagoon-jogja',
    name: 'Blue Lagoon Jogja',
    tagline: 'A Turquoise Swimming Hole Hidden in Bamboo Groves',
    category: 'nature',
    location: 'Dalem, Widodomartani, Ngemplak, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Pemandian_Alam_Blue_Lagoon.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kolam_Pemandian_alam_Blue_Lagoon_Widodomartani.jpg'
    ],
    rating: 4.5,
    reviewCount: 2780,
    description: 'A pristine natural spring-fed swimming hole with crystal-clear turquoise water tucked away in a lush bamboo forest, featuring rocky cliff ledges perfect for cliff-jumping and serene pools ideal for cooling off in the tropical heat.',
    story: 'Blue Lagoon is fed by underground volcanic springs originating from Mount Merapi, which filter through layers of volcanic rock to create its remarkably clear, cool turquoise water. Locals have bathed in these healing waters for generations, believing the mineral-rich springs carry curative properties blessed by the mountain spirits.',
    ticketPrice: 'IDR 15,000',
    openingHours: '08:00 AM - 05:00 PM Daily',
    facilities: ['Natural Swimming Pools', 'Cliff-Jumping Platforms', 'Changing Rooms', 'Warung Stalls', 'Bamboo Shaded Areas'],
    travelTips: [
      'Arrive early (before 09:00 AM) to enjoy the pools before day-tripper crowds arrive on weekends.',
      'Bring your own towel and waterproof phone case—the natural rock edges can be slippery.',
      'There are multiple pool levels; the lower pool is deepest and best for cliff-jumping while upper pools are calmer for relaxing.'
    ],
    bestTime: '08:00 AM to 11:00 AM daily for the clearest water and most peaceful atmosphere.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Blue Lagoon Jogja.'
    },
    latitude: -7.7024,
    longitude: 110.4392,
    reviews: [
      { id: 'r-blue-lagoon-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-blue-lagoon-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-blue-lagoon-1',
        name: 'Bamboo River Cottages',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=600',
        rating: 4.6,
        price: 'IDR 420,000 / night',
        distance: '0.5 km from Blue Lagoon',
        description: 'Eco-friendly bamboo cottages set along a quiet riverbank, offering a nature-immersive stay with open-air showers and traditional Javanese breakfast.',
        address: 'Widodomartani, Ngemplak, Sleman',
        promotion: 'Free morning nature walk with birdwatching',
        phone: '+62 813-6666-9999',
        coordinates: { lat: -7.7015, lng: 110.4380 }
      },
      {
        id: 'p-blue-lagoon-2',
        name: 'Warung Tepi Lagoon',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600',
        rating: 4.4,
        price: 'IDR 15,000 - 30,000 / person',
        distance: '0.3 km from Blue Lagoon',
        description: 'A riverside warung serving fresh es kelapa muda (young coconut ice) and simple but delicious Javanese rice packets after your swim.',
        address: 'Dalem, Widodomartani, Sleman',
        promotion: 'Buy one get one free es kelapa before noon',
        phone: '+62 812-7777-4444',
        coordinates: { lat: -7.7020, lng: 110.4395 }
      }
    ],
    faqs: [
      { q: 'Is the water safe for swimming?', a: 'Yes, the water is fed by natural mountain springs and is clean and clear. The pools are generally shallow enough for confident swimmers, but always check depth markers near cliff-jump spots.' },
      { q: 'Is there an entry fee for cameras?', a: 'A small additional fee may apply for professional cameras. Smartphone photography is included with the general admission ticket.' }
    ]
  },
  {
    id: 'agro-wisata-bhumi-merapi',
    name: 'Agro Wisata Bhumi Merapi',
    tagline: 'A Santorini Dream on the Slopes of Merapi',
    category: 'family',
    location: 'Jl. Kaliurang KM. 20, Hargobinangun, Pakem, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/Bhumi_Merapi_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bhumi_Merapi_Landscape.jpg'
    ],
    rating: 4.5,
    reviewCount: 2960,
    description: 'A family-friendly agro-tourism park featuring charming Santorini-inspired white and blue architecture, educational hydroponic gardens, a mini zoo with friendly animals, and an adventure maze—creating a delightful Mediterranean escape on the slopes of Mount Merapi.',
    story: 'Bhumi Merapi was created by a local family who transformed their volcanic hillside farmland into a whimsical park that combines Javanese agriculture with global architectural inspiration. The Santorini replica section was built entirely using locally sourced volcanic stone and has become one of the most photographed spots in Sleman.',
    ticketPrice: 'IDR 30,000',
    openingHours: '09:00 AM - 05:00 PM Daily (Weekends open from 08:00 AM)',
    facilities: ['Santorini Photo Zones', 'Hydroponic Greenhouse Tours', 'Mini Petting Zoo', 'Adventure Maze', 'Outdoor Playground'],
    travelTips: [
      'Visit on a weekday morning for the smallest crowds and the best photo opportunities at the Santorini replica area.',
      'Check the daily schedule for feeding times at the mini zoo—kids love the hands-on animal encounter sessions.',
      'The on-site cafe serves excellent Javanese coffee for parents while children explore the playground area.'
    ],
    bestTime: '09:00 AM to 11:00 AM or 03:30 PM to 05:00 PM to avoid the midday heat.',
    weather: {
      temp: '26°C',
      condition: 'Mountain Breeze',
      status: 'Enjoy pleasant tropical weather at Agro Wisata Bhumi Merapi.'
    },
    latitude: -7.6253,
    longitude: 110.4215,
    reviews: [
      { id: 'r-bhumi-merapi-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-bhumi-merapi-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-bhumi-1',
        name: 'Royal Kedu Heritage Hotel',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=600',
        rating: 4.7,
        price: 'IDR 820,000 / night',
        distance: '3.5 km from Bhumi Merapi',
        description: 'A colonial-era plantation-style hotel set among lush gardens with Merapi views, offering refined Javanese hospitality and an infinity pool.',
        address: 'Jl. Kaliurang Km 18, Sleman',
        promotion: 'Free agro-tourism excursion for guests',
        phone: '+62 274 891234',
        coordinates: { lat: -7.6280, lng: 110.4200 }
      },
      {
        id: 'p-bhumi-2',
        name: 'Rumah Makan Merapi View',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600',
        rating: 4.5,
        price: 'IDR 25,000 - 55,000 / person',
        distance: '1.2 km from Bhumi Merapi',
        description: 'A family-run restaurant with a panoramic terrace facing Mount Merapi, specializing in traditional nasi liwet and grilled river fish.',
        address: 'Jl. Kaliurang Km 19, Sleman',
        promotion: 'Free appetizer for families with children',
        phone: '+62 813-5555-6666',
        coordinates: { lat: -7.6245, lng: 110.4225 }
      }
    ],
    faqs: [
      { q: 'Is it suitable for young children?', a: 'Absolutely! The park has a dedicated playground, gentle petting zoo, and flat easy-to-walk paths throughout. Strollers can be maneuvered in most areas.' },
      { q: 'Can I buy hydroponic produce to take home?', a: 'Yes, the on-site hydroponic greenhouse sells fresh lettuce, herbs, and cherry tomatoes grown on the property at very reasonable prices.' }
    ]
  },
  {
    id: 'ledok-sambi',
    name: 'Ledok Sambi',
    tagline: 'Riverside Family Fun in a Shaded Valley',
    category: 'family',
    location: 'Jl. Kaliurang KM. 19.2, Sambi, Pakembinangun, Pakem, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/8/82/Ledoksambi.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ledok_Sambi_Ecopark_Yogyakarta.jpg'
    ],
    rating: 4.7,
    reviewCount: 3250,
    description: 'A beloved riverside family recreation park nestled in a cool, shaded valley along the Kaliurang highlands, offering calm shallow river pools for swimming, bamboo picnic gazebos over the water, flying fox zip lines, and traditional Javanese comfort food.',
    story: 'Ledok Sambi was originally a quiet village riverside used by local farmers to cool off after working the fields. In the early 2000s, the community transformed it into a family ecopark, preserving the natural river ecosystem while creating a welcoming space for visitors. The name "Ledok" means valley in Javanese, and "Sambi" refers to the native Sambi trees lining the riverbanks.',
    ticketPrice: 'Free Entry (Voluntary Donation)',
    openingHours: '09:00 AM - 04:00 PM Daily',
    facilities: ['Natural River Swimming Pools', 'Bamboo Riverside Gazebos', 'Flying Fox Zip Line', 'Traditional Lesehan Dining', 'Children\'s Playground'],
    travelTips: [
      'Bring a change of clothes and water shoes—the river pools have smooth rocky bottoms that can be slippery.',
      'Reserve a bamboo gazebo early on weekends; they fill up quickly during school holidays.',
      'Try the mie ayam and es dawet served at the on-site lesehan stalls for an authentic riverside dining experience.'
    ],
    bestTime: '09:00 AM to 02:00 PM daily when all activities are running and the valley shade is most refreshing.',
    weather: {
      temp: '25°C',
      condition: 'Cool Valley Breeze',
      status: 'Enjoy pleasant tropical weather at Ledok Sambi.'
    },
    latitude: -7.6384,
    longitude: 110.4182,
    reviews: [
      { id: 'r-ledok-sambi-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-ledok-sambi-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-ledok-1',
        name: 'Kaliurang Hillside Resort',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600',
        rating: 4.6,
        price: 'IDR 550,000 / night',
        distance: '2.0 km from Ledok Sambi',
        description: 'A hillside resort with clean modern chalets set among fruit trees, offering cool mountain air and direct Merapi volcano views from every room.',
        address: 'Jl. Kaliurang Km 20, Hargobinangun, Sleman',
        promotion: 'Free guided morning trek to Kaliurang viewpoint',
        phone: '+62 274 892345',
        coordinates: { lat: -7.6365, lng: 110.4195 }
      },
      {
        id: 'p-ledok-2',
        name: 'Lesehan Mbok Jamu',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600',
        rating: 4.7,
        price: 'IDR 20,000 - 40,000 / person',
        distance: '0.3 km from Ledok Sambi',
        description: 'A family-run traditional Javanese lesehan serving home-cooked nasi Campur, fresh tempeh, and fragrant herbal jamu drinks on bamboo mats overlooking the river.',
        address: 'Sambi, Pakembinangun, Pakem, Sleman',
        promotion: 'Free jamu kunyit welcome drink',
        phone: '+62 812-1111-8888',
        coordinates: { lat: -7.6390, lng: 110.4175 }
      }
    ],
    faqs: [
      { q: 'Is the river safe for small children?', a: 'Yes, the main swimming areas have very shallow, slow-moving water with sandy and smooth rocky bottoms. Lifeguards are present during peak hours.' },
      { q: 'Are there designated picnic areas?', a: 'Yes, bamboo gazebos line the riverbank and can be used on a first-come basis. Weekend visitors are advised to arrive early to secure a spot.' }
    ]
  },
  {
    id: 'desa-wisata-pentingsari',
    name: 'Desa Wisata Pentingsari',
    tagline: 'Living Javanese Heritage in an Idyllic Mountain Village',
    category: 'heritage',
    location: 'Pentingsari, Umbulharjo, Cangkringan, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/be/BBPPM_Yogyakarta.jpg'
    ],
    rating: 4.6,
    reviewCount: 2340,
    description: 'An internationally acclaimed model eco-tourism village nestled on the slopes of Mount Merapi, offering visitors authentic immersive Javanese rural life experiences including traditional dance lessons, batik-making workshops, rice paddy farming, and warm family homestays.',
    story: 'Pentingsari has been recognized by the UNWTO as one of the world\'s best tourism villages. Despite being heavily impacted by Merapi\'s devastating 2010 eruption, the resilient community rebuilt and transformed their village into a living cultural museum. Every household participates in hosting visitors, making the entire village a warm, open-air cultural experience.',
    ticketPrice: 'Varies (Activity Packages)',
    openingHours: '08:00 AM - 05:00 PM Daily (Homestay check-in flexible)',
    facilities: ['Cultural Activity Packages', 'Homestay Accommodation', 'Batik-Making Workshops', 'Traditional Dance Classes', 'Organic Rice Farm Experience'],
    travelTips: [
      'Book a full-day activity package in advance to experience the complete village immersion from morning rice farming to evening gamelan music.',
      'The homestay experience is highly recommended—waking up to the sounds of village roosters and enjoying a home-cooked Javanese breakfast is unforgettable.',
      'Bring cash for purchasing handmade batik and organic produce directly from the village farmers as souvenirs.'
    ],
    bestTime: 'Morning to afternoon for the full range of cultural activities. Homestays are magical any time of year.',
    weather: {
      temp: '25°C',
      condition: 'Mountain Cool',
      status: 'Enjoy pleasant tropical weather at Desa Wisata Pentingsari.'
    },
    latitude: -7.6186,
    longitude: 110.4382,
    reviews: [
      { id: 'r-pentingsari-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time.' },
      { id: 'r-pentingsari-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.8, date: '2026-07-02', comment: 'Highly recommend visiting! The views and cultural significance are incredible.' }
    ],
    partners: [
      {
        id: 'p-pentingsari-1',
        name: 'Pentingsari Homestay Network',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=600',
        rating: 4.8,
        price: 'IDR 200,000 - 350,000 / night',
        distance: 'On-Site',
        description: 'Authentic family-run Javanese homestays with clean, comfortable rooms in traditional wooden joglo houses, including home-cooked meals and warm village hospitality.',
        address: 'Pentingsari, Cangkringan, Sleman',
        promotion: 'Free morning rice farming activity with homestay booking',
        phone: '+62 812-2222-7777',
        coordinates: { lat: -7.6190, lng: 110.4375 }
      },
      {
        id: 'p-pentingsari-2',
        name: 'Batik Pentingsari Workshop',
        category: 'souvenir',
        image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=600',
        rating: 4.7,
        price: 'IDR 75,000 - 200,000 per workshop',
        distance: '0.2 km from village center',
        description: 'Hands-on traditional batik-making workshops where you create your own hand-drawn batik cloth under the guidance of skilled village artisans using natural plant-based dyes.',
        address: 'Pentingsari Village Center, Cangkringan, Sleman',
        promotion: 'Keep your handmade batik creation as a souvenir',
        phone: '+62 813-3333-6666',
        coordinates: { lat: -7.6182, lng: 110.4388 }
      }
    ],
    faqs: [
      { q: 'How far in advance should I book a homestay?', a: 'At least 1-2 weeks in advance during peak season (June-August and holiday weekends). Off-season bookings can usually be made a few days ahead.' },
      { q: 'Is the village safe given its proximity to Mount Merapi?', a: 'Yes, the village has modern evacuation routes and early warning systems in place. The community is well-prepared and the site is within the government-monitored safe zone.' }
    ]
  }
];
