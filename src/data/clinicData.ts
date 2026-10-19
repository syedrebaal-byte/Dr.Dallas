/**
 * Verified clinical data and brand assets for Dr. Michele Dallas, DDS
 * Las Olas Dental Centre, Fort Lauderdale, FL
 * Source: https://www.drdallas.net/ and verified professional registries
 */

import heroSuiteImg from '../assets/images/hero_las_olas_dental_1792417360421.jpg';
import drDallasPortraitImg from '../assets/images/dr_michele_dallas_portrait_1792417990356.jpg';
import cosmeticSmileImg from '../assets/images/cosmetic_smile_makeover_1792417361643.jpg';
import implantTechImg from '../assets/images/implant_precision_technology_1792417362483.jpg';
import invisalignImg from '../assets/images/invisalign_clear_aligners_1792417362412.jpg';

export interface ServiceItem {
  id: string;
  category: 'cosmetic' | 'orthodontics' | 'restorative' | 'preventative' | 'emergency';
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  benefits: string[];
  steps: { step: string; detail: string }[];
  idealFor: string[];
  duration: string;
}

export const CLINIC_INFO = {
  name: 'Las Olas Dental Centre',
  doctorName: 'Dr. Michele A. Dallas, DDS',
  doctorShort: 'Dr. Michele Dallas',
  doctorCredentials: 'DDS, AEGD, Former Florida Board of Dentistry Member',
  specialty: 'Cosmetic, Restorative & Comprehensive Family Dentistry',
  phone: '(954) 525-5055',
  phoneHref: 'tel:+19545255055',
  email: 'info@drdallas.net',
  address: {
    street: '620 NE 3rd St',
    city: 'Fort Lauderdale',
    state: 'FL',
    zip: '33301',
    area: 'Downtown Fort Lauderdale / Las Olas District',
    googleMapsUrl: 'https://maps.google.com/?q=620+NE+3rd+St,+Fort+Lauderdale,+FL+33301',
  },
  hours: [
    { days: 'Monday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Tuesday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Wednesday', hours: '9:00 AM – 1:00 PM' },
    { days: 'Thursday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Friday', hours: 'By Special Appointment / Urgent Care' },
    { days: 'Saturday – Sunday', hours: 'Emergency On-Call' },
  ],
  credentials: [
    {
      title: 'Florida Board of Dentistry',
      detail: 'Appointed for two consecutive gubernatorial terms overseeing dental licensure, patient safety, and clinical ethics across Florida.',
    },
    {
      title: 'Georgetown University',
      detail: 'Bachelor of Science (B.S.), rigorous foundational pre-health sciences.',
    },
    {
      title: 'Howard University College of Dentistry',
      detail: 'Doctor of Dental Surgery (D.D.S.) degree with honors.',
    },
    {
      title: 'AEGD Post-Doctoral Residency',
      detail: 'Advanced Education in General Dentistry residency with intensive focus on complex restorative and surgical cases.',
    },
    {
      title: '20+ Years Serving Fort Lauderdale',
      detail: 'Decades of trusted clinical relationships on Las Olas, known for patient honesty and meticulous aesthetic judgment.',
    },
    {
      title: 'Certified Invisalign® Provider',
      detail: 'Expertise in modern clear aligner orthodontic therapy for teens and adults.',
    },
  ],
};

export const CLINIC_IMAGES = {
  heroSuite: heroSuiteImg,
  drDallas: drDallasPortraitImg,
  cosmeticSmile: cosmeticSmileImg,
  implantTech: implantTechImg,
  invisalign: invisalignImg,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'porcelain-veneers',
    category: 'cosmetic',
    title: 'Porcelain Laminate Veneers',
    tagline: 'Custom hand-crafted aesthetic smile rejuvenation',
    shortDesc: 'Ultra-thin, custom-shaded medical porcelain shells designed to correct discoloration, chips, gaps, and slight misalignment with natural translucency.',
    fullDesc: 'Dr. Michele Dallas approaches cosmetic veneers with an artist’s eye for facial harmony and dental biology. Each veneer is custom designed to match your facial symmetry, lip line, and natural enamel translucency. We utilize conservative preparation techniques to preserve as much natural tooth structure as possible while transforming your smile into a radiant, durable masterpiece.',
    image: cosmeticSmileImg,
    benefits: [
      'Stain-resistant porcelain that retains brilliance indefinitely',
      'Minimally invasive, conservative enamel preparation',
      'Natural depth, texture, and light-reflecting translucency',
      'Corrects chipped, worn down, discolored, or uneven teeth',
    ],
    steps: [
      { step: '01. Diagnostic Consultation', detail: 'Digital photography, smile analysis, and comprehensive discussion of aesthetic goals.' },
      { step: '02. Digital Design & Prep', detail: 'Conservative tooth preparation, digital impressions, and placement of custom temporaries.' },
      { step: '03. Master Ceramistry', detail: 'Custom fabrication by master dental ceramists using multi-layered feldspathic or lithium disilicate porcelain.' },
      { step: '04. Final Bonding & Polish', detail: 'Permanent adhesive bonding with microscopic fit check and occlusion balance.' },
    ],
    idealFor: ['Chipped or cracked teeth', 'Severe intrinsic tetracycline discoloration', 'Uneven gaps or minor crowding', 'Worn dental edges'],
    duration: '2 to 3 appointments over 2–3 weeks',
  },
  {
    id: 'invisalign',
    category: 'orthodontics',
    title: 'Certified Invisalign® Orthodontics',
    tagline: 'Virtually invisible aligners tailored for busy lifestyles',
    shortDesc: 'Clear, removable aligners engineered to gradually straighten teeth and correct bite mechanics without metal wires or brackets.',
    fullDesc: 'As a certified Invisalign provider in Fort Lauderdale, Dr. Dallas uses advanced digital treatment planning to map out the exact movement of your teeth from day one. You can remove your aligners effortlessly to eat your favorite foods, brush, and floss without dietary restrictions. Ideal for professionals and adults seeking discreet smile alignment.',
    image: invisalignImg,
    benefits: [
      'Nearly invisible clear SmartTrack® material',
      'Removable for meals, social events, brushing, and flossing',
      'No painful wire tightening or mouth sores',
      'Predictable digital 3D preview of your final smile before starting',
    ],
    steps: [
      { step: '01. 3D Digital Scan', detail: 'High-precision digital scan eliminating the need for uncomfortable traditional putty trays.' },
      { step: '02. ClinCheck® Roadmap', detail: 'Custom computer-animated treatment simulation of every tooth movement.' },
      { step: '03. Aligner Delivery', detail: 'Receive custom sets of clear aligners to wear 20–22 hours daily, switching every 1–2 weeks.' },
      { step: '04. Retainer Preservation', detail: 'Custom Vivera retainers to lock in your newly perfected alignment.' },
    ],
    idealFor: ['Crowded teeth', 'Spacing and gaps', 'Overbites, underbites, and crossbites', 'Relapsed orthodontic movement from youth'],
    duration: 'Typically 6 to 18 months depending on case complexity',
  },
  {
    id: 'implant-restoration',
    category: 'restorative',
    title: 'Dental Implant Restoration',
    tagline: 'Permanent, lifelike replacement for missing teeth',
    shortDesc: 'Custom-crafted ceramic crowns, abutments, and implant bridges anchored permanently to restore full chewing function and facial contours.',
    fullDesc: 'Missing teeth compromise your bite, speech, and jawbone density. Dr. Dallas specializes in restoring dental implants with precision-engineered porcelain crowns that mimic the biological shape and shade of natural teeth. Once restored, an implant functions, looks, and feels identical to a natural tooth, offering a lifetime of stability.',
    image: implantTechImg,
    benefits: [
      'Prevents bone loss and preserves facial bone structure',
      'Restores 100% natural chewing force and bite stability',
      'No damage to adjacent healthy teeth (unlike traditional bridges)',
      'Permanent, non-removable solution that cannot get cavities',
    ],
    steps: [
      { step: '01. Implant Assessment', detail: 'Evaluation of bone integration, gum tissue contour, and smile line.' },
      { step: '02. Precision Impression', detail: 'Digital scan or impression of the implant fixture and custom abutment.' },
      { step: '03. Custom Restoration', detail: 'Fabrication of an ultra-durable zirconia or porcelain crown matching your exact tooth shade.' },
      { step: '04. Permanent Fixation', detail: 'Torqued and secured to exact clinical specifications with verified bite mechanics.' },
    ],
    idealFor: ['Single or multiple missing teeth', 'Patients dissatisfied with removable dentures', 'Broken teeth requiring extraction and replacement'],
    duration: '2 appointments after surgical implant integration',
  },
  {
    id: 'laser-teeth-whitening',
    category: 'cosmetic',
    title: 'Laser & In-Office Teeth Whitening',
    tagline: 'Dramatic brightening up to 8 shades in a single visit',
    shortDesc: 'Safe, powerful clinical whitening designed to lift stubborn stains from coffee, wine, and aging without causing lingering sensitivity.',
    fullDesc: 'Store-bought whitening strips often deliver patchy results and painful tooth sensitivity. At Las Olas Dental Centre, Dr. Dallas uses professional-grade whitening systems with targeted light activation and protective barrier technology to shield your gums while brightening enamel by up to 8 shades in just one hour.',
    benefits: [
      'Immediate, radiant results in one 60-minute visit',
      'Formulated with desensitizing agents for maximum comfort',
      'Professional gum protection prevents soft tissue irritation',
      'Includes custom touch-up trays to maintain your glow at home',
    ],
    steps: [
      { step: '01. Enamel Polish & Prep', detail: 'Gentle surface cleaning to remove pellicle and surface debris.' },
      { step: '02. Gingival Barrier', detail: 'Careful isolation of sensitive gum tissue with a liquid dam.' },
      { step: '03. Active Whitening', detail: 'Application of professional bleaching gel activated in 15-minute intervals.' },
      { step: '04. Remineralization', detail: 'Desensitizing fluoride treatment applied for lasting comfort.' },
    ],
    idealFor: ['Extrinsic yellowing and coffee/tea/wine stains', 'Pre-wedding or special event smile prep', 'Smokers or natural age-related discoloration'],
    duration: 'Single 60–75 minute appointment',
  },
  {
    id: 'preventative-wellness',
    category: 'preventative',
    title: 'Comprehensive Exams & Periodontal Wellness',
    tagline: 'The foundational pillar of lifelong oral and systemic health',
    shortDesc: 'Gentle ultrasonic cleanings, low-radiation digital radiography, periodontal screenings, and proactive oral cancer examinations.',
    fullDesc: 'Oral health is directly linked to cardiovascular health and systemic wellness. Dr. Dallas takes the time to personally conduct thorough exams, assess gum health, and evaluate bite harmony. We prioritize proactive prevention, addressing potential issues early before they develop into painful or costly conditions.',
    benefits: [
      'Gentle ultrasonic plaque and tartar removal',
      'Ultra-low radiation digital X-rays for maximum patient safety',
      'Comprehensive oral cancer screening with every examination',
      'Customized home hygiene protocols tailored to your biological needs',
    ],
    steps: [
      { step: '01. Digital Imaging', detail: 'High-definition digital diagnostics to inspect bone and between teeth.' },
      { step: '02. Periodontal Charting', detail: 'Gentle measurement of gum pockets to monitor periodontal health.' },
      { step: '03. Prophylaxis Cleaning', detail: 'Ultrasonic scaling and polishing to eliminate biofilm and calculus.' },
      { step: '04. Doctor Evaluation', detail: 'One-on-one consultation with Dr. Dallas to review findings and recommendations.' },
    ],
    idealFor: ['Routine 6-month checkups', 'Patients with bleeding gums or early gingivitis', 'New patients seeking a trusted dental home in Fort Lauderdale'],
    duration: '45 to 60 minutes',
  },
  {
    id: 'restorative-crowns',
    category: 'restorative',
    title: 'Biomimetic Ceramic Crowns & Onlays',
    tagline: 'Tooth-conserving structural reinforcement with all-ceramic beauty',
    shortDesc: 'Precision ceramic crowns and tooth-colored composite restorations engineered to strengthen compromised teeth without unsightly dark metal margins.',
    fullDesc: 'When a tooth is cracked, heavily filled, or fractured, a ceramic crown provides complete 360-degree structural reinforcement. Dr. Dallas uses 100% metal-free ceramics (such as lithium disilicate and monolithic zirconia) that seamlessly blend with natural teeth and never show a dark gray line at the gumline.',
    benefits: [
      '100% metal-free, biocompatible materials',
      'Eliminates dark margins at the gumline',
      'Protects cracked and root-canal-treated teeth from catastrophic fractures',
      'Custom color-matched to adjacent teeth',
    ],
    steps: [
      { step: '01. Tooth Preparation', detail: 'Removal of decay and meticulous shaping of the tooth for optimal crown retention.' },
      { step: '02. Digital Impression', detail: 'Accurate 3D scan ensuring micron-level margin accuracy.' },
      { step: '03. Aesthetic Temporary', detail: 'Comfortable provisional crown placed while the permanent ceramic is fabricated.' },
      { step: '04. Bonding & Bite Calibration', detail: 'Permanent resin cementation with fine occlusion checks.' },
    ],
    idealFor: ['Severely cracked or decayed teeth', 'Replacing old amalgam fillings with leaking margins', 'Restoring teeth after endodontic therapy'],
    duration: '2 visits spaced 1–2 weeks apart',
  },
  {
    id: 'emergency-dentistry',
    category: 'emergency',
    title: 'Urgent & Emergency Dental Relief',
    tagline: 'Prompt compassionate care when you need it most',
    shortDesc: 'Same-day relief for severe toothaches, broken teeth, lost restorations, and dental trauma in Fort Lauderdale.',
    fullDesc: 'Dental emergencies happen without warning. Whether you are suffering from acute throbbing pain, an infected tooth, a chipped front tooth before a business meeting, or a displaced crown, Dr. Dallas and our Las Olas team prioritize getting you out of pain promptly and safely.',
    benefits: [
      'Priority scheduling for acute dental pain and trauma',
      'Rapid diagnostic assessment to pinpoint the root cause',
      'Gentle local anesthesia and calm, reassuring environment',
      'Conservative treatment focused on saving your natural teeth',
    ],
    steps: [
      { step: '01. Urgent Triage Call', detail: 'Direct telephone triage by our clinical team at (954) 525-5055.' },
      { step: '02. Focused Diagnostics', detail: 'Immediate digital X-ray and examination of the affected tooth.' },
      { step: '03. Pain Elimination', detail: 'Immediate intervention to alleviate acute discomfort and stabilize the area.' },
      { step: '04. Permanent Treatment Plan', detail: 'Clear, transparent explanation of long-term restorative options.' },
    ],
    idealFor: ['Severe toothaches or swelling', 'Cracked, chipped, or knocked-out teeth', 'Lost fillings or detached crowns', 'Bleeding or soft tissue trauma'],
    duration: 'Same-day emergency visit',
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote: 'Dr. Dallas is hands down the most thorough, honest, and gentle dentist I have ever had. She takes time to explain every single detail and treats you like family. My veneers look completely natural and have given me a brand new level of confidence.',
    author: 'Elena R.',
    location: 'Fort Lauderdale, FL',
    treatment: 'Porcelain Veneers & Smile Design',
    rating: 5,
  },
  {
    quote: 'I had severe dental anxiety from past experiences before visiting Las Olas Dental Centre. Dr. Dallas made me feel completely relaxed from the minute I sat in the chair. Her office is pristine, calm, and she is truly a master of her craft.',
    author: 'Marcus T.',
    location: 'Victoria Park, Fort Lauderdale',
    treatment: 'Invisalign & Routine Hygiene',
    rating: 5,
  },
  {
    quote: 'Finding a dentist who served on the Florida Board of Dentistry gives you absolute confidence in her standards. She replaced my old silver fillings and did an implant crown that blends in seamlessly with my smile. Exceptional care.',
    author: 'David L.',
    location: 'Colee Hammock, FL',
    treatment: 'Implant Restoration & Ceramic Crowns',
    rating: 5,
  },
  {
    quote: 'Dr. Michele Dallas has been my dentist for over ten years. Her integrity is unmatched—she will never recommend unnecessary work, only what is genuinely best for your health. Her gentle touch is a gift.',
    author: 'Patricia M.',
    location: 'Las Olas Isles, Fort Lauderdale',
    treatment: 'Preventative & Restorative Dentistry',
    rating: 5,
  },
];

export const AMENITIES_DATA = [
  {
    title: 'Sanctuary Environment',
    desc: 'Boutique operatory suites with floor-to-ceiling windows overlooking tropical palms, designed to soothe the senses.',
  },
  {
    title: 'Unhurried Personal Attention',
    desc: 'Dr. Dallas works directly with you one-on-one. You are never treated as a number in a high-volume corporate dental mill.',
  },
  {
    title: 'Ultra-Low Radiation Digital Imaging',
    desc: 'State-of-the-art digital sensors emit up to 90% less radiation than conventional X-ray film while providing crystal clarity.',
  },
  {
    title: 'Anxiety-Free Philosophy',
    desc: 'Gentle anesthetics, warm blankets, noise-cancelling headphones, and a calm, reassuring bedside manner.',
  },
  {
    title: 'Prime Las Olas Location',
    desc: 'Conveniently located at 620 NE 3rd Street with hassle-free dedicated parking just blocks from Las Olas Boulevard.',
  },
  {
    title: 'Rigorous Sterilization Protocol',
    desc: 'Strict hospital-grade infection control standards overseen by a former Florida Board of Dentistry clinical regulator.',
  },
];

export const FAQS_DATA = [
  {
    question: 'How do I know if I am a candidate for Porcelain Veneers vs. Invisalign?',
    answer: 'Porcelain veneers are ideal for addressing shape, deep intrinsic stains, chips, and tooth proportions, delivering an immediate transformation in 2–3 visits. Invisalign focuses on repositioning natural teeth into correct bite alignment over 6–12 months. In many cases, Dr. Dallas combines minor Invisalign pre-alignment with minimal-prep veneers for the ultimate conservative aesthetic outcome.',
  },
  {
    question: 'What dental insurances do you accept?',
    answer: 'Las Olas Dental Centre is committed to helping you maximize your benefits. We work with and submit claims to most major PPO dental plans, including Delta Dental, Aetna, Cigna, MetLife, Guardian, Humana, and United Healthcare. Our team will verify your coverage and provide a clear estimate of benefits prior to beginning treatment.',
  },
  {
    question: 'What payment options and financing are available for elective cosmetic procedures?',
    answer: 'We believe premium dental care should be accessible. In addition to cash and major credit cards, we partner with CareCredit to offer low-interest and interest-free flexible monthly financing plans. We provide transparent written cost estimates with zero hidden fees.',
  },
  {
    question: 'How can I prepare for my first appointment?',
    answer: 'Please arrive 10 minutes prior to your scheduled time with your photo ID and dental insurance card. Dr. Dallas will conduct a comprehensive oral examination, take necessary digital radiographs, assess your gum health, and discuss your personal smile goals in an unhurried, private consultation.',
  },
  {
    question: 'What should I do if I have a dental emergency after hours?',
    answer: 'If you are experiencing severe dental pain, bleeding, or facial trauma, please call our office immediately at (954) 525-5055. Our phone message provides prompt instructions for urgent patient care, and Dr. Dallas prioritizes emergency triage for acute dental conditions.',
  },
];
