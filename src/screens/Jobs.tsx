import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Filter, Search } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface Job {
  id: number;
  title: string;
  employer: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  skills: string[];
  postedDate: string;
}

export const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedSkill, setSelectedSkill] = useState('All');

  const skills = ['All', 'Cooking', 'Stitching', 'Crafts', 'Teaching', 'Digital Work'];

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Home Cook',
      employer: 'Singh Family',
      location: 'Patna, Bihar',
      type: 'Part-time',
      salary: '₹8,000/month',
      description: 'Looking for someone to cook traditional meals for family of 4. Morning shift only.',
      skills: ['Cooking'],
      postedDate: '2 days ago',
    },
    {
      id: 2,
      title: 'Stitching Instructor',
      employer: 'Community Center NGO',
      location: 'Ranchi, Jharkhand',
      type: 'Full-time',
      salary: '₹12,000/month',
      description: 'Teach basic stitching and tailoring to groups of 10-15 women. Experience required.',
      skills: ['Teaching', 'Stitching'],
      postedDate: '1 week ago',
    },
    {
      id: 3,
      title: 'Craft Items Production',
      employer: 'Artisan Collective',
      location: 'Remote',
      type: 'Freelance',
      salary: '₹15-20/piece',
      description: 'Create handmade craft items from home. We provide materials and training.',
      skills: ['Crafts'],
      postedDate: '3 days ago',
    },
    {
      id: 4,
      title: 'Data Entry Operator',
      employer: 'Local Business',
      location: 'Muzaffarpur, Bihar',
      type: 'Part-time',
      salary: '₹6,000/month',
      description: 'Enter customer data into computer system. Basic computer knowledge required.',
      skills: ['Digital Work'],
      postedDate: '5 days ago',
    },
    {
      id: 5,
      title: 'Embroidery Work',
      employer: 'Textile Company',
      location: 'Varanasi, UP',
      type: 'Freelance',
      salary: '₹200-300/day',
      description: 'Traditional embroidery work on sarees and dress materials. Work from home available.',
      skills: ['Stitching'],
      postedDate: '1 day ago',
    },
    {
      id: 6,
      title: 'Catering Helper',
      employer: 'Event Management',
      location: 'Gaya, Bihar',
      type: 'Part-time',
      salary: '₹500/day',
      description: 'Help with food preparation and serving at events. Flexible schedule.',
      skills: ['Cooking'],
      postedDate: '4 days ago',
    },
  ];

  const filteredJobs =
    selectedSkill === 'All'
      ? jobs
      : jobs.filter((job) => job.skills.includes(selectedSkill));

  if (selectedJob) {
    return (
      <div className="min-h-screen bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Button variant="outline" onClick={() => setSelectedJob(null)} className="mb-4">
            ← Back to Jobs
          </Button>

          <Card>
            <div className="border-b pb-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedJob.title}</h2>
                  <p className="text-xl text-[#A78BFA] font-semibold mb-4">{selectedJob.employer}</p>

                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span>{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} />
                      <span>{selectedJob.salary}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button size="lg">Apply Now</Button>
                  <Button variant="outline" size="lg">Save Job</Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F5F3FF] text-[#A78BFA] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Job Description</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{selectedJob.description}</p>

              <div className="bg-[#F5F3FF] rounded-2xl p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA] mt-1">•</span>
                    <span>Must have relevant experience in the field</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA] mt-1">•</span>
                    <span>Good communication skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA] mt-1">•</span>
                    <span>Reliable and punctual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A78BFA] mt-1">•</span>
                    <span>Willing to learn and adapt</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFF7ED] rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-1">✓</span>
                    <span>Flexible working hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-1">✓</span>
                    <span>Safe working environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-1">✓</span>
                    <span>Timely payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-1">✓</span>
                    <span>Training provided if needed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Apply</h3>
              <p className="text-gray-600 mb-4">
                Click the "Apply Now" button to send your application. You'll be connected with the employer through our
                secure messaging system.
              </p>
              <div className="flex gap-3">
                <Button size="lg">Apply Now</Button>
                <Button variant="outline" size="lg">Contact Employer</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Work</h1>
          <p className="text-gray-600">Discover job opportunities that match your skills</p>
        </div>

        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <MapPin size={18} />
                Location
              </Button>
              <Button variant="outline">
                <Filter size={18} />
                Filters
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                skill === selectedSkill
                  ? 'bg-[#A78BFA] text-white'
                  : 'bg-white text-gray-600 hover:bg-[#F5F3FF]'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} hover onClick={() => setSelectedJob(job)}>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
                      <p className="text-[#A78BFA] font-medium">{job.employer}</p>
                    </div>
                    <span className="text-sm text-gray-500">{job.postedDate}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#F5F3FF] text-[#A78BFA] rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-2">
                  <Button size="sm" fullWidth>Apply</Button>
                  <Button variant="outline" size="sm" fullWidth>Save</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
