// Batch 1: IDs 4,7,10,13,14,15,16,18,20,22,23,24,25,26
import { Destination } from './types';

export const BATCH_1_DESTINATIONS: Destination[] = [
  {
    id: 'alun-alun-kidul',
    name: 'Alun-Alun Kidul',
    tagline: 'The Enchanted Twin Banyan Night Square',
    category: 'family',
    location: 'Patehan, Kraton, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Panoramic_photo_of_Alun-alun_Kidul%2C_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Panoramic_photo_of_Alun-alun_Kidul%2C_Yogyakarta_(1).jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/COLLECTIE_TROPENMUSEUM_De_waringins_op_de_alun-alun_bij_de_ingang_van_de_kraton_van_de_sultan_van_Jogjakarta_TMnr_60022716.jpg'
    ],
    rating: 4.5,
    reviewCount: 2890,
    description: 'The legendary South Square of Yogyakarta, famous for the Masangin tradition of walking blindfolded between two sacred banyan trees, and dazzling nights filled with colorful odong-odong fairy-tale carriages.',
    story: 'Local legend holds that if you can walk straight between the twin banyan trees with your eyes closed, your deepest wish will come true. The square transforms nightly into a magical carnival of neon-lit carriages and street food vendors.',
    ticketPrice: 'Free Entry',
    openingHours: '06:30 PM - 10:00 PM Daily',
    facilities: ['Colorful Odong-Odong Carriages', 'Street Food Stalls', 'Open Green Square', 'Parking Area', 'Restrooms'],
    travelTips: [
      'Visit after dark for the full experience with illuminated carriages and the Masangin challenge.',
      'Bring a blindfold and try the Masangin tradition for a memorable cultural moment.',
      'Pair with a visit to nearby Kraton or Taman Sari for a full evening itinerary.'
    ],
    bestTime: 'Evening (6:30 PM - 10:00 PM)',
    weather: { temp: '27°C', condition: 'Tropical', status: 'Enjoy pleasant tropical weather at Alun-Alun Kidul.' },
    latitude: -7.8119,
    longitude: 110.3631,
    reviews: [
      { id: 'r-alun-alun-kidul-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'An absolutely magical experience. The illuminated carriages at night were breathtaking.' },
      { id: 'r-alun-alun-kidul-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.5, date: '2026-07-02', comment: 'Walking between the banyan trees blindfolded was unforgettable! Great local atmosphere.' }
    ],
    partners: [
      { id: 'p-aak-1', name: 'Royal Ambarrukmo Hotel', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Royal_Ambarrukmo_Hotel.jpg/640px-Royal_Ambarrukmo_Hotel.jpg', rating: 4.8, price: 'IDR 1,200,000 / night', distance: '3.5 km', description: 'Heritage luxury hotel with royal Javanese spa and grand pool.', address: 'Jl. Babarsari No.1, Yogyakarta', promotion: '10% off for Jogjagem users', phone: '+62 274 488888', coordinates: { lat: -7.7780, lng: 110.3870 } }
    ],
    faqs: [
      { q: 'Is the Masangin tradition safe?', a: 'Yes, the grass is soft and the distance between the trees is short. Many visitors try it every night.' },
      { q: 'How do I get there?', a: 'Located behind the Kraton Palace. You can walk from Malioboro or take a becak ride.' }
    ]
  },
  {
    id: 'stonehenge-merapi',
    name: 'Stonehenge Merapi',
    tagline: 'A Prehistoric Mystery on the Volcanic Slopes',
    category: 'family',
    location: 'Kepuharjo, Cangkringan, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/640px-Stonehenge2007_07_30.jpg'
    ],
    rating: 4.4,
    reviewCount: 1540,
    description: 'A replica of England\'s Stonehenge arranged on the cool slopes of Mount Merapi, offering an eerie prehistoric atmosphere and photogenic backdrops against the misty volcanic highlands.',
    story: 'Built as an artistic homage to the original Stonehenge, this installation sits in the volcanic shadow of Merapi. On misty mornings, the stones seem to float in clouds, creating an otherworldly scene beloved by photographers.',
    ticketPrice: 'IDR 15,000',
    openingHours: '08:00 AM - 10:00 AM Daily',
    facilities: ['Stone Photo Spots', 'Parking Area', 'Small Warung', 'Viewing Deck'],
    travelTips: [
      'Arrive early morning for the best misty atmosphere and fewer crowds.',
      'Combine with a Merapi Lava Tour for a full day of volcanic adventure.',
      'Bring a jacket as temperatures on the slope can be significantly cooler.'
    ],
    bestTime: 'Morning (08:00 - 10:00)',
    weather: { temp: '24°C', condition: 'Cool & Misty', status: 'Refreshing mountain air at Stonehenge Merapi today.' },
    latitude: -7.6146,
    longitude: 110.4475,
    reviews: [
      { id: 'r-stonehenge-merapi-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 4, date: '2026-06-15', comment: 'Interesting photo spot, very atmospheric on a misty morning. Small but worth the stop.' },
      { id: 'r-stonehenge-merapi-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.5, date: '2026-07-02', comment: 'Great quirky attraction. The volcanic backdrop makes it special compared to just a replica.' }
    ],
    partners: [
      { id: 'p-shm-1', name: 'Omah Merapi Resort', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Entrance_gate_of_Kaliurang.jpg/640px-Entrance_gate_of_Kaliurang.jpg', rating: 4.6, price: 'IDR 800,000 / night', distance: '5 km', description: 'Mountain retreat with stunning Merapi views and traditional Javanese architecture.', address: 'Kaliurang, Sleman', coordinates: { lat: -7.5960, lng: 110.4260 } }
    ],
    faqs: [
      { q: 'Is this the real Stonehenge?', a: 'No, it is a creative replica art installation placed on the volcanic slopes for photo opportunities.' },
      { q: 'How long should I spend here?', a: 'Most visitors spend 30-60 minutes taking photos and exploring the stones.' }
    ]
  },
  {
    id: 'museum-ullen-sentalu',
    name: 'Museum Ullen Sentalu',
    tagline: 'A Gothic Jewel of Javanese Royal Heritage',
    category: 'heritage',
    location: 'Jl. Boyong No. KM 25, Kaliurang, Hargobinangun, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Museum_Ullen_Sentalu_Spot_Foto.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Museum_Ullen_Sentalu.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Museum_Ullen_Sentalu_Halaman.jpg'
    ],
    rating: 4.8,
    reviewCount: 3210,
    description: 'The finest Javanese art and culture museum hidden in the cool Kaliurang highlands, telling the stories of Mataram palace princesses through hauntingly beautiful gothic architecture.',
    story: 'Named after the Javanese phrase "Ulating Sining Lintang Nyatra" (the trail of stars is recorded), this museum was built to preserve the fading court culture of Yogyakarta\'s royal lineage. Its moss-covered walls and torch-lit corridors feel like stepping into a Javanese fairy tale.',
    ticketPrice: 'IDR 50,000',
    openingHours: '09:00 AM - 01:00 PM Daily (Closed Mondays)',
    facilities: ['Guided Tours', 'Art Gallery Halls', 'Sculpture Gardens', 'Souvenir Shop', 'Café'],
    travelTips: [
      'Guided tours are included in the ticket price and highly recommended for understanding the exhibits.',
      'Photography policies vary by gallery — ask your guide at the entrance.',
      'Visit on weekdays to avoid crowds and enjoy the serene atmosphere.'
    ],
    bestTime: 'Morning (09:00 - 13:00)',
    weather: { temp: '24°C', condition: 'Cool Mountain', status: 'Enjoy the refreshing highland breeze at Ullen Sentalu.' },
    latitude: -7.5976,
    longitude: 110.4234,
    reviews: [
      { id: 'r-museum-ullen-sentalu-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'Absolutely stunning museum. The architecture alone is worth the visit. A true hidden gem.' },
      { id: 'r-museum-ullen-sentalu-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 5, date: '2026-07-02', comment: 'One of the best museums I have ever visited. The guided tour brought the royal stories to life.' }
    ],
    partners: [
      { id: 'p-mus-1', name: 'Cupuwatu Resto', category: 'restaurant', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kaliurang_view.jpg/640px-Kaliurang_view.jpg', rating: 4.6, price: 'IDR 50,000 - 120,000', distance: '1 km', description: 'Traditional Javanese joglo restaurant with panoramic Merapi views.', address: 'Kaliurang, Sleman', coordinates: { lat: -7.5960, lng: 110.4250 } }
    ],
    faqs: [
      { q: 'Is English available for tours?', a: 'Yes, guides can conduct tours in both Indonesian and English.' },
      { q: 'How long does a visit take?', a: 'Plan for 1.5 to 2 hours to fully appreciate all the galleries and gardens.' }
    ]
  },
  {
    id: 'kebun-buah-mangunan',
    name: 'Kebun Buah Mangunan',
    tagline: 'The Land Above the Clouds',
    category: 'nature',
    location: 'Dlingo, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Kebun_Buah_Mangunan.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Puncak_Kebun_Buah_Mangunan.jpg'
    ],
    rating: 4.7,
    reviewCount: 3560,
    description: 'Often called the "Land Above the Clouds" for its spectacular morning fog that blankets the winding Oya River valley below, this fruit garden sits atop a dramatic hilltop panorama.',
    story: 'At dawn, thick white clouds roll through the river valley below the garden, creating a sea of clouds effect that has made this spot Instagram-famous. Local farmers grow tropical fruits across the terraced hillside.',
    ticketPrice: 'IDR 7,000',
    openingHours: '05:00 AM - 06:30 AM (Dawn) / 08:00 AM - 05:00 PM',
    facilities: ['Panoramic Viewing Deck', 'Fruit Gardens', 'Photo Spots', 'Parking Area', 'Warung'],
    travelTips: [
      'Arrive before sunrise (around 5 AM) to witness the famous sea-of-clouds phenomenon.',
      'Bring warm clothing as mornings at this altitude can be chilly.',
      'The fruit picking season varies — ask locally what is in season.'
    ],
    bestTime: 'Dawn (05:00 - 06:30)',
    weather: { temp: '23°C', condition: 'Cool & Misty', status: 'Perfect weather for the famous sea-of-clouds view.' },
    latitude: -7.9405,
    longitude: 110.4243,
    reviews: [
      { id: 'r-kebun-buah-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'Waking up at 4 AM was completely worth it. The sea of clouds was absolutely magical.' },
      { id: 'r-kebun-buah-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.5, date: '2026-07-02', comment: 'Beautiful hilltop garden with incredible valley views. A must for early risers.' }
    ],
    partners: [
      { id: 'p-kbm-1', name: 'D\'Joglo Hotel Dlingo', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Javanese_joglo_house.jpg/640px-Javanese_joglo_house.jpg', rating: 4.5, price: 'IDR 600,000 / night', distance: '3 km', description: 'Cozy traditional joglo stay in the hills of Dlingo with garden views.', address: 'Dlingo, Bantul', coordinates: { lat: -7.9350, lng: 110.4300 } }
    ],
    faqs: [
      { q: 'Is it really like being above clouds?', a: 'Yes, during the right weather conditions (especially dry season mornings), thick fog fills the valley creating a stunning sea-of-clouds effect.' },
      { q: 'Can I pick fruits?', a: 'Seasonal fruit picking is sometimes available. Check with local staff upon arrival.' }
    ]
  },
  {
    id: 'puncak-becici',
    name: 'Puncak Becici',
    tagline: 'Where Obama Once Gazed at Jogja\'s Lights',
    category: 'nature',
    location: 'Muntuk, Dlingo, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Puncak_Pinus_Becici.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Puncak_becici%2Cmuntuk_dlingo_bantul.jpg'
    ],
    rating: 4.5,
    reviewCount: 2780,
    description: 'A romantic pine forest hilltop famously visited by Barack Obama, offering a high observation deck with sweeping views of Yogyakarta\'s glittering city lights at sunset.',
    story: 'When Barack Obama visited in 2017, this spot gained international fame. The wooden observation platform perched among towering pines offers one of the most romantic sunset panoramas in all of Bantul.',
    ticketPrice: 'IDR 5,000',
    openingHours: '04:00 PM - 06:00 PM (Sunset)',
    facilities: ['Wooden Observation Deck', 'Pine Forest Trails', 'Photo Spots', 'Parking Area'],
    travelTips: [
      'Arrive by 4:30 PM to secure a good spot for sunset photography.',
      'Pair with a visit to Kebun Buah Mangunan for a full Mangunan highlands day trip.',
      'Bring insect repellent as the forest area can have mosquitoes at dusk.'
    ],
    bestTime: 'Late Afternoon (16:00 - 18:00)',
    weather: { temp: '25°C', condition: 'Breezy', status: 'Cool pine-scented breezes greet you at Puncak Becici.' },
    latitude: -7.9254,
    longitude: 110.4379,
    reviews: [
      { id: 'r-puncak-becici-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'The sunset view over Jogja city was incredible. Such a romantic and peaceful spot.' },
      { id: 'r-puncak-becici-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4, date: '2026-07-02', comment: 'Nice pine forest walk to the observation deck. Obama\'s visit made it famous but the views are genuinely great.' }
    ],
    partners: [
      { id: 'p-pb-1', name: 'Mangunan Forest Lodge', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hutan_Pinus_Mangunan_%281%29.jpg/640px-Hutan_Pinus_Mangunan_%281%29.jpg', rating: 4.4, price: 'IDR 500,000 / night', distance: '2 km', description: 'Eco-lodge nestled in the Mangunan pine forests with hilltop views.', address: 'Dlingo, Bantul', coordinates: { lat: -7.9300, lng: 110.4350 } }
    ],
    faqs: [
      { q: 'Is there an entrance fee?', a: 'Yes, a small parking/entrance fee of IDR 5,000 applies.' },
      { q: 'How difficult is the walk to the deck?', a: 'The walk is a gentle 5-10 minute trail through the pine forest, suitable for most fitness levels.' }
    ]
  },
  {
    id: 'gumuk-pasir-parangkusumo',
    name: 'Gumuk Pasir Parangkusumo',
    tagline: 'Southeast Asia\'s Only Coastal Sand Dunes',
    category: 'nature',
    location: 'Jl. Pantai Parangkusumo, Parangtritis, Kreteg, Bantul',
    subRegion: 'Bantul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b3/Parangkusumo_Sand_Dunes_Sunset.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gumuk_Pasir_Parangkusumo_1.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sandboarding_Di_Gumuk_Pasir.jpg'
    ],
    rating: 4.6,
    reviewCount: 3120,
    description: 'A rare natural phenomenon of wind-swept coastal sand dunes (barchan dunes), the only place in Southeast Asia where you can experience extreme sandboarding on golden volcanic sand.',
    story: 'These dunes were formed over thousands of years as volcanic sediment from Mount Merapi was carried to the coast and shaped by prevailing ocean winds. They are considered sacred by local spiritual practitioners who meditate among the shifting sands.',
    ticketPrice: 'IDR 10,000',
    openingHours: '03:30 PM - 05:30 PM Daily',
    facilities: ['Sandboarding Equipment Rental', 'Horseback Riding', 'ATV Tours', 'Sunset Viewpoint', 'Parking'],
    travelTips: [
      'Visit in the late afternoon for spectacular sunset light over the dunes.',
      'Rent a sandboard (IDR 50,000) for the full adrenaline experience.',
      'The area is considered spiritually significant — be respectful of any ceremonies.'
    ],
    bestTime: 'Late Afternoon (15:30 - 17:30)',
    weather: { temp: '28°C', condition: 'Windy', status: 'Perfect sandboarding conditions with coastal breezes today.' },
    latitude: -8.0163,
    longitude: 110.3259,
    reviews: [
      { id: 'r-gumuk-pasir-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'Sandboarding here was the highlight of my trip! The dunes look like a desert — unreal.' },
      { id: 'r-gumuk-pasir-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.5, date: '2026-07-02', comment: 'Beautiful at sunset. The contrast between dunes and ocean is stunning.' }
    ],
    partners: [
      { id: 'r-gp-1', name: 'Gumuk Pasir Adventure', category: 'rental', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Parangkusumo_Sand_Dunes_Sunset.jpg/640px-Parangkusumo_Sand_Dunes_Sunset.jpg', rating: 4.7, price: 'IDR 50,000 / board', distance: 'On-site', description: 'Professional sandboarding equipment and guided tours across the dunes.', address: 'Parangkusumo, Bantul', coordinates: { lat: -8.0160, lng: 110.3260 } }
    ],
    faqs: [
      { q: 'Is sandboarding difficult?', a: 'No experience needed. Basic instruction is provided and the slopes are gentle enough for beginners.' },
      { q: 'Can I visit in the morning?', a: 'Morning visits are possible but the afternoon golden hour provides the best photography conditions.' }
    ]
  },
  {
    id: 'pantai-indrayanti',
    name: 'Pantai Indrayanti',
    tagline: 'Gunungkidul\'s Premier White Sand Beach',
    category: 'beach',
    location: 'Sidoharjo, Tepus, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Indrayanti_(Pulang_Sawal)_Gunungkidul.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Indrayanti_Jogja.jpg'
    ],
    rating: 4.7,
    reviewCount: 4120,
    description: 'Gunungkidul\'s most pristine white sand beach with crystal-clear turquoise waters framed by dramatic coral cliffs, complete with beachside gazebos and fresh seafood restaurants.',
    story: 'Named after a local heroine, Indrayanti Beach became the poster child of Gunungkidul\'s emerging coastal tourism. The contrast of brilliant white sand against the deep blue Indian Ocean makes it one of the most photographed beaches in the region.',
    ticketPrice: 'IDR 15,000',
    openingHours: '08:00 AM - 04:00 PM Daily',
    facilities: ['Beach Gazebos', 'Seafood Restaurants', 'Toilet Facilities', 'Surfboard Rental', 'Parking Area'],
    travelTips: [
      'Arrive early morning for the clearest water and best snorkeling conditions.',
      'Try the fresh grilled fish at the beachside warungs — caught that same morning.',
      'Tides can change quickly — follow local warnings about safe swimming zones.'
    ],
    bestTime: 'Morning / Late Afternoon (08:00 / 16:00)',
    weather: { temp: '29°C', condition: 'Sunny', status: 'Beautiful sunny skies over Indrayanti Beach today.' },
    latitude: -8.1504,
    longitude: 110.6124,
    reviews: [
      { id: 'r-pantai-indrayanti-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'The whitest sand I have ever seen in Indonesia! The water is crystal clear and turquoise.' },
      { id: 'r-pantai-indrayanti-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.5, date: '2026-07-02', comment: 'Beautiful beach with great food options. The cliff walk to the next beach is amazing too.' }
    ],
    partners: [
      { id: 'p-pi-1', name: 'Indrayanti Beach Resort', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rocky_Beach.jpg/640px-Rocky_Beach.jpg', rating: 4.5, price: 'IDR 900,000 / night', distance: '500m', description: 'Beachfront cottages with direct ocean views and traditional Javanese design.', address: 'Sidoharjo, Gunungkidul', coordinates: { lat: -8.1500, lng: 110.6120 } }
    ],
    faqs: [
      { q: 'Is swimming safe here?', a: 'Swimming is generally safe during calm conditions but always follow local flag warnings about rip currents.' },
      { q: 'Are there food options?', a: 'Yes, several beachside warungs serve fresh grilled seafood and local Javanese dishes.' }
    ]
  },
  {
    id: 'gunung-api-purba-nglanggeran',
    name: 'Gunung Api Purba Nglanggeran',
    tagline: 'Ancient Volcano Trekking Adventure',
    category: 'nature',
    location: 'Nglanggeran, Patuk, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/bb/Bukit_Nglanggeran.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Puncak_G_Api_Purba_Nglanggeran_(Pathuk_Gunungkidul).jpg'
    ],
    rating: 4.7,
    reviewCount: 2340,
    description: 'An ancient non-active volcanic mountain millions of years old, formed from dramatic andesite rock formations, perfect for light trekking and camping under the stars.',
    story: 'Geologists estimate this ancient volcano is millions of years old, predating even Mount Merapi. The massive andesite boulders at its summit were shaped by primordial eruptions, and locals believe the mountain is guarded by ancient spirits.',
    ticketPrice: 'IDR 15,000',
    openingHours: '06:00 AM - 06:00 PM Daily',
    facilities: ['Trekking Trails', 'Camping Ground', 'Restrooms', 'Information Center', 'Parking'],
    travelTips: [
      'The trek to the summit takes about 1-1.5 hours — bring plenty of water.',
      'Sunrise and sunset treks are the most popular and rewarding.',
      'Camping is available at the base — rent tents locally for around IDR 50,000.'
    ],
    bestTime: 'Early Morning / Late Afternoon (Sunrise/Sunset treks)',
    weather: { temp: '26°C', condition: 'Clear', status: 'Great visibility for trekking at Gunung Api Purba today.' },
    latitude: -7.8422,
    longitude: 110.5427,
    reviews: [
      { id: 'r-nglanggeran-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'A challenging but rewarding trek. The ancient rock formations are truly unique.' },
      { id: 'r-nglanggeran-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.5, date: '2026-07-02', comment: 'Camping under the stars here was magical. The sunset from the top was unforgettable.' }
    ],
    partners: [
      { id: 'p-gap-1', name: 'Nglanggeran Eco Camp', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Camping_tent.jpg/640px-Camping_tent.jpg', rating: 4.4, price: 'IDR 200,000 / night', distance: 'At base', description: 'Eco camping experience with guided treks and local cultural activities.', address: 'Nglanggeran, Gunungkidul', coordinates: { lat: -7.8420, lng: 110.5430 } }
    ],
    faqs: [
      { q: 'How difficult is the trek?', a: 'Moderate difficulty. The trail is well-maintained but involves steep rocky sections. Good footwear recommended.' },
      { q: 'Can I camp overnight?', a: 'Yes, camping areas are available at the base with tent rental options.' }
    ]
  },
  {
    id: 'pantai-drini',
    name: 'Pantai Drini',
    tagline: 'The Island-Split Beach of Gunungkidul',
    category: 'beach',
    location: 'Banjarejo, Tanjungsari, Gunungkidul',
    subRegion: 'Gunungkidul',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/5/52/Pantai_Drini_Top_View.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Drini.jpg'
    ],
    rating: 4.6,
    reviewCount: 2180,
    description: 'A unique beach split by a small coral island in its center, creating one calm swimming side and one wild surf side — a geological marvel of Gunungkidul\'s coastline.',
    story: 'The protective coral island in the middle of Drini Beach creates a natural lagoon on one side, making it one of the safest swimming beaches in Gunungkidul. Fishermen use the sheltered side to dock their traditional wooden boats.',
    ticketPrice: 'IDR 10,000',
    openingHours: '08:00 AM - 05:00 PM Daily',
    facilities: ['Swimming Area', 'Fish Market', 'Boat Rides', 'Toilet Facilities', 'Parking'],
    travelTips: [
      'Swim on the protected lagoon side where the water is calm and shallow.',
      'Walk over to the wild side for dramatic surf photography.',
      'Visit the small fish market for the freshest catch of the day.'
    ],
    bestTime: 'Midday / Late Afternoon',
    weather: { temp: '29°C', condition: 'Sunny', status: 'Perfect beach day at Pantai Drini.' },
    latitude: -8.1363,
    longitude: 110.5781,
    reviews: [
      { id: 'r-pantai-drini-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'The island in the middle of the beach is such a cool feature. Great for families with kids.' },
      { id: 'r-pantai-drini-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4, date: '2026-07-02', comment: 'Beautiful and unique. The contrast between calm and wild sides is fascinating.' }
    ],
    partners: [
      { id: 'p-pd-1', name: 'Drini Beach Homestay', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pantai_Drini_Top_View.jpg/640px-Pantai_Drini_Top_View.jpg', rating: 4.3, price: 'IDR 350,000 / night', distance: '200m', description: 'Simple family-run homestay just steps from the beach.', address: 'Banjarejo, Gunungkidul', coordinates: { lat: -8.1360, lng: 110.5780 } }
    ],
    faqs: [
      { q: 'Is the lagoon safe for children?', a: 'Yes, the lagoon side has calm, shallow water perfect for families with young children.' },
      { q: 'What is the best time to visit?', a: 'Mid-morning to early afternoon offers the best light and calmest waters.' }
    ]
  },
  {
    id: 'waduk-sermo',
    name: 'Waduk Sermo',
    tagline: 'Tranquil Reservoir of the Menoreh Hills',
    category: 'nature',
    location: 'Sremo Lor, Hargowilis, Kokap, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Beautiful_view_from_Waduk_Sermo_Jogja.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dermaga_Waduk_Sermo.jpg'
    ],
    rating: 4.6,
    reviewCount: 1890,
    description: 'A serene artificial reservoir set against the backdrop of the Menoreh Hills, popular for lakeside camping, traditional boat rides, and peaceful sunset fishing.',
    story: 'Built in 1996 to irrigate the southern Kulon Progo farmlands, Waduk Sermo quickly became a beloved recreation spot. At dawn, the mirror-like surface perfectly reflects the surrounding green hills, creating postcard-worthy symmetry.',
    ticketPrice: 'IDR 6,000',
    openingHours: '06:00 AM - 06:00 PM Daily',
    facilities: ['Boat Rentals', 'Camping Ground', 'Fishing Spots', 'Jogging Track', 'Warung'],
    travelTips: [
      'Camp overnight for the spectacular sunrise reflection on the water.',
      'Rent a traditional wooden boat for a peaceful paddle around the reservoir.',
      'Combine with a visit to Kalibiru which overlooks this reservoir.'
    ],
    bestTime: 'Late Afternoon & Camping Overnight',
    weather: { temp: '26°C', condition: 'Calm', status: 'Still waters and gentle breezes at Waduk Sermo today.' },
    latitude: -7.8242,
    longitude: 110.1192,
    reviews: [
      { id: 'r-waduk-sermo-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'Camping here was so peaceful. The sunrise on the water was one of my favorite memories.' },
      { id: 'r-waduk-sermo-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4, date: '2026-07-02', comment: 'Great spot for fishing and relaxation. The boat ride was surprisingly enjoyable.' }
    ],
    partners: [
      { id: 'p-ws-1', name: 'Sermo Lakeside Camp', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Beautiful_view_from_Waduk_Sermo_Jogja.jpg/640px-Beautiful_view_from_Waduk_Sermo_Jogja.jpg', rating: 4.4, price: 'IDR 150,000 / tent', distance: 'Lakeside', description: 'Organized camping with tent rental and bonfire facilities by the reservoir.', address: 'Kokap, Kulon Progo', coordinates: { lat: -7.8240, lng: 110.1190 } }
    ],
    faqs: [
      { q: 'Can I camp here?', a: 'Yes, camping areas are available with tent rental options. Bonfires are allowed in designated spots.' },
      { q: 'Is fishing allowed?', a: 'Yes, fishing is permitted. Bring your own equipment or rent from local vendors.' }
    ]
  },
  {
    id: 'kebun-teh-nglinggo',
    name: 'Kebun Teh Nglinggo',
    tagline: 'Fog-Kissed Tea Plantations of Menoreh',
    category: 'nature',
    location: 'Nglinggo Barat, Pagerharjo, Samigaluh, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Kebun_Teh_Nglinggo.jpg'
    ],
    rating: 4.5,
    reviewCount: 1650,
    description: 'Lush terraced tea plantations on the highest slopes of the Menoreh Hills, offering cool misty air, panoramic views of Mount Merbabu, and freshly brewed local tea.',
    story: 'Established during the Dutch colonial era, these tea gardens climb the misty Menoreh highlands. The cool altitude creates ideal growing conditions for some of Java\'s finest tea leaves, which are still hand-picked by local farmers.',
    ticketPrice: 'IDR 5,000',
    openingHours: '06:00 AM - 09:00 AM (Morning Mist)',
    facilities: ['Tea Tasting Area', 'Plantation Walks', 'Photo Spots', 'Local Tea Shop', 'Parking'],
    travelTips: [
      'Arrive at dawn to walk through the plantations in magical morning mist.',
      'Buy fresh local tea directly from the farmers — it is some of the best in Java.',
      'The road up is winding but well-paved — take it slowly.'
    ],
    bestTime: 'Early Morning (06:00 - 09:00)',
    weather: { temp: '22°C', condition: 'Misty', status: 'Cool misty morning perfect for tea plantation walks.' },
    latitude: -7.6369,
    longitude: 110.1342,
    reviews: [
      { id: 'r-kebun-teh-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'Walking through the misty tea gardens was ethereal. Bought some amazing fresh tea.' },
      { id: 'r-kebun-teh-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4, date: '2026-07-02', comment: 'Beautiful plantation with cool mountain air. A refreshing change from the beach heat.' }
    ],
    partners: [
      { id: 'p-kt-1', name: 'Nglinggo Tea House', category: 'cafe', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kebun_Teh_Nglinggo.jpg/640px-Kebun_Teh_Nglinggo.jpg', rating: 4.5, price: 'IDR 15,000 - 35,000', distance: 'On-site', description: 'Charming tea house serving freshly brewed tea with panoramic plantation views.', address: 'Nglinggo, Kulon Progo', coordinates: { lat: -7.6370, lng: 110.1340 } }
    ],
    faqs: [
      { q: 'Is the road to get there difficult?', a: 'The road is narrow and winding but paved. Take your time and enjoy the scenic drive.' },
      { q: 'What tea varieties are available?', a: 'The plantation primarily grows Java tea (Camellia sinensis var. assamica). Fresh green and black tea are available for tasting and purchase.' }
    ]
  },
  {
    id: 'air-terjun-kedung-pedut',
    name: 'Air Terjun Kedung Pedut',
    tagline: 'Turquoise Cascade in the Jungle',
    category: 'nature',
    location: 'Banyuganti, Jatimulyo, Girimulyo, Kulon Progo',
    subRegion: 'Kulon Progo',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/e/e1/Kedungpedut.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Air_Terjun_Kedung_Pedut.jpg'
    ],
    rating: 4.6,
    reviewCount: 1780,
    description: 'A stunning cascading waterfall renowned for its natural turquoise swimming pools, framed by artistic bamboo bridges and lush tropical jungle greenery.',
    story: 'The name "Kedung Pedut" comes from Javanese meaning "misty pool," referring to the ethereal spray that rises from the cascading falls. The natural turquoise pools were carved over millennia by the mineral-rich mountain waters.',
    ticketPrice: 'IDR 10,000',
    openingHours: '08:00 AM - 12:00 PM Daily',
    facilities: ['Natural Swimming Pools', 'Bamboo Bridges', 'Changing Rooms', 'Warung', 'Parking'],
    travelTips: [
      'Bring swimwear — the natural turquoise pools are perfect for a refreshing dip.',
      'Wear water shoes as the rocks can be slippery.',
      'The trek down involves stairs; take it slow and enjoy the jungle sounds.'
    ],
    bestTime: 'Morning (08:00 - 12:00)',
    weather: { temp: '25°C', condition: 'Cool & Fresh', status: 'Refreshing waterfall mist keeps Kedung Pedut cool and pleasant.' },
    latitude: -7.7712,
    longitude: 110.1189,
    reviews: [
      { id: 'r-kedung-pedut-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'The turquoise pool color was unreal! One of the most beautiful waterfalls I have seen.' },
      { id: 'r-kedung-pedut-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 4.5, date: '2026-07-02', comment: 'Perfect swimming spot in the jungle. The bamboo bridges add a charming touch.' }
    ],
    partners: [
      { id: 'p-atkp-1', name: 'Kedung Pedut Eco Lodge', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kedungpedut.jpg/640px-Kedungpedut.jpg', rating: 4.3, price: 'IDR 400,000 / night', distance: '1 km', description: 'Riverside eco-lodge near the waterfall with traditional wooden cottages.', address: 'Girimulyo, Kulon Progo', coordinates: { lat: -7.7710, lng: 110.1190 } }
    ],
    faqs: [
      { q: 'Is it safe to swim in the pools?', a: 'Yes, the natural pools are generally safe for swimming. Be cautious of slippery rocks and follow any local guidelines.' },
      { q: 'How long is the walk from parking?', a: 'About 10-15 minutes downhill walk through jungle stairs to reach the falls.' }
    ]
  },
  {
    id: 'kopi-klotok-pakem',
    name: 'Kopi Klotok Pakem',
    tagline: 'Authentic Javanese Village Coffee Experience',
    category: 'culinary',
    location: 'Jl. Kaliurang No. KM 16, Pakembinangun, Pakem, Sleman',
    subRegion: 'Sleman',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Traditional_Javanese_coffee.jpg/640px-Traditional_Javanese_coffee.jpg'
    ],
    rating: 4.8,
    reviewCount: 3890,
    description: 'A beloved traditional Javanese village eatery serving thick black kopi klotok coffee, spicy sayur lodeh vegetable stew, and crispy fried bananas in a charming rustic countryside setting.',
    story: 'Kopi Klotok gets its name from the rhythmic "klotok-klotok" sound of the traditional coffee brewing process. This family-run warung has been serving the same recipes for generations, attracting everyone from village locals to visiting dignitaries.',
    ticketPrice: 'IDR 15,000 - 50,000 per person',
    openingHours: '07:00 AM - 04:00 PM Daily',
    facilities: ['Open-Air Dining', 'Traditional Garden Setting', 'Rice Field Views', 'Free Parking', 'Restrooms'],
    travelTips: [
      'Come early morning for breakfast — the pisang goreng (fried banana) runs out fast.',
      'Try the full set: kopi klotok + sayur lodeh + nasi for the authentic experience.',
      'Sit in the garden area surrounded by rice paddies for the best atmosphere.'
    ],
    bestTime: 'Morning (07:00 - 09:00)',
    weather: { temp: '27°C', condition: 'Pleasant', status: 'Enjoy the cool garden breeze with your morning kopi klotok.' },
    latitude: -7.6748,
    longitude: 110.4194,
    reviews: [
      { id: 'r-kopi-klotok-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'The most authentic Javanese breakfast experience! The kopi klotok is thick and rich.' },
      { id: 'r-kopi-klotok-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 5, date: '2026-07-02', comment: 'Eating among rice fields with traditional food — this is what Jogja is all about.' }
    ],
    partners: [
      { id: 'p-kk-1', name: 'Plataran Kaliurang Resort', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kaliurang_view.jpg/640px-Kaliurang_view.jpg', rating: 4.8, price: 'IDR 2,000,000 / night', distance: '3 km', description: 'Luxury boutique resort in the cool Kaliurang highlands with volcanic views.', address: 'Kaliurang, Sleman', coordinates: { lat: -7.6700, lng: 110.4200 } }
    ],
    faqs: [
      { q: 'What is kopi klotok?', a: 'It is thick, traditionally brewed Javanese coffee — strong, unfiltered, and served in its grounds for maximum flavor.' },
      { q: 'Is it halal?', a: 'Yes, the warung serves only halal Javanese cuisine.' }
    ]
  },
  {
    id: 'artjog',
    name: 'ARTJOG',
    tagline: 'Yogyakarta\'s Premier Contemporary Art Festival',
    category: 'weekend',
    location: 'Jogja National Museum, Wirobrajan, Kota Yogyakarta',
    subRegion: 'Yogyakarta',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Art_Jogja_2013_Taman_Budaya_Yogyakarta.jpg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/ARTJOG_di_Jogja_National_Museum.jpg'
    ],
    rating: 4.9,
    reviewCount: 2670,
    description: 'An annual international contemporary art festival showcasing interactive art installations from top national and international artists, transforming Yogyakarta into a living gallery.',
    story: 'Since its inception in 2007, ARTJOG has grown from a local art fair into one of Southeast Asia\'s most prestigious contemporary art events. Each edition adopts a theme exploring the intersection of tradition and modernity.',
    ticketPrice: 'IDR 75,000',
    openingHours: 'July - August (Festival Period)',
    facilities: ['Interactive Art Installations', 'Artist Talks', 'Art Market', 'Café', 'Workshop Areas'],
    travelTips: [
      'Visit on a weekday to avoid the massive weekend crowds.',
      'Check the official schedule for artist talks and special performances.',
      'The Jogja National Museum itself is worth exploring before or after the festival.'
    ],
    bestTime: 'July to August (Festival Period)',
    weather: { temp: '28°C', condition: 'Indoor Event', status: 'ARTJOG runs rain or shine in the museum complex.' },
    latitude: -7.8012,
    longitude: 110.3541,
    reviews: [
      { id: 'r-artjog-1', userName: 'Sophia Laurent', userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', rating: 5, date: '2026-06-15', comment: 'Mind-blowing art installations that you can walk through and interact with. A must for art lovers.' },
      { id: 'r-artjog-2', userName: 'Budi Santoso', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150', rating: 5, date: '2026-07-02', comment: 'Best art festival in Indonesia. The creativity and scale of installations are world-class.' }
    ],
    partners: [
      { id: 'p-art-1', name: 'Jogja National Museum Hotel', category: 'hotel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Art_Jogja_2013_Taman_Budaya_Yogyakarta.jpg/640px-Art_Jogja_2013_Taman_Budaya_Yogyakarta.jpg', rating: 4.7, price: 'IDR 1,000,000 / night', distance: 'Adjacent', description: 'Boutique hotel adjacent to the museum complex with modern Javanese design.', address: 'Wirobrajan, Kota Yogyakarta', coordinates: { lat: -7.8010, lng: 110.3540 } }
    ],
    faqs: [
      { q: 'When does ARTJOG take place?', a: 'ARTJOG typically runs from July through August. Check the official website for exact dates each year.' },
      { q: 'Can I buy the art?', a: 'Some installations and works are available for purchase. An art market section features more accessible artworks and prints.' }
    ]
  }
];
