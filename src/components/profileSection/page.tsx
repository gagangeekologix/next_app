import Image from 'next/image';

const ProfileSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-700 transition-colors duration-300">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <Image 
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxLzI3OS1wYWkxNTc5LW5hbS1qb2IxNTI5LnBuZw.png" 
          alt="Profile Image" 
          width={400} 
          height={400} 
          className="rounded-full border-4 border-yellow-400"
        />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold text-yellow-50 mb-2 hover:text-blue-400 transition-colors duration-300">Hello!</h1>
        <h2 className="text-2xl font-semibold mb-1">My Name is Gagan</h2> 
        <h3 className="text-xl text-gray-300">Software Developer</h3>
      </div>
    </div>
  );
};

export default ProfileSection;
