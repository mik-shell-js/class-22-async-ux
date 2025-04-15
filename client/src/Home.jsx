import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card';
import Button from './components/Button';
import Spinner from './components/Spinner';
import Alert from './components/Alert';

export default function Home() {

  const [spaceData, setSpaceData] = useState([]);

  function loadSpaceData() {
    axios.get('/api/space')
      .then((response) => {
        setSpaceData(response.data);
      })
  }

  return (
    <main className="p-4 space-y-2">
      {/* error */}
      {false &&
        <Alert type='danger'>
          <div className="flex w-full items-center">
            <span className="flex-grow">There was a problem loading the data. Try reloading the data.</span>
            <Button>
              Reload
            </Button>
          </div>
        </Alert>}

      {/* loading */}
      {false &&
        <div className="flex justify-center items-center h-[80vh]">
          <Spinner size="large" />
        </div>}

      <div className="flex flex-wrap gap-4">
        {spaceData.map((item) => (
          <Card
            key={item._id}
            title={item.name}
            imgUri={item.imageUri}
          >
            {item.description}
          </Card>
        ))}
      </div>
    </main>
  );
}
