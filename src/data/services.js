import serviceEyebrow from '../assets/service_eyebrow.webp';
import serviceSkincare from '../assets/service_skincare.webp';
import serviceHair from '../assets/service_hair.webp';
import serviceBridal from '../assets/service_bridal.webp';
import serviceNails from '../assets/service_nails.webp';
import serviceMassage from '../assets/service_massage.webp';
import serviceWaxing from '../assets/service_waxing.webp';
import serviceBleach from '../assets/service_bleach.webp';
import serviceHairColor from '../assets/service_hair_color.webp';
import serviceHairSpa from '../assets/service_hair_spa.webp';
import serviceAesthetics from '../assets/service_aesthetics.webp';
import serviceHairCut from '../assets/service_hair_cut.webp';
import serviceMakeup from '../assets/service_makeup.webp';

export const servicesData = [
    {
        id: 1,
        slug: 'threading',
        title: "Threading",
        description: "Precise brow shaping and facial hair removal for a clean, defined look.",
        fullDescription: "Our threading service offers precise hair removal to shape your eyebrows and remove unwanted facial hair. Using 100% cotton thread, we ensure a clean finish with minimal irritation. Perfect for sensitive skin.",
        price: "Starts from ₹50",
        image: serviceEyebrow,
        features: [
            { name: "Eyebrow Shaping", price: "₹50" },
            { name: "Full Face", price: "₹200" }
        ],
        duration: "15-30 min"
    },
    {
        id: 2,
        slug: 'bleaching',
        title: "Bleaching",
        description: "Gentle skin lightening treatment to reduce dark spots and even out skin tone.",
        fullDescription: "Our bleaching treatments are designed to lighten facial hair and brighten your skin tone. We use safe, high-quality products that are gentle on the skin while effectively reducing the appearance of dark spots and pigmentation.",
        price: "Starts from ₹400",
        image: serviceBleach,
        features: [
            { name: "Face Bleach", price: "₹400" },
            { name: "De-Tan Bleach", price: "₹400" },
            { name: "Oxy Bleach", price: "₹600" },
            { name: "Full Body Bleach", price: "₹1800" }
        ],
        duration: "30-45 min"
    },
    {
        id: 3,
        slug: 'facial',
        title: "Facial",
        description: "Rejuvenating facials to cleanse, exfoliate, and hydrate for a radiant glow.",
        fullDescription: "Experience our luxurious facial treatments tailored to your skin type. Whether you need hydration, anti-aging, or deep cleansing, our experts use premium products to restore your skin's natural radiance.",
        price: "Starts from ₹300",
        image: serviceSkincare,
        features: [
            { name: "Deep Cleansing", price: "₹300" },
            { name: "Fruit Facial", price: "₹500" },
            { name: "Gold Facial", price: "₹1000" },
            { name: "Diamond Facial", price: "₹1200" },
            { name: "Wine Facial", price: "₹1500" },
            { name: "03 Facial", price: "₹3000" },
            { name: "Bridal Facial", price: "₹3000" },
            { name: "Anti-Tan", price: "₹1500" }
        ],
        duration: "60-90 min"
    },
    {
        id: 4,
        slug: 'hair-styling',
        title: "Hair Styling",
        description: "Expert styling for any occasion, from elegant updos to bouncy blowouts.",
        fullDescription: "Transform your look with our professional hair styling services. From casual blow-drys to intricate bridal updos, our stylists create the perfect look to complement your personality and occasion.",
        price: "Starts from ₹300",
        image: serviceHair,
        features: [
            { name: "Blow Dry", price: "₹300" },
            { name: "Curls & Waves", price: "₹500" },
            { name: "Updos", price: "₹500" },
            { name: "Braiding", price: "₹1000" },
            { name: "Straightening", price: "₹1000" }
        ],
        duration: "45-60 min"
    },
    {
        id: 5,
        slug: 'pre-bridal',
        title: "Pre-Bridal Packages",
        description: "Comprehensive beauty regimens to prep your skin and hair for the big day.",
        fullDescription: "Get ready for your big day with our comprehensive pre-bridal packages. We offer a series of treatments including body polishing, waxing, facials, and hair spas to ensure you look absolutely stunning.",
        price: "Starts from ₹1000",
        image: serviceBridal,
        features: [
            { name: "Body Polishing", price: "₹1800" },
            { name: "Full Body Waxing", price: "₹2000" },
            { name: "Premium Facials", price: "₹3000" },
            { name: "Manicure & Pedicure", price: "₹1400" },
            { name: "Hair Spa", price: "₹1000" }
        ],
        duration: "Multiple Sessions"
    },
    {
        id: 6,
        slug: 'waxing',
        title: "Waxing",
        description: "Smooth and long-lasting hair removal services for silky soft skin.",
        fullDescription: "Achieve silky smooth skin with our professional waxing services. We use high-quality wax to minimize pain and prevent irritation, leaving your skin soft and hair-free for weeks.",
        price: "Starts from ₹200",
        image: serviceWaxing,
        features: [
            { name: "Full Arms & Legs", price: "₹1000" },
            { name: "Underarms", price: "₹200" },
            { name: "Full Body", price: "₹2000" },
            { name: "Chocolate Wax", price: "₹1000" }
        ],
        duration: "30-60 min"
    },
    {
        id: 7,
        slug: 'hair-spa',
        title: "Hair Spa",
        description: "Deep conditioning therapy to restore health, shine, and softness to your hair.",
        fullDescription: "Revitalize your hair with our nourishing hair spa treatments. Ideally suited for dry, damaged, or chemically treated hair, our spa therapies restore moisture, shine, and manageability.",
        price: "Starts from ₹800",
        image: serviceHairSpa,
        features: [
            { name: "Dandruff Control", price: "₹1200" },
            { name: "Hair Fall Treatment", price: "₹1000" },
            { name: "Deep Conditioning", price: "₹800" },
            { name: "Scalp Massage", price: "₹800" },
            { name: "Hair Spa", price: "₹1000" },
            { name: "Beer Hair Spa", price: "₹1300" }
        ],
        duration: "60 min"
    },
    {
        id: 8,
        slug: 'hair-colouring',
        title: "Hair Colouring",
        description: "Vibrant global color, highlights, and balayage using premium ammonia-free products.",
        fullDescription: "Express yourself with our professional hair coloring services. Our experts use ammonia-free, hair-friendly colors to give you vibrant, long-lasting results without compromising hair health.",
        price: "Starts from ₹800",
        image: serviceHairColor,
        features: [
            { name: "Root Touch-up", price: "₹800" },
            { name: "Highlights", price: "₹1500" }
        ],
        duration: "2-4 hours"
    },
    {
        id: 9,
        slug: 'hair-treatment',
        title: "Hair Treatment",
        description: "Specialized solutions for dandruff, hair fall, and damaged hair repair.",
        fullDescription: "Address specific hair concerns with our targeted hair treatments. Whether you suffer from hair fall, dandruff, or breakage, we have effective solutions to restore your hair's vitality.",
        price: "Starts from ₹500",
        image: serviceHairSpa,
        features: [
            { name: "Hair Keratin Treatment", price: "₹6000" },
            { name: "Hair Botox Treatment", price: "₹6000" },
            { name: "Damage Repair", price: "₹500" },
            { name: "Dandruff Treatment", price: "₹1200" },
            { name: "Lice Removal Treatment", price: "₹2000" },
            { name: "Hair Smoothening Treatment", price: "₹3000" }
        ],
        duration: "2-3 hours"
    },
    {
        id: 10,
        slug: 'pedicure-manicure',
        title: "Pedicure & Manicure",
        description: "Relaxing hand and foot care with nail shaping, cuticle work, and polish.",
        fullDescription: "Pamper your hands and feet with our relaxing manicure and pedicure services. We focus on hygiene, nail health, and aesthetics to give you neat, beautiful nails.",
        price: "Starts from ₹600",
        image: serviceNails,
        features: ["Classic Pedicure", "Classic Manicure", "Spa Pedicure", "Spa Manicure", "Crystal Pedicure", "Crystal Manicure", "Heel Repairing Treatment"],
        duration: "60-90 min"
    },
    {
        id: 11,
        slug: 'face-treatment',
        title: "Face Treatment",
        description: "Targeted treatments for acne, pigmentation, and anti-aging concerns.",
        fullDescription: "Our advanced face treatments target specific skin issues like acne, pigmentation, and signs of aging. We use clinically proven methods to deliver visible improvements.",
        price: "Starts from ₹1,200",
        image: serviceSkincare,
        features: ["Acne Treatment", "Pigmentation Correction", "Anti-Aging", "Skin Tightening", "Pimple Treatment", "What's Removal"],
        duration: "60-90 min"
    },
    {
        id: 12,
        slug: 'aesthetics',
        title: "Aesthetics",
        description: "Advanced non-invasive procedures for skin rejuvenation and contouring.",
        fullDescription: "Enhance your natural beauty with our non-invasive aesthetic procedures. From micro-needling to skin contouring, our expert treatments provide safe and effective results.",
        price: "Consultation based",
        image: serviceAesthetics,
        features: ["Micro-needling"],
        duration: "Consultation"
    },
    {
        id: 13,
        slug: 'massage',
        title: "Massage",
        description: "Therapeutic massages to relieve stress, tension, and improve circulation.",
        fullDescription: "Relax and unwind with our therapeutic massage services. Our skilled therapists use various techniques to relieve muscle tension, reduce stress, and improve overall well-being.",
        price: "Starts from ₹1,500",
        image: serviceMassage,
        features: ["Head & Shoulder", "Full Body Massage"],
        duration: "60-90 min"
    },
    {
        id: 14,
        slug: 'hair-cut',
        title: 'Hair Cut',
        description: 'Hair cut for men and women',
        fullDescription: 'Hair cut for men and women',
        price: 'Starts from ₹200',
        image: serviceHairCut,
        subServices: [
            {
                heading: "Ladies & Men Hair Cut",
                features: ["Straight Cut", "U Cut", "V Cut", "Butterfly Cut", "Layer Cut", "Feather Cut", "Hair Splitance", "Front Layer"]
            },
            {
                heading: "Baby Hair Cut",
                features: ["Dora Cut", "Mushroom Cut"]
            }
        ],
        features: ["Straight Cut", "U Cut", "V Cut", "Butterfly Cut", "Layer Cut", "Feather Cut", "Hair Splitance", "Front Layer", "Baby Boy Cut", "Baby Girl Cut"],
        duration: '30-60 min'
    },
    {
        id: 15,
        slug: 'makeup',
        title: 'Makeup',
        description: 'Makeup for men and women',
        fullDescription: 'Makeup for men and women',
        price: 'Starts from ₹200',
        image: serviceMakeup,
        features: ["Face Makeup", "Party Makeup", "Basic Bridal Makeup", "Kryolan Makeup", "HD Makeup", "Waterproof Makeup"],
        duration: '30-60 min'
    }
];  