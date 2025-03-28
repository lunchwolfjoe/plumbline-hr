import Image from 'next/image';

const jobPostings = [
  {
    title: 'Senior Machine Learning Engineer',
    department: 'AI & Analytics',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: `Join our AI team to build next-generation HR analytics solutions. We're looking for someone who can:
    • Develop and deploy ML models for employee engagement prediction
    • Build automated resume screening systems
    • Create intelligent performance review analysis tools
    • Work with large-scale HR datasets
    • Collaborate with product teams to integrate AI features`,
    requirements: [
      '5+ years of ML/AI experience',
      'Strong Python skills (PyTorch, TensorFlow)',
      'Experience with NLP and recommendation systems',
      'PhD in CS, ML, or related field preferred',
      'Experience with HR/People Analytics a plus'
    ],
    postedDate: '2024-03-25'
  },
  {
    title: 'AI Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: `Lead the development of our AI-powered HR products. You'll:
    • Define product strategy for AI features
    • Work with engineering teams on ML model requirements
    • Conduct user research with HR professionals
    • Create product roadmaps for AI capabilities
    • Drive adoption of AI features in HR workflows`,
    requirements: [
      '3+ years of product management experience',
      'Experience with AI/ML products',
      'Strong understanding of HR processes',
      'Excellent communication skills',
      'Technical background preferred'
    ],
    postedDate: '2024-03-24'
  },
  {
    title: 'Data Scientist - HR Analytics',
    department: 'AI & Analytics',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: `Help us transform HR data into actionable insights. You'll:
    • Build predictive models for employee retention
    • Analyze workforce trends and patterns
    • Create data visualizations for HR metrics
    • Develop automated reporting systems
    • Work with large HR datasets`,
    requirements: [
      '3+ years of data science experience',
      'Strong Python/R skills',
      'Experience with HR data analysis',
      'Knowledge of statistical modeling',
      'Experience with visualization tools'
    ],
    postedDate: '2024-03-23'
  }
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          We're building the future of HR with AI and machine learning. Join us in transforming how companies manage their most valuable asset - their people.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Why PlumbLine HR?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cutting-edge AI/ML technology</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Competitive salary & equity</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Remote-first culture</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Health & wellness benefits</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Learning & development budget</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Innovation through AI</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Data-driven decisions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Human-centric approach</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Continuous learning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          {jobPostings.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <a
                  href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Apply Now
                </a>
              </div>
              <div className="prose max-w-none mb-6">
                <p className="text-gray-600">{job.description}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Posted: {new Date(job.postedDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 