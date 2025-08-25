import React from 'react';
import PageTitle from '../components/PageTitle';
import PageSubTitle from '../components/PageSubTitle';
import ViewMyRepos from '../components/ViewMyRepos';
import CardRepo from '../components/CardRepo';

const Repos = () => {
  return (
    <div className="min-h-screen bg-indigo-50 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <PageTitle title="Welcome to MarkyMark1000" />
        <PageSubTitle subtitle="Explore my projects, code repositories, and development journey." />

        {/* Repository Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          <CardRepo
            image="/images/repos/MarkyMark1000.jpg"
            title="MarkyMark1000"
            description="My personal github website showcasing repositories, skills, and my development journey. Built with react, tailwind, html and css."
            link="https://github.com/MarkyMark1000/MarkyMark1000.github.io"
            delay={0}
          />
          
          <CardRepo
            image="/images/repos/unix_helper.jpg"
            title="Unix Helper Scripts"
            description="A collection of useful Unix/Linux helper scripts to simplify development and workflow automation."
            link="https://github.com/MarkyMark1000/bin"
            delay={200}
          />
        </div>

        {/* Call to Action */}
        <ViewMyRepos />
      </div>
    </div>
  );
};

export default Repos;