// Batch 3: IDs 41-55, 57-61
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

export const BATCH_3_DESTINATIONS: Destination[] = [
  {
    id: 'pantai-depok',
    name: 'Pantai Depok',
    tagline: 'Where Fresh Catches Meet Golden Sunsets',
    category: 'beach',
    location: 'Parangtritis, Kreteg, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Depok.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Depok_Beach_access_road_-_Bantul%2C_YO_(25_Jan_2023).jpg'
    ],
    rating: 4.5,
    reviewCount: 3120,
    description: 'Pantai Depok is Bantul\'s premier seafood destination, situated right on the black volcanic sand shore near the bustling fish auction market (TPI). Visitors can select live fish, prawns, and crabs and have them charcoal-grilled on the spot.',
    story: 'Named after a beloved local elder who first settled the area centuries ago, Pantai Depok has evolved from a quiet fishing village into the go-to seafood hub of Bantul. The traditional fish auction held every dawn remains a living testament to the community\'s enduring maritime heritage.',
    ticketPrice: 'IDR 10,000',
    openingHours: '10:00 AM - 09:00 PM Daily',
    facilities: ['Seafood Warungs', 'Fish Auction Market', 'Parking Area', 'Beachside Tables', 'Restrooms'],
    travelTips: [
      'Arrive before noon to get the freshest catch from the morning auction.',
      'Try the signature grilled fish with spicy sambal and lime for an authentic experience.',
      'Pair your meal with a sunset view by staying until late afternoon.'
    ],
    bestTime: 'Late morning for the freshest seafood, or late afternoon for sunset dining.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Depok.'
    },
    latitude: -8.0142,
    longitude: 110.3126,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pd-p1',
        name: 'Warung Seafood Depok Grill',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600',
        rating: 4.6,
        price: 'IDR 80,000 - 150,000 / person',
        distance: 'On-site',
        description: 'Select your live fish, prawns, and crabs fresh from the local fish auction and have them charcoal-grilled with spicy sweet soy sauce.',
        address: 'Jl. Depok Beach, Bantul',
        promotion: 'Complimentary local organic sambal tray',
        phone: '+62 821-3344-5566',
        coordinates: { lat: -8.0190, lng: 110.3210 }
      }
    ],
    faqs: [
      { q: 'Is the seafood fresh?', a: 'Yes. Pantai Depok is located next to an active fish auction (TPI) where local fishermen bring in their daily catch at dawn.' },
      { q: 'Can I bring my own fish to grill?', a: 'Most warungs offer grill service for fish you purchase directly from the auction market.' }
    ]
  },
  {
    id: 'pantai-goa-cemara',
    name: 'Pantai Goa Cemara',
    tagline: 'A Natural Pine Fortress by the Sea',
    category: 'beach',
    location: 'Patihan, Gadingsari, Sanden, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Goa_Cemara.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bibir_Pantai_goa_cemara_2019.jpg'
    ],
    rating: 4.5,
    reviewCount: 2780,
    description: 'Pantai Goa Cemara gets its name from the thousands of dense casuarina trees lining the shore, forming a cool, shaded natural tunnel that resembles a green cave. It is one of the most refreshing and Instagram-worthy beaches in Bantul.',
    story: 'The towering casuarina trees were originally planted by local villagers in the 1970s as a coastal erosion barrier. Over the decades, they grew into a spectacular natural corridor, earning the beach its beloved nickname "Goa Cemara" or "Pine Cave."',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 06:00 PM Daily',
    facilities: ['Pine Forest Shelters', 'Parking Area', 'Food Stalls', 'Restrooms', 'Beach Access Path'],
    travelTips: [
      'Bring a hammock to hang between the pine trees for a relaxing afternoon nap.',
      'Visit in the early morning to enjoy the cool, shaded walk before the crowds arrive.',
      'Wear comfortable walking shoes for the sandy path through the pine corridor.'
    ],
    bestTime: 'Midday, when the pine canopy provides the coolest shade from the tropical sun.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Goa Cemara.'
    },
    latitude: -8.0189,
    longitude: 110.2526,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'gc-p1',
        name: 'Goa Cemara Beach Eco Lodge',
        category: 'hotel',
        image: 'https://images.unsplash.com/photo-1467489904517-075c242c2b4f?q=80&w=600',
        rating: 4.5,
        price: 'IDR 450,000 / night',
        distance: '0.5 km from beach',
        description: 'A charming eco-friendly lodge nestled among the casuarina trees, offering simple yet comfortable bungalows steps from the shore.',
        address: 'Patihan, Gadingsari, Sanden, Bantul',
        promotion: 'Free bicycle rental for guests',
        phone: '+62 812-2531-1881',
        coordinates: { lat: -8.0180, lng: 110.2530 }
      }
    ],
    faqs: [
      { q: 'Why is it called Goa Cemara?', a: 'The dense rows of casuarina (cemara) trees form a natural canopy tunnel leading to the beach, resembling a cave entrance.' },
      { q: 'Is it safe to swim here?', a: 'Swimming is possible but be cautious of the currents. Stay close to shore and follow any local guidance.' }
    ]
  },
  {
    id: 'pantai-baru',
    name: 'Pantai Baru',
    tagline: 'Where Modern Wind Power Meets Wild Coast',
    category: 'beach',
    location: 'Ngentak, Poncosari, Srandakan, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/Pantai_Baru.jpg'
    ],
    rating: 4.4,
    reviewCount: 2450,
    description: 'Pantai Baru offers a refreshing blend of nature and innovation, with rows of eco-friendly wind-powered turbines (PLTH) standing like sentinels along the western shore. The cool casuarina shade and wide open sands make it a unique coastal escape.',
    story: 'The wind turbines at Pantai Baru are part of Indonesia\'s pioneering renewable energy initiative along the southern coast. Standing amidst the casuarina trees, they have become an unexpected yet iconic symbol of Bantul\'s commitment to sustainable coastal development.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 06:00 PM Daily',
    facilities: ['Wind Turbine Viewpoint', 'Pine Forest Area', 'Parking Lot', 'Food Stalls', 'Restrooms'],
    travelTips: [
      'Visit in the late afternoon for the best golden hour photography with the wind turbines as dramatic silhouettes.',
      'Bring a kite — the strong coastal breeze makes it perfect for kite flying.',
      'Pair your visit with nearby Pantai Depok for a full day of beach hopping.'
    ],
    bestTime: 'Late afternoon when the wind turbines spin dramatically against the sunset sky.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Baru.'
    },
    latitude: -8.0198,
    longitude: 110.2195,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pb-p1',
        name: 'Pantai Baru Windswept Cafe',
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600',
        rating: 4.4,
        price: 'IDR 25,000 - 60,000 / person',
        distance: 'On-site',
        description: 'A breezy open-air cafe near the wind turbines serving fresh coconut water, local snacks, and traditional Javanese beverages.',
        address: 'Ngentak, Poncosari, Srandakan, Bantul',
        phone: '+62 813-9221-0022',
        coordinates: { lat: -8.0195, lng: 110.2190 }
      }
    ],
    faqs: [
      { q: 'What are the wind turbines for?', a: 'They are part of a renewable energy project generating clean electricity from the strong southern coastal winds.' },
      { q: 'Is there parking available?', a: 'Yes, there is a designated parking area near the beach entrance with affordable rates.' }
    ]
  },
  {
    id: 'pantai-samas',
    name: 'Pantai Samas',
    tagline: 'Sunflowers, Turtles, and Coastal Lagoons',
    category: 'beach',
    location: 'Srigading, Sanden, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_Pengklik%2C_Pantai_Samas%2C_Bantul_18_Oktober_2019.jpg'
    ],
    rating: 4.3,
    reviewCount: 2340,
    description: 'Pantai Samas is a multifaceted coastal gem known for its stunning lagoon (Laguna Samas), vibrant sunflower fields, and an important turtle conservation program. It offers a peaceful retreat far from the usual tourist crowds.',
    story: 'The turtle conservation program at Pantai Samas has been protecting endangered green and hawkbill turtles since the early 2000s. Local volunteers carefully monitor nesting sites along the beach and release hatchlings into the Indian Ocean under the moonlight.',
    ticketPrice: 'IDR 10,000',
    openingHours: '06:00 AM - 06:00 PM Daily',
    facilities: ['Sunflower Fields', 'Turtle Conservation Center', 'Lagoon Viewing Deck', 'Food Stalls', 'Parking Area'],
    travelTips: [
      'Visit during sunflower season (typically mid-year) for the most vibrant photo opportunities.',
      'Check with the conservation center if turtle release events are scheduled during your visit.',
      'Bring binoculars for birdwatching around the lagoon area.'
    ],
    bestTime: 'Early morning for sunrise over the lagoon, or midday for the sunflower fields.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Samas.'
    },
    latitude: -8.0204,
    longitude: 110.2741,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ps-p1',
        name: 'Samas Turtle Eco Tours',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.7,
        price: 'IDR 75,000 / person',
        distance: 'On-site',
        description: 'Guided eco-tours around the lagoon and turtle nesting sites, led by local conservation volunteers with deep knowledge of the coastal ecosystem.',
        address: 'Srigading, Sanden, Bantul',
        promotion: 'Free conservation souvenir booklet',
        phone: '+62 811-9988-7766',
        coordinates: { lat: -8.0200, lng: 110.2745 }
      }
    ],
    faqs: [
      { q: 'Can I see turtles nesting?', a: 'Turtle nesting typically occurs at night during nesting season. Contact the conservation center for scheduled viewing events.' },
      { q: 'Are the sunflowers real?', a: 'Yes, the sunflower fields are planted seasonally. Check local guides for the best time to visit for full blooms.' }
    ]
  },
  {
    id: 'makam-raja-raja-imogiri',
    name: 'Makam Raja-Raja Imogiri',
    tagline: 'Sacred Royal Tombs Above the Clouds',
    category: 'heritage',
    location: 'Wukirsari, Imogiri, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Imogiri_Mausolea_of_the_Yogyakarta_Sultans,_0940.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tangga_ke_Pemakaman_Imogiri.jpg'
    ],
    rating: 4.7,
    reviewCount: 3420,
    description: 'The Royal Tombs of Imogiri are the sacred burial ground of the Mataram dynasty kings, perched atop a dramatic hilltop reached by climbing 345 stone steps. The complex features striking red brick gates and centuries of Javanese royal history.',
    story: 'Established in the 17th century by Sultan Agung Hanyokrokusumo, the Imogiri royal cemetery is considered one of the most sacred sites in Javanese culture. Tradition dictates that only royal family members and those wearing traditional Javanese attire may ascend the fabled stone stairway.',
    ticketPrice: 'Free Entry (Traditional attire rental IDR 20,000)',
    openingHours: 'Monday & Friday, 09:00 AM - 12:00 PM',
    facilities: ['Traditional Attire Rental', 'Stone Stairway', 'Royal Heritage Guards', 'Parking Area', 'Prayer Facilities'],
    travelTips: [
      'Wear modest clothing and rent traditional Javanese attire if you wish to enter the inner sanctum.',
      'Visit on Monday or Friday, the only days the site is open to the public.',
      'Bring water and wear comfortable shoes for the steep 345-step climb.'
    ],
    bestTime: 'Monday or Friday mornings when the site is open and the light is soft for photography.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Makam Raja-Raja Imogiri.'
    },
    latitude: -7.9252,
    longitude: 110.3926,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'mi-p1',
        name: 'Imogiri Heritage Cultural Walk',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.8,
        price: 'IDR 150,000 / group',
        distance: 'On-site',
        description: 'Expert local guides share the sacred stories of the Mataram dynasty and the spiritual significance of the royal burial complex.',
        address: 'Wukirsari, Imogiri, Bantul',
        promotion: 'Includes traditional attire rental',
        phone: '+62 813-9221-0022',
        coordinates: { lat: -7.9255, lng: 110.3920 }
      }
    ],
    faqs: [
      { q: 'Who is buried here?', a: 'The tombs house the remains of the kings and royal family of the Mataram Sultanate, dating back to the 17th century.' },
      { q: 'Is there a dress code?', a: 'Yes, visitors must wear traditional Javanese attire (available for rental at the entrance) to enter the sacred inner area.' }
    ]
  },
  {
    id: 'kasongan-keramik',
    name: 'Kasongan Keramik',
    tagline: 'Generations of Clay Craft in Every Shard',
    category: 'culinary',
    location: 'Jl. Kasongan No. 3, Bangunjiwo, Kasihan, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gerabah_dari_Kasongan.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kasongan_-_panoramio.jpg'
    ],
    rating: 4.6,
    reviewCount: 2890,
    description: 'Kasongan Keramik is the heart of Bantul\'s traditional pottery and ceramics industry, where entire families have been shaping clay into beautiful vases, figurines, and export-quality pottery for generations. Visitors can watch artisans at work and purchase unique handcrafted souvenirs.',
    story: 'The Kasongan pottery tradition dates back over 400 years to the Mataram Kingdom era. Legend has it that the first potter was a royal craftsman who was banished to the village, bringing his extraordinary skills with him and passing them down through the centuries.',
    ticketPrice: 'Free Entry',
    openingHours: '09:00 AM - 04:00 PM Daily',
    facilities: ['Artisan Workshops', 'Showrooms', 'Hands-on Pottery Experience', 'Free Parking', 'Restrooms'],
    travelTips: [
      'Arrive in the morning to watch potters at work before the midday heat.',
      'Try the hands-on pottery workshop to create your own clay masterpiece.',
      'Bargain respectfully for the best prices on handcrafted ceramics.'
    ],
    bestTime: 'Mid-morning when artisans are actively working and the light is ideal for photography.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Kasongan Keramik.'
    },
    latitude: -7.8426,
    longitude: 110.3442,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'kk-p1',
        name: 'Kasongan Art Village Workshop',
        category: 'souvenir',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600',
        rating: 4.7,
        price: 'IDR 50,000 - 500,000',
        distance: 'On-site',
        description: 'Browse and purchase handcrafted pottery, vases, and figurines directly from the artisans who create them.',
        address: 'Jl. Kasongan No. 3, Bangunjiwo, Kasihan, Bantul',
        promotion: 'Free gift wrapping for purchases over IDR 200,000',
        phone: '+62 821-3344-5566',
        coordinates: { lat: -7.8430, lng: 110.3440 }
      }
    ],
    faqs: [
      { q: 'Can I make my own pottery?', a: 'Yes, several workshops offer hands-on experiences where you can shape your own clay creation under the guidance of master potters.' },
      { q: 'Are the items suitable for shipping?', a: 'Many artisans offer bubble-wrapping and can help arrange international shipping for larger purchases.' }
    ]
  },
  {
    id: 'jembatan-gantung-selopamioro',
    name: 'Jembatan Gantung Selopamioro',
    tagline: 'A Golden Bridge Over Turquoise Waters',
    category: 'nature',
    location: 'Selopamioro, Imogiri, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jembatan_Gantung_Selopamioro.jpg'
    ],
    rating: 4.5,
    reviewCount: 2670,
    description: 'The iconic yellow suspension bridge of Selopamioro spans the turquoise Oya River between dramatic limestone cliffs, creating one of the most photogenic spots in Bantul. It is a favorite for photographers, cyclists, and anyone seeking a peaceful riverside escape.',
    story: 'Built decades ago to connect isolated riverside communities, the bright yellow bridge has become an unexpected symbol of Bantul\'s charm. The striking contrast of the golden structure against the emerald river below has made it one of the most photographed landmarks in the region.',
    ticketPrice: 'IDR 2,000',
    openingHours: '06:00 AM - 05:00 PM Daily',
    facilities: ['Suspension Bridge', 'Riverside Viewing Area', 'Parking', 'Small Warungs', 'Photography Spots'],
    travelTips: [
      'Visit early in the morning for the best light and fewer crowds.',
      'Bring a bicycle to ride across the bridge and explore the riverside paths.',
      'The bridge sways gently — hold onto the railings and take your time crossing.'
    ],
    bestTime: 'Early morning for soft golden light reflecting off the turquoise river.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Jembatan Gantung Selopamioro.'
    },
    latitude: -7.9734,
    longitude: 110.3882,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'jgs-p1',
        name: 'Oya River Cycling Tours',
        category: 'rental',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=600',
        rating: 4.5,
        price: 'IDR 50,000 / half day',
        distance: 'On-site',
        description: 'Rent bicycles and explore the scenic riverside trails and limestone landscapes around the Selopamioro suspension bridge.',
        address: 'Selopamioro, Imogiri, Bantul',
        promotion: 'Free bottled water with rental',
        phone: '+62 811-9988-7766',
        coordinates: { lat: -7.9730, lng: 110.3880 }
      }
    ],
    faqs: [
      { q: 'Is the bridge safe to walk on?', a: 'Yes, the bridge is maintained for pedestrian use. It sways gently, so hold the railings and walk carefully.' },
      { q: 'Can I swim in the river?', a: 'The river can have strong currents. Swimming is not recommended unless you are an experienced swimmer and conditions are calm.' }
    ]
  },
  {
    id: 'puncak-sosok',
    name: 'Puncak Sosok',
    tagline: 'City Lights and Satay Under the Stars',
    category: 'nature',
    location: 'Bawuran, Pleret, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Puncak_Sosok.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Puncak_Sosok_(2).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Puncak_Sosok_(3).jpg'
    ],
    rating: 4.6,
    reviewCount: 3150,
    description: 'Puncak Sosok is Bantul\'s beloved hilltop hangout, offering live acoustic music, delicious klathak satay (grilled goat skewers on bicycle spokes), and sweeping panoramic views of Yogyakarta\'s twinkling city lights at dusk.',
    story: 'What started as a simple roadside warung with a view has evolved into Bantul\'s most iconic evening destination. Local musicians began performing acoustically on the hilltop, and word spread that the best satay and the best view in Bantul could be found at the same spot.',
    ticketPrice: 'Voluntary Donation',
    openingHours: '04:00 PM - 10:00 PM Daily',
    facilities: ['Live Music Stage', 'Open-air Dining', 'City Light Viewpoint', 'Parking Area', 'Food & Drink Stalls'],
    travelTips: [
      'Arrive before sunset to secure a good spot and watch the city lights gradually appear.',
      'Try the signature klathak satay — a Bantul specialty grilled on bicycle spoke skewers.',
      'Bring a light jacket as the hilltop can get breezy after dark.'
    ],
    bestTime: 'Late afternoon into evening, when sunset transitions to sparkling city lights.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Puncak Sosok.'
    },
    latitude: -7.8924,
    longitude: 110.4215,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ps2-p1',
        name: 'Sosok Hilltop Satay Warung',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600',
        rating: 4.7,
        price: 'IDR 50,000 - 120,000 / person',
        distance: 'On-site',
        description: 'Famous for klathak satay grilled on bicycle spoke skewers, served with warm rice and traditional Javanese sambal against the backdrop of city lights.',
        address: 'Bawuran, Pleret, Bantul',
        promotion: 'Free iced tea with every satay platter',
        phone: '+62 821-3344-5566',
        coordinates: { lat: -7.8920, lng: 110.4210 }
      }
    ],
    faqs: [
      { q: 'What is klathak satay?', a: 'Klathak is a signature Bantul satay where goat meat is skewered on bicycle spokes and grilled over charcoal, giving it a unique smoky flavor.' },
      { q: 'Is there live music every night?', a: 'Live acoustic performances are held most evenings, especially on weekends. Check local social media for the schedule.' }
    ]
  },
  {
    id: 'bukit-bintang-hargodumilah',
    name: 'Bukit Bintang Hargodumilah',
    tagline: 'Where the Stars Meet the City Lights',
    category: 'nature',
    location: 'Srimulyo, Piyungan, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.5,
    reviewCount: 2980,
    description: 'Perched on the edge of the Jogja-Wonosari highway, Bukit Bintang offers a stunning cliffside viewpoint where the glittering city lights of Yogyakarta stretch out like a sea of stars below. It is the quintessential night hangout for locals and travelers alike.',
    story: 'The name "Bukit Bintang" or "Star Hill" comes from the breathtaking panorama of city lights below that resemble a constellation of earthbound stars. It became a legendary gathering spot where young Javanese couples and families come to share stories under the actual night sky.',
    ticketPrice: 'Free Entry (Parking / food purchases)',
    openingHours: '07:00 PM - 10:00 PM Daily',
    facilities: ['Cliffside Viewpoint', 'Warung Stalls', 'Parking Area', 'Motorbike Access', 'Photo Spots'],
    travelTips: [
      'Bring a light jacket as the cliffside gets windy at night.',
      'Arrive by motorcycle for easy parking and the full local experience.',
      'Pair with nearby Puncak Sosok for a complete evening hilltop tour.'
    ],
    bestTime: 'After 7:00 PM when the city lights are at their most brilliant.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Bukit Bintang Hargodumilah.'
    },
    latitude: -7.8462,
    longitude: 110.4789,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'bb-p1',
        name: 'Bukit Bintang Coffee Stalls',
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600',
        rating: 4.4,
        price: 'IDR 15,000 - 40,000 / person',
        distance: 'On-site',
        description: 'Enjoy hot Javanese coffee and local snacks while taking in the spectacular panoramic night view of Yogyakarta city lights.',
        address: 'Srimulyo, Piyungan, Bantul',
        phone: '+62 813-9221-0022',
        coordinates: { lat: -7.8460, lng: 110.4785 }
      }
    ],
    faqs: [
      { q: 'Is it safe at night?', a: 'Yes, the area is well-lit and popular with locals. Exercise normal precautions and avoid isolated paths.' },
      { q: 'Can I drive there?', a: 'Yes, the hilltop is accessible by car or motorcycle via the Jogja-Wonosari highway. Parking is available at the top.' }
    ]
  },
  {
    id: 'pantai-baron',
    name: 'Pantai Baron',
    tagline: 'Where the River Meets the Relentless Sea',
    category: 'beach',
    location: 'Kemadang, Tanjungsari, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Baron,_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dua_sisi_yang_berbeda_dari_dataran_tanah_Yogyakarta.jpg'
    ],
    rating: 4.6,
    reviewCount: 3560,
    description: 'Pantai Baron is a dramatic cove beach framed by towering cliffs and a historic lighthouse. An underground freshwater river meets the roaring Indian Ocean here, creating a fascinating natural phenomenon and a picturesque fishing harbor.',
    story: 'The lighthouse at Pantai Baron was built by the Dutch colonial government in the early 1900s to guide ships navigating the treacherous southern Java coastline. Today it stands as a silent sentinel overlooking the timeless dance between the fresh river waters and the salty ocean waves.',
    ticketPrice: 'IDR 10,000',
    openingHours: '06:00 AM - 05:00 PM Daily',
    facilities: ['Historic Lighthouse', 'Freshwater River Pool', 'Fishing Harbor', 'Food Stalls', 'Parking Area'],
    travelTips: [
      'Climb to the lighthouse viewpoint for a panoramic view of the entire cove.',
      'Swim in the calm freshwater pool where the river meets the beach — it is safer than the open ocean.',
      'Buy fresh grilled fish directly from the fishermen\'s harbor for the freshest seafood.'
    ],
    bestTime: 'Morning for the lighthouse climb, or afternoon for fresh seafood by the river.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Baron.'
    },
    latitude: -8.1289,
    longitude: 110.5492,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'ba-p1',
        name: 'Baron Lighthouse Heritage Trek',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.6,
        price: 'IDR 100,000 / group',
        distance: 'On-site',
        description: 'Guided walks to the historic Dutch lighthouse with panoramic views and stories of the coastal maritime history.',
        address: 'Kemadang, Tanjungsari, Gunungkidul',
        promotion: 'Free bottled water and sunscreen',
        phone: '+62 811-9988-7766',
        coordinates: { lat: -8.1285, lng: 110.5490 }
      }
    ],
    faqs: [
      { q: 'Can I swim at Pantai Baron?', a: 'Swimming is recommended in the calm freshwater pool where the underground river surfaces, not in the open ocean which has strong currents.' },
      { q: 'What is the underground river?', a: 'A freshwater river flows beneath the limestone cliffs and emerges at the beach, creating a natural pool where fresh and salt water meet.' }
    ]
  },
  {
    id: 'pantai-krakal',
    name: 'Pantai Krakal',
    tagline: 'White Sands and Coral Gardens of the South',
    category: 'beach',
    location: 'Ngestirejo, Tanjungsari, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Krakal_Beach%2C_Gunung_Kidul%2C_Yogyakarta.JPG',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Krakal_Strand-beach.JPG'
    ],
    rating: 4.5,
    reviewCount: 3020,
    description: 'Pantai Krakal boasts expansive white sands and flat coastal rock platforms teeming with colorful tide pools. It is a paradise for tide pool explorers, offering close encounters with small crabs, sea urchins, and unique coral formations.',
    story: 'The name "Krakal" comes from the Javanese word for the flat limestone rock shelves that dominate the shoreline. These ancient coral platforms were formed over millennia and now serve as natural tidal pools that reveal a miniature ocean world at low tide.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 05:00 PM Daily',
    facilities: ['Tide Pool Areas', 'White Sand Beach', 'Rock Platforms', 'Food Stalls', 'Parking'],
    travelTips: [
      'Wear water shoes to protect your feet from sharp coral and rocky tide pools.',
      'Visit during low tide for the best tide pool exploration experience.',
      'Bring a snorkel mask to observe marine life in the shallow rock pools.'
    ],
    bestTime: 'Morning low tide when the coral rock pools are fully exposed and teeming with life.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Krakal.'
    },
    latitude: -8.1362,
    longitude: 110.5983,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pk-p1',
        name: 'Krakal Tide Pool Eco Guide',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.5,
        price: 'IDR 60,000 / person',
        distance: 'On-site',
        description: 'Expert local guides lead fascinating walks through the tide pools, identifying marine species and sharing traditional fishing knowledge.',
        address: 'Ngestirejo, Tanjungsari, Gunungkidul',
        promotion: 'Free magnifying glass for marine observation',
        phone: '+62 813-9221-0022',
        coordinates: { lat: -8.1360, lng: 110.5980 }
      }
    ],
    faqs: [
      { q: 'Can I collect shells?', a: 'Collection of live marine organisms is prohibited to preserve the ecosystem. Dead shells and coral fragments may be collected in small quantities.' },
      { q: 'Is the beach safe for children?', a: 'The tide pool areas are relatively calm, but always supervise children near the water and rocky areas.' }
    ]
  },
  {
    id: 'pantai-kukup',
    name: 'Pantai Kukup',
    tagline: 'A Bridge to the Guardian Island',
    category: 'beach',
    location: 'Kemadang, Tanjungsari, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Pantai_Kukup-2.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Kukup-1.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Kukup-4.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ombak_Samudra_Hindia_di_Pantai_Kukup%2C_Yogyakarta.jpg'
    ],
    rating: 4.6,
    reviewCount: 3280,
    description: 'Pantai Kukup is famous for its dramatic cliffside bridge connecting the mainland to a rocky island lookout point, reminiscent of Bali\'s Tanah Lot. The Indian Ocean views from the island pavilion are nothing short of breathtaking.',
    story: 'The small island connected by the bridge is called Pulau Kukup and has been revered by local fishermen for centuries as a spiritual guardian of the coast. Before heading out to sea, fishermen would traditionally leave offerings at the island\'s shrine for safe passage.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 05:00 PM Daily',
    facilities: ['Island Bridge', 'Viewing Pavilion', 'Tide Pool Walkway', 'Food Stalls', 'Parking'],
    travelTips: [
      'Cross the bridge at low tide to safely explore the island\'s tide pools.',
      'The island lookout is the best sunset photography spot in the area.',
      'Wear sturdy shoes as the bridge and island paths can be slippery.'
    ],
    bestTime: 'Late afternoon for spectacular sunset views from the island lookout pavilion.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Kukup.'
    },
    latitude: -8.1334,
    longitude: 110.5539,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pk2-p1',
        name: 'Kukup Island Viewpoint Café',
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600',
        rating: 4.5,
        price: 'IDR 30,000 - 80,000 / person',
        distance: 'On-site',
        description: 'Enjoy fresh seafood and cold drinks at the cliffside café with panoramic views of Pulau Kukup and the Indian Ocean.',
        address: 'Kemadang, Tanjungsari, Gunungkidul',
        phone: '+62 821-3344-5566',
        coordinates: { lat: -8.1330, lng: 110.5535 }
      }
    ],
    faqs: [
      { q: 'Is the bridge safe to cross?', a: 'Yes, the bridge is maintained for visitors. Hold the railings and avoid crossing during high waves or strong winds.' },
      { q: 'What can I see on the island?', a: 'The island offers tide pools, a viewing pavilion with 360-degree ocean views, and a small traditional shrine.' }
    ]
  },
  {
    id: 'pantai-sadranan',
    name: 'Pantai Sadranan',
    tagline: 'Gunungkidul\'s Calm Snorkeling Paradise',
    category: 'beach',
    location: 'Pulegundes, Sidoharjo, Tepus, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Sadranan.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ombak_Menerjang_Batu_Karang_di_Pantai_Sadranan.jpg'
    ],
    rating: 4.7,
    reviewCount: 2750,
    description: 'Pantai Sadranan is Gunungkidul\'s premier snorkeling destination, thanks to its remarkably calm waters sheltered by an outer coral reef barrier. The crystal-clear turquoise sea reveals a vibrant underwater world of coral and tropical fish.',
    story: 'Unlike most southern Java beaches with their fierce waves, Pantai Sadranan\'s natural coral reef barrier creates a sheltered lagoon that has made it the go-to spot for introducing visitors to snorkeling. Local communities have organized cooperative snorkeling tours to share their marine paradise.',
    ticketPrice: 'IDR 10,000 (Snorkel rental IDR 25,000)',
    openingHours: '07:00 AM - 04:00 PM Daily',
    facilities: ['Snorkeling Equipment Rental', 'Calm Lagoon', 'Coral Reef Barrier', 'Changing Rooms', 'Food Stalls'],
    travelTips: [
      'Book a snorkeling package for the best value and equipment.',
      'Apply reef-safe sunscreen to protect the delicate coral ecosystem.',
      'Early morning offers the clearest water visibility for snorkeling.'
    ],
    bestTime: 'Early morning when the water is clearest and the lagoon is most tranquil.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Sadranan.'
    },
    latitude: -8.1451,
    longitude: 110.6034,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'psr-p1',
        name: 'Sadranan Snorkeling Cooperative',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.8,
        price: 'IDR 100,000 / person (incl. gear)',
        distance: 'On-site',
        description: 'Community-run snorkeling tours with quality equipment and experienced local guides who know every coral garden in the lagoon.',
        address: 'Pulegundes, Sidoharjo, Tepus, Gunungkidul',
        promotion: 'Free underwater photo session',
        phone: '+62 811-9988-7766',
        coordinates: { lat: -8.1450, lng: 110.6030 }
      }
    ],
    faqs: [
      { q: 'Is the water safe for beginners?', a: 'Yes, the outer coral reef creates a calm lagoon perfect for first-time snorkelers. Guides are available to assist.' },
      { q: 'What marine life can I see?', a: 'Expect to see colorful tropical fish, sea urchins, small reef sharks, and diverse coral formations in the crystal-clear water.' }
    ]
  },
  {
    id: 'pantai-pok-tunggal',
    name: 'Pantai Pok Tunggal',
    tagline: 'The Hidden Paradise Behind the Karst Hills',
    category: 'beach',
    location: 'Tepus, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pok_Tunggal_Beach.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Delightful_Beach.jpg'
    ],
    rating: 4.5,
    reviewCount: 2890,
    description: 'Known as "The Hidden Paradise," Pantai Pok Tunggal is a pristine white-sand beach tucked behind dramatic karst cliffs. Its iconic lone Duras (mahogany) tree standing sentinel on the shore has become the symbol of Gunungkidul\'s hidden beauty.',
    story: 'The name "Pok Tunggal" means "lone tree" in Javanese, referring to the ancient Duras tree that has stood on the beach for as long as anyone can remember. This remarkable tree, typically found only in deep forests, somehow took root in the coastal sand and became the beach\'s beloved icon.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 05:00 PM Daily',
    facilities: ['Iconic Lone Tree', 'Snorkeling Gear Rental', 'Camping Area', 'Food Stalls', 'Parking'],
    travelTips: [
      'Climb the karst hillside stairs for a stunning aerial view of the beach and the iconic lone tree.',
      'Camp overnight to experience both the sunset and sunrise over this hidden paradise.',
      'Snorkel in the calm waters near the karst cliffs for excellent marine life encounters.'
    ],
    bestTime: 'Late afternoon when the setting sun illuminates the lone Duras tree in golden light.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Pok Tunggal.'
    },
    latitude: -8.1554,
    longitude: 110.6214,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pt-p1',
        name: 'Pok Tunggal Camping Ground',
        category: 'rental',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600',
        rating: 4.5,
        price: 'IDR 60,000 / tent',
        distance: 'On-site',
        description: 'Set up camp right on the white sands and fall asleep to the sound of waves beneath a canopy of stars.',
        address: 'Tepus, Gunungkidul',
        promotion: 'Free firewood for campfire',
        phone: '+62 813-9221-0022',
        coordinates: { lat: -8.1550, lng: 110.6210 }
      }
    ],
    faqs: [
      { q: 'Why is it called Pok Tunggal?', a: 'The name means "lone tree" in Javanese, referring to the iconic single Duras (mahogany) tree standing alone on the beach.' },
      { q: 'Can I camp on the beach?', a: 'Yes, camping is available on designated areas of the beach. Tent rental is available on-site for IDR 60,000.' }
    ]
  },
  {
    id: 'pantai-siung',
    name: 'Pantai Siung',
    tagline: 'Where Rock Climbers Conquer the Giant Fangs',
    category: 'beach',
    location: 'Purwodadi, Tepus, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/WATU_TOGOG_PANTAI_SIUNG.jpg'
    ],
    rating: 4.6,
    reviewCount: 2540,
    description: 'Pantai Siung is legendary among Indonesia\'s rock climbing community, with towering cliffs shaped like giant monkey fangs rising dramatically from the white sand. With over 200 climbing routes, it is one of Southeast Asia\'s premier climbing destinations.',
    story: 'The name "Siung" comes from the Javanese word for molar tooth, inspired by the massive cliff formations that resemble giant fangs. Local climbing pioneers first mapped these routes in the 1990s, and the beach has since hosted multiple national and international climbing competitions.',
    ticketPrice: 'IDR 10,000',
    openingHours: '06:00 AM - 05:00 PM Daily',
    facilities: ['200+ Climbing Routes', 'Climbing Equipment Rental', 'White Sand Beach', 'Camping Ground', 'Food Stalls'],
    travelTips: [
      'Bring or rent proper climbing gear — the routes range from beginner-friendly to expert level.',
      'Hire a local certified climbing guide for your first ascent on the cliff faces.',
      'Visit outside of the rainy season (May-October) when the rock surfaces are dry and grippy.'
    ],
    bestTime: 'Dry season months (May-October) for the safest and most enjoyable climbing conditions.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Siung.'
    },
    latitude: -8.1812,
    longitude: 110.6834,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'si-p1',
        name: 'Siung Rock Climbing Academy',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.8,
        price: 'IDR 200,000 / session',
        distance: 'On-site',
        description: 'Professional climbing instruction and guided ascents on Siung\'s world-class limestone cliff routes, suitable for all skill levels.',
        address: 'Purwodadi, Tepus, Gunungkidul',
        promotion: 'Free climbing chalk with session',
        phone: '+62 811-9988-7766',
        coordinates: { lat: -8.1810, lng: 110.6830 }
      }
    ],
    faqs: [
      { q: 'Do I need experience to climb?', a: 'No, there are routes for beginners. The on-site climbing academy offers instruction and guided climbs for first-timers.' },
      { q: 'When is the best time to climb?', a: 'The dry season from May to October offers the best conditions with dry, grippy rock surfaces and clear skies.' }
    ]
  },
  {
    id: 'pantai-wediombo',
    name: 'Pantai Wediombo',
    tagline: 'Ancient Crater Bay of Surfers and Dreamers',
    category: 'beach',
    location: 'Jepitu, Girisubo, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wediombo_Beach_4.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sunset_di_Pantai_Wediombo.jpg'
    ],
    rating: 4.7,
    reviewCount: 2650,
    description: 'Pantai Wediombo is a sweeping crescent bay believed to be the remnants of an ancient volcanic crater, featuring a stunning natural lagoon pool at its edge. It is Gunungkidul\'s top surfing spot and offers some of the most dramatic sunsets on the south coast.',
    story: 'The name "Wediombo" literally means "white sand" in Javanese. Local geological surveys suggest the bay\'s perfect crescent shape was formed by an ancient volcanic eruption, creating a natural harbor that has sheltered fishing communities for centuries.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 06:00 PM Daily',
    facilities: ['Natural Lagoon Pool', 'Surf Break', 'Sunset Viewpoint', 'Surfboard Rental', 'Food Stalls'],
    travelTips: [
      'Surfers should check tide charts — the best waves come during mid to high tide.',
      'The natural lagoon pool is perfect for a calm swim while watching surfers in action.',
      'Stay for sunset — the bay\'s western orientation makes for extraordinary golden hour views.'
    ],
    bestTime: 'Late afternoon for world-class sunsets and optimal surfing conditions.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Wediombo.'
    },
    latitude: -8.1843,
    longitude: 110.7126,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pw-p1',
        name: 'Wediombo Surf School',
        category: 'rental',
        image: 'https://images.unsplash.com/photo-1502680390548-bdbac40a9b27?q=80&w=600',
        rating: 4.7,
        price: 'IDR 150,000 / session (incl. board)',
        distance: 'On-site',
        description: 'Professional surf instruction and board rental at Gunungkidul\'s premier surf break, with lessons for all skill levels.',
        address: 'Jepitu, Girisubo, Gunungkidul',
        promotion: 'Free surf photography with lesson',
        phone: '+62 821-3344-5566',
        coordinates: { lat: -8.1840, lng: 110.7120 }
      }
    ],
    faqs: [
      { q: 'Is the lagoon safe for swimming?', a: 'Yes, the natural lagoon pool is calm and protected from the ocean waves, making it safe for swimming and wading.' },
      { q: 'Can beginners surf here?', a: 'Yes, the surf school offers beginner lessons. The bay has waves suitable for various skill levels depending on the swell.' }
    ]
  },
  {
    id: 'pantai-gesing',
    name: 'Pantai Gesing',
    tagline: 'Where Wooden Boats Rest at Water\'s Edge',
    category: 'beach',
    location: 'Giriasih, Purwosari, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Gesing.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Gesing_Tahun_2022.jpg'
    ],
    rating: 4.4,
    reviewCount: 2120,
    description: 'Pantai Gesing is a charming narrow cove where traditional wooden fishing boats rest along the white sand shore. A modern glass-floor viewing platform perched on the cliffs above offers a heart-pounding perspective of the crashing waves below.',
    story: 'The glass viewing deck at Pantai Gesing was built in 2018 and quickly became one of Gunungkidul\'s most viral attractions. Perched high above the cove, it gives visitors the thrilling sensation of standing directly over the roaring Indian Ocean waves.',
    ticketPrice: 'IDR 10,000',
    openingHours: '07:00 AM - 05:00 PM Daily',
    facilities: ['Glass Viewing Deck', 'Fishing Boat Harbor', 'Cliff Walkway', 'Food Stalls', 'Parking'],
    travelTips: [
      'Visit the glass viewing deck early to avoid long queues during peak hours.',
      'Bring a camera with a wide-angle lens to capture the dramatic cliff-and-ocean composition.',
      'Watch the local fishermen return with their daily catch in the late morning.'
    ],
    bestTime: 'Early morning for the glass deck without crowds, or late morning to see fishing boats arrive.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Gesing.'
    },
    latitude: -8.1095,
    longitude: 110.4824,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pg-p1',
        name: 'Gesing Glass Deck Café',
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600',
        rating: 4.4,
        price: 'IDR 25,000 - 65,000 / person',
        distance: 'On-site',
        description: 'Sip fresh coconut water and local snacks at the cliffside café with direct views of the fishing harbor and glass deck.',
        address: 'Giriasih, Purwosari, Gunungkidul',
        phone: '+62 813-9221-0022',
        coordinates: { lat: -8.1090, lng: 110.4820 }
      }
    ],
    faqs: [
      { q: 'Is the glass deck scary?', a: 'The deck is structurally sound and safe, but it can be thrilling for those with a fear of heights. Take your time and enjoy the view.' },
      { q: 'What kind of boats are at the harbor?', a: 'Traditional Javanese wooden fishing boats (jukung) used by local fishermen for daily ocean fishing trips.' }
    ]
  },
  {
    id: 'pantai-nglambor',
    name: 'Pantai Nglambor',
    tagline: 'Twin Turtle Guardians of the Snorkeling Cove',
    category: 'beach',
    location: 'Purwodadi, Tepus, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Afternoon_at_Nglambor_Beach.jpg'
    ],
    rating: 4.6,
    reviewCount: 2780,
    description: 'Pantai Nglambor is an enchanting cove flanked by two massive rock formations resembling giant sea turtles guarding the shore. These natural barriers create a calm, crystal-clear lagoon that is perfect for snorkeling among colorful coral and tropical fish.',
    story: 'The two prominent rock formations at Nglambor are affectionately called "Kura-Kura Besar" (Big Turtle) and "Kura-Kura Kecil" (Small Turtle) by locals, who believe they are ancient turtles turned to stone to protect the bay from the violent Indian Ocean waves. Fishermen still pay respects before setting sail.',
    ticketPrice: 'IDR 10,000 (Snorkel package IDR 35,000)',
    openingHours: '08:00 AM - 04:00 PM Daily',
    facilities: ['Snorkeling Lagoon', 'Turtle Rock Formations', 'Suspension Bridge', 'Changing Rooms', 'Food Stalls'],
    travelTips: [
      'Hire a snorkeling package for the best experience — guides know exactly where the colorful fish gather.',
      'Walk out on the suspension bridge for an amazing photo of the two turtle rock formations.',
      'Visit during morning hours for the clearest water visibility in the lagoon.'
    ],
    bestTime: 'Morning for crystal-clear snorkeling visibility and fewer visitors in the lagoon.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Pantai Nglambor.'
    },
    latitude: -8.1819,
    longitude: 110.6812,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'pn-p1',
        name: 'Nglambor Turtle Lagoon Tours',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.7,
        price: 'IDR 100,000 / person (incl. gear)',
        distance: 'On-site',
        description: 'Guided snorkeling tours through the calm turtle-guarded lagoon with quality equipment and marine life identification.',
        address: 'Purwodadi, Tepus, Gunungkidul',
        promotion: 'Free underwater GoPro rental',
        phone: '+62 811-9988-7766',
        coordinates: { lat: -8.1815, lng: 110.6810 }
      }
    ],
    faqs: [
      { q: 'Why is the water so calm?', a: 'The two large rock formations act as natural breakwaters, blocking the powerful Indian Ocean waves and creating a protected lagoon.' },
      { q: 'Can I see sea turtles?', a: 'While the rock formations are named after turtles, real sea turtles are occasionally spotted in the area. The snorkeling guides will alert you if any are nearby.' }
    ]
  },
  {
    id: 'goa-kalisuci',
    name: 'Goa Kalisuci',
    tagline: 'The Birthplace of Indonesian Cave Tubing',
    category: 'nature',
    location: 'Pacarejo, Semanu, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Gunung_Sewu.jpg'
    ],
    rating: 4.7,
    reviewCount: 3120,
    description: 'Goa Kalisuci is the pioneering cave tubing destination in Indonesia, where adventurous travelers float on inner tubes through crystal-clear underground rivers cutting through spectacular karst cave systems adorned with ancient stalactites and stalagmites.',
    story: 'Discovered by local spelunkers in the early 2000s, Goa Kalisuci\'s underground river system stretches for kilometers through the Gunung Sewu UNESCO Global Geopark. The caves hold ancient fossils and geological formations dating back millions of years, making every float a journey through deep time.',
    ticketPrice: 'IDR 120,000',
    openingHours: '08:30 AM - 11:00 AM Daily',
    facilities: ['Cave Tubing Equipment', 'Underground River Route', 'Safety Guides', 'Changing Rooms', 'Parking'],
    travelTips: [
      'Book in advance — daily visitor numbers are limited to preserve the cave ecosystem.',
      'Wear quick-dry clothing and water shoes for the cave tubing experience.',
      'Bring a waterproof camera to capture the stunning underground formations.'
    ],
    bestTime: 'Morning when the underground river flow is calmest and cave lighting is most dramatic.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Goa Kalisuci.'
    },
    latitude: -8.0124,
    longitude: 110.6389,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'gk-p1',
        name: 'Kalisuci Cave Adventure Tours',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.8,
        price: 'IDR 120,000 / person (incl. gear)',
        distance: 'On-site',
        description: 'Expert cave guides lead safe and thrilling tubing expeditions through Kalisuci\'s spectacular underground river system.',
        address: 'Pacarejo, Semanu, Gunungkidul',
        promotion: 'Free waterproof bag for personal items',
        phone: '+62 821-3344-5566',
        coordinates: { lat: -8.0120, lng: 110.6385 }
      }
    ],
    faqs: [
      { q: 'Is cave tubing safe?', a: 'Yes, all participants wear life jackets and helmets, and experienced guides accompany every group through the cave system.' },
      { q: 'How long does the tubing experience last?', a: 'The full cave tubing experience takes approximately 2-3 hours, including preparation, the underground float, and the return trek.' }
    ]
  },
  {
    id: 'sri-gethuk-waterfall',
    name: 'Sri Gethuk Waterfall',
    tagline: 'The Eternal Cascade of the Oya River',
    category: 'nature',
    location: 'Bleberan, Playen, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/0/0c/Air_terjun_Sri_Gethuk.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Air_terjun_Sri_Gethuk_Gunungkidul.jpg'
    ],
    rating: 4.6,
    reviewCount: 2980,
    description: 'Sri Gethuk Waterfall is a rare year-round waterfall in Gunungkidul, cascading powerfully through limestone cliffs along the Oya River. Visitors reach the falls by boarding a traditional wooden raft that glides upstream through a scenic river gorge.',
    story: 'The name "Sri Gethuk" comes from Javanese folklore about a beautiful water spirit named Sri who guards the falls. "Gethuk" refers to a traditional Javanese sweet treat, which locals offer at the waterfall\'s base as a token of respect to the spirit before visiting.',
    ticketPrice: 'IDR 15,000',
    openingHours: '08:00 AM - 04:00 PM Daily',
    facilities: ['Wooden Raft Transport', 'River Gorge Trail', 'Swimming Pool', 'Viewing Platforms', 'Food Stalls'],
    travelTips: [
      'Take the wooden raft upstream for a scenic and adventurous approach to the waterfall.',
      'Bring a waterproof bag for electronics — the mist from the falls can be heavy.',
      'Wear water shoes for the rocky riverbed areas around the base of the falls.'
    ],
    bestTime: 'Morning when the waterfall mist catches the sunlight in beautiful rainbows.',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Sri Gethuk Waterfall.'
    },
    latitude: -7.9426,
    longitude: 110.4892,
    reviews: MOCK_REVIEWS,
    partners: [
      {
        id: 'sg-p1',
        name: 'Sri Gethuk Rafting Experience',
        category: 'guide',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600',
        rating: 4.7,
        price: 'IDR 80,000 / person (incl. raft)',
        distance: 'On-site',
        description: 'Traditional wooden raft ride upstream through the Oya River gorge to the base of Sri Gethuk Waterfall, guided by local boatmen.',
        address: 'Bleberan, Playen, Gunungkidul',
        promotion: 'Free traditional snack after the ride',
        phone: '+62 813-9221-0022',
        coordinates: { lat: -7.9420, lng: 110.4890 }
      }
    ],
    faqs: [
      { q: 'Does the waterfall dry up?', a: 'No, Sri Gethuk is fed by a reliable underground spring system, making it one of the few waterfalls in Gunungkidul that flows year-round.' },
      { q: 'How do I get to the waterfall?', a: 'You take a traditional wooden raft upstream from the riverbank launch point. The raft ride takes about 15 minutes and is included in some tour packages.' }
    ]
  }
];
