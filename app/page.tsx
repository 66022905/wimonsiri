import Head from 'next/head';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Professional Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-gray-800 text-white shadow p-4">
        <h1 className="text-3xl font-bold text-center uppercase tracking-wide">
          Resume
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Profile Section */}
        <section className="bg-white border border-gray-400 p-6 rounded-lg shadow mb-6 flex flex-col items-center text-center">
        <Image
           src="/bell.webp" // รูปจะถูกค้นหาในโฟลเดอร์ public
           alt="Profile Picture"
           width={130} 
           height={130} 
          className="rounded-full mb-4 border-4 border-gray-500"
           />

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Wimonsiri Deesan
          </h2>
          <p className="text-lg text-gray-600">
            Hello! I am <strong>Wimonsiri Deesan</strong>, I’m passionate about learning new things
            and embracing challenges at work. I enjoy developing myself and expanding my skills,
            especially with new technologies and modern work practices. I believe that taking on
            new roles helps me grow professionally and provides valuable opportunities to learn
            from real experiences, allowing me to create meaningful work.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-white border border-gray-400 p-6 rounded-lg shadow mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>JavaScript, CSS</li>
            <li>Next.js, TailwindCSS</li>
            <li>Figma</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="bg-white border border-gray-400 p-6 rounded-lg shadow mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Projects</h2>
          <div>
            <h3 className="text-lg font-medium text-gray-700">UP TALK</h3>
            <p>
              Design UI for the UP Talk website [
              <a
                href="https://www.figma.com/design/EJYu3eUF2BW1zP9lpoFjMx/Figma-17?node-id=22-2&node-type=canvas&t=tqy5I4maxqJtnByg-0"
                className="text-gray-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              ]
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white border border-gray-400 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact</h2>
          <p>
            Email:{' '}
            <a href="mailto:66022905@up.ac.th" className="text-gray-800 underline">
              66022905@up.ac.th
            </a>
          </p>
          <p>Phone: 0947945817</p>
          <p>
            Facebook:{' '}
            <a
              href="https://www.facebook.com/wimonsiri.ball/"
              className="text-gray-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Profile
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4">
        <p className="text-gray-400">
          &copy; 2024 Wimonsiri Deesan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;