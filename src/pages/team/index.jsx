import Head from 'next/head';
import { useUI } from '../../contexts/managed-ui';

export const team = [
  {
    firstname: 'Peter',
    lastname: 'Kruse',
    job: 'Founder, Chief Technology Officer',
    image: '/team/peter.webp',
    description: `
    <p>
    Peter and his brother, Andrew (also pictured), made a lathe and got started first with Pine bats, then later, after they bought their first “real” lathe, moved to Ash.
    </p>
    <p>
    They continued to learn, improve product and process and sell bats together until 2019 when Andrew went to the Air Force Academy (where he also played ice hockey), and Peter started to play around with a carbon fiber concept while he was studying Mechanical engineering in college.  Thinking the future of bat technology was more than just wood, Peter joined forces with Logan, Steve and Adam to continue to explore his idea.  He then he sold the assets of the original Delano Bats in the Spring of 2022 to focus on that high tech new vision.
    </p>
    <p>
    Peter not only brings his knowledge of bat design and manufacturing to the team, but he has up-close experience with customer needs and desires for baseball bats. He has spoken to so many dads who loved playing with wood bats growing up, but they weren’t interested in buying wood for their kids because the performance isn’t as good as a metal bat. He (and all of us at Delano) believes that it is possible to make a bat that would have the cool-factor of wood with the performance that all kids want. The result of this belief is the FZN Series of bats.  
    </p>
    <p>
    One of Peter’s best baseball memories is his 9th grade Fall-ball year, where he had a career-hitting season using a 33-inch Ash bat that he had himself cut by hand. That bat model eventually became Delano Bats Model 101.  A fun-fact about Peter is that he can hit the highest catcher pop-ups you’ll ever see. Peter is motivated by the opportunities & possibilities of the future.  He believes life is for living and experiencing all it has to offer, except for hot dog toppings. Mustard-only, please for Peter.
    </p>`,
    url: '/peter',
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
    url: '/logan',
  },
  {
    firstname: 'Steve',
    lastname: 'Benda',
    job: 'Founder, Director of Manufacturing',
    image: '/team/steve.webp',
    description: `
    <p>
    Steve got involved with Delano when he started to mentor Peter and help him work through early challenges with his wood bat manufacturing process.  Steve brings an engineering background and extensive experience with Total Quality Management (TQM) and process design with a 40+ year career spanning numerous industries.  Steve is currently acting as advisor & consultant for 5 different businesses and holds over 50 patents in the US and Internationally.  
    </p>
    <p>
    Steve worked with Peter to develop solutions to bat warpage and moisture controls and brings his commitment to quality to the team.  He’s always repping with continual thoughts around product design (and a dream for a drill press in his kitchen).  He is energized by the prospects of the new bat technology and is excited to be involved in his 4th start-up enterprise. 
    </p>
    <p>
    In addition to his technical experience, Steve brings baseball passion to the team and fondly remembers his kids playing baseball/softball through High School.  In one such memory, he heard his 2 sons say as they rounded the bases in the front yard, “I’ll be Kirby” and “I’ll be Puckett”.  #Twinsfans 
    </p>
    <p>
    Steve enjoys “the works” on his hot dog, and was the one who taught Logan, the CEO (and Logan’s siblings) how to ride a unicycle. Baseball is a #familyaffair
    </p>`,
    url: '/steve',
  },
  {
    firstname: 'Adam',
    lastname: 'Loukus',
    job: 'Founder, Director of Engineering',
    image: '/team/adam.webp',
    description: `
    <p>
    Adam became introduced to Delano a few years ago when Delano Bats sponsored a local team in the Upper Peninsula of Michigan with some wood bats. Adam joined the engineering team at Delano Bats in early 2019 once he heard about the FZN concept.    
    </p>
    <p>
    Adam has a PhD in engineering mechanics with a specialty in metallurgy, and his knowledge and expertise in both materials and processes are critical to the development and success of the patented new technology behind the FZN Series. He and the engineering team continue to perfect the FZN core plus the necessary manufacturing means to enable a full scale sales effort.
    </p>
    <p>
    In addition to his work with Delano, Adam holds 15 patents and has founded and run two businesses focused on solving problems through engineering and technology.  He’s been exposed to the culture of leveraging inspiration and perspiration since childhood and brings that passion along with a drive to develop tailored materials technologies and processes to the team.  
    </p>
    <p>
    Adam is also an Adjunct Professor at Michigan Technological University and has traveled the globe sharing his engineering knowledge at trade shows, training and presentations.  An active board and community group member,  Adam enjoys coaching his younger son’s baseball team, while his older son plays Major Junior Hockey for the Saginaw Spirit.
    </p>
    <p>
    Adam is a man of many talents, interests and mystery - we still don't know what toppings he prefers on his hot dog.
    </p>`,
    url: '/adam',
  },
  {
    firstname: 'Michael & Kathy',
    lastname: 'Sonier',
    job: ' Founder, Strategic Advisor, and  Chief Marketing Officer',
    image: '/team/sonier.webp',
    description: `
    <p>
    Michael & Kathy joined Delano Bats in October, 2022 to lean into something more entrepreneurial and passion-based.  
    </p>
    <p>
    Michael, an electrical engineer by degree, has spent the majority of his career helping start-ups accelerate growth by building and bringing new products to market.  Most of Michael's time has been in the e-commerce software space.  He is currently acting as a Strategic Advisor for the team.  Kathy has spent her career in Corporate America building and executing marketing strategies.  She will lead the efforts to build the Delano and FZN Series brands.
    </p>
    <p>
    Michael & Kathy connected with the early founders and discovered a shared passion for the FZN Series product, and everyone felt their expertise & excitement made for a strong business partnership.  The newest members of the team, they are energized by the potential of the FZN Technology and have enjoyed learning about Delano’s history and more importantly, planning for its successful future.
    </p>
    <p>
    Michael & Kathy are joined in the business by “the silent partners” - their 2 sons, who have been playing baseball since the age of 5, and who are sitting squarely in the target market.  Their hope is that the boys will enjoy learning about starting/running a business while contributing perspective from the ultimate stakeholder - the youth baseball player.
    </p>
    <p>
    While Kathy’s passion for baseball grew out of watching her boys’ love of the game, Michael’s love is much more deep-rooted.  Growing up a regular at Sunday afternoon Philadelphia Phillies’ games with his family, Michael played competitively as a D1 pitcher and followed his passion by coaching his boys and dozens of their teammates for the past 10 years.  
    </p>
    <p>
    Michael’s favorite way to enjoy a hot dog is on Dollar-dog Night at Citizens' Bank Park.  Kathy doesn’t care where, as long as the dog is covered in ‘kraut, raw onions and spicy mustard.
    </p>
    <p>
    Baseball is a strong family tradition that started when Michael was young, and now with their partnership in Delano, will continue for another generation of Soniers.
    </p>`,
    url: '/sonier',
  },
];

export default function Team() {
  const { openModal, setModalView, setModalDescription } = useUI();

  const openMemberDescription = (description) => {
    // setModalView('TEAM');
    // setModalDescription(description);
    // openModal();
    console.log('open up team member description');
  };

  return (
    <>
      <Head>
        <title>Team - Delano Bats</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Delano Bats" key="title" />
        <meta
          name="description"
          content="We hope it’s the beginning of a long partnership of providing great products and lasting
            success and memories on the diamond. Learn more about our team!"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/db.svg" />
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
                  Meet <span className="font-cursive text-orange-500">the</span> Team
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] flex justify-center pt-12 pb-28">
          <div className="flex flex-wrap flex-row justify-start w-[100%]">
            {team.map((member, index) => {
              return (
                <a
                  className="flex flex-col flex-start text-left w-[100%] m-4 md:w-[45%] xl:w-[31%] space-y-4 box-shadow--4 rounded-lg overflow-hidden hover:cursor-pointer"
                  key={index}
                  href={'/team' + member.url}
                >
                  <div className="relative w-[100%] lg:h-[270px]">
                    <img
                      src={member.image}
                      className="object-cover object-center w-[100%] h-[100%]"
                      alt="team member"
                    />
                  </div>
                  <div className="flex flex-col items-center px-4 pb-4 pt-0 text-center text-blue-900">
                    <p className="text-heading-lg font-semibold leading-10">
                      {member.firstname}{' '}
                      <span className="font-cursive text-orange-500">{member.lastname}</span>
                    </p>
                    <p className="text-body-lg font-thin leading-7 py-2">{member.job}</p>
                    <button className="text-orange-600 text-body-lg">Learn more</button>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
