// Language Module for Ammur Achar
// Handles switching between English and Bangla languages

// Store the translations for the site
const translations = {
    // Header
    "Cart": "কার্ট",
    "Search Product type": "পণ্য অনুসন্ধান করুন",
    "Menu": "মেনু",
    "Log in": "লগ ইন",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    "Explore our recipes, stories, and learn more about the nutritional value of our ingredients.": "আমাদের রেসিপি, গল্প অন্বেষণ করুন, এবং আমাদের উপাদানগুলির পুষ্টিমূল্য সম্পর্কে আরও জানুন।",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "Pause slideshow": "স্লাইডশো থামান",
    "Play slideshow": "স্লাইডশো চালু করুন",
    
    // Features Section
    "Loved by": "পছন্দ করেন",
    "Used daily by": "প্রতিদিন ব্যবহার করেন",
    "Best Sellers": "সেরা বিক্রেতা",
    "Deals of the Week": "সপ্তাহের অফার",
    
    // Product Options
    "Choose options": "অপশন বেছে নিন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Options": "অপশন",
    "Size": "আকার",
    "Quantity": "পরিমাণ",
    "Price:": "মূল্য:",
    
    // Footer Elements
    "Ammur Achar is primarily an online-based food brand, but we also have a physical store located at Gulshan.": "আম্মুর আচার প্রাথমিকভাবে একটি অনলাইন ভিত্তিক খাদ্য ব্র্যান্ড, তবে আমাদের গুলশানে একটি ভৌত দোকানও রয়েছে।",
    "Our Stories": "আমাদের গল্পসমূহ",
    "DBID No: 317724393": "ডিবিআইডি নং: ৩১৭৭২৪৩৯৩",
    "Footer links": "ফুটার লিংক",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "Pause slideshow": "স্লাইডশো থামান",
    "Play slideshow": "স্লাইডশো চালু করুন",
    
    // Features Section
    "Loved by": "পছন্দ করেন",
    "Used daily by": "প্রতিদিন ব্যবহার করেন",
    "Best Sellers": "সেরা বিক্রেতা",
    "Deals of the Week": "সপ্তাহের অফার",
    
    // Product Options
    "Choose options": "অপশন বেছে নিন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Options": "অপশন",
    "Size": "আকার",
    "Quantity": "পরিমাণ",
    "Price:": "মূল্য:",
    
    // Footer Elements
    "Ammur Achar is primarily an online-based food brand, but we also have a physical store located at Gulshan.": "আম্মুর আচার প্রাথমিকভাবে একটি অনলাইন ভিত্তিক খাদ্য ব্র্যান্ড, তবে আমাদের গুলশানে একটি ভৌত দোকানও রয়েছে।",
    "Our Stories": "আমাদের গল্পসমূহ",
    "DBID No: 317724393": "ডিবিআইডি নং: ৩১৭৭২৪৩৯৩",
    "Footer links": "ফুটার লিংক",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "Pause slideshow": "স্লাইডশো থামান",
    "Play slideshow": "স্লাইডশো চালু করুন",
    
    // Features Section
    "Loved by": "পছন্দ করেন",
    "Used daily by": "প্রতিদিন ব্যবহার করেন",
    "Best Sellers": "সেরা বিক্রেতা",
    "Deals of the Week": "সপ্তাহের অফার",
    
    // Product Options
    "Choose options": "অপশন বেছে নিন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Options": "অপশন",
    "Size": "আকার",
    "Quantity": "পরিমাণ",
    "Price:": "মূল্য:",
    
    // Footer Elements
    "Ammur Achar is primarily an online-based food brand, but we also have a physical store located at Gulshan.": "আম্মুর আচার প্রাথমিকভাবে একটি অনলাইন ভিত্তিক খাদ্য ব্র্যান্ড, তবে আমাদের গুলশানে একটি ভৌত দোকানও রয়েছে।",
    "Our Stories": "আমাদের গল্পসমূহ",
    "DBID No: 317724393": "ডিবিআইডি নং: ৩১৭৭২৪৩৯৩",
    "Footer links": "ফুটার লিংক",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "Pause slideshow": "স্লাইডশো থামান",
    "Play slideshow": "স্লাইডশো চালু করুন",
    
    // Features Section
    "Loved by": "পছন্দ করেন",
    "Used daily by": "প্রতিদিন ব্যবহার করেন",
    "Best Sellers": "সেরা বিক্রেতা",
    "Deals of the Week": "সপ্তাহের অফার",
    
    // Product Options
    "Choose options": "অপশন বেছে নিন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Options": "অপশন",
    "Size": "আকার",
    "Quantity": "পরিমাণ",
    "Price:": "মূল্য:",
    
    // Footer Elements
    "Ammur Achar is primarily an online-based food brand, but we also have a physical store located at Gulshan.": "আম্মুর আচার প্রাথমিকভাবে একটি অনলাইন ভিত্তিক খাদ্য ব্র্যান্ড, তবে আমাদের গুলশানে একটি ভৌত দোকানও রয়েছে।",
    "Our Stories": "আমাদের গল্পসমূহ",
    "DBID No: 317724393": "ডিবিআইডি নং: ৩১৭৭২৪৩৯৩",
    "Footer links": "ফুটার লিংক",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "Pause slideshow": "স্লাইডশো থামান",
    "Play slideshow": "স্লাইডশো চালু করুন",
    
    // Features Section
    "Loved by": "পছন্দ করেন",
    "Used daily by": "প্রতিদিন ব্যবহার করেন",
    "Best Sellers": "সেরা বিক্রেতা",
    "Deals of the Week": "সপ্তাহের অফার",
    
    // Product Options
    "Choose options": "অপশন বেছে নিন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Options": "অপশন",
    "Size": "আকার",
    "Quantity": "পরিমাণ",
    "Price:": "মূল্য:",
    
    // Footer Elements
    "Ammur Achar is primarily an online-based food brand, but we also have a physical store located at Gulshan.": "আম্মুর আচার প্রাথমিকভাবে একটি অনলাইন ভিত্তিক খাদ্য ব্র্যান্ড, তবে আমাদের গুলশানে একটি ভৌত দোকানও রয়েছে।",
    "Our Stories": "আমাদের গল্পসমূহ",
    "DBID No: 317724393": "ডিবিআইডি নং: ৩১৭৭২৪৩৯৩",
    "Footer links": "ফুটার লিংক",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "Pause slideshow": "স্লাইডশো থামান",
    "Play slideshow": "স্লাইডশো চালু করুন",
    
    // Features Section
    "Loved by": "পছন্দ করেন",
    "Used daily by": "প্রতিদিন ব্যবহার করেন",
    "Best Sellers": "সেরা বিক্রেতা",
    "Deals of the Week": "সপ্তাহের অফার",
    
    // Product Options
    "Choose options": "অপশন বেছে নিন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Options": "অপশন",
    "Size": "আকার",
    "Quantity": "পরিমাণ",
    "Price:": "মূল্য:",
    
    // Footer Elements
    "Ammur Achar is primarily an online-based food brand, but we also have a physical store located at Gulshan.": "আম্মুর আচার প্রাথমিকভাবে একটি অনলাইন ভিত্তিক খাদ্য ব্র্যান্ড, তবে আমাদের গুলশানে একটি ভৌত দোকানও রয়েছে।",
    "Our Stories": "আমাদের গল্পসমূহ",
    "DBID No: 317724393": "ডিবিআইডি নং: ৩১৭৭২৪৩৯৩",
    "Footer links": "ফুটার লিংক",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "Pause slideshow": "স্লাইডশো থামান",
    "Play slideshow": "স্লাইডশো চালু করুন",
    
    // Features Section
    "Loved by": "পছন্দ করেন",
    "Used daily by": "প্রতিদিন ব্যবহার করেন",
    "Best Sellers": "সেরা বিক্রেতা",
    "Deals of the Week": "সপ্তাহের অফার",
    
    // Product Options
    "Choose options": "অপশন বেছে নিন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Options": "অপশন",
    "Size": "আকার",
    "Quantity": "পরিমাণ",
    "Price:": "মূল্য:",
    
    // Footer Elements
    "Ammur Achar is primarily an online-based food brand, but we also have a physical store located at Gulshan.": "আম্মুর আচার প্রাথমিকভাবে একটি অনলাইন ভিত্তিক খাদ্য ব্র্যান্ড, তবে আমাদের গুলশানে একটি ভৌত দোকানও রয়েছে।",
    "Our Stories": "আমাদের গল্পসমূহ",
    "DBID No: 317724393": "ডিবিআইডি নং: ৩১৭৭২৪৩৯৩",
    "Footer links": "ফুটার লিংক",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    
    // Navigation
    "Home": "হোম",
    "Collections": "সংগ্রহ",
    "Stories": "গল্প",
    "Contact": "যোগাযোগ",
    "About Us": "আমাদের সম্পর্কে",
    
    // Testimonial and Blog Section Headers
    "What our customer says": "আমাদের গ্রাহকরা যা বলে",
    "Featured blog": "নির্বাচিত ব্লগ",
    
    // Customer Testimonials
    "I have to admit your garlic mayo and naga sauce oh my my too good…taste kore i felt like ami eta sudhui kichu chara kheye feli….mashAllah subhanAllah taste….thank you sooooo much.": "আমাকে স্বীকার করতে হবে আপনার গার্লিক মেয়ো এবং নাগা সস আহা খুব ভালো...স্বাদ করে আমি অনুভব করলাম যেন আমি এটা শুধু কিছু ছাড়া খেয়ে ফেলি....মাশাআল্লাহ সুবহানাল্লাহ স্বাদ....অনেক ধন্যবাদ।",
    "I am a fan of your alu bukhara pickle. Tastes too good!": "আমি আপনার আলুবুখারা আচারের একজন ভক্ত। স্বাদ খুব ভালো!",
    "Best pickle in town ❤": "শহরের সেরা আচার ❤",
    "Ei Naga chili dip ta ekdom next level! First, I get the flavor, then the real Naga heat kicks later. Love it!": "এই নাগা চিলি ডিপটা একদম নেক্সট লেভেল! প্রথমে, আমি স্বাদটা পাই, তারপর আসল নাগার ঝাল পরে লাগে। দারুণ লাগে!",
    "Student": "শিক্ষার্থী",
    "Digital Content Creator": "ডিজিটাল কনটেন্ট ক্রিয়েটর",
    "Job Holder": "চাকরিজীবী",
    
    // Blog elements
    "March 17, 2025": "১৭ মার্চ, ২০২৫",
    "By Md Saif Anwar": "লিখেছেন মোঃ সাইফ আনোয়ার",
    "Read more": "আরও পড়ুন",
    
    // Navigation controls
    "Previous": "পূর্ববর্তী",
    "Next": "পরবর্তী",
    "220,000+ Families": "২২০,০০০+ পরিবার",
    "Pure, Halal": "বিশুদ্ধ, হালাল",
    "Certified Goodness": "সার্টিফাইড গুণমান",
    "ISO Certified": "আইএসও সার্টিফাইড",
    "Quality Guaranteed": "গুণমান নিশ্চিত",
    "The Only Great Taste Award": "শ্রেষ্ঠ স্বাদের একমাত্র পুরস্কার",
    "Pickle Brand from Bangladesh": "বাংলাদেশের আচার ব্র্যান্ড",
    
    // Tagline Section
    "Authentic Flavors, Made with Love": "প্রকৃত স্বাদ, ভালোবাসা দিয়ে তৈরি",
    "Not Just Made, Made with Purpose": "শুধু তৈরি নয়, উদ্দেশ্য দিয়ে তৈরি",
    
    // USP Section
    "Made by Hand": "হাতে তৈরি",
    "We craft with tradition that machines can't match": "আমরা ঐতিহ্য দিয়ে তৈরি করি যা মেশিন দিয়ে সম্ভব নয়",
    "Zero Artificial Colors": "কোনো কৃত্রিম রঙ নেই",
    "We let nature do the coloring, no need for additives": "আমরা প্রকৃতিকে রঙ করতে দেই, অতিরিক্ত রঙের প্রয়োজন নেই",
    "No Preservatives": "সংরক্ষক ছাড়া",
    "We rely on nature's methods, not synthetic preservatives": "আমরা প্রাকৃতিক পদ্ধতি ব্যবহার করি, কৃত্রিম সংরক্ষক নয়",
    "All Organic, All Natural": "সম্পূর্ণ জৈব, সম্পূর্ণ প্রাকৃতিক",
    "We keep it organic and natural— just pure goodness": "আমরা এটিকে জৈব এবং প্রাকৃতিক রাখি - শুধু বিশুদ্ধ ভালো",
    "Picked from the Best": "সেরা থেকে বাছাই করা",
    "We source only from the best, where quality thrives naturally": "আমরা শুধুমাত্র সেরা থেকে সংগ্রহ করি, যেখানে গুণমান স্বাভাবিকভাবে বৃদ্ধি পায়",
    "Small Batches, Bold Flavors": "ছোট ব্যাচ, সাহসী স্বাদ",
    "Handcrafted in small batches for the perfect balance of taste.": "পরিপূর্ণ স্বাদের জন্য ছোট ব্যাচে হাতে তৈরি।",
    
    // Deal Section
    "Deals": "অফার",
    "View all": "সব দেখুন",
    "NEW": "নতুন",
    "Arrival": "আগমন",
    "Unique Masalas From Teknaf to Tetulia": "টেকনাফ থেকে তেঁতুলিয়া পর্যন্ত অনন্য মশলা",
    "From Teknaf to Tetulia": "টেকনাফ থেকে তেঁতুলিয়া পর্যন্ত",
    "500 BDT": "৫০০ টাকা",
    "Gift Box": "উপহার বাক্স",
    "Starting from": "শুরু থেকে",
    "FREE Delivery": "ফ্রি ডেলিভারি",
    "Free Delivery": "ফ্রি ডেলিভারি",
    
    // Top Selling Section
    "Top Selling": "সর্বাধিক বিক্রিত",
    "From Tk": "থেকে ৳",
    "Unit price /": "একক মূল্য /",
    "Available": "উপলব্ধ",
    "Choose options": "বিকল্প বাছাই করুন",
    "View details": "বিস্তারিত দেখুন",
    
    // Product Names
    "Garlic Mayo Dipping Sauce": "গার্লিক মেয়ো ডিপিং সস",
    "Honey Mustard Dipping Sauce": "হানি মাস্টার্ড ডিপিং সস",
    "Naga Chili Dipping Sauce": "নাগা চিলি ডিপিং সস",
    "Sweet Chili Dipping Sauce": "সুইট চিলি ডিপিং সস",
    "Green Chili Dipping Sauce": "গ্রিন চিলি ডিপিং সস",
    "Red Chili Dipping Sauce": "রেড চিলি ডিপিং সস",
    "Alu Bukhara Pickle": "আলু বোখারা আচার",
    "Amchur Pickle": "আমচুর আচার",
    "Jolpai Pickle": "জলপাই আচার",
    "Garam Masala": "গরম মসলা",
    "Bhuna Masala": "ভুনা মসলা",
    "Premium Mixed Pickle Collection": "প্রিমিয়াম মিক্সড আচার কালেকশন",
    
    // Collection Page
    "Buy Authentic Pickles, Dips and Spices | Ammur Achar": "প্রামাণিক আচার, ডিপস এবং মসলা কিনুন | আম্মুর আচার",
    "Discover the best pickles (আঁচার) and dipping sauces at Ammur Achar. Order online today and experience the perfect blend of flavor and quality!": "আম্মুর আচারে সেরা আঁচার এবং ডিপিং সস আবিষ্কার করুন। আজই অনলাইনে অর্ডার করুন এবং স্বাদ ও গুণমানের নিখুঁত মিশ্রণ অনুভব করুন!",
    "Buy Authentic Pickles, Dips and Spices | Ammur Achar": "আম্মুর আচার থেকে প্রামাণিক আচার, ডিপস এবং মসলা কিনুন",
    "Discover the best pickles (আঁচার) and dipping sauces at Ammur Achar. Order online today and experience the perfect blend of flavor and quality!": "আম্মুর আচারে সেরা আচার এবং ডিপিং সস আবিষ্কার করুন। আজই অনলাইনে অর্ডার করুন এবং স্বাদ ও মানের নিখুঁত মিশ্রণ অনুভব করুন!",
    "All": "সব",
    "Dips": "ডিপস",
    "Pickles": "আচার",
    "Spices": "মসলা",
    "Product list": "পণ্য তালিকা",

    "Explore our recipes, stories, and learn more about the nutritional value of our ingredients": "আমাদের রেসিপি, গল্পগুলি ঘুরে দেখুন এবং আমাদের উপাদানগুলির পুষ্টিগুণ সম্পর্কে আরও জানুন।",
    
    // Contact Page
    "Contact Us": "যোগাযোগ করুন",
    "Have questions? We're here to help! Reach out to us through any of the methods below.": "প্রশ্ন আছে? আমরা সাহায্য করতে এখানে আছি! নিচের যেকোন পদ্ধতিতে আমাদের সাথে যোগাযোগ করুন।",
    "Get in Touch": "যোগাযোগ করুন",
    "Visit Us": "আমাদের দেখুন",
    "Call Us": "কল করুন",
    "Email Us": "ইমেইল করুন",
    "Business Hours": "কার্যালয়ের সময়",
    "Monday - Friday: 9:00 AM - 6:00 PM": "সোমবার - শুক্রবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০",
    "Saturday: 10:00 AM - 4:00 PM": "শনিবার: সকাল ১০:০০ - বিকাল ৪:০০",
    "Sunday: Closed": "রবিবার: বন্ধ",
    "Connect With Us": "আমাদের সাথে যোগাযোগ করুন",
    "Send Us a Message": "আমাদের একটি বার্তা পাঠান",
    "Full Name": "পুরো নাম",
    "Email Address": "ইমেইল ঠিকানা",
    "Phone Number": "ফোন নম্বর",
    "Subject": "বিষয়",
    "Your Message": "আপনার বার্তা",
    "Send Message": "বার্তা পাঠান",
    "Our Location": "আমাদের অবস্থান",
    "Frequently Asked Questions": "সাধারণ জিজ্ঞাসা",
    "How can I place an order?": "কিভাবে আমি অর্ডার করব?",
    "What are the shipping options and costs?": "শিপিং বিকল্প এবং খরচ কি?",
    "How are your products preserved?": "আপনার পণ্যগুলি কিভাবে সংরক্ষিত হয়?",
    "What is your return and refund policy?": "আপনার রিটার্ন এবং রিফান্ড নীতি কি?",
    
    // About Us Page
    "About Ammur Achar": "আম্মুর আচার সম্পর্কে",
    "Ammur Achar is a unique culinary brand that brings the authentic flavors of traditional pickles, dips, and spices to your table.": "আম্মুর আচার একটি অনন্য রন্ধনশিল্প ব্র্যান্ড যা ঐতিহ্যবাহী আচার, ডিপস এবং মসলার প্রকৃত স্বাদ আপনার টেবিলে নিয়ে আসে।",
    "Founded in 2010, Ammur Achar began as a small family operation crafting traditional pickles and preserves using recipes passed down through generations.": "২০১০ সালে প্রতিষ্ঠিত, আম্মুর আচার একটি ছোট পারিবারিক প্রতিষ্ঠান হিসাবে শুরু হয়েছিল যা প্রজন্ম থেকে প্রজন্ম ধরে চলে আসা রেসিপি ব্যবহার করে ঐতিহ্যবাহী আচার ও সংরক্ষণ তৈরি করে।",
    "What started as a passion project at local farmers markets has grown into a beloved brand offering authentic Eastern flavors made with the finest ingredients.": "যা স্থানীয় কৃষক বাজারে একটি আবেগপূর্ণ প্রকল্প হিসাবে শুরু হয়েছিল তা সেরা উপাদান দিয়ে তৈরি প্রাচ্যের প্রকৃত স্বাদ সরবরাহকারী একটি প্রিয় ব্র্যান্ডে পরিণত হয়েছে।",
    "Our Values": "আমাদের মূল্যবোধ",
    "Authentic Recipes": "প্রামাণিক রেসিপি",
    "We stay true to traditional methods and flavors that have stood the test of time.": "আমরা ঐতিহ্যবাহী পদ্ধতি এবং স্বাদ যা সময়ের পরীক্ষায় টিকে আছে তার প্রতি সঠিক থাকি।",
    "Quality Ingredients": "মানসম্পন্ন উপাদান",
    "We source the freshest, highest-quality ingredients from trusted local farmers.": "আমরা বিশ্বস্ত স্থানীয় কৃষকদের কাছ থেকে সবচেয়ে তাজা, সর্বোচ্চ-মানের উপাদান সংগ্রহ করি।",
    "Sustainable Practices": "টেকসই অনুশীলন",
    "We're committed to environmentally responsible production and packaging.": "আমরা পরিবেশগতভাবে দায়ী উৎপাদন এবং প্যাকেজিং এর প্রতি প্রতিশ্রুতিবদ্ধ।",
    "Community Support": "সম্প্রদায়ের সমর্থন",
    "We give back to our community through partnerships with local organizations.": "আমরা স্থানীয় সংস্থাগুলির সাথে অংশীদারিত্বের মাধ্যমে আমাদের সম্প্রদায়কে ফিরিয়ে দিই।",
    "Meet Our Team": "আমাদের দলের সাথে পরিচিত হোন",
    
    // Footer
    "Join Our Community": "আমাদের সম্প্রদায়ে যোগ দিন",
    "Subscribe to our newsletter for recipes, promotions, and updates": "রেসিপি, প্রমোশন এবং আপডেটের জন্য আমাদের নিউজলেটার সাবস্ক্রাইব করুন",
    "Your email address": "আপনার ইমেইল ঠিকানা",
    "Subscribe": "সাবস্ক্রাইব",
    "Shop": "শপ",
    "Information": "তথ্য",
    "Back to top": "উপরে ফিরে যান",
    "Your cart is empty": "আপনার কার্ট খালি",
    "You need to add items to your cart before checkout.": "চেকআউট করার আগে আপনাকে আপনার কার্টে আইটেম যোগ করতে হবে।",
    "Browse Products": "পণ্য দেখুন",
    "Added to Cart": "কার্টে যোগ করা হয়েছে",
    "Start Shopping": "শপিং শুরু করুন",
    "Subtotal": "সাবটোটাল",
    "Shipping & taxes calculated at checkout": "চেকআউটে শিপিং ও ট্যাক্স হিসাব করা হবে",
    "Checkout": "চেকআউট",
    "All rights reserved.": "সর্বস্বত্ব সংরক্ষিত।",
    
    // Search Results Page
    "Search Results": "অনুসন্ধান ফলাফল",
    "Showing results for your search query.": "আপনার অনুসন্ধান কোয়েরির জন্য ফলাফল দেখানো হচ্ছে।",
    "Products found": "পণ্য পাওয়া গেছে",
    "No products found matching your search.": "আপনার অনুসন্ধানের সাথে মিলে এমন কোন পণ্য পাওয়া যায়নি।",
    "Browse All Products": "সমস্ত পণ্য ব্রাউজ করুন",
    "Product Details": "পণ্যের বিবরণ",
    "Description": "বিবরণ",
    "Ingredients": "উপাদান",
    "Nutrition Facts": "পুষ্টিতথ্য",
    "Product Options": "পণ্যের বিকল্প",
    
    // Footer links
    "Footer links": "ফুটার লিঙ্ক",
    "Search": "অনুসন্ধান",
    "Terms & Conditions": "শর্তাবলী",
    "Return & Refund Policy": "রিটার্ন এবং রিফান্ড নীতি",
    "Trade License": "ট্রেড লাইসেন্স",
    "Newsletter": "নিউজলেটার",
    "Sign up for exclusive offers, original stories, events and more.": "এক্সক্লুসিভ অফার, অরিজিনাল গল্প, ইভেন্ট এবং আরও অনেক কিছুর জন্য সাইন আপ করুন।",
    "Email": "ইমেইল",
    "Payment methods accepted": "গ্রহণযোগ্য পেমেন্ট পদ্ধতি",
    
    // Checkout Page
    "Shipping Information": "শিপিং তথ্য",
    "Full Address": "পুরো ঠিকানা",
    "City": "শহর",
    "Postal Code": "পোস্টাল কোড",
    "Order Notes (Optional)": "অর্ডার নোট (ঐচ্ছিক)",
    "Payment Method": "পেমেন্ট পদ্ধতি",
    "Cash on Delivery": "ক্যাশ অন ডেলিভারি",
    "Credit/Debit Card": "ক্রেডিট/ডেবিট কার্ড",
    "Place Order": "অর্ডার করুন",
    "Order Summary": "অর্ডার সারাংশ",
    "Shipping": "শিপিং",
    "Total": "মোট",
    
    // Product Details
    "Product Details": "পণ্যের বিবরণ",
    "Description": "বিবরণ",
    "Ingredients": "উপাদান",
    "Nutrition Facts": "পুষ্টিতথ্য",
    
    // Product Descriptions
    "Our signature Garlic Mayo Dipping Sauce is a creamy blend of rich mayonnaise infused with fresh garlic, herbs, and special spices. Perfect for dipping, spreading, or as a flavor enhancer for your favorite dishes.": "আমাদের সিগনেচার গার্লিক মেয়ো ডিপিং সস হল তাজা রসুন, ভেষজ এবং বিশেষ মশলা দিয়ে মিশ্রিত সমৃদ্ধ মেয়নেজের একটি ক্রিমি মিশ্রণ। ডিপিং, ছড়ানো বা আপনার প্রিয় খাবারের জন্য স্বাদ বাড়ানোর জন্য উপযুক্ত।",
    
    "A perfect balance of sweet honey and tangy mustard creates this golden, velvety sauce. Our Honey Mustard Dipping Sauce adds a delightful zing to sandwiches, wraps, and is an excellent dipping sauce for chicken and vegetables.": "মিষ্টি মধু এবং টক সরিষার একটি নিখুঁত ভারসাম্য এই সোনালী, ভেলভেটি সস তৈরি করে। আমাদের হানি মাস্টার্ড ডিপিং সস স্যান্ডউইচ, র‍্যাপ-এ একটি আনন্দদায়ক স্বাদ যোগ করে এবং মুরগি ও শাকসবজির জন্য একটি চমৎকার ডিপিং সস।",
    
    "For the brave and the bold, our Naga Chili Dipping Sauce brings the authentic heat of the famous Naga chili pepper, balanced with a hint of sweetness and tanginess. Perfect for those who love to spice things up!": "সাহসী এবং দুঃসাহসিকদের জন্য, আমাদের নাগা চিলি ডিপিং সস বিখ্যাত নাগা মরিচের প্রকৃত তীব্রতা নিয়ে আসে, একটু মিষ্টতা এবং টকের সাথে ভারসাম্যপূর্ণ। যারা খাবারে ঝাল পছন্দ করেন তাদের জন্য নিখুঁত!",
    
    "A harmony of sweet and mild heat, our Sweet Chili Dipping Sauce is a versatile condiment that adds a delightful twist to spring rolls, grilled meats, and seafood. The perfect balance of sweet, sour, and spicy.": "আমাদের সুইট চিলি ডিপিং সস মিষ্টি এবং হালকা ঝালের একটি সুন্দর মিশ্রণ, যা স্প্রিং রোল, গ্রিল করা মাংস এবং সামুদ্রিক খাবারে একটি আনন্দদায়ক স্বাদ যোগ করে। মিষ্টি, টক এবং ঝালের নিখুঁত ভারসাম্য।",
    
    "Made with fresh green chilies, this vibrant sauce offers a medium heat with herbal notes. Our Green Chili Dipping Sauce is perfect for enhancing the flavor of grilled meats, sandwiches, and as a dip for crackers and chips.": "তাজা সবুজ মরিচ দিয়ে তৈরি, এই জীবন্ত সস ভেষজ নোটের সাথে মাঝারি তীব্রতা প্রদান করে। আমাদের গ্রিন চিলি ডিপিং সস গ্রিল করা মাংস, স্যান্ডউইচের স্বাদ বাড়াতে এবং ক্র্যাকার ও চিপসের জন্য ডিপ হিসেবে নিখুঁত।",
    
    "A rich, deep-flavored sauce with a medium-to-hot heat profile. Our Red Chili Dipping Sauce combines ripe red chilies with aromatic spices for a bold flavor that elevates any dish, from pasta to pizza to grilled meats.": "একটি সমৃদ্ধ, গভীর-স্বাদযুক্ত সস যার মাঝারি-থেকে-তীব্র তীব্রতার প্রোফাইল রয়েছে। আমাদের রেড চিলি ডিপিং সস পরিপক্ক লাল মরিচকে সুগন্ধি মশলার সাথে মিশ্রিত করে একটি সাহসী স্বাদ তৈরি করে যা পাস্তা থেকে পিজ্জা ও গ্রিল করা মাংস সহ যেকোনো খাবারকে উন্নত করে।",
    
    "A traditional favorite, our Alu Bukhara (Plum) Pickle combines the sweet-sour taste of plums with aromatic spices for a tangy, sweet experience that complements any meal.": "ঐতিহ্যবাহী প্রিয়, আমাদের আলুবুখারা (প্লাম) আচার মিষ্টি-টক স্বাদকে সুগন্ধি মশলার সাথে মিশ্রিত করে এমন একটি টক, মিষ্টি অভিজ্ঞতার জন্য যা যেকোনো খাবারের সাথে সম্পূরক।",
    
    "Made from raw green mangoes, our Amchur Pickle has a delightful tangy flavor profile with a perfect balance of spices. It adds a burst of zesty flavor to elevate your meals.": "কাঁচা সবুজ আম থেকে তৈরি, আমাদের আমচুর আচারে মশলার নিখুঁত ভারসাম্য সহ একটি আনন্দদায়ক টক স্বাদের প্রোফাইল রয়েছে। এটি আপনার খাবারকে উন্নত করার জন্য একটি তীব্র স্বাদ যোগ করে।",
    
    "A unique Bengali delicacy, our Jolpai (Olive) Pickle combines the distinct taste of local olives with traditional spices for a savory-tangy experience that pairs perfectly with rice and lentils.": "একটি অনন্য বাঙালি খাবার, আমাদের জলপাই (অলিভ) আচার স্থানীয় জলপাইয়ের স্বতন্ত্র স্বাদকে ঐতিহ্যবাহী মশলার সাথে মিশ্রিত করে এমন একটি সুস্বাদু-টক অভিজ্ঞতার জন্য যা ভাত এবং ডালের সাথে নিখুঁতভাবে মানানসই।",
    
    "Our signature Garam Masala is a carefully crafted blend of aromatic spices, toasted to perfection to release their essential oils. This authentic blend adds depth and warmth to curries, rice dishes, and vegetables.": "আমাদের সিগনেচার গরম মসলা হল সতর্কতার সাথে তৈরি করা সুগন্ধি মশলার একটি মিশ্রণ, যা তাদের অপরিহার্য তেল ছাড়ার জন্য নিখুঁতভাবে ভাজা হয়। এই প্রকৃত মিশ্রণটি কারি, ভাতের খাবার এবং শাকসবজিতে গভীরতা এবং উষ্ণতা যোগ করে।",
    
    "Our Bhuna Masala is a robust blend of spices that have been roasted and ground to create a rich, fragrant base for curries and stews. This time-saving blend brings authentic flavor to your home cooking.": "আমাদের ভুনা মসলা হল মশলার একটি শক্তিশালী মিশ্রণ যা কারি এবং স্টু-এর জন্য একটি সমৃদ্ধ, সুগন্ধযুক্ত ভিত্তি তৈরি করতে ভাজা এবং গুঁড়া করা হয়েছে। এই সময় বাঁচানো মিশ্রণটি আপনার বাড়ির রান্নায় প্রকৃত স্বাদ নিয়ে আসে।",

    // New Premium Product Description
    "Our Premium Mixed Pickle Collection is a handcrafted assortment of traditional Bengali pickles made with heirloom recipes. This exclusive selection features five distinct varieties including mango, olive, tamarind, chili, and lemon - each carefully prepared with the finest ingredients and authentic spices to deliver an explosion of flavors that enhance any meal.": "আমাদের প্রিমিয়াম মিক্সড আচার কালেকশন হল ঐতিহ্যবাহী রেসিপি দিয়ে হাতে তৈরি বাঙালি আচারের একটি সংগ্রহ। এই এক্সক্লুসিভ সিলেকশনে পাঁচটি স্বতন্ত্র ভ্যারাইটি রয়েছে যেমন আম, জলপাই, তেঁতুল, মরিচ এবং লেবু - প্রতিটি সাবধানে সেরা উপাদান এবং প্রকৃত মশলা দিয়ে প্রস্তুত করা হয়েছে যা যেকোনো খাবারকে উন্নত করে এমন স্বাদের বিস্ফোরণ দেয়। প্রতিটি আচার বাছাই করা উপাদান দিয়ে তৈরি করা হয় এবং ঐতিহ্যগত পদ্ধতিতে প্যাক করা হয় যাতে তাজা স্বাদ সংরক্ষণ করা যায়।",
    
    // Product Ingredients
    "Vegetable oil, egg yolks, garlic, vinegar, salt, sugar, natural flavors, preservatives.": "উদ্ভিজ্জ তেল, ডিমের কুসুম, রসুন, ভিনেগার, লবণ, চিনি, প্রাকৃতিক স্বাদ, সংরক্ষক।",
    "Honey, mustard seeds, vinegar, water, turmeric, salt, natural spices.": "মধু, সরিষার বীজ, ভিনেগার, পানি, হলুদ, লবণ, প্রাকৃতিক মশলা।",
    "Naga chili peppers, vinegar, sugar, salt, garlic, vegetable oil, preservatives.": "নাগা মরিচ, ভিনেগার, চিনি, লবণ, রসুন, উদ্ভিজ্জ তেল, সংরক্ষক।",
    "Sugar, red chili, vinegar, garlic, salt, corn starch, xanthan gum.": "চিনি, লাল মরিচ, ভিনেগার, রসুন, লবণ, কর্ন স্টার্চ, জ্যান্থান গাম।",
    "Green chilies, vinegar, sugar, salt, garlic, spices, preservatives.": "সবুজ মরিচ, ভিনেগার, চিনি, লবণ, রসুন, মশলা, সংরক্ষক।",
    "Red chilies, vinegar, sugar, salt, garlic, spices, preservatives.": "লাল মরিচ, ভিনেগার, চিনি, লবণ, রসুন, মশলা, সংরক্ষক।",
    "Dried plums, mustard oil, spices (fenugreek, fennel, coriander), salt, sugar.": "শুকনো আলুবোখারা, সরিষার তেল, মশলা (মেথি, মৌরি, ধনিয়া), লবণ, চিনি।",
    "Raw mangoes, mustard oil, spices (fenugreek, fennel, mustard seeds), salt, chili powder.": "কাঁচা আম, সরিষার তেল, মশলা (মেথি, মৌরি, সরিষার বীজ), লবণ, মরিচ গুঁড়া।",
    "Olives, mustard oil, spices (fenugreek, fennel, nigella seeds), salt, turmeric.": "জলপাই, সরিষার তেল, মশলা (মেথি, মৌরি, কালোজিরা), লবণ, হলুদ।",
    "Coriander, cumin, cardamom, cinnamon, cloves, black pepper, bay leaves.": "ধনিয়া, জিরা, এলাচ, দারুচিনি, লবঙ্গ, গোলমরিচ, তেজপাতা।",
    
    // New premium product ingredients
    "Assorted fruits and vegetables (mango, olive, tamarind, chili, lemon), mustard oil, salt, turmeric, red chili powder, fenugreek seeds, mustard seeds, fennel seeds, nigella seeds, natural spices. Contains no preservatives or artificial colors.": "বিভিন্ন ফল এবং সবজি (আম, জলপাই, তেঁতুল, মরিচ, লেবু), সরিষার তেল, লবণ, হলুদ, লাল মরিচ গুঁড়া, মেথি, সরিষার বীজ, মৌরি, কালোজিরা, প্রাকৃতিক মশলা। কোনো সংরক্ষক বা কৃত্রিম রঙ নেই।",
    
    // Nutrition Facts
    "Calories": "ক্যালোরি",
    "Total Fat": "মোট চর্বি",
    "Saturated Fat": "সম্পৃক্ত চর্বি",
    "Trans Fat": "ট্রান্স ফ্যাট",
    "Cholesterol": "কোলেস্টেরল",
    "Sodium": "সোডিয়াম",
    "Total Carbohydrate": "মোট কার্বোহাইড্রেট",
    "Dietary Fiber": "খাদ্য আঁশ",
    "Total Sugars": "মোট চিনি",
    "Protein": "প্রোটিন",
    "Vitamin D": "ভিটামিন ডি",
    "Calcium": "ক্যালসিয়াম",
    "Iron": "আয়রন",
    "Potassium": "পটাসিয়াম",
    "Serving Size": "পরিবেশনের আকার",
    "Servings Per Container": "পাত্র প্রতি পরিবেশন",
    
    // Product Options
    "Size": "আকার",
    "Small (100g)": "ছোট (১০০গ্রাম)",
    "Medium (250g)": "মাঝারি (২৫০গ্রাম)",
    "Large (500g)": "বড় (৫০০গ্রাম)",
    "Family Pack (1kg)": "ফ্যামিলি প্যাক (১কেজি)",
    "Quantity": "পরিমাণ",
    "Heat Level": "তীব্রতার মাত্রা",
    "Mild": "হালকা",
    "Medium": "মাঝারি",
    "Hot": "ঝাল",
    "Extra Hot": "অতিরিক্ত ঝাল",
    "Add to Cart": "কার্টে যোগ করুন",
    
    // Additional Product Details
    "Weight": "ওজন",
    "Storage Instructions": "সংরক্ষণের নির্দেশাবলী",
    "Refrigerate after opening and consume within 2 weeks.": "খোলার পর ফ্রিজে রাখুন এবং ২ সপ্তাহের মধ্যে খেয়ে ফেলুন।",
    "Keep in a cool and dry place. Refrigerate after opening.": "ঠাণ্ডা ও শুকনো জায়গায় রাখুন। খোলার পর ফ্রিজে রাখুন।",
    "Best Before": "সর্বোত্তম ব্যবহারের সময়",
    "12 months from production date": "উৎপাদনের তারিখ থেকে ১২ মাস",
    "Allergy Information": "অ্যালার্জি তথ্য",
    "May contain traces of nuts and mustard.": "নাট এবং সরিষার অবশিষ্টাংশ থাকতে পারে।",
    "May contain traces of peanuts.": "বাদামের অবশিষ্টাংশ থাকতে পারে।",
    "Suitable For": "উপযুক্ত",
    "Vegetarians": "নিরামিষাশী",
    "Non-Vegetarians": "আমিষাশী",
    "Related Products": "সম্পর্কিত পণ্য",
    "You might also like": "আপনার পছন্দ হতে পারে",
    
    // Cart
    "Your Cart": "আপনার কার্ট",
    "Your cart is empty": "আপনার কার্ট খালি",
    "You need to add items to your cart before checkout.": "চেকআউট করার আগে আপনাকে আপনার কার্টে আইটেম যোগ করতে হবে।",
    "Browse Products": "পণ্য দেখুন",
    "Added to Cart": "কার্টে যোগ করা হয়েছে",
    "Item successfully added to your cart": "আইটেম সফলভাবে আপনার কার্টে যোগ করা হয়েছে",
    "View Cart": "কার্ট দেখুন",
    "Order Placed Successfully!": "অর্ডার সফলভাবে স্থাপন করা হয়েছে!",
    "Thank you for your order. We'll process it right away.": "আপনার অর্ডারের জন্য আপনাকে ধন্যবাদ। আমরা এটি অবিলম্বে প্রক্রিয়া করব।",
    "Your order number is:": "আপনার অর্ডার নম্বর:",
    "Continue Shopping": "শপিং চালিয়ে যান",
    "Tk": "৳",
    "BDT": "টাকা"
};

// Make translations globally accessible
window.translations = translations;

// Function to convert Arabic numerals to Bengali numerals
function convertToBengaliNumerals(text) {
    // Handle null, undefined, non-string inputs
    if (text === null || text === undefined) return "";
    if (typeof text !== 'string') {
        try {
            text = String(text);
        } catch (e) {
            console.error("Error converting to string:", e);
            return text;
        }
    }
    
    try {
        // Add support for "From Tk X" pattern
        text = text.replace(/From Tk (\d+)/g, function(match, number) {
            return 'থেকে ৳ ' + convertDigitsToBengali(number);
        });
        
        // Add support for "X BDT" pattern (for the deal card)
        text = text.replace(/(\d+) BDT/g, function(match, number) {
            return convertDigitsToBengali(number) + ' টাকা';
        });
        
        // Replace "Tk X BDT" pattern with Bengali version
        text = text.replace(/Tk (\d+) BDT/g, function(match, number) {
            return '৳ ' + convertDigitsToBengali(number) + ' টাকা';
        });
        
        return text.replace(/\d/g, function(match) {
            return '০১২৩৪৫৬৭৮৯'[match];
        });
    } catch (e) {
        console.error("Error in convertToBengaliNumerals:", e);
        return text; // Return the original text in case of any error
    }
}

function convertDigitsToBengali(number) {
    return String(number).replace(/\d/g, function(match) {
        return '০১২৩৪৫৬৭৮৯'[match];
    });
}

// Function to update content based on selected language
function updateContent(language) {
    // Get all elements with text content
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span, label, input[type="text"][placeholder], input[type="email"][placeholder], textarea[placeholder]');
    
    textElements.forEach(element => {
        // Special handling for cart button
        if (element.classList.contains('cart-btn')) {
            // Skip cart button, we'll handle it separately
            return;
        }
        
        // For input placeholders
        if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.hasAttribute('placeholder')) {
            const originalText = element.getAttribute('data-original-placeholder') || element.getAttribute('placeholder');
            
            if (!element.getAttribute('data-original-placeholder')) {
                element.setAttribute('data-original-placeholder', originalText);
            }
            
            if (language === 'bangla' && translations[originalText]) {
                element.setAttribute('placeholder', translations[originalText]);
            } else {
                element.setAttribute('placeholder', originalText);
            }
            return;
        }
        
        // Skip elements without text content or with only whitespace
        if (!element.textContent || element.textContent.trim() === '') return;
        
        // Store original text if not already stored
        if (!element.hasAttribute('data-original-text')) {
            element.setAttribute('data-original-text', element.textContent);
        }
        
        const originalText = element.getAttribute('data-original-text');
        
        // Skip "Product description coming soon." - we'll translate actual descriptions instead
        if (originalText === "Product description coming soon.") {
            return;
        }
        
        // Update text if translation exists
        if (language === 'bangla' && translations[originalText]) {
            let translatedText = translations[originalText];
            // Convert any Arabic numerals in the Bengali text to Bengali numerals
            translatedText = convertToBengaliNumerals(translatedText);
            element.textContent = translatedText;
            element.classList.add('bangla-text');
            
            // Also convert any Arabic numerals in text that might not have translations
            if (element.classList.contains('bangla-text') && !translations[originalText]) {
                element.textContent = convertToBengaliNumerals(element.textContent);
            }
        } else if (language === 'english') {
            element.textContent = originalText;
            element.classList.remove('bangla-text');
        }
    });
    
    // Handle cart button separately
    const cartButtons = document.querySelectorAll('.cart-btn');
    cartButtons.forEach(cartBtn => {
        const cartCount = cartBtn.querySelector('.cart-count');
        
        // Get the actual numerical count value
        let countValue = cartCount ? cartCount.textContent : '0';
        
        // Store original value as data attribute to preserve it
        if (cartCount && !cartCount.hasAttribute('data-count-value')) {
            cartCount.setAttribute('data-count-value', countValue);
        } else if (cartCount && cartCount.hasAttribute('data-count-value')) {
            // If already stored, use that value instead (preserves during language switching)
            countValue = cartCount.getAttribute('data-count-value');
        }
        
        // Convert to Bengali numerals
        let countText = convertToBengaliNumerals(countValue);
        
        // Save original HTML if not already saved
        if (!cartBtn.hasAttribute('data-original-html')) {
            cartBtn.setAttribute('data-original-html', cartBtn.innerHTML);
        }
        
        // Replace with translated cart text
        const cartText = translations["Cart"] || "কার্ট";
        if (cartBtn.querySelector('.cart-icon')) {
            const newHTML = `<img src="assets/images/cart.png" alt="${cartText}" class="cart-icon"> <span class="cart-count bangla-text" data-count-value="${countValue}">${countText}</span>`;
            cartBtn.innerHTML = newHTML;
        } else {
            cartBtn.innerHTML = `<span class="bangla-text">${cartText}</span> <span class="cart-count bangla-text" data-count-value="${countValue}">${countText}</span>`;
        }
    });
    
    // Translate product descriptions in the modal
    const productDescriptionElem = document.querySelector('.product-details-description p');
    if (productDescriptionElem) {
        const originalDesc = productDescriptionElem.getAttribute('data-original-text');
        if (originalDesc && originalDesc !== "Product description coming soon.") {
            if (language === 'bangla') {
                // If we don't have a direct translation for this description
                if (!translations[originalDesc]) {
                    // Use a standard translation for product descriptions
                    productDescriptionElem.textContent = "আমাদের এই পণ্যটি বিশেষভাবে তৈরি করা হয়েছে সেরা উপাদান দিয়ে। এটি স্বাদে অনন্য এবং আপনার খাবারকে করবে আরও সুস্বাদু।";
                } else {
                    productDescriptionElem.textContent = convertToBengaliNumerals(translations[originalDesc]);
                }
            } else {
                productDescriptionElem.textContent = originalDesc;
            }
        }
    }
    
    // Specifically handle option buttons
    const optionsBtns = document.querySelectorAll('.options-btn');
    optionsBtns.forEach(btn => {
        const originalText = btn.getAttribute('data-original-text') || 'Choose options';
        if (!btn.getAttribute('data-original-text')) {
            btn.setAttribute('data-original-text', originalText);
        }
        
        if (language === 'bangla' && translations[originalText]) {
            btn.textContent = translations[originalText];
            btn.classList.add('bangla-text');
        } else {
            btn.textContent = originalText;
            btn.classList.remove('bangla-text');
        }
    });
    
    // Convert prices and numbers in Bengali text
    if (language === 'bangla') {
        // Convert any prices and numbers in the page
        document.querySelectorAll('.price, .cart-count, .bangla-text').forEach(element => {
            if (element.textContent && /[0-9]/.test(element.textContent)) {
                element.textContent = convertToBengaliNumerals(element.textContent);
            }
        });
    }
    
    // Save language preference
    localStorage.setItem('language', language === 'bangla' ? 'bn' : 'en');
}

// Initialize language toggle
function initLanguageToggle() {
    try {
        console.log("Initializing language toggle");
    const languageToggle = document.getElementById('language-toggle');
    
        if (!languageToggle) {
            console.log("Language toggle not found, will try again later");
            // Retry after a small delay in case DOM isn't fully loaded
            setTimeout(initLanguageToggle, 500);
            return;
        }
        
        console.log("Language toggle found:", languageToggle);
        
        // Check if language preference is stored in localStorage
        const savedLanguage = localStorage.getItem('language');
        console.log("Saved language in init:", savedLanguage);
        
        // Set initial state based on saved preference
        if (savedLanguage === 'bn') {
            console.log("Setting toggle to Bangla");
            languageToggle.checked = true;
            document.documentElement.lang = 'bn';
        } else {
            console.log("Setting toggle to English");
            languageToggle.checked = false;
            document.documentElement.lang = 'en';
        }
        
        // Listen for language toggle changes
        languageToggle.addEventListener('change', function() {
            try {
                console.log("Language toggle changed, checked:", this.checked);
                
                if (this.checked) {
                    // Switch to Bangla
                    window.setLanguage('bn');
                } else {
                    // Switch to English
                    window.setLanguage('en');
                }
            } catch (error) {
                console.error("Error in language toggle change handler:", error);
                // Attempt recovery
                this.checked = localStorage.getItem('language') === 'bn';
            }
        });
    } catch (error) {
        console.error("Error initializing language toggle:", error);
    }
}

// Export functions to window for global access
window.switchToBangla = function() {
    // Get all elements with text content
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span, label, input[type="text"][placeholder], input[type="email"][placeholder], textarea[placeholder]');
    
    textElements.forEach(element => {
        // Skip cart button, we'll handle it separately
        if (element.classList.contains('cart-btn')) {
            return;
        }
        
        // For input placeholders
        if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.hasAttribute('placeholder')) {
            const originalText = element.getAttribute('data-original-placeholder') || element.getAttribute('placeholder');
            
            if (!element.hasAttribute('data-original-placeholder')) {
                element.setAttribute('data-original-placeholder', originalText);
            }
            
            if (translations[originalText]) {
                element.setAttribute('placeholder', translations[originalText]);
            }
            return;
        }
        
        // Skip elements without text content or with only whitespace
        if (!element.textContent || element.textContent.trim() === '') return;
        
        // Store original text if not already stored
        if (!element.hasAttribute('data-original-text')) {
            element.setAttribute('data-original-text', element.textContent.trim());
        }
        
        const originalText = element.getAttribute('data-original-text');
        
        // Skip elements with no original text
        if (!originalText || originalText.trim() === '') return;
        
        // Check if we have a translation for this text
        if (translations[originalText]) {
            // Convert any Arabic numerals to Bengali numerals in the translated text
            element.textContent = convertToBengaliNumerals(translations[originalText]);
            element.classList.add('bangla-text');
        }
    });
    
    // Handle cart button separately
    const cartButtons = document.querySelectorAll('.cart-btn');
    cartButtons.forEach(cartBtn => {
        const cartCount = cartBtn.querySelector('.cart-count');
        
        // Get the actual numerical count value
        let countValue = cartCount ? cartCount.textContent : '0';
        
        // Store original value as data attribute to preserve it
        if (cartCount && !cartCount.hasAttribute('data-count-value')) {
            cartCount.setAttribute('data-count-value', countValue);
        } else if (cartCount && cartCount.hasAttribute('data-count-value')) {
            // If already stored, use that value instead (preserves during language switching)
            countValue = cartCount.getAttribute('data-count-value');
        }
        
        // Convert to Bengali numerals
        let countText = convertToBengaliNumerals(countValue);
        
        // Save original HTML if not already saved
        if (!cartBtn.hasAttribute('data-original-html')) {
            cartBtn.setAttribute('data-original-html', cartBtn.innerHTML);
        }
        
        // Replace with translated cart text
        const cartText = translations["Cart"] || "কার্ট";
        if (cartBtn.querySelector('.cart-icon')) {
            const newHTML = `<img src="assets/images/cart.png" alt="${cartText}" class="cart-icon"> <span class="cart-count bangla-text" data-count-value="${countValue}">${countText}</span>`;
            cartBtn.innerHTML = newHTML;
        } else {
            cartBtn.innerHTML = `<span class="bangla-text">${cartText}</span> <span class="cart-count bangla-text" data-count-value="${countValue}">${countText}</span>`;
        }
    });
    
    // Convert all prices and numbers in Bengali text
    document.querySelectorAll('.price, .cart-count, .bangla-text').forEach(element => {
        if (element.textContent && /[0-9]/.test(element.textContent)) {
            element.textContent = convertToBengaliNumerals(element.textContent);
        }
    });
    
    // Handle Add to Cart buttons specifically
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        if (!button.hasAttribute('data-original-text')) {
            button.setAttribute('data-original-text', button.textContent.trim());
        }
        
        const originalText = button.getAttribute('data-original-text');
        if (translations[originalText] || translations["Add to Cart"]) {
            button.textContent = translations[originalText] || translations["Add to Cart"];
            button.classList.add('bangla-text');
        }
    });
    
    // Specifically handle cart modal elements
    const cartModal = document.querySelector('.cart-modal');
    if (cartModal) {
        // Cart header
        const cartHeader = cartModal.querySelector('.cart-header h3');
        if (cartHeader && !cartHeader.hasAttribute('data-original-text')) {
            cartHeader.setAttribute('data-original-text', cartHeader.textContent.trim());
        }
        if (cartHeader && translations[cartHeader.getAttribute('data-original-text')]) {
            cartHeader.textContent = translations[cartHeader.getAttribute('data-original-text')];
            cartHeader.classList.add('bangla-text');
        }
        
        // Empty cart message
        const emptyCartMessage = cartModal.querySelector('.cart-empty p');
        if (emptyCartMessage && !emptyCartMessage.hasAttribute('data-original-text')) {
            emptyCartMessage.setAttribute('data-original-text', emptyCartMessage.textContent.trim());
        }
        if (emptyCartMessage && translations[emptyCartMessage.getAttribute('data-original-text')]) {
            emptyCartMessage.textContent = translations[emptyCartMessage.getAttribute('data-original-text')];
            emptyCartMessage.classList.add('bangla-text');
        }
        
        // Start shopping button
        const startShoppingBtn = cartModal.querySelector('.start-shopping-btn');
        if (startShoppingBtn && !startShoppingBtn.hasAttribute('data-original-text')) {
            startShoppingBtn.setAttribute('data-original-text', startShoppingBtn.textContent.trim());
        }
        if (startShoppingBtn && translations[startShoppingBtn.getAttribute('data-original-text')]) {
            startShoppingBtn.textContent = translations[startShoppingBtn.getAttribute('data-original-text')];
            startShoppingBtn.classList.add('bangla-text');
        }
        
        // Subtotal
        const subtotalText = cartModal.querySelector('.subtotal span:first-child');
        if (subtotalText && !subtotalText.hasAttribute('data-original-text')) {
            subtotalText.setAttribute('data-original-text', subtotalText.textContent.trim());
        }
        if (subtotalText && translations[subtotalText.getAttribute('data-original-text')]) {
            subtotalText.textContent = translations[subtotalText.getAttribute('data-original-text')];
            subtotalText.classList.add('bangla-text');
        }
        
        // Shipping note
        const shippingNote = cartModal.querySelector('.shipping-note');
        if (shippingNote && !shippingNote.hasAttribute('data-original-text')) {
            shippingNote.setAttribute('data-original-text', shippingNote.textContent.trim());
        }
        if (shippingNote && translations[shippingNote.getAttribute('data-original-text')]) {
            shippingNote.textContent = translations[shippingNote.getAttribute('data-original-text')];
            shippingNote.classList.add('bangla-text');
        }
        
        // Checkout button
        const checkoutBtn = cartModal.querySelector('.checkout-btn');
        if (checkoutBtn && !checkoutBtn.hasAttribute('data-original-text')) {
            checkoutBtn.setAttribute('data-original-text', checkoutBtn.textContent.trim());
        }
        if (checkoutBtn && translations[checkoutBtn.getAttribute('data-original-text')]) {
            checkoutBtn.textContent = translations[checkoutBtn.getAttribute('data-original-text')];
            checkoutBtn.classList.add('bangla-text');
        }
    }
    
    // Also handle the cart notification
    const cartNotification = document.querySelector('.cart-notification');
    if (cartNotification) {
        const title = cartNotification.querySelector('.cart-notification-title');
        if (title && !title.hasAttribute('data-original-text')) {
            title.setAttribute('data-original-text', title.textContent.trim());
        }
        if (title && translations[title.getAttribute('data-original-text')]) {
            title.textContent = translations[title.getAttribute('data-original-text')];
            title.classList.add('bangla-text');
        }
        
        const message = cartNotification.querySelector('.cart-notification-message');
        if (message && !message.hasAttribute('data-original-text')) {
            message.setAttribute('data-original-text', message.textContent.trim());
        }
        if (message && translations[message.getAttribute('data-original-text')]) {
            message.textContent = translations[message.getAttribute('data-original-text')];
            message.classList.add('bangla-text');
        }
        
        const viewCartBtn = cartNotification.querySelector('.view-cart-btn');
        if (viewCartBtn && !viewCartBtn.hasAttribute('data-original-text')) {
            viewCartBtn.setAttribute('data-original-text', viewCartBtn.textContent.trim());
        }
        if (viewCartBtn && translations[viewCartBtn.getAttribute('data-original-text')]) {
            viewCartBtn.textContent = translations[viewCartBtn.getAttribute('data-original-text')];
            viewCartBtn.classList.add('bangla-text');
        }
    }
    
    // Handle specific product details sections
    const detailsHeaders = document.querySelectorAll('.product-details-header h3, .options-header h3');
    detailsHeaders.forEach(header => {
        const originalText = header.textContent.trim();
        if (translations[originalText]) {
            if (!header.hasAttribute('data-original-text')) {
                header.setAttribute('data-original-text', originalText);
            }
            header.textContent = translations[originalText];
            header.classList.add('bangla-text');
        }
    });
    
    // Add bangla-text class to body for global styling
    document.body.classList.add('bangla');
};

window.switchToEnglish = function() {
    // Get all elements with data attributes
    const textElements = document.querySelectorAll('[data-original-text], [data-original-placeholder]');
    
    // Switch each element's text back to English
    textElements.forEach(function(element) {
        if (element.hasAttribute('data-original-text')) {
            element.textContent = element.getAttribute('data-original-text');
            element.classList.remove('bangla-text');
        }
        
        if (element.hasAttribute('data-original-placeholder')) {
            element.setAttribute('placeholder', element.getAttribute('data-original-placeholder'));
        }
    });
    
    // Restore cart buttons to original state
    const cartButtons = document.querySelectorAll('.cart-btn');
    cartButtons.forEach(cartBtn => {
        if (cartBtn.hasAttribute('data-original-html')) {
            // First save the actual count value
            const currentCartCount = cartBtn.querySelector('.cart-count');
            const countValue = currentCartCount && currentCartCount.hasAttribute('data-count-value') 
                ? currentCartCount.getAttribute('data-count-value') 
                : (currentCartCount ? currentCartCount.textContent : '0');
                
            // Restore original HTML structure
            cartBtn.innerHTML = cartBtn.getAttribute('data-original-html');
            
            // Then update the count to maintain the correct value
            const newCartCount = cartBtn.querySelector('.cart-count');
            if (newCartCount) {
                newCartCount.textContent = countValue;
                // Store the value as data attribute for future language switches
                newCartCount.setAttribute('data-count-value', countValue);
            }
        }
    });
    
    // Remove bangla class from body
    document.body.classList.remove('bangla');
}

// Set language to English or Bengali
window.setLanguage = function(lang) {
    const languageToggle = document.getElementById('language-toggle');
    console.log("Setting language to:", lang);
    
    if (lang === 'bn') {
        // Switch to Bengali
        localStorage.setItem('language', 'bn');
        if (languageToggle) languageToggle.checked = true;
        document.documentElement.lang = 'bn';
        window.switchToBangla();
        document.body.classList.add('bn-lang');
        updateContent('bangla');
        
        // Convert all numeric content in Bengali text
        document.querySelectorAll('.bangla-text, .price').forEach(element => {
            if (element.textContent && /[0-9]/.test(element.textContent)) {
                element.textContent = convertToBengaliNumerals(element.textContent);
            }
        });
        
        // Special handling for cart count to preserve its actual value
        document.querySelectorAll('.cart-count').forEach(element => {
            if (element.textContent) {
                // Save the actual value as a data attribute if not already saved
                if (!element.hasAttribute('data-count-value')) {
                    element.setAttribute('data-count-value', element.textContent);
                }
                // Only convert the displayed text, keeping the actual value intact
                element.textContent = convertToBengaliNumerals(element.getAttribute('data-count-value'));
            }
        });
        
        // Update cart display if needed
        if (typeof updateCartDisplay === 'function' && typeof loadCart === 'function') {
            updateCartDisplay(loadCart());
        }
        
        // Update order items display if on checkout page
        if (typeof displayOrderItems === 'function') {
            displayOrderItems();
        }
    } else {
        // Switch to English
        localStorage.setItem('language', 'en');
        if (languageToggle) languageToggle.checked = false;
        document.documentElement.lang = 'en';
        document.body.classList.remove('bn-lang');
        window.switchToEnglish();
        updateContent('english');
        
        // Update cart display if needed
        if (typeof updateCartDisplay === 'function' && typeof loadCart === 'function') {
            updateCartDisplay(loadCart());
        }
        
        // Update order items display if on checkout page
        if (typeof displayOrderItems === 'function') {
            displayOrderItems();
        }
    }
    
    // Fix option buttons after language change
    if (typeof window.fixOptionButtons === 'function') {
        console.log("Calling fixOptionButtons from setLanguage");
        setTimeout(window.fixOptionButtons, 300);
    }
    
    // Dispatch language changed event
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    document.dispatchEvent(event);
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing language toggle");
    initLanguageToggle();
    
    // Force language check on page load
    const savedLanguage = localStorage.getItem('language');
    console.log("Saved language:", savedLanguage);
    
    if (savedLanguage === 'bn') {
        console.log("Setting Bangla language");
        document.documentElement.lang = 'bn';
        
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.checked = true;
        }
        
        // Use a setTimeout to ensure DOM is fully processed
        setTimeout(function() {
            console.log("Applying Bangla language");
            window.switchToBangla();
        }, 300);
    }
}); 