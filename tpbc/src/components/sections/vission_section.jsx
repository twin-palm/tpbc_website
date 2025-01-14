import React from 'react';

const VisionSection = () => {
  return (
    <div className="relative bg-purple-700 border-0 min-h-screen overflow-hidden">
      {/* Diagonal white overlay */}
      <div 
        className="absolute right-0 top-0 w-full sm:w-1/2 lg:w-1/3 h-full bg-white hidden sm:block" 
        style={{
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Our Vision</h2>
            <div className="space-y-4 text-base sm:text-lg">
              <p>
                Our vision at Twin Palm Baptist Church is to be a beacon of hope 
                and transformation in our community, reflecting the love of Christ 
                in all that we do. We aspire to be a church where people from all 
                walks of life can encounter God, experience genuine community, and 
                be equipped to fulfill their God-given purpose.
              </p>
              <p>
                Whether you're exploring faith for the first time or seeking a 
                spiritual home where you can grow and serve, we invite you to join 
                us on this journey of faith. Together, let's discover the abundant 
                life found in Jesus Christ and share His love with the world.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src=""
                alt="Children and teachers in a classroom setting"
                className="w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
