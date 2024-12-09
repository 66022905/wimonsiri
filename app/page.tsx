import Head from 'next/head';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Professional Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-yellow-500 text-black shadow p-6">
        <h1 className="text-3xl font-bold text-center uppercase tracking-wide">
          Resume
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Profile */}
          <section className="bg-black border border-yellow-500 p-8 rounded-lg shadow mb-8 flex flex-col items-center text-center">
            <Image
              src="https://i.pinimg.com/736x/a8/a8/ec/a8a8ece98e49f3a7db36ed218e51a314.jpg"
              alt="Profile Picture of Wimonsiri Deesan"
              width={150}
              height={150}
              className="rounded-full mb-6 border-4 border-yellow-400"
            />
            
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              Wimonsiri Deesan
            </h2>
            <p className="text-lg text-white mb-6">
              Hello! I am <strong>Wimonsiri Deesan</strong>, passionate about learning new things
              and embracing challenges at work. I enjoy developing myself and expanding my skills,
              especially with new technologies and modern work practices. I believe that taking on
              new roles helps me grow professionally and provides valuable opportunities to learn
              from real experiences, allowing me to create meaningful work.
            </p>
            <p className="text-lg text-white">
              In my spare time, I like to explore new frameworks, work on side projects, and share
              knowledge through online platforms. I’m always open to learning from others and
              collaborating on exciting challenges.
            </p>
          </section>

          {/* Right Column: Combined Skills, Projects, Contact */}
          <section className="bg-black border border-yellow-500 p-8 rounded-lg shadow mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Skills</h2>
            <ul className="list-disc pl-6 text-lg text-white mb-8">
              <li>JavaScript, CSS</li>
              <li>TailwindCSS</li>
              <li>Figma</li>
            </ul>

            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Projects</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-yellow-300">UP TALK</h3>
              <p className="text-lg text-white mb-4">
                Designed UI for the UP Talk website. This project focused on designing an intuitive
                user interface for a web platform that helps professionals communicate better.
              </p>
              <p>
                View the project in detail on{' '}
                <a
                  href="https://www.figma.com/design/EJYu3eUF2BW1zP9lpoFjMx/Figma-17?node-id=22-2&node-type=canvas&t=tqy5I4maxqJtnByg-0"
                  className="text-yellow-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>
              </p>
            </div>

            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Contact</h2>
            <p className="text-lg text-white mb-4">
              feel free to reach out to me through the following channels:
            </p>
            <p className="text-lg text-white mb-4">
              Email:{' '}
              <a href="mailto:66022905@up.ac.th" className="text-yellow-400 underline">
                66022905@up.ac.th
              </a>
            </p>
            <p className="text-lg text-white mb-4">Phone: 0947945817</p>
            <p className="text-lg text-white">
              Facebook:{' '}
              <a
                href="https://www.facebook.com/wimonsiri.ball/"
                className="text-yellow-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Profile
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-500 text-black text-center p-8">
        <p className="text-black text-lg">
          &copy; 2024 Wimonsiri Deesan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
