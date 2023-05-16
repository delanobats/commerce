import Head from 'next/head';
import { useUI } from '../contexts/managed-ui';
import { BasicButton } from '../components/button/BasicButton';

export default function Team() {
  const { openModal, setModalView, setModalDescription } = useUI();

  const openMemberDescription = (description) => {
    // setModalView('TEAM');
    // setModalDescription(description);
    // openModal();
    console.log('open up team member description');
  };

  const team = [
    {
      firstname: 'Peter',
      lastname: 'Kruse',
      job: 'Founder, Chief Technology Officer',
      image: '/team/peter.webp',
      description: '',
    },
    {
      firstname: 'Logan',
      lastname: 'Benda',
      job: 'Founder, Chief Executive Officer',
      image: '/team/logan.webp',
      description: `
      <p>
      Logan partnered with Peter in 2018 to explore ways to make a wood baseball bat perform better.  His goal, which has become the company mantra, is that every player has the opportunity to experience the past and future of the game of baseball at the plate without sacrificing performance.
      </p>
      <p>
      Logan, an electrical engineer and Officer in the United States Army National Guard, has had a career leading teams - either to develop new technologies for the power sports & HVAC industries, or as Commanding Officer for the F Co 1-189th GSAB Air Traffic Services company out of Camp Ripley, MN.  Thank you for your service, Logan.
      </p>
      <p>
      Along with experience and leadership, Logan brings to the team his desire to build & deliver the BEST possible product.  He will not rest until he’s confident that no stone is left unturned in order to provide the highest performance and continual optimization.
      </p>
      <p>
      Logan has fond memories of baseball - playing as a kid and reaching the Section Finals in High School as well as watching his brother’s team place 3rd in the MN State Tournament.
      </p>
      <p>
      His favorite hot dog topping is Icelandic style (??!!)  Look it up, you’ll be glad you did.  And a little fun fact - Logan has been able to ride a unicycle since 2nd grade (even while eating a hot dog).
      </p>
      `,
    },
    {
      firstname: 'Steve',
      lastname: 'Benda',
      job: 'Founder, Director of Manufacturing',
      image: '/team/steve.webp',
      description: '',
    },
    {
      firstname: 'Adam',
      lastname: 'Loukus',
      job: 'Founder, Director of Engineering',
      image: '/team/adam.webp',
      description: '',
    },
    {
      firstname: 'Michael & Kathy',
      lastname: 'Sonier',
      job: ' Founder, Strategic Advisor, and  Chief Marketing Officer',
      image: '/team/sonier.webp',
      description: '',
    },
  ];
  return (
    <>
      <Head>
        <title>Delano Bats - Team</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="ARKH" key="title" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.webp" />
      </Head>
      <div className="min-h-[calc(100vh-60px)] w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden">
          <div className="absolute top-0 z-[0] min-w-[100%] h-[100%]">
            <img
              src="/team.webp"
              className="object-cover object-center w-[100%] h-[100%]"
              alt="hero background"
            />
          </div>
          <div className="z-[1] text-heading-lg h-[400px] w-[100%] bg-hero-bg flex items-center justify-center text-white-500">
            <div className="flex flex-col items-center py-2">
              <h1 className="text-center text-heading-sm sm:text-heading-md md:text-heading-lg font-sans md:pb-2 leading-[3rem]">
                <span className="font-sans text-heading-lg font-bold">
                  Meet <span className="font-cursive">the</span> Team
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] flex justify-center pt-12 pb-28">
          <div className="flex flex-wrap flex-row justify-start w-[100%]">
            {team.map((member, index) => {
              return (
                <div
                  className="flex flex-col flex-start text-left w-[100%] m-4 md:w-[45%] xl:w-[31%] space-y-4 box-shadow--4 rounded-lg overflow-hidden hover:cursor-pointer"
                  key={index}
                  onClick={() => openMemberDescription(member.description)}
                >
                  <div className="relative w-[100%] lg:h-[270px]">
                    <img
                      src={member.image}
                      className="object-cover object-center w-[100%] h-[100%]"
                      alt="Hitting surface"
                    />
                    <div></div>
                  </div>
                  <div className="flex flex-col items-center px-4 pb-4 pt-0 text-center text-blue-900">
                    <p className="text-heading-lg font-semibold leading-10">
                      {member.firstname}{' '}
                      <span className="font-cursive text-orange-500">{member.lastname}</span>
                    </p>
                    <p className="text-body-lg font-thin leading-7 py-2">{member.job}</p>
                    {/* <BasicButton label="View my bio" size="medium" /> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
