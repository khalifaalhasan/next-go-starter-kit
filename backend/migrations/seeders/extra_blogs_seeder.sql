-- Extra blogs seeder
INSERT INTO blogs (id, title, slug, content, excerpt, cover_image_url, status, category_id, author_id, published_at, created_at, updated_at)
SELECT 
    gen_random_uuid(),
    'Mindfulness in the Modern Age',
    'mindfulness-modern-age',
    '<p>Exploring the benefits of meditation and mindfulness in a fast-paced digital world.</p>',
    'Benefits of meditation today.',
    'https://images.unsplash.com/photo-1506126613408-eca57c42c193?q=80&w=1500',
    'published',
    c.id,
    u.id,
    NOW(),
    NOW(),
    NOW()
FROM categories c CROSS JOIN users u WHERE c.slug = 'lifestyle' AND u.email = 'admin@gns.com'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blogs (id, title, slug, content, excerpt, cover_image_url, status, category_id, author_id, published_at, created_at, updated_at)
SELECT 
    gen_random_uuid(),
    'Scaling Your SaaS to $10k MRR',
    'scaling-saas-10k-mrr',
    '<p>A step-by-step guide on how to scale your software product from zero to ten thousand dollars in monthly recurring revenue.</p>',
    'Guide to scaling your SaaS.',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1500',
    'published',
    c.id,
    u.id,
    NOW(),
    NOW(),
    NOW()
FROM categories c CROSS JOIN users u WHERE c.slug = 'business' AND u.email = 'admin@gns.com'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blogs (id, title, slug, content, excerpt, cover_image_url, status, category_id, author_id, published_at, created_at, updated_at)
SELECT 
    gen_random_uuid(),
    'Web Development Trends for 2026',
    'web-dev-trends-2026',
    '<p>What is coming next for frontend and backend technologies? Here is what to expect in the next few years.</p>',
    'What is next for web dev?',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500',
    'published',
    c.id,
    u.id,
    NOW(),
    NOW(),
    NOW()
FROM categories c CROSS JOIN users u WHERE c.slug = 'technology' AND u.email = 'admin@gns.com'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blogs (id, title, slug, content, excerpt, cover_image_url, status, category_id, author_id, published_at, created_at, updated_at)
SELECT 
    gen_random_uuid(),
    'The Psychology of Successful Teams',
    'psychology-successful-teams',
    '<p>Understanding why some teams work better than others and how to build a culture of trust.</p>',
    'Building trust in teams.',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1500',
    'published',
    c.id,
    u.id,
    NOW(),
    NOW(),
    NOW()
FROM categories c CROSS JOIN users u WHERE c.slug = 'business' AND u.email = 'admin@gns.com'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blogs (id, title, slug, content, excerpt, cover_image_url, status, category_id, author_id, published_at, created_at, updated_at)
SELECT 
    gen_random_uuid(),
    'Healthy Recipes for Busy Developers',
    'healthy-recipes-developers',
    '<p>Quick and nutritious meals that you can prepare in under 15 minutes between coding sessions.</p>',
    'Quick meals for coders.',
    'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1500',
    'published',
    c.id,
    u.id,
    NOW(),
    NOW(),
    NOW()
FROM categories c CROSS JOIN users u WHERE c.slug = 'lifestyle' AND u.email = 'admin@gns.com'
ON CONFLICT (slug) DO NOTHING;
