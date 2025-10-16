export const RATING_FILTERS = [
  {
    label: 'All Ratings',
    value: 'all',
  },
  {
    label: '4.5 & up',
    value: '4.5',
  },
  {
    label: '4.0 & up',
    value: '4.0',
  },
  {
    label: '3.5 & up',
    value: '3.5',
  },
  {
    label: '3.0 & up',
    value: '3.0',
  },
] as const;

export const SORT_FILTERS = [
  {
    label: 'Most Popular',
    value: 'popular',
  },
  {
    label: 'Newest',
    value: 'newest',
  },
  {
    label: 'Highest Rated',
    value: 'highest_rated',
  },
  {
    label: 'Price: Low to High',
    value: 'price_low_high',
  },
  {
    label: 'Price: High to Low',
    value: 'price_high_low',
  },
  {
    label: 'A-Z (Title)',
    value: 'title_asc',
  },
  {
    label: 'Z-A (Title)',
    value: 'title_desc',
  },
] as const;

export const PRICE_FILTERS = [
  {
    label: 'All Prices',
    value: 'all',
  },
  {
    label: 'Free',
    value: 'free',
  },
  {
    label: 'Paid',
    value: 'paid',
  },
  {
    label: 'Under $20',
    value: '0-20',
  },
  {
    label: '$20 - $50',
    value: '20-50',
  },
  {
    label: '$50 - $100',
    value: '50-100',
  },
  {
    label: 'Above $100',
    value: '100+',
  },
] as const;

export const DURATION_FILTERS = [
  {
    label: 'All Durations',
    value: 'all',
  },
  {
    label: '0-1 Hour',
    value: '0-1',
  },
  {
    label: '1-3 Hours',
    value: '1-3',
  },
  {
    label: '3-6 Hours',
    value: '3-6',
  },
  {
    label: '6-12 Hours',
    value: '6-12',
  },
  {
    label: '12+ Hours',
    value: '12+',
  },
] as const;

export const LEVEL_FILTERS = [
  {
    label: 'All Levels',
    value: 'all',
  },
  {
    label: 'Beginner',
    value: 'beginner',
  },
  {
    label: 'Intermediate',
    value: 'intermediate',
  },
  {
    label: 'Advanced',
    value: 'advanced',
  },
  {
    label: 'Expert',
    value: 'expert',
  },
] as const;

export const LANGUAGE_FILTERS = [
  {
    label: 'All Languages',
    value: 'all',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Urdu',
    value: 'ur',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Chinese',
    value: 'zh',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
] as const;
export const CATEGORY_FILTERS = [
  {
    label: 'All Categories',
    value: 'all',
  },
  {
    label: 'Development',
    value: 'development',
    subcategories: [
      { label: 'Web Development', value: 'web-development' },
      { label: 'Mobile Development', value: 'mobile-development' },
      { label: 'Game Development', value: 'game-development' },
      { label: 'Database Design', value: 'database-design' },
      { label: 'Software Testing', value: 'software-testing' },
      { label: 'DevOps', value: 'devops' },
    ],
  },
  {
    label: 'Business',
    value: 'business',
    subcategories: [
      { label: 'Entrepreneurship', value: 'entrepreneurship' },
      { label: 'Communication', value: 'communication' },
      { label: 'Management', value: 'management' },
      { label: 'Sales', value: 'sales' },
      { label: 'Business Strategy', value: 'business-strategy' },
    ],
  },
  {
    label: 'Finance & Accounting',
    value: 'finance-accounting',
    subcategories: [
      { label: 'Accounting & Bookkeeping', value: 'accounting' },
      { label: 'Cryptocurrency', value: 'cryptocurrency' },
      { label: 'Finance', value: 'finance' },
      { label: 'Investing & Trading', value: 'investing' },
    ],
  },
  {
    label: 'IT & Software',
    value: 'it-software',
    subcategories: [
      { label: 'IT Certifications', value: 'it-certifications' },
      { label: 'Network & Security', value: 'network-security' },
      { label: 'Hardware', value: 'hardware' },
      { label: 'Operating Systems', value: 'operating-systems' },
    ],
  },
  {
    label: 'Design',
    value: 'design',
    subcategories: [
      { label: 'Graphic Design', value: 'graphic-design' },
      { label: 'UX/UI Design', value: 'ux-ui-design' },
      { label: '3D & Animation', value: '3d-animation' },
      { label: 'Fashion Design', value: 'fashion-design' },
      { label: 'Interior Design', value: 'interior-design' },
    ],
  },
  {
    label: 'Marketing',
    value: 'marketing',
    subcategories: [
      { label: 'Digital Marketing', value: 'digital-marketing' },
      { label: 'Social Media Marketing', value: 'social-media-marketing' },
      { label: 'SEO', value: 'seo' },
      { label: 'Content Marketing', value: 'content-marketing' },
      { label: 'Branding', value: 'branding' },
    ],
  },
  {
    label: 'Personal Development',
    value: 'personal-development',
    subcategories: [
      { label: 'Productivity', value: 'productivity' },
      { label: 'Leadership', value: 'leadership' },
      { label: 'Career Development', value: 'career-development' },
      { label: 'Personal Finance', value: 'personal-finance' },
    ],
  },
  {
    label: 'Photography & Video',
    value: 'photography-video',
    subcategories: [
      { label: 'Photography', value: 'photography' },
      { label: 'Video Production', value: 'video-production' },
      { label: 'Photo Editing', value: 'photo-editing' },
      { label: 'Videography', value: 'videography' },
    ],
  },
  {
    label: 'Health & Fitness',
    value: 'health-fitness',
    subcategories: [
      { label: 'Fitness', value: 'fitness' },
      { label: 'Nutrition', value: 'nutrition' },
      { label: 'Yoga', value: 'yoga' },
      { label: 'Mental Health', value: 'mental-health' },
    ],
  },
  {
    label: 'Music',
    value: 'music',
    subcategories: [
      { label: 'Instruments', value: 'instruments' },
      { label: 'Music Production', value: 'music-production' },
      { label: 'Music Theory', value: 'music-theory' },
      { label: 'Vocal', value: 'vocal' },
    ],
  },
  {
    label: 'Teaching & Academics',
    value: 'teaching-academics',
    subcategories: [
      { label: 'Engineering', value: 'engineering' },
      { label: 'Math', value: 'math' },
      { label: 'Science', value: 'science' },
      { label: 'Online Education', value: 'online-education' },
    ],
  },
  {
    label: 'Language',
    value: 'language',
    subcategories: [
      { label: 'English', value: 'english' },
      { label: 'Spanish', value: 'spanish' },
      { label: 'French', value: 'french' },
      { label: 'German', value: 'german' },
      { label: 'Arabic', value: 'arabic' },
      { label: 'Urdu', value: 'urdu' },
    ],
  },
] as const;