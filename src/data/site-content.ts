export type Language = "en" | "bn" | "hi" | "te" | "pt";

export const languages: { code: Language; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "bn", label: "বাং", name: "বাংলা" },
  { code: "hi", label: "हि", name: "हिन्दी" },
  { code: "te", label: "తె", name: "తెలుగు" },
  { code: "pt", label: "PT", name: "Português (Brasil)" },
];

export const copy = {
  en: {
    nav: ["About", "Areas", "Works", "Services", "Contact"],
    heroEyebrow: "Independent creative studio · India",
    heroTitles: ["Stories that move you.", "Made for the feeling.", "A new kind of real.", "Make them look twice."],
    heroDescription: "We build films and digital worlds for brands with something to say.",
    heroCta: "Start a project",
    aboutLabel: "A little about us",
    aboutTitle: "We make the impossible feel inevitable.",
    aboutParagraphs: [
      "Stairsky is an independent creative studio working at the intersection of imagination and emerging technology. We turn ambitious ideas into thoughtful films, distinctive digital experiences and stories people want to spend time with.",
      "From the first spark to the final frame, our small, curious team brings strategy, craft and a healthy disregard for the expected to every collaboration.",
    ],
    marquee: ["WEB DESIGN", "AI FILMMAKING", "ADVERTISING"],
    filmEyebrow: "Where imagination meets the frame",
    filmTitle: "The Next Era of",
    filmWord: "FILMMAKING",
    filmDescription: "Human ideas. New tools. Unforgettable films.",
    areaLabel: "Good work travels",
    areaTitle: "Stories for every kind of world.",
    areas: ["Food & Beverages", "Fashion", "Medical", "Cosmetics", "Technology", "Hospitality", "Culture", "Wellness", "Education", "Lifestyle", "Entertainment"],
    workLabel: "Selected work",
    workTitle: "Made to make you feel something.",
    workDescription: "A few of the worlds we have helped bring to life.",
    workCategories: ["All films", "Food & drink", "Fashion", "Beauty", "Lifestyle"],
    workFilmTitles: [["A softer kind of", "bold."], ["Made to be", "remembered."], ["A little more", "radiance."], ["Room to", "breathe."], ["The art of", "everyday."]],
    filmLabel: "Film",
    watch: "Play film",
    serviceLabel: "What we do",
    serviceTitle: "Small team. Full picture.",
    viewAll: "View all services",
    viewLess: "Show less",
    services: [
      ["AI filmmaking", "Cinematic worlds, carefully imagined and beautifully made with the next generation of creative tools."],
      ["Brand films", "Purposeful, people-first films that give your brand a point of view."],
      ["Creative direction", "A clear creative north star, from the first thought to the final frame."],
      ["Digital experiences", "Distinctive digital places built to make every interaction count."],
      ["Campaigns & content", "Big ideas shaped into a consistent story across every channel."],
    ],
    projectLabel: "Have a good one in mind?",
    projectTitle: "Let's make something matter.",
    projectDescription: "Tell us a little about what you are dreaming up. We would love to hear it.",
    formName: "Your name",
    formEmail: "Email address",
    formPhone: "Contact number",
    formCategory: "What can we help with?",
    formMessage: "A little about your project",
    formOptions: ["Choose a category", "AI filmmaking", "Brand film", "Creative direction", "Digital experience", "Something else"],
    formSubmit: "Send your enquiry",
    formNote: "Your email app will open with your enquiry ready to send.",
    emailLabel: "Or write to us",
    footerLine: "Good stories make better futures.",
    footerLinks: ["Terms & conditions", "Privacy policy", "Data usage"],
    backHome: "Back to home",
  },
  bn: {
    nav: ["পরিচিতি", "ক্ষেত্র", "কাজ", "সেবা", "যোগাযোগ"],
    heroEyebrow: "স্বাধীন সৃজনশীল স্টুডিও · ভারত",
    heroTitles: ["যে গল্প ছুঁয়ে যায়।", "অনুভূতির জন্য তৈরি।", "নতুন এক বাস্তবতা।", "আরেকবার তাকান।"],
    heroDescription: "যে ব্র্যান্ডের বলার মতো কিছু আছে, তাদের জন্য আমরা চলচ্চিত্র ও ডিজিটাল জগৎ তৈরি করি।",
    heroCta: "প্রকল্প শুরু করুন",
    aboutLabel: "আমাদের সম্পর্কে",
    aboutTitle: "অসম্ভবকে সম্ভব মনে করাই আমাদের কাজ।",
    aboutParagraphs: ["Stairsky কল্পনা ও নতুন প্রযুক্তির মিলনস্থলে কাজ করা একটি স্বাধীন সৃজনশীল স্টুডিও। আমরা সাহসী ভাবনাকে চলচ্চিত্র, ডিজিটাল অভিজ্ঞতা এবং মনে রাখার মতো গল্পে রূপ দিই।", "প্রথম ভাবনা থেকে শেষ দৃশ্য পর্যন্ত, আমাদের ছোট ও কৌতূহলী দল প্রতিটি কাজে কৌশল, দক্ষতা এবং নতুন দৃষ্টিভঙ্গি নিয়ে আসে।"],
    marquee: ["ওয়েব ডিজাইন", "এআই চলচ্চিত্র", "বিজ্ঞাপন"],
    filmEyebrow: "কল্পনা যখন দৃশ্য হয়ে ওঠে",
    filmTitle: "চলচ্চিত্রের",
    filmWord: "নতুন যুগ",
    filmDescription: "মানবিক ভাবনা। নতুন প্রযুক্তি। মনে রাখার মতো চলচ্চিত্র।",
    areaLabel: "ভালো কাজের সীমানা নেই",
    areaTitle: "প্রতিটি জগতের জন্য গল্প।",
    areas: ["খাদ্য ও পানীয়", "ফ্যাশন", "চিকিৎসা", "প্রসাধনী", "প্রযুক্তি", "আতিথেয়তা", "সংস্কৃতি", "সুস্থতা", "শিক্ষা", "জীবনধারা", "বিনোদন"],
    workLabel: "বাছাই করা কাজ",
    workTitle: "যা মনে দাগ কাটে।",
    workDescription: "যে কয়েকটি জগৎকে আমরা প্রাণ দিতে সাহায্য করেছি।",
    workCategories: ["সব চলচ্চিত্র", "খাদ্য ও পানীয়", "ফ্যাশন", "সৌন্দর্য", "জীবনধারা"],
    workFilmTitles: [["একটু কোমল", "সাহস।"], ["মনে রাখার", "মতো।"], ["আরও একটু", "দীপ্তি।"], ["একটু", "স্বস্তি।"], ["প্রতিদিনের", "শিল্প।"]],
    filmLabel: "চলচ্চিত্র",
    watch: "চলচ্চিত্র চালান",
    serviceLabel: "আমরা যা করি",
    serviceTitle: "ছোট দল। সম্পূর্ণ ভাবনা।",
    viewAll: "সব সেবা দেখুন",
    viewLess: "কম দেখুন",
    services: [["এআই চলচ্চিত্র নির্মাণ", "নতুন সৃজনশীল প্রযুক্তিতে যত্নসহকারে কল্পিত ও সুন্দরভাবে নির্মিত সিনেমাটিক জগৎ।"], ["ব্র্যান্ড চলচ্চিত্র", "আপনার ব্র্যান্ডের নিজস্ব দৃষ্টিভঙ্গি তুলে ধরা অর্থবহ চলচ্চিত্র।"], ["সৃজনশীল পরিচালনা", "প্রথম ভাবনা থেকে শেষ দৃশ্য পর্যন্ত স্পষ্ট সৃজনশীল দিশা।"], ["ডিজিটাল অভিজ্ঞতা", "প্রতিটি যোগাযোগকে অর্থবহ করে তোলার স্বতন্ত্র ডিজিটাল জগৎ।"], ["প্রচার ও কনটেন্ট", "প্রতিটি মাধ্যমে একই গল্প বলার জন্য বড় ভাবনার রূপায়ণ।"]],
    projectLabel: "একটা ভালো ভাবনা আছে?",
    projectTitle: "চলুন অর্থবহ কিছু তৈরি করি।",
    projectDescription: "আপনার ভাবনা সম্পর্কে একটু বলুন। আমরা শুনতে চাই।",
    formName: "আপনার নাম",
    formEmail: "ইমেল ঠিকানা",
    formPhone: "যোগাযোগের নম্বর",
    formCategory: "কীভাবে সাহায্য করতে পারি?",
    formMessage: "আপনার প্রকল্প সম্পর্কে",
    formOptions: ["বিষয় বেছে নিন", "এআই চলচ্চিত্র", "ব্র্যান্ড চলচ্চিত্র", "সৃজনশীল পরিচালনা", "ডিজিটাল অভিজ্ঞতা", "অন্য কিছু"],
    formSubmit: "অনুরোধ পাঠান",
    formNote: "আপনার ইমেল অ্যাপে অনুরোধটি পাঠানোর জন্য প্রস্তুত হবে।",
    emailLabel: "অথবা লিখুন",
    footerLine: "ভালো গল্প ভবিষ্যৎকে আরও সুন্দর করে।",
    footerLinks: ["শর্তাবলি", "গোপনীয়তা নীতি", "তথ্য ব্যবহার"],
    backHome: "হোমে ফিরে যান",
  },
  hi: {
    nav: ["परिचय", "क्षेत्र", "काम", "सेवाएँ", "संपर्क"],
    heroEyebrow: "स्वतंत्र क्रिएटिव स्टूडियो · भारत",
    heroTitles: ["दिल को छूने वाली कहानियाँ।", "एहसास के लिए बनाया।", "एक नई हकीकत।", "एक बार फिर देखिए।"],
    heroDescription: "हम उन ब्रांड्स के लिए फ़िल्में और डिजिटल दुनिया बनाते हैं जिनके पास कहने को कुछ है।",
    heroCta: "प्रोजेक्ट शुरू करें",
    aboutLabel: "हमारे बारे में",
    aboutTitle: "असंभव को सहज महसूस कराना।",
    aboutParagraphs: ["Stairsky कल्पना और उभरती तकनीक के संगम पर काम करने वाला एक स्वतंत्र क्रिएटिव स्टूडियो है। हम बड़े विचारों को फ़िल्मों, डिजिटल अनुभवों और यादगार कहानियों में बदलते हैं।", "पहली सोच से आख़िरी फ़्रेम तक, हमारी छोटी और जिज्ञासु टीम हर सहयोग में रणनीति, हुनर और एक नया नज़रिया लाती है।"],
    marquee: ["वेब डिज़ाइन", "एआई फ़िल्ममेकिंग", "विज्ञापन"],
    filmEyebrow: "जहाँ कल्पना फ़्रेम से मिलती है",
    filmTitle: "फ़िल्ममेकिंग का",
    filmWord: "नया दौर",
    filmDescription: "इंसानी सोच। नए औज़ार। यादगार फ़िल्में।",
    areaLabel: "अच्छे काम की कोई सीमा नहीं",
    areaTitle: "हर दुनिया के लिए कहानियाँ।",
    areas: ["खाना और पेय", "फ़ैशन", "चिकित्सा", "सौंदर्य", "तकनीक", "आतिथ्य", "संस्कृति", "स्वास्थ्य", "शिक्षा", "जीवनशैली", "मनोरंजन"],
    workLabel: "चुनिंदा काम",
    workTitle: "जो आपको कुछ महसूस कराए।",
    workDescription: "कुछ ऐसी दुनिया जिन्हें जीवंत करने में हमने मदद की।",
    workCategories: ["सभी फ़िल्में", "खाना और पेय", "फ़ैशन", "सौंदर्य", "जीवनशैली"],
    workFilmTitles: [["थोड़ा और", "निडर।"], ["याद", "रहने वाला।"], ["थोड़ी और", "चमक।"], ["सुकून की", "जगह।"], ["हर दिन की", "कला।"]],
    filmLabel: "फ़िल्म",
    watch: "फ़िल्म चलाएँ",
    serviceLabel: "हम क्या करते हैं",
    serviceTitle: "छोटी टीम। पूरी तस्वीर।",
    viewAll: "सभी सेवाएँ देखें",
    viewLess: "कम दिखाएँ",
    services: [["एआई फ़िल्ममेकिंग", "नई क्रिएटिव तकनीक से सावधानीपूर्वक रची और खूबसूरती से बनाई सिनेमाई दुनिया।"], ["ब्रांड फ़िल्में", "आपके ब्रांड की सोच दिखाने वाली, उद्देश्यपूर्ण और लोगों से जुड़ी फ़िल्में।"], ["क्रिएटिव डायरेक्शन", "पहली सोच से आख़िरी फ़्रेम तक एक स्पष्ट क्रिएटिव दिशा।"], ["डिजिटल अनुभव", "हर बातचीत को खास बनाने वाली अलग डिजिटल दुनिया।"], ["अभियान और कंटेंट", "हर चैनल पर एक कहानी कहने के लिए बड़े विचार।"]],
    projectLabel: "कोई अच्छी सोच है?",
    projectTitle: "कुछ मायनेदार बनाते हैं।",
    projectDescription: "आप क्या सोच रहे हैं, हमें थोड़ा बताएँ। हम सुनना चाहेंगे।",
    formName: "आपका नाम",
    formEmail: "ईमेल पता",
    formPhone: "संपर्क नंबर",
    formCategory: "हम किसमें मदद करें?",
    formMessage: "आपके प्रोजेक्ट के बारे में",
    formOptions: ["एक श्रेणी चुनें", "एआई फ़िल्ममेकिंग", "ब्रांड फ़िल्म", "क्रिएटिव डायरेक्शन", "डिजिटल अनुभव", "कुछ और"],
    formSubmit: "अपना संदेश भेजें",
    formNote: "आपका ईमेल ऐप अनुरोध भेजने के लिए खुलेगा।",
    emailLabel: "या हमें लिखें",
    footerLine: "अच्छी कहानियाँ बेहतर भविष्य बनाती हैं।",
    footerLinks: ["नियम और शर्तें", "गोपनीयता नीति", "डेटा उपयोग"],
    backHome: "मुखपृष्ठ पर लौटें",
  },
  te: {
    nav: ["మా గురించి", "రంగాలు", "పనులు", "సేవలు", "సంప్రదించండి"],
    heroEyebrow: "స్వతంత్ర సృజనాత్మక స్టూడియో · భారతదేశం",
    heroTitles: ["మనసును తాకే కథలు.", "అనుభూతి కోసం రూపొందించాం.", "ఒక కొత్త వాస్తవం.", "మళ్లీ చూడాలనిపించేలా."],
    heroDescription: "చెప్పడానికి మంచి కథ ఉన్న బ్రాండ్ల కోసం మేము సినిమాలు, డిజిటల్ ప్రపంచాలను సృష్టిస్తాం.",
    heroCta: "ప్రాజెక్ట్ ప్రారంభించండి",
    aboutLabel: "మా గురించి కొంచెం",
    aboutTitle: "అసాధ్యాన్ని సహజంగా అనిపించేలా చేస్తాం.",
    aboutParagraphs: ["Stairsky అనేది ఊహాశక్తి, కొత్త సాంకేతికత కలిసే చోట పనిచేసే స్వతంత్ర సృజనాత్మక స్టూడియో. పెద్ద ఆలోచనలను సినిమాలు, ప్రత్యేక డిజిటల్ అనుభవాలు, గుర్తుండిపోయే కథలుగా మలుస్తాం.", "మొదటి ఆలోచన నుంచి చివరి ఫ్రేమ్ వరకు, మా చిన్న బృందం ప్రతి సహకారంలో వ్యూహం, నైపుణ్యం, కొత్త దృక్పథాన్ని తీసుకొస్తుంది."],
    marquee: ["వెబ్ డిజైన్", "ఏఐ ఫిల్మ్‌మేకింగ్", "ప్రకటనలు"],
    filmEyebrow: "ఊహకు ఫ్రేమ్ తోడైన చోట",
    filmTitle: "సినిమా నిర్మాణంలో",
    filmWord: "కొత్త యుగం",
    filmDescription: "మానవ ఆలోచనలు. కొత్త సాధనాలు. మరపురాని సినిమాలు.",
    areaLabel: "మంచి పనికి హద్దులు లేవు",
    areaTitle: "ప్రతి ప్రపంచం కోసం కథలు.",
    areas: ["ఆహారం & పానీయాలు", "ఫ్యాషన్", "వైద్యం", "సౌందర్యం", "సాంకేతికత", "ఆతిథ్యం", "సంస్కృతి", "ఆరోగ్యం", "విద్య", "జీవనశైలి", "వినోదం"],
    workLabel: "ఎంచుకున్న పనులు",
    workTitle: "ఏదో అనుభూతిని కలిగించేవి.",
    workDescription: "మేము జీవం పోసిన కొన్ని ప్రపంచాలు.",
    workCategories: ["అన్ని సినిమాలు", "ఆహారం & పానీయాలు", "ఫ్యాషన్", "సౌందర్యం", "జీవనశైలి"],
    workFilmTitles: [["కొంచెం మృదువైన", "ధైర్యం."], ["గుర్తుండిపోయేలా", "రూపొందింది."], ["మరింత కాస్త", "కాంతి."], ["ఊపిరి", "పీల్చుకునే చోటు."], ["నిత్యజీవితపు", "కళ." ]],
    filmLabel: "సినిమా",
    watch: "సినిమా ప్లే చేయండి",
    serviceLabel: "మేము చేసేవి",
    serviceTitle: "చిన్న బృందం. పూర్తి దృక్పథం.",
    viewAll: "అన్ని సేవలు చూడండి",
    viewLess: "తక్కువ చూపించు",
    services: [["ఏఐ ఫిల్మ్‌మేకింగ్", "కొత్త సృజనాత్మక సాధనాలతో ఆలోచించి అందంగా రూపొందించిన సినిమాటిక్ ప్రపంచాలు."], ["బ్రాండ్ సినిమాలు", "మీ బ్రాండ్ దృక్పథాన్ని తెలిపే, ఉద్దేశంతో రూపొందించిన సినిమాలు."], ["క్రియేటివ్ డైరెక్షన్", "మొదటి ఆలోచన నుంచి చివరి ఫ్రేమ్ వరకు స్పష్టమైన సృజనాత్మక దిశ."], ["డిజిటల్ అనుభవాలు", "ప్రతి పరస్పర చర్యను అర్థవంతం చేసే ప్రత్యేక డిజిటల్ ప్రదేశాలు."], ["ప్రచారాలు & కంటెంట్", "ప్రతి ఛానెల్‌లో ఒకే కథను చెప్పే పెద్ద ఆలోచనలు."]],
    projectLabel: "మంచి ఆలోచన ఉందా?",
    projectTitle: "అర్థవంతమైనదేదైనా చేద్దాం.",
    projectDescription: "మీ ఆలోచన గురించి కొంచెం చెప్పండి. వినడానికి మేము ఆసక్తిగా ఉన్నాం.",
    formName: "మీ పేరు",
    formEmail: "ఈమెయిల్ చిరునామా",
    formPhone: "సంప్రదింపు నంబర్",
    formCategory: "మేము ఎలా సహాయపడగలం?",
    formMessage: "మీ ప్రాజెక్ట్ గురించి",
    formOptions: ["వర్గాన్ని ఎంచుకోండి", "ఏఐ ఫిల్మ్‌మేకింగ్", "బ్రాండ్ సినిమా", "క్రియేటివ్ డైరెక్షన్", "డిజిటల్ అనుభవం", "మరేదైనా"],
    formSubmit: "విచారణ పంపండి",
    formNote: "మీ విచారణను పంపడానికి మీ ఈమెయిల్ యాప్ తెరుచుకుంటుంది.",
    emailLabel: "లేదా మాకు రాయండి",
    footerLine: "మంచి కథలు మెరుగైన భవిష్యత్తును నిర్మిస్తాయి.",
    footerLinks: ["నిబంధనలు", "గోప్యతా విధానం", "డేటా వినియోగం"],
    backHome: "హోమ్‌కు తిరిగి వెళ్ళండి",
  },
  pt: {
    nav: ["Sobre", "Áreas", "Trabalhos", "Serviços", "Contato"],
    heroEyebrow: "Estúdio criativo independente · Índia",
    heroTitles: ["Histórias que emocionam.", "Feito para sentir.", "Uma nova forma de real.", "Olhe mais uma vez."],
    heroDescription: "Criamos filmes e universos digitais para marcas que têm algo a dizer.",
    heroCta: "Começar um projeto",
    aboutLabel: "Um pouco sobre nós",
    aboutTitle: "Fazemos o impossível parecer inevitável.",
    aboutParagraphs: ["A Stairsky é um estúdio criativo independente na interseção entre imaginação e tecnologia emergente. Transformamos grandes ideias em filmes, experiências digitais e histórias que as pessoas querem acompanhar.", "Da primeira ideia ao último frame, nossa equipe pequena e curiosa combina estratégia, talento e um olhar novo em cada parceria."],
    marquee: ["DESIGN WEB", "FILMES COM IA", "PUBLICIDADE"],
    filmEyebrow: "Onde a imaginação encontra o frame",
    filmTitle: "A nova era do",
    filmWord: "CINEMA",
    filmDescription: "Ideias humanas. Novas ferramentas. Filmes inesquecíveis.",
    areaLabel: "Boas ideias vão longe",
    areaTitle: "Histórias para todo tipo de mundo.",
    areas: ["Comida e bebidas", "Moda", "Medicina", "Cosméticos", "Tecnologia", "Hospitalidade", "Cultura", "Bem-estar", "Educação", "Estilo de vida", "Entretenimento"],
    workLabel: "Trabalhos selecionados",
    workTitle: "Feitos para despertar algo.",
    workDescription: "Alguns dos universos que ajudamos a criar.",
    workCategories: ["Todos os filmes", "Comida e bebida", "Moda", "Beleza", "Estilo de vida"],
    workFilmTitles: [["Uma forma mais suave de ser", "ousado."], ["Feito para ser", "lembrado."], ["Um pouco mais de", "brilho."], ["Espaço para", "respirar."], ["A arte do", "cotidiano."]],
    filmLabel: "Filme",
    watch: "Assistir ao filme",
    serviceLabel: "O que fazemos",
    serviceTitle: "Equipe pequena. Visão completa.",
    viewAll: "Ver todos os serviços",
    viewLess: "Ver menos",
    services: [["Filmes com IA", "Universos cinematográficos cuidadosamente imaginados e criados com novas ferramentas."], ["Filmes de marca", "Filmes com propósito e foco nas pessoas, que expressam a personalidade da sua marca."], ["Direção criativa", "Uma direção criativa clara, da primeira ideia ao último frame."], ["Experiências digitais", "Espaços digitais únicos para tornar cada interação especial."], ["Campanhas e conteúdo", "Grandes ideias transformadas em uma história consistente em todos os canais."]],
    projectLabel: "Tem uma boa ideia?",
    projectTitle: "Vamos criar algo que importa.",
    projectDescription: "Conte um pouco sobre o que você está imaginando. Queremos ouvir.",
    formName: "Seu nome",
    formEmail: "Seu e-mail",
    formPhone: "Telefone para contato",
    formCategory: "Como podemos ajudar?",
    formMessage: "Um pouco sobre seu projeto",
    formOptions: ["Escolha uma categoria", "Filmes com IA", "Filme de marca", "Direção criativa", "Experiência digital", "Outro assunto"],
    formSubmit: "Enviar mensagem",
    formNote: "Seu aplicativo de e-mail será aberto com a mensagem pronta para enviar.",
    emailLabel: "Ou escreva para nós",
    footerLine: "Boas histórias criam futuros melhores.",
    footerLinks: ["Termos e condições", "Política de privacidade", "Uso de dados"],
    backHome: "Voltar para o início",
  },
} satisfies Record<Language, {
  nav: string[];
  heroEyebrow: string;
  heroTitles: string[];
  heroDescription: string;
  heroCta: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  marquee: string[];
  filmEyebrow: string;
  filmTitle: string;
  filmWord: string;
  filmDescription: string;
  areaLabel: string;
  areaTitle: string;
  areas: string[];
  workLabel: string;
  workTitle: string;
  workDescription: string;
  workCategories: string[];
  workFilmTitles: [string, string][];
  filmLabel: string;
  watch: string;
  serviceLabel: string;
  serviceTitle: string;
  viewAll: string;
  viewLess: string;
  services: [string, string][];
  projectLabel: string;
  projectTitle: string;
  projectDescription: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formCategory: string;
  formMessage: string;
  formOptions: string[];
  formSubmit: string;
  formNote: string;
  emailLabel: string;
  footerLine: string;
  footerLinks: string[];
  backHome: string;
}>;

export const heroFilms = [
  {
    video: "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=85",
    kicker: "Brand film · 2025",
  },
  {
    video: "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=2000&q=85",
    kicker: "An original story · 2025",
  },
  {
    video: "https://videos.pexels.com/video-files/853917/853917-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=2000&q=85",
    kicker: "Made with imagination · 2024",
  },
  {
    video: "https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85",
    kicker: "A Stairsky production · 2024",
  },
];

const filmSubjects = [
  { title: "A softer kind of", accent: "bold.", category: "Food & drink", client: "Sunday Table", poster: "photo-1490645935967-10de6ba17061" },
  { title: "Made to be", accent: "remembered.", category: "Fashion", client: "Studio Serein", poster: "photo-1539109136881-3be0616acf4b" },
  { title: "A little more", accent: "radiance.", category: "Beauty", client: "FORME Skin", poster: "photo-1608248543803-ba4f8c70ae0b" },
  { title: "Room to", accent: "breathe.", category: "Lifestyle", client: "Good Days Club", poster: "photo-1441986300917-64674bd600d8" },
  { title: "The art of", accent: "everyday.", category: "Food & drink", client: "Noma House", poster: "photo-1498837167922-ddd27525d352" },
];

const videoSources = [
  heroFilms[0].video,
  heroFilms[1].video,
  heroFilms[2].video,
  heroFilms[3].video,
  heroFilms[0].video,
];

export const workCategories = ["Films", "Food & drink", "Fashion", "Beauty", "Lifestyle"];

export const projects = workCategories.map((category, categoryIndex) => ({
  category,
  films: filmSubjects.map((film, filmIndex) => ({
    ...film,
    industry: film.category,
    category,
    video: videoSources[(categoryIndex + filmIndex) % videoSources.length],
    id: `${category.toLowerCase().replaceAll(" ", "-")}-${filmIndex + 1}`,
  })),
}));

export const services = [
  { number: "01", name: "AI filmmaking", description: "From first spark to final frame, we make the not-yet-seen feel real.", tags: ["AI film", "Storytelling", "Post-production"] },
  { number: "02", name: "Brand films", description: "Distinctive films that tell people what you stand for, without saying a word.", tags: ["Brand story", "Campaign film", "Documentary"] },
  { number: "03", name: "Creative direction", description: "A considered point of view that brings every part of your story together.", tags: ["Art direction", "Strategy", "Concept"] },
  { number: "04", name: "Digital experiences", description: "Thoughtful digital spaces that feel as good as they work.", tags: ["Web design", "Digital craft", "Interaction"] },
  { number: "05", name: "Campaigns & content", description: "One big idea, expressed beautifully wherever your audience finds you.", tags: ["Campaigns", "Social", "Content"] },
];
