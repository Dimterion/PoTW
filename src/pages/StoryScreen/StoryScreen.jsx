import { Link } from "react-router-dom";
import storyScreenHeaderImg from "../../assets/storyScreenHeaderImg.jpg";
import Footer from "../../components/Footer/Footer";
import "./storyScreen.css";

function StoryScreen() {
  return (
    <div className="storyScreen-container">
      <img
        className="storyScreen-headerImg"
        src={storyScreenHeaderImg}
        alt="Futuristic skyscrapers"
      />
      <div className="storyScreen-textContainer">
        <h2>The story so far...</h2>
        <p className="storyScreen-text">
          In the distant future Earth's surface got fully toxic. The air became
          completely unbreathable. In a final desperate attempt to survive
          humans built lifescrapers - giant structures going high into the sky,
          the only place where it was still possible to live. They call them
          towers. The last attempt to save mankind which is fading away with
          each passing day.
          <br></br>
          <br></br>
          Money and power are the two factors that define your fate in the
          tower. The more you have, the higher level of the lifescraper you can
          reach, increasing your chance for a longer life. The closer you are to
          the surface, the faster you die.
          <br></br>
          <br></br>
          Slowly but surely the level of pollution and toxins is growing and
          getting up. One day it will finally reach the top levels of the
          highest towers.
          <br></br>
          <br></br>
          Lifescrapers are not big enough to handle the birth rate, thus it’s
          heavily regulated. Movement between the towers is almost impossible.
          Only the richest ones have a chance to travel and visit other
          structures.
          <br></br>
          <br></br>
          Each tower is a separate state while all of them are being ruled by
          the Builders Council. Its members developed and constructed all of
          them long ago. Their dynasties define humans' fate since then. They
          occupy the top level of the main lifescraper called the Pillar.
          <br></br>
          <br></br>
          Not having enough space, jobs and money in the real world, humans
          spent most of the time in the virtual one. It’s a global network
          called zerOne, a virtual representation of the tower you live in. It
          provides more space but is still restricted in terms of getting higher
          or lower. Your financial situation is the main factor that can remove
          some of the restrictions. Connections with other towers are blocked,
          although there are some ways to bypass it.
          <br></br>
          <br></br>
          At the time not long before the towers era, most of the humans’ jobs
          had been replaced by the machines and artificial intelligence. Not
          having a lot of other options, the majority of the Earth’s population
          became coders. The profession became so popular that it led to almost
          full replacement of all other types of activities. Coders call
          themselves writers based on what they do day after day.
          <br></br>
          <br></br>
          Manual labor had ceased to exist. Builders Council controls the
          production of the machines and AI development. Writers form guilds
          that compete for each sector where their skills are still being used.
          Coders manage machines work, fix bugs, develop new features and
          compete with AI, endlessly trying to prove that they are worth it.
          However, the demand for them is significantly less than the population
          supply. Every writers’ guild is always fully staffed, and within them
          only the best ones manage to stay and continue working there.
          <br></br>
          <br></br>
          Those who were not able to join the guilds search for any other source
          of income in zerOne. The most popular ones are Writers Fights, arenas
          where coders create and control artificial characters during the
          match. These characters fight each other in a special virtual space.
          Participants call themselves poets: for the majority every fight is
          the final frontier between the lower and higher tower’s levels. They
          call it the Last Song: the fight after each you either go down or rise
          up.
        </p>
        <h3>This is the world you’re living in…</h3>
        <Link className="storyScreen-link" to="/game">
          {">>>"} Jump in
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default StoryScreen;
