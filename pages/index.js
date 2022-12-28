import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {

  const events = getFeaturedEvents();

  return (
    <div>
      <EventList items={events}/>
    </div>
  );
}

export default HomePage;