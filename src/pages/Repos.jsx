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
            image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            title="Sample Repository"
            description="A showcase repository demonstrating modern web development practices with React, TypeScript, and advanced animations."
            link="https://github.com/MarkyMark1000/sample-repo"
            delay={0}
          />
        </div>

        {/* Call to Action */}
        <ViewMyRepos />
      </div>
    </div>
  );
};

export default Repos;