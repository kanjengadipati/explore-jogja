// Batch 5: IDs 81-100
import { Destination } from './types';

const MOCK_REVIEWS = [
  {
    userName: 'Sophia Laurent',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    rating: 5,
    date: '2026-06-15',
    comment: 'An absolutely magical experience. The atmosphere felt like stepping back in time. The Javanese hospitality was unparalleled.'
  },
  {
    userName: 'Yuki Tanaka',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    rating: 4.8,
    date: '2026-07-02',
    comment: 'Watching the sunset over these structures is a lifetime memory. Highly recommend hiring a local certified guide!'
  },
  {
    userName: 'Budi Santoso',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    rating: 5,
    date: '2026-07-10',
    comment: 'The architectural precision is stunning. Must visit the nearby local cafes afterwards for traditional kopi klotok!'
  }
];

function makeReviews(slug: string) {
  return MOCK_REVIEWS.map((r, i) => ({ ...r, id: `r-${slug}-${i + 1}` }));
}

export const BATCH_5_DESTINATIONS: Destination[] = [
  {
    id: 'masjid-gedhe-kauman',
    name: 'Masjid Gedhe Kauman',
    tagline: 'Sacred Crown of the Sultan\'s Spiritual Realm',
    category: 'heritage',
    location: 'Alun-Alun Utara No. 1, Kauman, Ngupasan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Jogja_-_Mesjid_Gedhe_Kauman_Karaton_Ngayogyakarta_Hadiningrat_%282025%29_-_img_01.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kubah_Masjid_Agung_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Agung_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Gedhe_Kauman_2022_-_ablution_fountain.jpg'
    ],
    rating: 4.8,
    reviewCount: 2840,
    description: 'The grand royal mosque of the Yogyakarta Sultanate, established in 1773, showcasing the iconic three-tiered Javanese traditional roof structure crafted from solid teakwood pillars. It remains one of the most important and architecturally stunning Islamic landmarks in Java.',
    story: 'According to Javanese cosmology, the mosque was deliberately positioned west of the Kraton along the sacred axis connecting Mount Merapi, the Sultan\'s Palace, and the Southern Sea. Local tradition holds that the triple-roofed design represents the stages of human spiritual journey toward enlightenment in Javanese Islam.',
    ticketPrice: 'Free Entry',
    openingHours: 'Open during prayer times, daily',
    facilities: ['Large prayer hall', 'Ablution fountains', 'Air-conditioned sections', 'Spacious courtyard', 'Tourist information board'],
    travelTips: [
      'Dress modestly with covered shoulders and knees before entering the mosque complex.',
      'Visit early morning for a peaceful and serene atmosphere with minimal crowds.',
      'Photography is permitted in the courtyard but please be respectful during prayer times.'
    ],
    bestTime: 'Early morning during quiet prayer hours for the most tranquil experience',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Masjid Gedhe Kauman.'
    },
    latitude: -7.8038,
    longitude: 110.3626,
    reviews: makeReviews('masjid-gedhe-kauman'),
    partners: [
      {
        id: 'mgk-p1',
        name: 'Hotel Garuda Yogyakarta',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_Garuda_Kotagede_Yogyakarta.jpg',
        rating: 4.6,
        price: 'IDR 800,000 / night',
        distance: '1.5 km from Masjid Gedhe Kauman',
        description: 'A classic Javanese heritage hotel near the Kraton offering traditional hospitality with modern comforts and a central courtyard garden.',
        address: 'Jl. Jend. Sudirman No. 30, Yogyakarta',
        promotion: '10% Off for Royal Pass holders',
        phone: '+62 274 563056',
        coordinates: { lat: -7.7985, lng: 110.3640 }
      },
      {
        id: 'mgk-p2',
        name: 'Warung Beringharjo',
        category: 'restaurant',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Warung_Gudeg_Yu_Djum.jpg',
        rating: 4.7,
        price: 'IDR 25,000 - 50,000 / person',
        distance: '0.8 km from Masjid Gedhe Kauman',
        description: 'A beloved local warung serving traditional Javanese gudeg and kuah areh just steps away from the mosque complex.',
        address: 'Jl. Wijilan No. 12, Yogyakarta',
        phone: '+62 274 374455',
        coordinates: { lat: -7.8042, lng: 110.3660 }
      }
    ],
    faqs: [
      { q: 'Is the mosque open to non-Muslim visitors?', a: 'Yes, non-Muslim visitors are welcome to observe the architecture from the courtyard. Please be respectful and avoid entering the inner prayer hall during prayer times.' },
      { q: 'Is there an entrance fee?', a: 'No, entry to the mosque complex is completely free for all visitors.' }
    ]
  },
  {
    id: 'museum-sonobudoyo',
    name: 'Museum Sonobudoyo',
    tagline: 'Guardian of Javanese Civilization\'s Treasures',
    category: 'heritage',
    location: 'Jl. Pangurakan No. 6, Ngupasan, Gondomanan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/SanabudayaMuseumEntrySign85.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Arca_koleksi_Sonobudoyo.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Arca_Singa_Air_Sonobudoyo.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kelir_Naga_Gajah_Sonobudoyo.jpg'
    ],
    rating: 4.8,
    reviewCount: 1920,
    description: 'The second most comprehensive Javanese history and culture museum after the National Museum in Jakarta, housing thousands of priceless artifacts including ancient keris daggers, wayang shadow puppets, masks, and archaeological statues spanning centuries.',
    story: 'Founded in 1935 during the Dutch colonial era, Sonobudoyo was built on the sacred ground directly north of the Kraton, aligning with the mystical north-south axis. Its collection of over 40,000 artifacts is considered the most complete repository of Javanese cultural heritage in existence today.',
    ticketPrice: 'IDR 10,000',
    openingHours: '08:00 AM - 04:00 PM Daily (Wayang Kulit show on select evenings)',
    facilities: ['Exhibition halls', 'Wayang Kulit performance space', 'Cultural library', 'Clean restrooms', 'Gift shop'],
    travelTips: [
      'Catch the traditional Wayang Kulit shadow puppet performance on select evenings for an unforgettable cultural experience.',
      'Ask the staff about the ancient keris collection for a deeper understanding of Javanese metallurgy and spiritual beliefs.',
      'Combine your visit with nearby Kraton Yogyakarta and Taman Sari for a full heritage day.'
    ],
    bestTime: 'Morning for the best museum lighting, or evenings for Wayang Kulit performances',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Museum Sonobudoyo.'
    },
    latitude: -7.8024,
    longitude: 110.3649,
    reviews: makeReviews('museum-sonobudoyo'),
    partners: [
      {
        id: 'msb-p1',
        name: 'Omah Lowo Heritage Stay',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Omah_Lowo_Boutique_Hotel.jpg',
        rating: 4.7,
        price: 'IDR 650,000 / night',
        distance: '0.3 km from Museum Sonobudoyo',
        description: 'A charming boutique heritage guesthouse in a restored colonial building steps from the museum, featuring handcrafted batik decor and traditional breakfast.',
        address: 'Jl. Pangurakan No. 8, Yogyakarta',
        promotion: 'Free museum walking tour included',
        phone: '+62 812-2500-8891',
        coordinates: { lat: -7.8020, lng: 110.3652 }
      }
    ],
    faqs: [
      { q: 'Are English guides available?', a: 'Yes, English-speaking guides can be arranged at the entrance for an additional fee. Audio guides are also available.' },
      { q: 'How long does a typical visit take?', a: 'Most visitors spend 1.5 to 2 hours exploring the museum. Add another hour if you stay for the evening Wayang Kulit performance.' }
    ]
  },
  {
    id: 'museum-affandi',
    name: 'Museum Affandi',
    tagline: 'Where Expressionism Meets Javanese Soul',
    category: 'heritage',
    location: 'Jl. Laksda Adisucipto No. 167, Papringan, Caturtunggal, Depok, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/7/73/Barang_koleksi_berupa_mobil_dan_sepeda_onthel_yang_terpajang_di_dalam_Galeri_I_Museum_Affandi.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Affandi_Museum_Exhibition_Room.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Affandi_Museum_Sketch.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lukisan_Ibu_di_dalam_Kamar_Koleksi_Museum_Affandi.jpg'
    ],
    rating: 4.7,
    reviewCount: 3150,
    description: 'The residence-turned-museum of world-renowned expressionist painter Affandi, displaying hundreds of his legendary paintings characterized by distinctive palette-knife techniques. Set along the tranquil banks of the Code River in a uniquely designed open-air gallery.',
    story: 'Affandi, often called the "Pablo Picasso of Indonesia," designed the museum\'s iconic curvilinear roofs himself, claiming they were shaped by his dreams of the ocean waves. The museum preserves his personal living quarters intact, offering an intimate glimpse into the daily life of this creative genius who painted over 2,000 works in his lifetime.',
    ticketPrice: 'IDR 25,000',
    openingHours: '09:00 AM - 03:00 PM Daily',
    facilities: ['Art galleries', 'Riverside garden', 'Souvenir art shop', 'Open-air studio area', 'Free parking'],
    travelTips: [
      'Visit in the morning when natural light best illuminates the paintings in the open-air gallery.',
      'Don\'t miss Gallery III for Affandi\'s most emotionally powerful late works.',
      'The riverside cafe serves excellent traditional Javanese snacks with a peaceful river view.'
    ],
    bestTime: 'Morning (09:00 AM - 12:00 PM) for the best natural gallery lighting',
    weather: {
      temp: '28°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Museum Affandi.'
    },
    latitude: -7.7828,
    longitude: 110.3963,
    reviews: makeReviews('museum-affandi'),
    partners: [
      {
        id: 'maf-p1',
        name: 'Gallery 36 Art Hotel',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gallery_36_Hotel_Yogyakarta.jpg',
        rating: 4.6,
        price: 'IDR 900,000 / night',
        distance: '1.2 km from Museum Affandi',
        description: 'An art-themed boutique hotel celebrating Yogyakarta\'s creative spirit, with rooms decorated by local contemporary artists and a rooftop gallery.',
        address: 'Jl. Laksda Adisucipto No. 208, Yogyakarta',
        promotion: 'Free Affandi Museum entry pass',
        phone: '+62 274 488836',
        coordinates: { lat: -7.7840, lng: 110.3980 }
      }
    ],
    faqs: [
      { q: 'Can visitors paint in the museum?', a: 'The museum occasionally hosts painting workshops in the outdoor studio area. Check their schedule or inquire at the front desk for availability.' },
      { q: 'Is photography allowed inside?', a: 'Photography without flash is permitted in most galleries. Some special exhibitions may restrict photography.' }
    ]
  },
  {
    id: 'titik-nol-kilometer-jogja',
    name: 'Titik Nol Kilometer Jogja',
    tagline: 'Where History Converges at the Crossroads',
    category: 'heritage',
    location: 'Ngupasan, Gondomanan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d8/Gedung_Bank_BNI_1946_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Kantor_Pos_Besar_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Bank_Indonesia_Yogyakarta.jpg'
    ],
    rating: 4.8,
    reviewCount: 4720,
    description: 'A legendary historic intersection in the heart of the city, encircled by grand Dutch colonial-era landmarks including the BNI building, the Main Post Office, and Bank Indonesia, all illuminated beautifully at night.',
    story: 'This intersection marks the symbolic zero point from which all distances in Yogyakarta are measured. During the Indonesian National Revolution in 1949, these colonial buildings became strategic strongholds for independence fighters. Today, the area serves as the cultural and social epicenter where old-world colonial grandeur meets modern Javanese urban life.',
    ticketPrice: 'Free Entry',
    openingHours: '07:00 PM - 11:00 PM Daily (Best for evening illumination)',
    facilities: ['Street benches', 'Colonial architecture viewing', 'Street food vendors', 'Free Wi-Fi zone', 'Nearby parking'],
    travelTips: [
      'Visit after sunset to see the colonial buildings beautifully illuminated with golden lights.',
      'Bring a wide-angle camera to capture the full grandeur of the surrounding architectural ensemble.',
      'Walk to nearby Malioboro or the Grand Post Office for a connected heritage walking experience.'
    ],
    bestTime: 'Evening after 07:00 PM when the colonial facades are dramatically lit',
    weather: {
      temp: '27°C',
      condition: 'Clear Evening',
      status: 'Enjoy a perfect evening stroll at Titik Nol Kilometer Jogja.'
    },
    latitude: -7.8012,
    longitude: 110.3661,
    reviews: makeReviews('titik-nol-kilometer-jogja'),
    partners: [
      {
        id: 'tnk-p1',
        name: 'Hotel Neo Malioboro',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_Neo_Malioboro_Yogyakarta.jpg',
        rating: 4.5,
        price: 'IDR 550,000 / night',
        distance: '0.2 km from Titik Nol Kilometer',
        description: 'A modern comfort hotel located at the heart of Yogyakarta\'s historic center, within walking distance of all major heritage landmarks.',
        address: 'Jl. Malioboro No. 31, Yogyakarta',
        promotion: 'Free welcome drink upon arrival',
        phone: '+62 274 619888',
        coordinates: { lat: -7.7940, lng: 110.3665 }
      }
    ],
    faqs: [
      { q: 'Is it safe to visit at night?', a: 'Yes, the area is well-lit and heavily patrolled by tourist police. It is one of the safest and busiest areas in Yogyakarta at night.' },
      { q: 'What are the colonial buildings around the intersection?', a: 'The four iconic buildings are the BNI 1946 building, the Main Post Office (Kantor Pos Besar), Bank Indonesia, and the historic Gedung Agung presidential palace.' }
    ]
  },
  {
    id: 'tugu-pal-putih-jogja',
    name: 'Tugu Pal Putih Jogja',
    tagline: 'The Eternal Axis of Javanese Cosmos',
    category: 'heritage',
    location: 'Persimpangan Jl. Jend. Sudirman & Jl. Margo Utomo, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tugu_Yogyakarta_in_December_2021_(clear_sky).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tugu_Yogyakarta_di_Malam_Hari_oleh_SalsabilaHusna.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Panorama_Tugu_Yogyakarta.jpg'
    ],
    rating: 4.8,
    reviewCount: 4580,
    description: 'The iconic white monument symbolizing the philosophical axis of Yogyakarta, aligning Mount Merapi, the Tugu monument, the Kraton Palace, and the mystical Parangtritis Beach in one sacred imaginary line. It stands as the most photographed landmark in the city.',
    story: 'Originally erected by Sultan Hamengkubuwono I, the Tugu was designed as the spiritual needle connecting the volatile Mount Merapi in the north with the mystical Queen of the Southern Sea in the south. Local mystics believe the Tugu channels cosmic energy along this axis, making it the spiritual heart of Yogyakarta. In Javanese philosophy, standing at the Tugu while facing south connects one to the realm of Nyai Roro Kidul.',
    ticketPrice: 'Free Entry',
    openingHours: '09:00 PM - 12:00 AM Daily (Illuminated nightly)',
    facilities: ['Open plaza seating', 'Photography spot', 'Nearby street musicians', 'Tourist information kiosk', 'Public restrooms nearby'],
    travelTips: [
      'Visit late at night (after 10 PM) when traffic clears for the best unobstructed photos of the illuminated monument.',
      'Sit on the surrounding benches and watch the vibrant local life passing by in the warm tropical evening.',
      'Walk south toward Malioboro for a connected evening heritage stroll through the city\'s most vibrant streets.'
    ],
    bestTime: 'Late night after 10:00 PM when traffic thins out for perfect photo opportunities',
    weather: {
      temp: '26°C',
      condition: 'Clear Night',
      status: 'Enjoy a cool evening breeze at Tugu Pal Putih Jogja.'
    },
    latitude: -7.7828,
    longitude: 110.3671,
    reviews: makeReviews('tugu-pal-putih-jogja'),
    partners: [
      {
        id: 'tpj-p1',
        name: 'The Phoenix Hotel Yogyakarta',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Phoenix_Hotel_Yogyakarta.jpg',
        rating: 4.8,
        price: 'IDR 1,200,000 / night',
        distance: '0.5 km from Tugu Pal Putih',
        description: 'A luxurious colonial heritage boutique hotel offering genuine Javanese spa treatments and a grand central courtyard pool in a restored 1900s building.',
        address: 'Jl. Jend. Sudirman No. 9, Yogyakarta',
        promotion: 'Complimentary sunset cocktail on rooftop',
        phone: '+62 274 566617',
        coordinates: { lat: -7.7830, lng: 110.3675 }
      }
    ],
    faqs: [
      { q: 'Can you climb the Tugu monument?', a: 'No, climbing the Tugu is strictly prohibited. Visitors can admire it from the surrounding plaza and take photos from the base.' },
      { q: 'Why is the Tugu important to Yogyakarta?', a: 'The Tugu represents the philosophical axis of the city, symbolically connecting Mount Merapi, the Sultan\'s Palace, and the Southern Sea in Javanese cosmology.' }
    ]
  },
  {
    id: 'pasar-satwa-dan-tanaman-hias',
    name: 'Pasar Satwa dan Tanaman Hias (PASTHY)',
    tagline: 'A Living Green Marketplace of Wonder',
    category: 'family',
    location: 'Jl. Bantul No. 141, Gedongkiwo, Mantrijeron, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pasty_Pasar_Satwa_dan_Tanaman_Hias_Yogyakarta_(50775977577).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pasty_Pasar_Satwa_dan_Tanaman_Hias_Yogyakarta_-_50775977242.jpg'
    ],
    rating: 4.4,
    reviewCount: 1350,
    description: 'The most comprehensive indoor plant and pet marketplace in Yogyakarta, selling singing birds, exotic reptiles, and a stunning variety of ornamental plants. Tidy and beautifully arranged like a green family recreation park.',
    story: 'PASTHY has operated as the city\'s premier animal and plant market for decades, evolving from a humble street market into a clean, organized green space. Bird-singing competitions held here every weekend carry deep Javanese cultural significance, as ownership of prized songbirds has been a mark of refinement among Yogyakarta\'s residents for centuries.',
    ticketPrice: 'Free Entry',
    openingHours: '08:00 AM - 11:00 AM Daily',
    facilities: ['Plant nurseries', 'Pet stalls', 'Bird singing arena', 'Free parking', 'Shaded walkways'],
    travelTips: [
      'Visit early in the morning when birds are most active and the market atmosphere is at its liveliest.',
      'Bring your own bags for carrying new plant purchases home.',
      'Try to visit on weekends for the traditional bird-singing competitions held in the arena.'
    ],
    bestTime: 'Early morning (08:00 AM - 11:00 AM) for the best bird activity and market atmosphere',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at PASTHY.'
    },
    latitude: -7.8289,
    longitude: 110.3542,
    reviews: makeReviews('pasar-satwa-dan-tanaman-hias'),
    partners: [
      {
        id: 'pas-p1',
        name: 'Mantrijeron Homestay',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mantrijeron_Homestay.jpg',
        rating: 4.5,
        price: 'IDR 350,000 / night',
        distance: '0.5 km from PASTHY',
        description: 'A cozy family-run Javanese homestay offering authentic village hospitality, traditional breakfast, and peaceful garden settings.',
        address: 'Jl. Bantul No. 189, Mantrijeron, Yogyakarta',
        promotion: 'Free market tour with stay',
        phone: '+62 813-9200-4411',
        coordinates: { lat: -7.8295, lng: 110.3548 }
      }
    ],
    faqs: [
      { q: 'Can I bring my own pets to PASTHY?', a: 'Visitors can bring leashed dogs or caged pets, but please be mindful of the various animals sold at the stalls.' },
      { q: 'Are the prices negotiable?', a: 'Yes, friendly bargaining is common and expected at most stalls, especially for plants and accessories.' }
    ]
  },
  {
    id: 'kebun-binatang-gembira-loka',
    name: 'Kebun Binatang Gembira Loka',
    tagline: 'Where Wonder Meets the Wild Kingdom',
    category: 'family',
    location: 'Jl. Kebun Raya No. 2, Rejowinangun, Kotagede, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Gembira_Loka_Zoo_in_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/%27Komodo_Dragon%27_at_the_Gembira_Loka_Zoo%27_in_Yogyakarta..JPG',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Green_peafowl_(Pavo_muticus)%2C_Gembira_Loka_Zoo%2C_Yogyakarta%2C_2015-03-15.jpg'
    ],
    rating: 4.7,
    reviewCount: 4200,
    description: 'The largest and most modern zoo in Central Java and Yogyakarta, housing hundreds of rare and endangered animals including elephants, tigers, and Komodo dragons, all nestled within lush gardens with touch pools and scenic boat rides.',
    story: 'Founded in 1959 on the former estate of Sultan Hamengkubuwono VIII, the zoo was named "Gembira Loka" meaning "Happy Abode" by the Sultan himself. The estate\'s ancient banyan trees still shade the pathways today, and several original royal garden structures have been preserved among the modern exhibits, blending conservation with royal heritage.',
    ticketPrice: 'IDR 60,000',
    openingHours: '08:30 AM - 01:00 PM Daily',
    facilities: ['Animal exhibits', 'Touch pools', 'Scenic boat ride', 'Children playground', 'Food court'],
    travelTips: [
      'Arrive early in the morning to see the animals at their most active before the midday heat.',
      'Don\'t miss the Komodo dragon enclosure and the elephant bath time for amazing photo opportunities.',
      'Bring sunscreen and hats as some walkways are exposed to the tropical sun.'
    ],
    bestTime: 'Morning (08:30 AM - 11:00 AM) when animals are most active and temperatures are cooler',
    weather: {
      temp: '28°C',
      condition: 'Sunny',
      status: 'Perfect weather for a family day at Gembira Loka Zoo.'
    },
    latitude: -7.8049,
    longitude: 110.3982,
    reviews: makeReviews('kebun-binatang-gembira-loka'),
    partners: [
      {
        id: 'gbl-p1',
        name: 'Kotagede Heritage Inn',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kotagede_Heritage_Inn.jpg',
        rating: 4.6,
        price: 'IDR 750,000 / night',
        distance: '0.8 km from Gembira Loka Zoo',
        description: 'A beautifully restored heritage guesthouse in the ancient Kotagede royal district, offering traditional Javanese architecture with modern amenities.',
        address: 'Jl. Kebun Raya No. 15, Kotagede, Yogyakarta',
        promotion: 'Free zoo tickets for two guests',
        phone: '+62 274 378801',
        coordinates: { lat: -7.8055, lng: 110.3990 }
      }
    ],
    faqs: [
      { q: 'Are there feeding sessions for visitors?', a: 'Yes, scheduled feeding sessions for elephants, giraffes, and sea lions occur at specific times. Check the daily schedule at the entrance.' },
      { q: 'Is the zoo stroller-friendly?', a: 'Most main pathways are paved and accessible for strollers, though some hill sections may require assistance.' }
    ]
  },
  {
    id: 'plengkung-wijilan',
    name: 'Plengkung Wijilan',
    tagline: 'Royal Gateway to Legendary Culinary Streets',
    category: 'heritage',
    location: 'Jl. Wijilan, Kraton, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Jokteng_Lor_Wetan.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Plengkung_Wijilan_Yogyakarta.jpg'
    ],
    rating: 4.5,
    reviewCount: 1680,
    description: 'Historic curved-roof fortress gates from the Mataram Kingdom era, serving as the grand entrance to the legendary Wijilan gudeg culinary district. A striking example of traditional Javanese royal military architecture.',
    story: 'Built during the reign of Sultan Hamengkubuwono I, Plengkung Wijilan was part of a series of fortified gates protecting the southern entrance to the Kraton. The distinctive arched design was engineered to slow approaching cavalry while allowing foot traffic to pass freely. Today, passing through these ancient gates transports visitors into the bustling gudeg food stalls that have lined the street for generations.',
    ticketPrice: 'Free Entry',
    openingHours: 'Open morning to afternoon, daily',
    facilities: ['Heritage architecture viewing', 'Nearby gudeg restaurants', 'Street photography spots', 'Shaded sidewalks'],
    travelTips: [
      'Walk through the gate and continue along Wijilan Street to sample the best gudeg in Yogyakarta.',
      'Visit in the early afternoon when the golden light beautifully illuminates the ancient red brick structure.',
      'Pair with a visit to nearby Kraton Yogyakarta for a complete heritage walking tour.'
    ],
    bestTime: 'Afternoon when the warm light enhances the ancient brick architecture',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Plengkung Wijilan.'
    },
    latitude: -7.8046,
    longitude: 110.3681,
    reviews: makeReviews('plengkung-wijilan'),
    partners: [
      {
        id: 'pw-p1',
        name: 'Gudeg Yu Djum Wijilan',
        category: 'restaurant',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gudeg_Yu_Djum_Wijilan.jpg',
        rating: 4.8,
        price: 'IDR 25,000 - 55,000 / person',
        distance: '0.1 km from Plengkung Wijilan',
        description: 'The most legendary gudeg restaurant in Yogyakarta, serving sweet stewed jackfruit with rich coconut cream and spicy krecek since 1950.',
        address: 'Jl. Wijilan No. 167, Kraton, Yogyakarta',
        promotion: '10% off on takeaway packages',
        phone: '+62 811-2511-167',
        coordinates: { lat: -7.8048, lng: 110.3685 }
      }
    ],
    faqs: [
      { q: 'What is gudeg?', a: 'Gudeg is a traditional Javanese dish of young jackfruit slow-cooked in coconut milk with palm sugar and spices, typically served with rice, chicken, and spicy krecek (cattle skin stew).' },
      { q: 'Can you enter the gate structure?', a: 'You can walk through the passage beneath the arched roof. The interior is not accessible for climbing, but the exterior is a wonderful photo subject.' }
    ]
  },
  {
    id: 'ndalem-pujokusuman',
    name: 'Ndalem Pujokusuman',
    tagline: 'Living Stage of Javanese Classical Dance',
    category: 'heritage',
    location: 'Jl. Brigjen Katamso, Keparakan, Mergangsan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Dalem_Pujokusuman.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ndalem_Pujokusuman_(1).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ndalem_Pujokusuman_(2).jpg'
    ],
    rating: 4.6,
    reviewCount: 890,
    description: 'A grand nobleman\'s pendopo pavilion from the Mataram Kingdom, still actively used as a preservation center and regular training venue for classical Yogyakarta court dance performances, showcasing the refined artistry of Javanese performing arts.',
    story: 'Originally the private residence of a Mataram prince, Ndalem Pujokusuman has been a cradle of classical Javanese dance for over a century. The pavilion\'s open-air pendopo design was specifically engineered to amplify the subtle sounds of gamelan instruments without modern technology. Visitors during training sessions can witness the same postures and movements passed down through unbroken lineages of court dancers since the 18th century.',
    ticketPrice: 'Free Entry (Training sessions)',
    openingHours: '04:00 PM - 06:00 PM (Tue & Fri, Dance Training)',
    facilities: ['Pendopo pavilion', 'Dance training area', 'Traditional gamelan instruments', 'Garden courtyard', 'Free entry during practice'],
    travelTips: [
      'Arrive on Tuesday or Friday afternoon to watch authentic classical dance training sessions for free.',
      'Sit quietly at the edge of the pendopo to fully appreciate the grace and precision of the dancers.',
      'Ask permission before photographing, and never use flash during training as it disrupts concentration.'
    ],
    bestTime: 'Tuesday or Friday afternoon (04:00 PM - 06:00 PM) for live dance training',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Ndalem Pujokusuman.'
    },
    latitude: -7.8132,
    longitude: 110.3712,
    reviews: makeReviews('ndalem-pujokusuman'),
    partners: [
      {
        id: 'np-p1',
        name: 'Mergangsan Arts Homestay',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mergangsan_Homestay.jpg',
        rating: 4.5,
        price: 'IDR 400,000 / night',
        distance: '0.3 km from Ndalem Pujokusuman',
        description: 'A culturally immersive homestay in the artistic Mergangsan district, offering traditional Javanese hospitality and walking-distance access to cultural landmarks.',
        address: 'Jl. Brigjen Katamso No. 22, Mergangsan, Yogyakarta',
        promotion: 'Free batik-making workshop',
        phone: '+62 812-2600-1234',
        coordinates: { lat: -7.8135, lng: 110.3715 }
      }
    ],
    faqs: [
      { q: 'Can beginners join the dance training?', a: 'The training sessions are primarily for registered students, but observers are very welcome. Occasional beginner workshops are offered during cultural festivals.' },
      { q: 'What type of dance is practiced here?', a: 'Classical Javanese court dance (Tari Kraton), including Bedhaya and Srimpi styles that have been performed exclusively in royal settings for centuries.' }
    ]
  },
  {
    id: 'jogja-national-museum',
    name: 'Jogja National Museum (JNM)',
    tagline: 'Cathedral of Contemporary Javanese Creativity',
    category: 'heritage',
    location: 'Jl. Prof. DR. Ki Amri Yahya No. 1, Pakuncen, Wirobrajan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/ARTJOG_di_Jogja_National_Museum.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Koleksi_unik_di_ARTJOG_2022_Jogja_National_Museum.jpg'
    ],
    rating: 4.7,
    reviewCount: 2350,
    description: 'A modern art gallery complex housed in the historic former ASRI/ISI art campus, actively hosting contemporary art exhibitions by young creative artists, aesthetic cafes, and live performances that bridge tradition with modernity.',
    story: 'The building was once the campus of Indonesia\'s first fine arts academy (ASRI), where masters like Affandi and Basoeki Abdullah once taught. When the academy relocated, the abandoned campus was transformed into a contemporary art space, preserving the creative spirit while welcoming a new generation of artists. The annual ARTJOG fair held here has become one of Southeast Asia\'s most prestigious contemporary art events.',
    ticketPrice: 'IDR 20,000 - IDR 50,000 (Per exhibition)',
    openingHours: '03:00 PM - 08:00 PM Daily',
    facilities: ['Art galleries', 'Exhibition halls', 'Cafe and lounge', 'Event space', 'Art bookshop'],
    travelTips: [
      'Check the JNM website before visiting to see which current exhibitions are showing during your trip.',
      'Visit in the late afternoon to combine gallery viewing with the lively evening atmosphere.',
      'The on-site cafe serves excellent artisanal coffee and is a great place to discuss the art you just experienced.'
    ],
    bestTime: 'Late afternoon to evening (03:00 PM - 07:00 PM) for the best gallery and cafe atmosphere',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Jogja National Museum.'
    },
    latitude: -7.8011,
    longitude: 110.354,
    reviews: makeReviews('jogja-national-museum'),
    partners: [
      {
        id: 'jnm-p1',
        name: 'Wirobrajan Art Quarter Stay',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wirobrajan_Quarter_Hotel.jpg',
        rating: 4.6,
        price: 'IDR 700,000 / night',
        distance: '0.4 km from Jogja National Museum',
        description: 'A creatively designed boutique stay in Yogyakarta\'s emerging art quarter, featuring rooms decorated by local contemporary artists and a gallery lobby.',
        address: 'Jl. Prof. Ki Amri Yahya No. 8, Wirobrajan, Yogyakarta',
        promotion: 'Free museum pass included',
        phone: '+62 274 380012',
        coordinates: { lat: -7.8015, lng: 110.3545 }
      }
    ],
    faqs: [
      { q: 'What is ARTJOG?', a: 'ARTJOG is an annual contemporary art fair held at JNM that attracts artists and collectors from across Southeast Asia and beyond. It typically runs during the July-August period.' },
      { q: 'Are there guided tours available?', a: 'Yes, volunteer guides are available during exhibitions. Group tours can be arranged in advance through the museum office.' }
    ]
  },
  {
    id: 'festival-kebudayaan-yogyakarta',
    name: 'Festival Kebudayaan Yogyakarta (FKY)',
    tagline: 'Where Ancient Traditions Dance with Modern Soul',
    category: 'weekend',
    location: 'Lokasi bergilir di berbagai Kabupaten DIY',
    subRegion: 'Yogyakarta',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Festival_Kebudayaan_Yogyakarta_2023.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Parade_FKY_Yogyakarta.jpg'
    ],
    rating: 4.8,
    reviewCount: 3680,
    description: 'The largest annual cultural festival in the Special Region of Yogyakarta, showcasing traditional arts from remote villages across the island, grand cultural processions, craft exhibitions, and ancient Nusantara culinary treasures.',
    story: 'First held in 1987, the FKY was conceived to preserve endangered traditional art forms that were disappearing as urbanization swept across Java. Each year, the festival highlights a different regency, giving remote village artists a grand stage to showcase their nearly-forgotten crafts, dances, and music. The grand cultural parade features hundreds of performers in elaborate traditional costumes, some traveling from the most isolated corners of the island.',
    ticketPrice: 'Free Entry',
    openingHours: 'September (Annual schedule)',
    facilities: ['Exhibition pavilions', 'Food courts', 'Cultural performance stages', 'Craft workshops', 'Parking areas'],
    travelTips: [
      'Check the official FKY schedule early as dates and venues change each year based on the Javanese calendar.',
      'Arrive in the morning for workshops and craft demonstrations, and return in the evening for grand performances.',
      'Bring cash as many traditional food vendors and craft sellers do not accept card payments.'
    ],
    bestTime: 'September during the annual festival period for the most vibrant cultural displays',
    weather: {
      temp: '28°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant tropical weather at Festival Kebudayaan Yogyakarta.'
    },
    latitude: -7.7956,
    longitude: 110.3695,
    reviews: makeReviews('festival-kebudayaan-yogyakarta'),
    partners: [
      {
        id: 'fky-p1',
        name: 'Budaya Heritage Hotel',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Budaya_Heritage_Hotel.jpg',
        rating: 4.7,
        price: 'IDR 850,000 / night',
        distance: '2 km from FKY main venue',
        description: 'A culture-themed heritage hotel offering traditional batik-decorated rooms and complimentary cultural event information for guests visiting Yogyakarta during festival season.',
        address: 'Jl. Suryatmajayan No. 5, Yogyakarta',
        promotion: 'FKY festival package with guided tours',
        phone: '+62 274 372201',
        coordinates: { lat: -7.7960, lng: 110.3700 }
      }
    ],
    faqs: [
      { q: 'When is the FKY held each year?', a: 'The FKY is typically held in September, though exact dates follow the Javanese calendar and may vary. Check the official Yogyakarta Culture Office website for updates.' },
      { q: 'Is the festival free to attend?', a: 'Yes, most FKY events and performances are free and open to the public. Some special workshops or VIP events may require tickets.' }
    ]
  },
  {
    id: 'yogyakarta-royal-orchestra-concert',
    name: 'Yogyakarta Royal Orchestra Concert',
    tagline: 'Royal Symphony Where East Meets West',
    category: 'weekend',
    location: 'Pendopo Agung Kraton / Tebing Breksi',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Yogyakarta_Royal_Orchestra.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Yogyakarta_Royal_Orchestra_Hutan_Pinus_Mangunan.jpg'
    ],
    rating: 4.9,
    reviewCount: 1560,
    description: 'The official symphony orchestra of the Yogyakarta Kraton under the Sultan\'s patronage, uniquely blending Western classical orchestral instruments with the majestic traditional Javanese gamelan and gending kraton court music.',
    story: 'Established by Sultan Hamengkubuwono X, the Yogyakarta Royal Orchestra is one of the only royal orchestras in Southeast Asia that fuses Western symphonic instruments with traditional Javanese gamelan. The orchestra performs in the sacred Pendopo Agung of the Kraton, where the Sultan himself occasionally conducts, creating a musical experience that bridges centuries of cultural exchange between Europe and Java.',
    ticketPrice: 'Variable / Often Free',
    openingHours: 'Periodic events (Evenings)',
    facilities: ['Grand pendopo venue', 'Traditional seating areas', 'Royal garden access', 'Cultural programs'],
    travelTips: [
      'Check the Kraton\'s official schedule as performances are periodic and often tied to royal ceremonies.',
      'Dress formally or in traditional batik as a sign of respect when attending a performance in the Kraton.',
      'Arrive early to explore the Pendopo Agung architecture before the concert begins.'
    ],
    bestTime: 'Evenings during scheduled performances for the most atmospheric musical experience',
    weather: {
      temp: '26°C',
      condition: 'Clear Evening',
      status: 'Enjoy a magical evening at the Royal Orchestra Concert.'
    },
    latitude: -7.8055,
    longitude: 110.3645,
    reviews: makeReviews('yogyakarta-royal-orchestra-concert'),
    partners: [
      {
        id: 'yro-p1',
        name: 'Kraton Heritage Suites',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kraton_Heritage_Suites.jpg',
        rating: 4.9,
        price: 'IDR 2,000,000 / night',
        distance: '0.2 km from Pendopo Agung',
        description: 'Exclusive luxury suites within walking distance of the Kraton, offering private cultural concierge services and royal ceremony viewing arrangements.',
        address: 'Jl. Rotowijayan Blok No. 3, Kraton, Yogyakarta',
        promotion: 'Priority Royal Orchestra seating access',
        phone: '+62 274 373500',
        coordinates: { lat: -7.8060, lng: 110.3648 }
      }
    ],
    faqs: [
      { q: 'How can I get tickets to the Royal Orchestra?', a: 'Tickets are often distributed through the Kraton\'s cultural office or special tourism packages. Some concerts are open to the public free of charge during special occasions.' },
      { q: 'What kind of music is performed?', a: 'A unique fusion of Western classical symphony and traditional Javanese gamelan, featuring compositions that blend both musical traditions in a single performance.' }
    ]
  },
  {
    id: 'jogja-rockarta',
    name: 'Jogja Rockarta',
    tagline: 'Where Rock Thunder Meets Ancient Stones',
    category: 'weekend',
    location: 'Stadion Kridosono / Tebing Breksi, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jogja_Rockarta_Festival_2023.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jogja_Rockarta_Tebing_Breksi.jpg'
    ],
    rating: 4.8,
    reviewCount: 2100,
    description: 'The largest international-scale rock and metal music festival in Yogyakarta, featuring legendary world bands and top national acts performing on a grand stage with the majestic ancient Breksi Cliff as a dramatic backdrop.',
    story: 'Jogja Rockarta was born from Yogyakarta\'s surprisingly passionate underground rock scene that thrived beneath the city\'s classical cultural reputation. When it was first held at Tebing Breksi, the juxtaposition of deafening rock music echoing off ancient volcanic cliffs created one of the most iconic concert settings in Southeast Asian music history, drawing thousands of international metal fans annually.',
    ticketPrice: 'IDR 150,000+',
    openingHours: 'October - November (Evenings)',
    facilities: ['Concert stage', 'Food and drink vendors', 'Merchandise stalls', 'First aid stations', 'Designated parking zones'],
    travelTips: [
      'Buy tickets early as they sell out quickly, especially for headline international acts.',
      'Arrive before sunset to enjoy the stunning Breksi Cliff scenery before the concert energy takes over.',
      'Bring ear protection for front-row spots as the sound system is extremely powerful against the cliff walls.'
    ],
    bestTime: 'October to November during the festival season for the best rock festival experience',
    weather: {
      temp: '26°C',
      condition: 'Clear Evening',
      status: 'Perfect cool evening for an outdoor rock festival at Tebing Breksi.'
    },
    latitude: -7.7876,
    longitude: 110.3742,
    reviews: makeReviews('jogja-rockarta'),
    partners: [
      {
        id: 'jr-p1',
        name: 'Rock Backpacker Lodge',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rock_Backpacker_Lodge.jpg',
        rating: 4.4,
        price: 'IDR 250,000 / night',
        distance: '5 km from Tebing Breksi',
        description: 'A budget-friendly rock-themed backpacker lodge popular with festival-goers, featuring shared dorms, a music lounge, and shuttle services to concert venues.',
        address: 'Jl. Solo KM 8, Sleman, Yogyakarta',
        promotion: 'Festival shuttle package included',
        phone: '+62 813-9300-5566',
        coordinates: { lat: -7.7880, lng: 110.3750 }
      }
    ],
    faqs: [
      { q: 'What genre of music is featured?', a: 'Jogja Rockarta primarily features rock, metal, and alternative music from both international and Indonesian artists.' },
      { q: 'Is the festival suitable for families?', a: 'The festival is primarily aimed at rock and metal enthusiasts. The volume levels may be intense for young children, but older teenagers often enjoy the experience.' }
    ]
  },
  {
    id: 'upacara-labuhan-merapi',
    name: 'Upacara Labuhan Merapi',
    tagline: 'Sacred Offerings to the Volcanic Throne',
    category: 'weekend',
    location: 'Kinahrejo, Cangkringan (Lereng Merapi), Sleman',
    subRegion: 'Sleman',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gunung_Merapi_from_Sleman.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Upacara_Labuhan_Merapi_Yogyakarta.jpg'
    ],
    rating: 4.7,
    reviewCount: 980,
    description: 'A sacred annual ceremony of the Yogyakarta Sultanate, presenting ceremonial offerings (uborampe) to the summit of the active Mount Merapi as a prayer for the safety and balance of the natural world.',
    story: 'Dating back to the founding of the Yogyakarta Sultanate in 1755, the Labuhan Merapi ceremony is rooted in the ancient Javanese belief that Mount Merapi is inhabited by spirits that must be appeased to prevent eruption. The offerings, which include traditional garments, mirrors, and sacred heirlooms, are carried in a solemn procession up the volcanic slopes by royal attendants in full ceremonial dress, accompanied by gamelan music echoing through the mist.',
    ticketPrice: 'Free Entry',
    openingHours: 'Early morning ceremony (Javanese Calendar)',
    facilities: ['Ceremony viewing area', 'Local guide services', 'Parking space', 'Traditional food stalls nearby'],
    travelTips: [
      'The ceremony follows the Javanese calendar, so check local listings well in advance for exact dates.',
      'Wear comfortable walking shoes and bring a light jacket as the volcanic slopes can be cool and misty.',
      'Hire a local guide from Kinahrejo village for deeper insight into the ceremony\'s spiritual significance.'
    ],
    bestTime: 'Early morning during the annual ceremony date on the Javanese calendar',
    weather: {
      temp: '22°C',
      condition: 'Misty Mountain',
      status: 'Enjoy the cool volcanic atmosphere at Mount Merapi slopes.'
    },
    latitude: -7.6082,
    longitude: 110.4432,
    reviews: makeReviews('upacara-labuhan-merapi'),
    partners: [
      {
        id: 'ulm-p1',
        name: 'Merapi Adventure Guide',
        category: 'guide',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Merapi_Adventure_Guide.jpg',
        rating: 4.8,
        price: 'IDR 350,000 / session',
        distance: 'On-site at Kinahrejo',
        description: 'Expert local guide with deep knowledge of Merapi\'s volcanic history and traditional Javanese spiritual practices surrounding the sacred mountain.',
        address: 'Kinahrejo, Cangkringan, Sleman',
        promotion: 'Free traditional herbal drink after tour',
        phone: '+62 812-3400-7788',
        coordinates: { lat: -7.6085, lng: 110.4435 }
      }
    ],
    faqs: [
      { q: 'Can tourists attend the ceremony?', a: 'Yes, respectful tourists are welcome to observe the ceremony from designated viewing areas. Please dress modestly and follow the instructions of local guides.' },
      { q: 'How do I get to the ceremony site?', a: 'The ceremony takes place on the slopes of Mount Merapi near Kinahrejo village. Hiring a local jeep or guide is strongly recommended as the terrain can be challenging.' }
    ]
  },
  {
    id: 'upacara-labuhan-parangkusumo',
    name: 'Upacara Labuhan Parangkusumo',
    tagline: 'Communion with the Ocean Queen of the South',
    category: 'weekend',
    location: 'Pantai Parangkusumo, Kreteg, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Reflection_of_Parangtritis.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Upacara_Labuhan_Parangkusumo.jpg'
    ],
    rating: 4.7,
    reviewCount: 1240,
    description: 'A solemn royal procession casting ceremonial offerings into the crashing waves of Parangkusumo Beach, representing the Sultanate\'s spiritual connection to the mystical Southern Sea and its legendary guardian.',
    story: 'Rooted in the ancient legend of Nyai Roro Kidul, the Queen of the Southern Sea, this ceremony sees royal attendants in full Javanese ceremonial dress carry sacred offerings from the Kraton to the water\'s edge at Parangkusumo. The offerings are placed into the powerful surf as a symbol of respect and harmony between the human realm and the spiritual world of the ocean. The ceremony is timed to coincide with important royal anniversaries on the Javanese calendar.',
    ticketPrice: 'Free Entry',
    openingHours: 'Morning ceremony (Royal Anniversary)',
    facilities: ['Beach access', 'Ceremony viewing area', 'Local guide services', 'Nearby warungs'],
    travelTips: [
      'The ceremony follows the Javanese royal calendar; check with local tourism offices for the exact schedule.',
      'Wear modest clothing and be prepared to walk on sandy terrain to reach the ceremony area.',
      'Never turn your back to the ocean during the ceremony as it is considered deeply disrespectful in local tradition.'
    ],
    bestTime: 'Morning during the royal anniversary ceremony for the most spiritually powerful experience',
    weather: {
      temp: '28°C',
      condition: 'Windy Coastal',
      status: 'Enjoy the powerful ocean breeze at Parangkusumo Beach.'
    },
    latitude: -8.0159,
    longitude: 110.3255,
    reviews: makeReviews('upacara-labuhan-parangkusumo'),
    partners: [
      {
        id: 'ulp-p1',
        name: 'Parangtritis Seaside Resort',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Parangtritis_Resort.jpg',
        rating: 4.5,
        price: 'IDR 950,000 / night',
        distance: '1.5 km from Parangkusumo Beach',
        description: 'A beachfront resort overlooking the powerful Indian Ocean waves, offering traditional Javanese hospitality and easy access to the sacred Parangkusumo ceremony site.',
        address: 'Jl. Parangtritis Km 9, Kreteg, Bantul',
        promotion: 'Complimentary ceremony viewing guide',
        phone: '+62 274 387616',
        coordinates: { lat: -8.0165, lng: 110.3260 }
      }
    ],
    faqs: [
      { q: 'Who leads the ceremony?', a: 'The ceremony is led by royal representatives of the Yogyakarta Sultanate, often attended by high-ranking court officials in full ceremonial regalia.' },
      { q: 'What offerings are presented?', a: 'Traditional offerings include batik cloth, mirrors, fragrant flowers, incense, and sacred heirlooms from the Kraton collection.' }
    ]
  },
  {
    id: 'wayang-jogja-night-carnival',
    name: 'Wayang Jogja Night Carnival (WJNC)',
    tagline: 'Giant Shadows Come Alive Under Moonlight',
    category: 'weekend',
    location: 'Kawasan Tugu Pal Putih, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Wayang_Jogja_Night_Carnival.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/WJNC_Tugu_Yogyakarta.jpg'
    ],
    rating: 4.9,
    reviewCount: 3890,
    description: 'The grandest evening cultural carnival in Yogyakarta, held in celebration of the city\'s anniversary, featuring a spectacular parade of hundreds of giant illuminated wayang puppet figures adorned with LED lights encircling the iconic Tugu monument.',
    story: 'The WJNC was first conceived as a modern reinterpretation of the traditional Javanese wayang (shadow puppet) art form, projecting it onto a monumental scale. Giant wayang figures, some standing over five meters tall and embedded with thousands of LED lights, parade through the streets in a dazzling display that transforms the ancient art form into a contemporary spectacle. The carnival has become the highlight of Yogyakarta\'s anniversary celebrations since its debut.',
    ticketPrice: 'Free Entry',
    openingHours: 'October 7 (Evening)',
    facilities: ['Grand parade route', 'Street food stalls', 'Viewing platforms', 'Public restrooms', 'Designated parking areas'],
    travelTips: [
      'Arrive early in the evening to secure a prime viewing spot along the parade route near Tugu.',
      'Bring a portable phone charger as you will want to capture hundreds of incredible photo moments.',
      'Stay after the parade for the grand illumination ceremony at Tugu where all wayang figures gather.'
    ],
    bestTime: 'October 7 evening for the full carnival spectacle around the Tugu monument',
    weather: {
      temp: '26°C',
      condition: 'Clear Night',
      status: 'Enjoy a magical evening under the illuminated wayang figures at WJNC.'
    },
    latitude: -7.7825,
    longitude: 110.3672,
    reviews: makeReviews('wayang-jogja-night-carnival'),
    partners: [
      {
        id: 'wjnc-p1',
        name: 'Malioboro Grand Hotel',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Malioboro_Grand_Hotel.jpg',
        rating: 4.7,
        price: 'IDR 1,100,000 / night',
        distance: '0.3 km from Tugu Pal Putih',
        description: 'A premium heritage hotel directly on Malioboro, offering the perfect base for experiencing the WJNC carnival from a prime central location.',
        address: 'Jl. Malioboro No. 42, Yogyakarta',
        promotion: 'Carnival night special balcony package',
        phone: '+62 274 566353',
        coordinates: { lat: -7.7828, lng: 110.3675 }
      }
    ],
    faqs: [
      { q: 'What is the best spot to watch the carnival?', a: 'The area around Tugu Pal Putih monument offers the best views, especially during the final gathering. Arrive at least 2 hours early to secure a prime spot.' },
      { q: 'How long does the carnival last?', a: 'The parade typically runs from early evening until late at night, with the grand illumination finale occurring around 10:00 PM.' }
    ]
  },
  {
    id: 'jogja-fashion-week',
    name: 'Jogja Fashion Week',
    tagline: 'Where Batik Meets the Modern Runway',
    category: 'weekend',
    location: 'Jogja Expo Center (JEC) / Tebing Breksi',
    subRegion: 'Yogyakarta',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jogja_Fashion_Week_Runway.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jogja_Fashion_Week_Designer.jpg'
    ],
    rating: 4.6,
    reviewCount: 1750,
    description: 'A prestigious annual fashion week showcasing hundreds of couture masterpieces by top Indonesian designers featuring modern-ethnic themes of batik, tenun, and lurik traditional Yogyakarta textiles, pioneering the ethnic fashion movement.',
    story: 'Jogja Fashion Week emerged from Yogyakarta\'s status as Indonesia\'s batik capital, transforming ancient textile traditions into high-fashion statements. The event has launched the careers of numerous Indonesian designers who blend traditional hand-dyed batik techniques with contemporary silhouettes, creating a unique fashion identity that has gained international recognition at fashion weeks in Paris and Milan.',
    ticketPrice: 'Variable depending on catwalk access',
    openingHours: 'August - November',
    facilities: ['Fashion show pavilions', 'Designer exhibition booths', 'VIP viewing areas', 'Photography zones', 'Fashion market stalls'],
    travelTips: [
      'Purchase VIP tickets early for front-row access and post-show designer meet-and-greet opportunities.',
      'Wear your best ethnic-inspired outfit as the crowd at Jogja Fashion Week is known for its spectacular personal style.',
      'Visit the fashion market stalls after shows for exclusive limited-edition pieces directly from the designers.'
    ],
    bestTime: 'August to November during the annual fashion week schedule',
    weather: {
      temp: '27°C',
      condition: 'Tropical',
      status: 'Enjoy pleasant weather at Jogja Fashion Week venues.'
    },
    latitude: -7.7989,
    longitude: 110.4012,
    reviews: makeReviews('jogja-fashion-week'),
    partners: [
      {
        id: 'jfw-p1',
        name: 'Batik Designer Boutique Hotel',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Batik_Boutique_Hotel.jpg',
        rating: 4.8,
        price: 'IDR 1,300,000 / night',
        distance: '3 km from JEC',
        description: 'A fashion-forward boutique hotel where every room features unique hand-painted batik murals by local artists, with a private styling service for festival guests.',
        address: 'Jl. Suryatmajayan No. 12, Yogyakarta',
        promotion: 'Fashion Week VIP styling package',
        phone: '+62 274 385600',
        coordinates: { lat: -7.7992, lng: 110.4015 }
      }
    ],
    faqs: [
      { q: 'Can the public attend Jogja Fashion Week?', a: 'Yes, while some shows are invitation-only, many runway events and the associated fashion market are open to the public with paid tickets.' },
      { q: 'What types of fashion are showcased?', a: 'The event features a wide range from traditional batik and tenun to contemporary haute couture, all incorporating Yogyakarta\'s rich textile heritage.' }
    ]
  },
  {
    id: 'festival-layang-layang-nasional',
    name: 'Festival Layang-Layang Nasional',
    tagline: 'Giants of the Sky Dance on Southern Winds',
    category: 'weekend',
    location: 'Pantai Parangkusumo, Kreteg, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Festival_Layang_Layang_Parangkusumo.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Giant_Dragon_Kite_Bantul.jpg'
    ],
    rating: 4.7,
    reviewCount: 2640,
    description: 'A spectacular national kite-flying festival where hundreds of giant decorative kites in the shapes of dragons, mythical creatures, and three-dimensional fantasy characters are launched into the powerful southern winds above the beach.',
    story: 'The festival was born from the strong winds of the southern coast that have made kite-flying a beloved tradition in Bantul for generations. What began as a simple village pastime evolved into a national competition where master kite-makers spend months constructing enormous dragon and phoenix kites from bamboo and handmade paper, some spanning over 10 meters in length. The sight of dozens of these massive creations dancing simultaneously against the vast Indian Ocean sky is unforgettable.',
    ticketPrice: 'IDR 10,000 (Beach access)',
    openingHours: 'July - August (Afternoon)',
    facilities: ['Beach viewing area', 'Food and drink vendors', 'Kite exhibition stalls', 'Parking zone', 'Public restrooms'],
    travelTips: [
      'Visit in the early afternoon when the sea breeze is strongest and the kites soar highest.',
      'Bring sunglasses and sunscreen as the beach area has minimal shade during the event.',
      'Walk to the nearby kite-making workshops to see artisans crafting the giant structures by hand.'
    ],
    bestTime: 'July to August in the afternoon when strong coastal winds create perfect kite-flying conditions',
    weather: {
      temp: '29°C',
      condition: 'Windy Coastal',
      status: 'Perfect windy conditions for the kite festival at Parangkusumo.'
    },
    latitude: -8.0165,
    longitude: 110.3262,
    reviews: makeReviews('festival-layang-layang-nasional'),
    partners: [
      {
        id: 'fln-p1',
        name: 'Parangkusumo Beach Warung',
        category: 'restaurant',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Parangkusumo_Beach_Warung.jpg',
        rating: 4.5,
        price: 'IDR 20,000 - 50,000 / person',
        distance: '0.2 km from festival area',
        description: 'A beloved beachside warung serving fresh grilled seafood and cold drinks, the perfect refreshment stop during the kite festival.',
        address: 'Pantai Parangkusumo, Kreteg, Bantul',
        phone: '+62 813-9200-8899',
        coordinates: { lat: -8.0168, lng: 110.3265 }
      }
    ],
    faqs: [
      { q: 'Can visitors fly their own kites?', a: 'Yes, visitors are welcome to bring and fly their own kites in designated areas. However, the giant competitive kites are handled by professional teams only.' },
      { q: 'How long does the festival last?', a: 'The festival typically runs over several weekends during July and August, with the main competition day being the highlight of the event.' }
    ]
  },
  {
    id: 'keroncong-plesiran',
    name: 'Keroncong Plesiran',
    tagline: 'Romantic Strings Under Whispering Pines',
    category: 'weekend',
    location: 'Hutan Pinus Mangunan, Dlingo, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Keroncong_Plesiran_Mangunan.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Keroncong_Plesiran_Concert.jpg'
    ],
    rating: 4.8,
    reviewCount: 870,
    description: 'An enchanting open-air keroncong music concert held beneath the lush canopy of Mangunan Pine Forest, featuring collaborative millennial keroncong musicians creating romantic melodies in an intimate natural amphitheater.',
    story: 'Keroncong Plesiran was founded by a collective of young Yogyakarta musicians who wanted to revive the fading art of keroncong, a Portuguese-influenced string music genre that became a cornerstone of Indonesian musical identity. By bringing this elegant music genre into the magical setting of Mangunan\'s towering pine forest, they created an experience where the natural acoustics of the trees enhance the gentle string harmonies, drawing new audiences to appreciate this endangered musical tradition.',
    ticketPrice: 'IDR 50,000+',
    openingHours: 'September - October (Afternoon)',
    facilities: ['Natural forest amphitheater', 'Picnic seating areas', 'Local coffee stalls', 'Artisan craft market', 'Forest parking area'],
    travelTips: [
      'Arrive early to claim the best natural seating spots among the pine roots and moss-covered rocks.',
      'Bring a picnic blanket and some snacks from the nearby Mangunan cafes for a complete forest music experience.',
      'Combine your visit with the nearby Kebun Buah Mangunan for the famous morning cloud views before the concert.'
    ],
    bestTime: 'September to October late afternoon when the golden light filters through the pine canopy',
    weather: {
      temp: '24°C',
      condition: 'Cool Forest',
      status: 'Enjoy the refreshing forest breeze at Keroncong Plesiran.'
    },
    latitude: -7.9395,
    longitude: 110.4308,
    reviews: makeReviews('keroncong-plesiran'),
    partners: [
      {
        id: 'kp-p1',
        name: 'Mangunan Pine Eco Lodge',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mangunan_Eco_Lodge.jpg',
        rating: 4.6,
        price: 'IDR 600,000 / night',
        distance: '1 km from concert venue',
        description: 'An eco-friendly wooden lodge nestled in the Mangunan pine hills, offering a tranquil forest retreat with views over the Oya River valley.',
        address: 'Dlingo, Bantul, Yogyakarta',
        promotion: 'Concert ticket package with forest walk',
        phone: '+62 813-9300-1122',
        coordinates: { lat: -7.9400, lng: 110.4312 }
      }
    ],
    faqs: [
      { q: 'What is keroncong music?', a: 'Keroncong is a traditional Indonesian string music genre with Portuguese roots, featuring ukulele-like instruments and gentle vocal harmonies that evoke a nostalgic, romantic atmosphere.' },
      { q: 'Is the concert outdoors?', a: 'Yes, the concert is held entirely outdoors in the natural forest setting. Bring light rain gear as weather can change quickly in the hills.' }
    ]
  },
  {
    id: 'pasar-kangen-jogja',
    name: 'Pasar Kangen Jogja',
    tagline: 'Nostalgic Flavors from a Vanishing Era',
    category: 'weekend',
    location: 'Taman Budaya Yogyakarta (TBY), Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/c/ca/Brongkos_1.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_Kangen_Yogyakarta.jpg'
    ],
    rating: 4.9,
    reviewCount: 3420,
    description: 'A legendary culinary festival serving hundreds of vintage food stalls featuring rare traditional snacks from decades past, such as limun petak, es gosrok, and rambut nenek, alongside a fascinating exhibition of antique collectibles.',
    story: 'Pasar Kangen, meaning "Nostalgia Market," was created by Yogyakarta\'s creative community to preserve the rapidly disappearing traditional foods of Java. Each year, elderly cooks are invited to recreate recipes from the 1950s and 1960s that are no longer sold commercially, effectively turning the market into a living culinary museum. The event draws tens of thousands of visitors who come not just for the food, but to relive cherished childhood memories of flavors their grandparents once enjoyed.',
    ticketPrice: 'Free Entry (Pay only for food)',
    openingHours: 'July (03:00 PM - 09:00 PM)',
    facilities: ['Food stalls', 'Antique exhibition area', 'Live traditional music', 'Seating areas', 'Cultural performances'],
    travelTips: [
      'Come hungry and with an empty stomach as there are hundreds of unique traditional foods to sample.',
      'Bring plenty of cash as most vendors do not accept digital payments.',
      'Visit in the evening when the atmosphere is most festive with live gamelan and keroncong performances.'
    ],
    bestTime: 'July evening (05:00 PM - 08:00 PM) for the most vibrant atmosphere and full food selection',
    weather: {
      temp: '27°C',
      condition: 'Clear Evening',
      status: 'Enjoy a wonderful evening at Pasar Kangen Jogja.'
    },
    latitude: -7.801,
    longitude: 110.3681,
    reviews: makeReviews('pasar-kangen-jogja'),
    partners: [
      {
        id: 'pkj-p1',
        name: 'Taman Budaya Heritage Stay',
        category: 'hotel',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Budaya_Hotel.jpg',
        rating: 4.5,
        price: 'IDR 650,000 / night',
        distance: '0.1 km from Taman Budaya',
        description: 'A culturally vibrant guesthouse adjacent to Taman Budaya, offering easy access to cultural events and a cozy traditional courtyard restaurant.',
        address: 'Jl. Suryatmajayan No. 5, Yogyakarta',
        promotion: 'Free market food tasting pass',
        phone: '+62 274 374801',
        coordinates: { lat: -7.8012, lng: 110.3685 }
      }
    ],
    faqs: [
      { q: 'What kind of foods can I find at Pasar Kangen?', a: 'You can find rare traditional Javanese snacks and drinks that are nearly impossible to find elsewhere, including vintage desserts, traditional herbal drinks, and classic Javanese main dishes from decades past.' },
      { q: 'Is the event held every year?', a: 'Yes, Pasar Kangen is typically held annually in July at Taman Budaya Yogyakarta. Exact dates may vary, so check the official announcements.' }
    ]
  }
];
