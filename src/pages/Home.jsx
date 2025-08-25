import React from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import PageSubTitle from '../components/PageSubTitle';
import ViewMyRepos from '../components/ViewMyRepos';

const Home = () => {
  return (
    <div className="min-h-screen bg-indigo-50 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <PageTitle title="Welcome to MarkyMark1000" />
        <PageSubTitle subtitle="Explore my projects, code repositories, and development journey." />

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* About Card */}
          <Card
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            }
            title="About Me"
            delay={0}
          >
            <p>Software engineer with a strong foundation in maths and physics, experienced in Python and Flask for backend development, and passionate about frontend technologies like Vue 3, React, HTML, and CSS. Also brings a background in finance with expertise in option pricing models.</p>
          </Card>

          {/* Education Card */}
          <Card
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            }
            title="Education"
            delay={200}
          >
            <ul className="space-y-1 text-left">
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-sm">•</span>
                <span>Physics - Imperial College London</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-sm">•</span>
                <span>Mathematical Trading and Finance - Bayes Business School</span>
              </li>
            </ul>
          </Card>

          {/* Skills Card */}
          <Card
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,5V9H15V5H9M9,19H15V15H9V19M9,14H15V10H9V14M4,9V5H8V9H4M4,19H8V15H4V19M4,14H8V10H4V14M16,5V9H20V5H16M16,19H20V15H16V19M16,14H20V10H16V14Z"/>
              </svg>
            }
            title="Skills"
            delay={400}
          >
            <p>Python, SQL, SQLAlchemy, Flask, Pandas, Numpy, FastAPI, Django, Docker, AWS, Vue3, React, JavaScript, HTML, CSS</p>
          </Card>
        </div>

        {/* Call to Action */}
        <ViewMyRepos delay={600} />
      </div>
    </div>
  );
};

export default Home;
