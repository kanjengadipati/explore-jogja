// Batch 4: IDs 62-80
import { Destination } from './types';

const MOCK_REVIEWS = [
  {
    id: 'r1',
    userName: 'Sophia Laurent',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    rating: 5,
    date: '2026-06-15',
    comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time. The Javanese hospitality was unparalleled.'
  },
  {
    id: 'r2',
    userName: 'Yuki Tanaka',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    rating: 4.8,
    date: '2026-07-02',
    comment: 'Watching the sunset over these structures is a lifetime memory. Highly recommend hiring a local certified guide!'
  },
  {
    id: 'r3',
    userName: 'Budi Santoso',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    rating: 5,
    date: '2026-07-10',
    comment: 'The architectural precision is stunning. Must visit the nearby local cafes afterwards for traditional kopi klotok!'
  }
];

export const BATCH_4_DESTINATIONS: Destination[] = [
  // ID 62 - HeHa Sky View
  {
    id: 'heha-sky-view',
    name: 'HeHa Sky View',
    tagline: 'Hilltop Nights Painted in City Lights',
    category: 'family',
    location: 'Patuk, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/HeHa_Sky_View-80.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/HeHa_Sky_View-99.jpg'
    ],
    rating: 4.5,
    reviewCount: 3240,
    description: 'A modern hilltop recreation park perched above Pathuk, featuring a glass sky bridge, giant hot air balloon photo spots, and a suspended restaurant overlooking the glittering city lights of Yogyakarta.',
    story: 'HeHa Sky View was built on the ridge of Pathuk hill, a location long revered by locals as a vantage point to watch over the kingdom. The name "HeHa" is derived from a local Javanese expression of wonder, capturing the gasp visitors make when the panoramic night view first reveals itself.',
    ticketPrice: 'IDR 20,000',
    openingHours: '03:00 PM - 09:00 PM Daily',
    facilities: ['Glass Sky Bridge', 'Suspended Restaurant', 'Photo Spots', 'Parking Area', 'Restrooms'],
    travelTips: [
      'Arrive before sunset at around 4:00 PM to get the best photo spots before the evening crowds.',
      'Weekday visits are significantly less crowded than weekends.',
      'Bring a light jacket as hilltop winds can be cool after dark.'
    ],
    bestTime: 'Late afternoon to evening for golden sunset transitioning into city lights',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at HeHa Sky View.'
    },
    latitude: -7.8486,
    longitude: 110.4859,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'hs-p1',
        name: 'Patuk Hilltop Homestay',
        category: 'hotel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Javanese_Joglo_House.jpg',
        rating: 4.6,
        price: 'IDR 350,000 / night',
        distance: '2.5 km from HeHa Sky View',
        description: 'A cozy family-run Javanese homestay nestled among rice terraces, offering authentic local hospitality and complimentary herbal jamu drinks.',
        address: 'Jl. Patuk-Dlingo, Patuk, Gunungkidul',
        coordinates: { lat: -7.8450, lng: 110.4830 }
      }
    ],
    faqs: [
      { q: 'Is there an age limit for the glass bridge?', a: 'Children under 10 must be accompanied by an adult. The bridge is designed to hold significant weight and is regularly inspected for safety.' }
    ]
  },

  // ID 63 - HeHa Ocean View
  {
    id: 'heha-ocean-view',
    name: 'HeHa Ocean View',
    tagline: 'Where White Cliffs Meet the Endless Sea',
    category: 'family',
    location: 'Girikarto, Panggang, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cliff_ocean_view_Indonesia.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pantai_Nglambor_2.jpg/1280px-Pantai_Nglambor_2.jpg'
    ],
    rating: 4.6,
    reviewCount: 2870,
    description: 'A trendy coastal cliffside destination in Gunungkidul offering dozens of Mediterranean-inspired white photo spots perched dramatically above the crashing waves of the Indian Ocean.',
    story: 'The cliffs along this stretch of Gunungkidul coastline have been home to fishing communities for generations. Local legend speaks of Nyai Roro Kidul, the mystical Queen of the Southern Sea, who is said to wander these very cliffs on moonlit nights, luring the unwary with her enchanting beauty.',
    ticketPrice: 'IDR 20,000',
    openingHours: '08:00 AM - 06:00 PM Daily',
    facilities: ['Ocean View Decks', 'Mediterranean Photo Spots', 'Cafe', 'Parking Area', 'Restrooms'],
    travelTips: [
      'Visit in the late afternoon for the best golden-hour ocean photography.',
      'Wear comfortable footwear as the cliff paths can be uneven.',
      'Bring sunscreen and sunglasses as the coastal sun can be intense.'
    ],
    bestTime: 'Late afternoon from 04:00 PM for spectacular sunset views over the Indian Ocean',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at HeHa Ocean View.'
    },
    latitude: -8.1189,
    longitude: 110.4561,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ho-p1',
        name: 'Gunungkidul Beach Resort',
        category: 'hotel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Indonesian_beach_resort.jpg/1280px-Indonesian_beach_resort.jpg',
        rating: 4.5,
        price: 'IDR 500,000 / night',
        distance: '3.8 km from HeHa Ocean View',
        description: 'A charming beachfront resort offering comfortable rooms with stunning ocean views and easy access to Gunungkidul\'s hidden beaches.',
        address: 'Jl. Panggang-Gunungkidul, Girikarto',
        coordinates: { lat: -8.1150, lng: 110.4520 }
      }
    ],
    faqs: [
      { q: 'Can I swim near the cliffs?', a: 'No, swimming is not permitted near the cliff area due to strong currents. The venue is designed for viewing and photography purposes.' }
    ]
  },

  // ID 64 - Bukit Paralayang Watugupit
  {
    id: 'bukit-paralayang-watugupit',
    name: 'Bukit Paralayang Watugupit',
    tagline: 'Soar Above the Southern Ocean Waves',
    category: 'nature',
    location: 'Purwosari, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Bukit_Paralayang_-_Pantai_Parangtritits.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Paralayang_Watugupit%2C_2022-01-03.jpg'
    ],
    rating: 4.8,
    reviewCount: 4150,
    description: 'A premier paragliding launch point perched on a hilltop directly above Pantai Parangtritis, offering breathtaking tandem flights and panoramic views of the vast southern ocean coastline.',
    story: 'The hill of Watugupit has been used as a paragliding site since the early 2000s. Local pilots discovered that the unique coastal wind patterns here, created by the meeting of the Indian Ocean breeze and warm air rising from the black volcanic sands, create nearly perfect thermals for extended flights along the southern cliffs.',
    ticketPrice: 'IDR 5,000 (Entrance) / IDR 350,000 (Tandem Flight)',
    openingHours: '08:00 AM - 05:00 PM Daily (Weather Dependent)',
    facilities: ['Paragliding Launch Pad', 'Tandem Flight Service', 'Observation Deck', 'Parking Area', 'Warung'],
    travelTips: [
      'Tandem flights are the best way to experience paragliding without a license. Book early as slots fill up quickly.',
      'Bring a GoPro or phone with a secure strap to capture the aerial views.',
      'Visit in the late afternoon for sunset tandem flights with the most dramatic light.'
    ],
    bestTime: 'Late afternoon from 04:30 PM for sunset flights with golden light over Parangtritis',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Bukit Paralayang Watugupit.'
    },
    latitude: -8.0263,
    longitude: 110.3415,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'bp-p1',
        name: 'Jogja Paragliding Club',
        category: 'guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bukit_Paralayang_-_Pantai_Parangtritits.jpg/1280px-Bukit_Paralayang_-_Pantai_Parangtritits.jpg',
        rating: 4.9,
        price: 'IDR 350,000 / tandem flight',
        distance: 'On-Site',
        description: 'The official paragliding operators at Watugupit with experienced licensed pilots and full safety equipment for tandem flights.',
        address: 'Bukit Paralayang, Watugupit, Purwosari, Gunungkidul',
        coordinates: { lat: -8.0260, lng: 110.3410 }
      }
    ],
    faqs: [
      { q: 'Do I need prior experience for tandem flights?', a: 'No experience is needed. A certified pilot handles all flight controls while you enjoy the views. A brief 10-minute safety briefing is provided before takeoff.' }
    ]
  },

  // ID 65 - Pantai Wohkudu
  {
    id: 'pantai-wohkudu',
    name: 'Pantai Wohkudu',
    tagline: 'A Hidden Cove Between Towering Green Cliffs',
    category: 'beach',
    location: 'Girikarto, Panggang, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Wohkudu_(1).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Wohkudu_(2).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Wohkudu_(3).jpg'
    ],
    rating: 4.6,
    reviewCount: 1890,
    description: 'A serene hidden beach squeezed between two towering verdant cliffs, accessible only by a short jungle trek. Its secluded atmosphere makes it a perfect escape for wild camping under the stars.',
    story: 'According to local Gunungkidul folklore, Wohkudu was once a secret meeting place for royal messengers traveling between the Sultan\'s coastal outposts. The narrow passage between the cliffs was believed to be guarded by spirits of the forest, protecting travelers who approached with pure intentions.',
    ticketPrice: 'IDR 10,000',
    openingHours: '06:00 AM - 05:00 PM Daily',
    facilities: ['Camping Ground', 'Basic Restrooms', 'Warung', 'Trekking Path'],
    travelTips: [
      'Bring your own camping gear and food as facilities are very basic.',
      'Start the trek early in the morning to avoid the midday heat on the trail.',
      'The beach is best visited during dry season as the trail can become slippery in rain.'
    ],
    bestTime: 'Dry season months for camping, or early morning for day visits',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Wohkudu.'
    },
    latitude: -8.1162,
    longitude: 110.4482,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pw-p1',
        name: 'Gunungkidul Adventure Guides',
        category: 'guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Indonesian_tropical_forest.jpg/1280px-Indonesian_tropical_forest.jpg',
        rating: 4.7,
        price: 'IDR 150,000 / guide',
        distance: '1.5 km from Pantai Wohkudu',
        description: 'Local guides who specialize in trekking to hidden beaches throughout Gunungkidul, with deep knowledge of jungle trails and coastal geography.',
        address: 'Panggang, Gunungkidul',
        coordinates: { lat: -8.1140, lng: 110.4460 }
      }
    ],
    faqs: [
      { q: 'Is the trek difficult?', a: 'The trek is moderate, about 15 minutes through a forested path with some uneven terrain. Comfortable footwear with good grip is recommended.' }
    ]
  },

  // ID 66 - Puncak Segoro
  {
    id: 'puncak-segoro',
    name: 'Puncak Segoro',
    tagline: 'Five-Tiered Clifftop Villas Above the Sea',
    category: 'nature',
    location: 'Girikarto, Panggang, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian_cliff_ocean_view.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tanjung_Biyak_-_Gunungkidul.jpg/1280px-Tanjung_Biyak_-_Gunungkidul.jpg'
    ],
    rating: 4.5,
    reviewCount: 2150,
    description: 'A multi-tiered cliffside resort complex perched on five levels of dramatic limestone bluffs, featuring rustic wooden villas and restaurants with sweeping panoramic views of the deep blue Indian Ocean.',
    story: 'The name "Puncak Segoro" translates to "Peak of the Sea" in Javanese, reflecting the ancient belief that these cliffs were the highest point where land met the ocean. Fishermen from nearby villages would climb here to read the winds and wave patterns before venturing out to sea.',
    ticketPrice: 'IDR 25,000',
    openingHours: '08:00 AM - 06:00 PM Daily',
    facilities: ['Cliffside Restaurant', 'Wooden Villa Stays', 'Ocean View Decks', 'Parking Area', 'Warung'],
    travelTips: [
      'Visit during late afternoon for the best sunset views from the upper tiers.',
      'Book a villa in advance during weekends as they fill up quickly.',
      'The walk between tiers involves steep stairs, so wear comfortable shoes.'
    ],
    bestTime: 'Late afternoon from 04:00 PM for stunning sunset over the Indian Ocean',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Puncak Segoro.'
    },
    latitude: -8.1174,
    longitude: 110.4512,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ps-p1',
        name: 'Puncak Segoro Resort',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian_cliff_ocean_view.jpg',
        rating: 4.5,
        price: 'IDR 600,000 / night',
        distance: 'On-Site',
        description: 'Rustic wooden cliffside villas with panoramic ocean views, traditional Javanese hospitality, and a restaurant serving fresh seafood caught by local fishermen.',
        address: 'Girikarto, Panggang, Gunungkidul',
        coordinates: { lat: -8.1170, lng: 110.4510 }
      }
    ],
    faqs: [
      { q: 'Can I stay overnight?', a: 'Yes, Puncak Segoro offers wooden villa accommodation with ocean views. Advance booking is strongly recommended, especially on weekends.' }
    ]
  },

  // ID 67 - Teras Kaca Pantai Nguluran
  {
    id: 'teras-kaca-pantai-nguluran',
    name: 'Teras Kaca Pantai Nguluran',
    tagline: 'Walk on Glass Above the Crashing Waves',
    category: 'family',
    location: 'Bolang, Girikarto, Panggang, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Glass_ledge_cliff_ocean.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Pemandangan_Pantai_Timang_dan_Pulau_Panjang.jpg/1280px-Pemandangan_Pantai_Timang_dan_Pulau_Panjang.jpg'
    ],
    rating: 4.4,
    reviewCount: 2560,
    description: 'The first transparent glass viewing platform suspended over the southern ocean cliffs of Gunungkidul, offering a heart-pounding experience of floating above the roaring waves far below.',
    story: 'The concept for the glass terrace was inspired by similar structures in China and Korea but adapted with distinctly Javanese architectural elements. Local craftsmen from Gunungkidul used traditional joinery techniques alongside modern reinforced glass, creating a structure that honors both tradition and innovation.',
    ticketPrice: 'IDR 15,000',
    openingHours: '08:00 AM - 05:00 PM Daily',
    facilities: ['Glass Platform', 'Photo Spots', 'Viewing Deck', 'Warung', 'Restrooms'],
    travelTips: [
      'Visit on a weekday morning for fewer crowds and the best photo opportunities.',
      'If you have a fear of heights, start with the inner platform before moving to the edge.',
      'Pair this visit with nearby HeHa Ocean View for a full day trip along the coast.'
    ],
    bestTime: 'Morning or late afternoon for softer light and cooler temperatures on the glass',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Teras Kaca Pantai Nguluran.'
    },
    latitude: -8.1192,
    longitude: 110.4542,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'tk-p1',
        name: 'Nguluran Coastal Homestay',
        category: 'hotel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Javanese_village_house.jpg/1280px-Javanese_village_house.jpg',
        rating: 4.4,
        price: 'IDR 250,000 / night',
        distance: '0.8 km from Teras Kaca',
        description: 'A simple family homestay in the fishing village of Bolang, offering a genuine taste of coastal Javanese village life.',
        address: 'Bolang, Girikarto, Panggang, Gunungkidul',
        coordinates: { lat: -8.1185, lng: 110.4530 }
      }
    ],
    faqs: [
      { q: 'Is the glass platform safe?', a: 'Yes, the platform uses multi-layered reinforced safety glass rated for extreme weight loads and is inspected daily by staff.' }
    ]
  },

  // ID 68 - Hutan Wanagama
  {
    id: 'hutan-wanagama',
    name: 'Hutan Wanagama',
    tagline: 'A Legacy of Reforestation and Wild Beauty',
    category: 'nature',
    location: 'Playen, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/6/68/Wanagama_Nusantara.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Beranda_Museum_Wanagama.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lumpang_kayu_Museum_Wanagama.jpg'
    ],
    rating: 4.5,
    reviewCount: 1780,
    description: 'A vast historic reforestation forest managed by Universitas Gadjah Mada, featuring ancient suspension bridges, crystal-clear rivers, and a rich diversity of tropical flora and fauna deep in the Gunungkidul highlands.',
    story: 'Hutan Wanagama was established in 1967 as an experimental reforestation project by UGM to combat the severe deforestation that had turned much of Gunungkidul into barren limestone. Over decades, it has become a symbol of environmental recovery, with researchers discovering several previously unknown orchid species within its restored canopy.',
    ticketPrice: 'IDR 5,000',
    openingHours: '07:00 AM - 04:00 PM Daily',
    facilities: ['Suspension Bridge', 'Nature Trails', 'Visitor Center', 'Research Museum', 'Parking Area'],
    travelTips: [
      'Wear long pants and closed shoes as some trails pass through dense undergrowth.',
      'Bring insect repellent, especially during the wet season.',
      'Combine your visit with a trip to nearby Gunung Api Purba Nglanggeran for a full nature day.'
    ],
    bestTime: 'Early morning from 07:00 AM when the forest is coolest and birdwatching is best',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Hutan Wanagama.'
    },
    latitude: -7.9152,
    longitude: 110.5312,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'hw-p1',
        name: 'Wanagama Eco Lodge',
        category: 'hotel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wanagama_Nusantara.jpg/1280px-Wanagama_Nusantara.jpg',
        rating: 4.5,
        price: 'IDR 400,000 / night',
        distance: 'On-Site',
        description: 'An eco-lodge within the Wanagama forest reserve, offering sustainable treehouse-style accommodation surrounded by tropical wildlife.',
        address: 'Hutan Wanagama, Playen, Gunungkidul',
        coordinates: { lat: -7.9150, lng: 110.5310 }
      }
    ],
    faqs: [
      { q: 'Are guided tours available?', a: 'Yes, local guides from the Wanagama management offer guided nature walks and can arrange educational tours about the reforestation history.' }
    ]
  },

  // ID 69 - Desa Wisata Nglanggeran
  {
    id: 'desa-wisata-nglanggeran',
    name: 'Desa Wisata Nglanggeran',
    tagline: 'Where Cacao Beans Tell Ancient Mountain Stories',
    category: 'heritage',
    location: 'Patuk, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/bb/Bukit_Nglanggeran.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Nglanggeran_volcano_in_Yogyakarta_in_Indonesia.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bukit_purba_dibalik_embung_nglanggeran.jpg'
    ],
    rating: 4.8,
    reviewCount: 3120,
    description: 'An award-winning UNWTO-recognized eco-tourism village at the foot of an ancient volcano, offering hands-on traditional chocolate-making workshops, gamelan performances, and authentic Javanese village life experiences.',
    story: 'Nglanggeran village sits at the base of Gunung Api Purba, a 60-million-year-old ancient volcano. The community earned international recognition from the UN World Tourism Organization for transforming their once-impoverished village into a thriving cultural tourism destination, proving that preserving tradition and modern development can coexist beautifully.',
    ticketPrice: 'Voluntary Donation / Package-based',
    openingHours: '08:00 AM - 04:00 PM Daily',
    facilities: ['Chocolate Workshop', 'Gamelan Stage', 'Cultural Tours', 'Homestay', 'Warung'],
    travelTips: [
      'Book a chocolate-making workshop in advance for the full hands-on experience.',
      'Stay overnight in a local homestay to experience authentic Javanese village life.',
      'Visit the ancient volcano viewpoint early morning for misty mountain panoramas.'
    ],
    bestTime: 'Morning for workshops and cultural activities, late afternoon for volcano viewpoints',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Desa Wisata Nglanggeran.'
    },
    latitude: -7.8441,
    longitude: 110.5412,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'dn-p1',
        name: 'Nglanggeran Homestay Network',
        category: 'hotel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bukit_Nglanggeran.jpg/1280px-Bukit_Nglanggeran.jpg',
        rating: 4.8,
        price: 'IDR 200,000 / night',
        distance: 'On-Site',
        description: 'A network of traditional Javanese homestays run by local families, offering authentic village meals, cultural immersion, and guided treks to the ancient volcano.',
        address: 'Desa Wisata Nglanggeran, Patuk, Gunungkidul',
        coordinates: { lat: -7.8440, lng: 110.5410 }
      }
    ],
    faqs: [
      { q: 'Can I buy the chocolate products?', a: 'Yes, the village produces artisanal single-origin cacao products including chocolate bars, cacao nibs, and cocoa powder available for purchase at the workshop.' }
    ]
  },

  // ID 70 - Mangrove Kadilangu
  {
    id: 'mangrove-kadilangu',
    name: 'Mangrove Kadilangu',
    tagline: 'A Tranquil River of Green Mangrove Canopies',
    category: 'nature',
    location: 'Jangkaran, Temon, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Hutan_Mangrove_Kulon_Progo_1.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Hutan_Mangrove_Kulon_Progo_6.jpg'
    ],
    rating: 4.3,
    reviewCount: 1450,
    description: 'A coastal mangrove conservation area in Kulon Progo featuring scenic bamboo suspension walkways, observation towers, and romantic love bridges winding through lush riverine mangrove forests.',
    story: 'The Kadilangu mangrove forest was originally established by local villagers to protect their coastline from erosion and storm surges. Over time, the community recognized the ecological tourism potential and built bamboo walkways through the trees, transforming a conservation effort into one of Kulon Progo\'s most peaceful natural retreats.',
    ticketPrice: 'IDR 5,000',
    openingHours: '08:00 AM - 05:00 PM Daily',
    facilities: ['Bamboo Walkways', 'Observation Tower', 'Love Bridge', 'Boat Rides', 'Restrooms'],
    travelTips: [
      'Visit in the late afternoon for cooler temperatures and beautiful golden light through the mangroves.',
      'Bring mosquito repellent as the mangrove area can be buggy.',
      'Combine with a visit to nearby Pantai Glagah for a full Kulon Progo coastal day.'
    ],
    bestTime: 'Late afternoon from 03:30 PM for cooler weather and beautiful light',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Mangrove Kadilangu.'
    },
    latitude: -7.8992,
    longitude: 110.0152,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'mk-p1',
        name: 'Kadilangu Eco Tours',
        category: 'guide',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hutan_Mangrove_Kulon_Progo_1.jpg',
        rating: 4.4,
        price: 'IDR 100,000 / person',
        distance: 'On-Site',
        description: 'Guided mangrove boat tours and nature walks led by local conservation volunteers, including birdwatching and ecological education.',
        address: 'Jangkaran, Temon, Kulon Progo',
        coordinates: { lat: -7.8990, lng: 110.0150 }
      }
    ],
    faqs: [
      { q: 'Are boat rides available?', a: 'Yes, traditional wooden boats are available for guided tours through the mangrove channels at an additional fee.' }
    ]
  },

  // ID 71 - Ayunan Langit Watu Jaran
  {
    id: 'ayunan-langit-watu-jaran',
    name: 'Ayunan Langit Watu Jaran',
    tagline: 'Swing on the Edge of a Menoreh Cliff',
    category: 'nature',
    location: 'Sabrangkidul, Purwosari, Girimulyo, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cliff_edge_swing_Java.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Menoreh_hills_panorama.jpg/1280px-Menoreh_hills_panorama.jpg'
    ],
    rating: 4.6,
    reviewCount: 2340,
    description: 'An adrenaline-pumping giant swing suspended on the edge of a dramatic Menoreh hillside cliff, offering breathtaking panoramic views of terraced valleys and the distant Java Sea.',
    story: 'The Watu Jaran swing was built at a location where local Javanese mystics once practiced meditation. The name "Watu Jaran" means "horse stone" in Javanese, referring to a large boulder said to resemble a galloping horse, which ancient riders believed would grant them safe passage through the treacherous Menoreh terrain.',
    ticketPrice: 'IDR 30,000',
    openingHours: '08:00 AM - 04:00 PM Daily',
    facilities: ['Giant Cliff Swing', 'Observation Deck', 'Photo Spots', 'Parking Area', 'Warung'],
    travelTips: [
      'Arrive early in the morning for shorter queues and cooler temperatures.',
      'Wear secure footwear and avoid loose accessories when using the swing.',
      'Combine with a visit to Kalibiru for a full Menoreh hills adventure day.'
    ],
    bestTime: 'Early morning for the best light and cooler conditions on the cliff',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Ayunan Langit Watu Jaran.'
    },
    latitude: -7.7681,
    longitude: 110.1252,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'aw-p1',
        name: 'Menoreh Hills Adventure',
        category: 'guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Menoreh_hills_panorama.jpg/1280px-Menoreh_hills_panorama.jpg',
        rating: 4.6,
        price: 'IDR 200,000 / package',
        distance: 'On-Site',
        description: 'Adventure packages combining the cliff swing with guided Menoreh hill treks, waterfall visits, and traditional village tours.',
        address: 'Sabrangkidul, Purwosari, Girimulyo, Kulon Progo',
        coordinates: { lat: -7.7680, lng: 110.1250 }
      }
    ],
    faqs: [
      { q: 'Is the swing safe for children?', a: 'Children under 12 must be accompanied by a parent or guardian. The swing is equipped with double steel cables and professional safety harnesses.' }
    ]
  },

  // ID 72 - Air Terjun Kembang Soka
  {
    id: 'air-terjun-kembang-soka',
    name: 'Air Terjun Kembang Soka',
    tagline: 'Cascading Emerald Pools Over Red Stone',
    category: 'nature',
    location: 'Jatimulyo, Girimulyo, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Air_Terjun_Kembang_Soka.jpg'
    ],
    rating: 4.6,
    reviewCount: 1670,
    description: 'A stunning multi-tiered waterfall cascading over distinctive reddish river rocks, adorned with a picturesque wooden bridge crossing, offering refreshing natural pools for swimming in the lush Kulon Progo jungle.',
    story: 'The name "Kembang Soka" means "Soka flower" in Javanese, named after the bright orange Soka flowers (Ixora) that bloom abundantly along the riverbanks during the wet season. Local villagers believe the waterfall\'s reddish stones are stained by the blood of ancient warriors who once fought a great battle in the valley below.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 04:00 PM Daily',
    facilities: ['Swimming Pools', 'Wooden Bridge', 'Changing Rooms', 'Warung', 'Parking Area'],
    travelTips: [
      'Visit during or shortly after the rainy season for the most spectacular water flow.',
      'Bring a waterproof bag for electronics as mist from the falls is constant.',
      'The lower pools are perfect for swimming but always check current water levels.'
    ],
    bestTime: 'Morning from 08:00 AM when the waterfall is illuminated by sunlight',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Air Terjun Kembang Soka.'
    },
    latitude: -7.7694,
    longitude: 110.1152,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ak-p1',
        name: 'Girimulyo Homestay',
        category: 'hotel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Javanese_village_house.jpg/1280px-Javanese_village_house.jpg',
        rating: 4.5,
        price: 'IDR 200,000 / night',
        distance: '3.2 km from Kembang Soka',
        description: 'A traditional Javanese homestay in the hills of Girimulyo offering cool mountain air, local cuisine, and guided waterfall treks.',
        address: 'Jatimulyo, Girimulyo, Kulon Progo',
        coordinates: { lat: -7.7700, lng: 110.1160 }
      }
    ],
    faqs: [
      { q: 'Is it safe to swim in the waterfall pools?', a: 'Yes, the lower pools are generally safe for swimming. However, avoid swimming during heavy rain as water levels can rise quickly.' }
    ]
  },

  // ID 73 - Puncak Suroloyo
  {
    id: 'puncak-suroloyo',
    name: 'Puncak Suroloyo',
    tagline: 'Where Four Sacred Mountains Meet the Dawn',
    category: 'nature',
    location: 'Gecor, Gerbosari, Samigaluh, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pesona_Suroloyo.jpg'
    ],
    rating: 4.7,
    reviewCount: 2080,
    description: 'The highest point of the Menoreh Hills at 1,019 meters above sea level, offering a jaw-dropping panoramic view of four volcanic peaks — Merapi, Merbabu, Sumbing, and Sindoro — rising above a sea of morning clouds.',
    story: 'Puncak Suroloyo derives its name from a Javanese legend about Prince Suro who climbed the mountain in search of a magical flower to cure his ailing mother. According to oral tradition, the prince meditated at the summit and was granted divine wisdom by the mountain spirits, who revealed to him the interconnectedness of all living things across the four visible volcanoes.',
    ticketPrice: 'IDR 5,000',
    openingHours: '24 Hours (Best at Dawn 04:30 AM - 06:30 AM)',
    facilities: ['Sunrise Viewpoint', 'Parking Area', 'Warung', 'Restrooms'],
    travelTips: [
      'Wake up before 04:00 AM and arrive before dawn for the iconic cloud sea sunrise.',
      'Bring warm clothing as temperatures at the summit can drop significantly.',
      'Combine with a visit to nearby Kebun Teh Nglinggo for a Menoreh highlands day trip.'
    ],
    bestTime: 'Pre-dawn at 04:30 AM to witness the spectacular sunrise over four volcanoes',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Puncak Suroloyo.'
    },
    latitude: -7.6119,
    longitude: 110.1795,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ps-p1',
        name: 'Suroloyo Sunrise Homestay',
        category: 'hotel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kebun_Teh_Nglinggo.jpg/1280px-Kebun_Teh_Nglinggo.jpg',
        rating: 4.7,
        price: 'IDR 300,000 / night',
        distance: '2.0 km from Puncak Suroloyo',
        description: 'A cozy hillside homestay at the foot of Puncak Suroloyo, offering early morning guided treks to the summit and traditional Javanese breakfast.',
        address: 'Gerbosari, Samigaluh, Kulon Progo',
        coordinates: { lat: -7.6125, lng: 110.1800 }
      }
    ],
    faqs: [
      { q: 'Can I drive to the summit?', a: 'Yes, a narrow road leads close to the summit parking area. From there, it is a short walk to the main viewpoint.' }
    ]
  },

  // ID 74 - Goa Kiskendo
  {
    id: 'goa-kiskendo',
    name: 'Goa Kiskendo',
    tagline: 'Where Wayang Legends Carved in Living Stone',
    category: 'nature',
    location: 'Jatimulyo, Girimulyo, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/8/8f/Mouth_of_Kiskendo_Cave%2C_Kulon_Progo_Regency%2C_Indonesia.jpg'
    ],
    rating: 4.4,
    reviewCount: 1560,
    description: 'A historically significant limestone cave in the Menoreh Hills featuring carved stone reliefs at its entrance that depict the epic Ramayana battle between the warriors Kikis and Kendo, combining natural beauty with ancient Javanese storytelling.',
    story: 'Goa Kiskendo played a crucial role during the Indonesian National Revolution. In 1945, freedom fighters used the cave as a hidden headquarters to store ammunition and coordinate guerrilla operations against Dutch colonial forces. The cave entrance\'s ancient wayang carvings, believed to be centuries old, provided symbolic protection and spiritual strength to the fighters within.',
    ticketPrice: 'IDR 6,000',
    openingHours: '08:00 AM - 04:00 PM Daily',
    facilities: ['Cave Exploration', 'Historical Reliefs', 'Guided Tours', 'Parking Area', 'Warung'],
    travelTips: [
      'Bring a flashlight or use your phone light for deeper cave exploration.',
      'Hire a local guide to learn the fascinating history of the cave\'s independence-era use.',
      'Wear sturdy shoes as cave floors can be uneven and slippery.'
    ],
    bestTime: 'Midday from 10:00 AM when sunlight illuminates the entrance carvings best',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Goa Kiskendo.'
    },
    latitude: -7.7482,
    longitude: 110.1292,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'gk-p1',
        name: 'Kiskendo Heritage Guide',
        category: 'guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mouth_of_Kiskendo_Cave%2C_Kulon_Progo_Regency%2C_Indonesia.jpg/1280px-Mouth_of_Kiskendo_Cave%2C_Kulon_Progo_Regency%2C_Indonesia.jpg',
        rating: 4.6,
        price: 'IDR 100,000 / guide',
        distance: 'On-Site',
        description: 'Licensed local guides who specialize in the historical and mythological stories of Goa Kiskendo, including its independence-era significance.',
        address: 'Jatimulyo, Girimulyo, Kulon Progo',
        coordinates: { lat: -7.7480, lng: 110.1290 }
      }
    ],
    faqs: [
      { q: 'How long is the cave tour?', a: 'A guided tour typically lasts 30-45 minutes, covering the entrance carvings, main chambers, and historical points of interest.' }
    ]
  },

  // ID 75 - Pantai Glagah
  {
    id: 'pantai-glagah',
    name: 'Pantai Glagah',
    tagline: 'Where Ocean Giants Meet Concrete sentinels',
    category: 'beach',
    location: 'Glagah, Temon, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Glagah_Beach_Kulon_Progo.jpg'
    ],
    rating: 4.6,
    reviewCount: 1920,
    description: 'An iconic western Kulon Progo beach famous for its massive concrete tetrapod breakwaters that dramatically absorb towering ocean waves, creating a unique industrial-meets-nature coastal landscape.',
    story: 'Pantai Glagah was once a simple fishing beach until massive tetrapods were installed to protect the nearby New Yogyakarta International Airport from coastal erosion. The imposing geometric structures became an unexpectedly popular photo destination, with visitors drawn to the dramatic contrast between the raw ocean power and the engineered stone guardians standing against it.',
    ticketPrice: 'IDR 10,000',
    openingHours: '06:00 AM - 06:00 PM Daily',
    facilities: ['Breakwater Viewing', 'Fish Market', 'Warung', 'Parking Area', 'Restrooms'],
    travelTips: [
      'Visit during high tide to see the most dramatic wave impacts on the tetrapods.',
      'Bring waterproof gear as ocean spray can reach quite far during big swells.',
      'Pair with a visit to Pantai Trisik nearby for turtle conservation observation.'
    ],
    bestTime: 'Late afternoon from 04:00 PM for sunset views over the breakwaters',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Glagah.'
    },
    latitude: -7.9152,
    longitude: 110.0726,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pg-p1',
        name: 'Glagah Seafood Warung',
        category: 'restaurant',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Grilled_fish_Indonesia.jpg/1280px-Grilled_fish_Indonesia.jpg',
        rating: 4.5,
        price: 'IDR 40,000 - 100,000 / person',
        distance: '0.5 km from Pantai Glagah',
        description: 'A beloved local seafood warung serving the freshest grilled fish and prawns from the Glagah fish market, paired with traditional sambal and steamed rice.',
        address: 'Glagah, Temon, Kulon Progo',
        coordinates: { lat: -7.9148, lng: 110.0730 }
      }
    ],
    faqs: [
      { q: 'Is it safe to walk near the tetrapods?', a: 'Yes, but stay on designated paths. The tetrapods are stable structures, but waves can splash unpredictably during high surf.' }
    ]
  },

  // ID 76 - Pantai Trisik
  {
    id: 'pantai-trisik',
    name: 'Pantai Trisik',
    tagline: 'Where Turtles Nest and Migratory Birds Rest',
    category: 'beach',
    location: 'Banaran, Galur, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Trisik_Kulon_Progo.jpg'
    ],
    rating: 4.2,
    reviewCount: 1230,
    description: 'A gentle, sloping beach in Kulon Progo that serves as an important nesting ground for grey sea turtles and a crucial resting stop for international migratory birds along the East Asian flyway.',
    story: 'Pantai Trisik has been the site of a community-driven sea turtle conservation program since the 1990s. Local fishermen who once collected turtle eggs for food now serve as protectors, carefully relocating nests to protected hatcheries and releasing thousands of baby turtles back into the Indian Ocean each year.',
    ticketPrice: 'IDR 5,000',
    openingHours: '06:00 AM - 06:00 PM Daily',
    facilities: ['Turtle Conservation Center', 'Birdwatching Spot', 'Beach Walk', 'Warung', 'Parking Area'],
    travelTips: [
      'Visit during turtle nesting season (April to October) for a chance to see baby turtle releases.',
      'Bring binoculars for birdwatching, especially during migratory season from September to March.',
      'Respect nesting areas by staying on marked paths and keeping noise to a minimum.'
    ],
    bestTime: 'Late afternoon for sunset and birdwatching, or early morning for turtle releases',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Trisik.'
    },
    latitude: -7.9463,
    longitude: 110.1882,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pt-p1',
        name: 'Trisik Turtle Conservation',
        category: 'guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Green_turtle_hatchling.jpg/1280px-Green_turtle_hatchling.jpg',
        rating: 4.8,
        price: 'Voluntary Donation',
        distance: 'On-Site',
        description: 'A community-run sea turtle conservation center offering educational tours, turtle release programs, and nesting observation walks.',
        address: 'Banaran, Galur, Kulon Progo',
        coordinates: { lat: -7.9460, lng: 110.1880 }
      }
    ],
    faqs: [
      { q: 'Can I participate in turtle releases?', a: 'Yes, turtle releases are open to visitors during nesting season. Check with the conservation center for scheduled release times.' }
    ]
  },

  // ID 77 - Ekowisata Jatismono
  {
    id: 'ekowisata-jatismono',
    name: 'Ekowisata Jatismono',
    tagline: 'Pedaling Through Ancient Irrigation Rice Fields',
    category: 'nature',
    location: 'Banaran, Galur, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sawah_terasering_Kulon_Progo.jpg'
    ],
    rating: 4.3,
    reviewCount: 1080,
    description: 'A serene agro-eco tourism destination where visitors traverse lush rice paddy dikes along ancient irrigation channels, experiencing the peaceful rhythms of traditional Javanese rural farming life.',
    story: 'The irrigation system at Jatismono dates back to the Mataram Kingdom era, when royal engineers designed a network of channels to bring water from the Menoreh Hills to the lowland rice fields. These centuries-old stone-carved channels still function today, a testament to the extraordinary hydraulic engineering skills of ancient Javanese civilization.',
    ticketPrice: 'Voluntary Donation',
    openingHours: '06:00 AM - 05:00 PM Daily',
    facilities: ['Rice Field Trekking', 'Traditional Irrigation Viewing', 'Cycling Path', 'Warung', 'Restrooms'],
    travelTips: [
      'Visit at sunrise when the rice paddies are most beautiful with morning mist.',
      'Rent a bicycle from the village for the most immersive and peaceful experience.',
      'Combine with a visit to Pantai Trisik for a complete Kulon Progo cultural and nature day.'
    ],
    bestTime: 'Early morning from 06:00 AM for misty rice field photography and cooler cycling',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Ekowisata Jatismono.'
    },
    latitude: -7.9354,
    longitude: 110.1741,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ej-p1',
        name: 'Jatismono Village Guide',
        category: 'guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Indonesian_rice_paddy.jpg/1280px-Indonesian_rice_paddy.jpg',
        rating: 4.4,
        price: 'IDR 75,000 / person',
        distance: 'On-Site',
        description: 'Local farmers who serve as eco-tourism guides, sharing deep knowledge of traditional rice cultivation and ancient irrigation systems.',
        address: 'Banaran, Galur, Kulon Progo',
        coordinates: { lat: -7.9350, lng: 110.1740 }
      }
    ],
    faqs: [
      { q: 'What activities are available?', a: 'Activities include guided rice field treks, cycling tours, traditional farming experiences, and educational sessions about ancient Javanese irrigation systems.' }
    ]
  },

  // ID 78 - Kopi Ampirono
  {
    id: 'kopi-ampirono',
    name: 'Kopi Ampirono',
    tagline: 'Joglo Coffee House Amid Terasering Greens',
    category: 'culinary',
    location: 'Jl. Raya Kaligesing, Pendoworejo, Girimulyo, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_Javanese_coffee.jpg'
    ],
    rating: 4.7,
    reviewCount: 2450,
    description: 'A trendy traditional joglo-style coffee house nestled among the terraced rice fields of Girimulyo, serving rich Javanese black coffee and authentic countryside snacks in a stunning natural setting.',
    story: 'Kopi Ampirono started as a simple wooden warung run by a retired farmer who wanted to share his family\'s coffee-roasting tradition. The name "Ampirono" comes from a local Javanese word meaning "bringing warmth," reflecting the owner\'s philosophy that a good cup of coffee should warm both the body and the soul. The café quickly became viral on social media for its rice terrace views.',
    ticketPrice: 'From IDR 10,000',
    openingHours: '08:00 AM - 06:00 PM Daily',
    facilities: ['Joglo Seating', 'Rice Terrace Views', 'Traditional Coffee', 'Parking Area', 'Restrooms'],
    travelTips: [
      'Visit in the late afternoon from 03:30 PM for the best golden light over the rice terraces.',
      'Try the traditional kopi tubruk (unfiltered Javanese coffee) for an authentic experience.',
      'Weekday visits avoid the large crowds that gather on weekends.'
    ],
    bestTime: 'Late afternoon from 03:30 PM for sunset coffee among the rice terraces',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Kopi Ampirono.'
    },
    latitude: -7.7652,
    longitude: 110.1659,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ka-p1',
        name: 'Girimulyo Coffee Trail',
        category: 'cafe',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_Javanese_coffee.jpg',
        rating: 4.6,
        price: 'IDR 25,000 - 60,000 / person',
        distance: '1.5 km from Kopi Ampirono',
        description: 'A collection of small independent coffee houses along the Kaligesing road, each offering unique single-origin Kulon Progo coffees and traditional snacks.',
        address: 'Jl. Raya Kaligesing, Pendoworejo, Girimulyo',
        coordinates: { lat: -7.7660, lng: 110.1665 }
      }
    ],
    faqs: [
      { q: 'Is there parking available?', a: 'Yes, there is a parking area for both cars and motorbikes. On busy weekends, overflow parking is available along the road.' }
    ]
  },

  // ID 79 - Bendung Kayangan
  {
    id: 'bendung-kayangan',
    name: 'Bendung Kayangan',
    tagline: 'Where River Canyon Walls Touch the Sky',
    category: 'nature',
    location: 'Pendoworejo, Girimulyo, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/bd/Kembul_Sewu_Dulur_Saparan_Bendung_Kayangan_%283%29.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kembul_Sewu_Dulur_Saparan_Bendung_Kayangan_(1).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kembul_Sewu_Dulur_Saparan_Bendung_Kayangan_(2).jpg'
    ],
    rating: 4.3,
    reviewCount: 1340,
    description: 'A dramatic irrigation dam set within a steep natural river canyon whose towering rock walls resemble the mythical pillars of the Javanese heaven, offering a cool and serene escape in the Kulon Progo countryside.',
    story: 'The towering canyon walls of Bendung Kayangan are believed by local villagers to be the remnants of a bridge built by the mythical warrior Werkudara from the Mahabharata epic. According to Javanese folklore, the canyon was formed when Werkudara struck the ground with his massive mace to create a water channel for the thirsty rice fields of the kingdom.',
    ticketPrice: 'Free Entry',
    openingHours: '06:00 AM - 05:00 PM Daily',
    facilities: ['Canyon Viewing Platforms', 'Picnic Area', 'River Walk', 'Warung', 'Restrooms'],
    travelTips: [
      'Visit in the early morning when the canyon walls are beautifully lit by rising sun.',
      'Bring a picnic to enjoy at the riverside platforms.',
      'Combine with Kopi Ampirono for a complete Girimulyo day trip.'
    ],
    bestTime: 'Early morning from 07:00 AM when sunlight first illuminates the canyon walls',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Bendung Kayangan.'
    },
    latitude: -7.7512,
    longitude: 110.1589,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'bk-p1',
        name: 'Kayangan Canyon Eco Park',
        category: 'guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kembul_Sewu_Dulur_Saparan_Bendung_Kayangan_%283%29.jpg/1280px-Kembul_Sewu_Dulur_Saparan_Bendung_Kayangan_%283%29.jpg',
        rating: 4.3,
        price: 'Free Entry',
        distance: 'On-Site',
        description: 'A community-managed eco-park offering guided canyon walks, picnicking facilities, and educational tours about the dam\'s irrigation history.',
        address: 'Pendoworejo, Girimulyo, Kulon Progo',
        coordinates: { lat: -7.7510, lng: 110.1590 }
      }
    ],
    faqs: [
      { q: 'Is it suitable for families?', a: 'Yes, the park has picnic areas and gentle walking paths. However, supervise children near the canyon edges and river areas.' }
    ]
  },

  // ID 80 - Kampung Wisata Taman Sari
  {
    id: 'kampung-wisata-taman-sari',
    name: 'Kampung Wisata Taman Sari',
    tagline: 'Mural Alleys Behind the Sultan\'s Bathhouse',
    category: 'heritage',
    location: 'Patehan, Kraton, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Indonesia_-_Java_-_Yogyakarta_-_Taman_Sari.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Sari_Water_Castle%2C_Yogyakarta%2C_20220818_1039_8950.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pemandian_raja_raja_taman_sari_yogyakarta.jpg'
    ],
    rating: 4.6,
    reviewCount: 3560,
    description: 'A vibrant residential neighborhood nestled within the ancient walls of the Sultan\'s Water Castle, famous for its narrow alleys bursting with colorful street murals, independent art galleries, and traditional batik workshops.',
    story: 'After the Taman Sari Water Castle fell into disrepair following a Portuguese attack in the 1800s, local residents settled among its ruins, transforming the crumbling structures into homes and workshops. The community preserved the original stone walls and tunnels while adding vibrant murals and art installations, creating a unique living museum where centuries-old history blends seamlessly with contemporary creative expression.',
    ticketPrice: 'Free Entry',
    openingHours: '07:00 AM - 06:00 PM Daily',
    facilities: ['Street Art Alleys', 'Batik Workshops', 'Art Galleries', 'Cafes', 'Restrooms'],
    travelTips: [
      'Hire a local community guide at the entrance for the best hidden mural spots and cultural stories.',
      'Visit early morning for the best photography light without crowds in the narrow alleys.',
      'Support the community by purchasing handmade batik or art directly from local workshops.'
    ],
    bestTime: 'Early morning from 07:00 AM for the best mural photography and fewer crowds',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Kampung Wisata Taman Sari.'
    },
    latitude: -7.8105,
    longitude: 110.3582,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'kt-p1',
        name: 'Taman Sari Batik Workshop',
        category: 'souvenir',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Batik_indonesia.jpg/1280px-Batik_indonesia.jpg',
        rating: 4.7,
        price: 'IDR 50,000 - 500,000',
        distance: 'On-Site',
        description: 'A family-run batik workshop in the heart of the kampung where visitors can watch traditional wax-resist dyeing techniques and purchase authentic handmade batik pieces.',
        address: 'Patehan, Kraton, Kota Yogyakarta',
        coordinates: { lat: -7.8102, lng: 110.3580 }
      }
    ],
    faqs: [
      { q: 'Is there an entrance fee for the kampung?', a: 'No, the kampung itself is free to explore. Some individual galleries or workshops may have small fees for activities like batik making classes.' }
    ]
  }
];
