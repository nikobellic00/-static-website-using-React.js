
import 'bulma/css/bulma.css'
import Profilecard from './components/Profilecard';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';
function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'> Popular virtual assistants </p>
           </div>
      </section>

      <div className="container">
      <section className='section'>
      <div className="columns">
      <div className="column is-3">
  <Profilecard title="Alexa" handle="@Alexa99" image={AlexaImage} 
  content="Alexa is Amazon’s interactive voice assistant that can do just about everything. Whether you want to check your calendar or launch your favorite playlists."
  />
  </div>
  <div className="column is-3">
  <Profilecard title="Siri" handle="@Siri" image={SiriImage}
  content="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, tvOS, and audioOS operating systems.You can do alot of tasks with it and it is easy to use."
  />
  </div>
  <div className="column is-3">
  <Profilecard title="Cortana" handle="@Cortana99" image={CortanaImage}
  content="Cortana is a virtual assistant developed by Microsoft that uses the Bing search engine to perform tasks such as setting reminders and answering questions for the user."
  />
  </div>
    </div>

      </section>
      </div>
    </div>
  );
}

export default App;
