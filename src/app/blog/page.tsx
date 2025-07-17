import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Future of HR: How AI is Transforming Talent Management',
    excerpt: "As we continue to develop our AI-powered HR platform, I'm excited to share insights on how machine learning is revolutionizing how companies hire, develop, and retain talent.",
    author: 'Nick Plumb',
    role: 'Founder & CTO',
    date: '2024-03-25',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Building Ethical AI in HR: A Founder\'s Perspective',
    excerpt: "The intersection of AI and HR presents unique challenges around bias, privacy, and fairness. Here's how we're addressing these critical issues at PlumbLine HR.",
    author: 'Nick Plumb',
    role: 'Founder & CTO',
    date: '2024-03-20',
    readTime: '6 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'From Data to Decisions: The Power of HR Analytics',
    excerpt: "After years in both HR and tech, I've seen firsthand how data-driven insights can transform organizational decision-making. Let's explore how we're making this accessible to all HR teams.",
    author: 'Nick Plumb',
    role: 'Founder & CTO',
    date: '2024-03-15',
    readTime: '7 min read',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'The Evolution of Employee Engagement: AI-Powered Insights',
    excerpt: "Traditional engagement surveys are becoming obsolete. Here's how we're using AI to provide real-time, actionable insights into employee satisfaction and engagement.",
    author: 'Nick Plumb',
    role: 'Founder & CTO',
    date: '2024-03-10',
    readTime: '5 min read',
    category: 'Employee Experience',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Why I Started PlumbLine HR: A Vision for the Future of Work',
    excerpt: "The story behind how my experience in both HR and technology led to creating a platform that combines the best of both worlds.",
    author: 'Nick Plumb',
    role: 'Founder & CTO',
    date: '2024-03-05',
    readTime: '4 min read',
    category: 'Company',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60'
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Insights & Updates</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Thoughts on AI, HR technology, and the future of work from our team
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-primary font-semibold">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors">
                  <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.role}</p>
                  </div>
                  <div className="ml-auto text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/blog/archive"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </div>
  );
} 