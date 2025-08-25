import React from 'react';
import PageTitle from '../components/PageTitle';
import PageSubTitle from '../components/PageSubTitle';
import ViewMyRepos from '../components/ViewMyRepos';

const Repos = () => {
  return (
    <div className="min-h-screen bg-indigo-50 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <PageTitle title="Welcome to MarkyMark1000" />
        <PageSubTitle subtitle="Explore my projects, code repositories, and development journey." />

        {/* Call to Action */}
        <ViewMyRepos />
      </div>
    </div>
  );
};

export default Repos;