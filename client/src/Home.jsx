import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card';
import Button from './components/Button';
import Spinner from './components/Spinner';
import Alert from './components/Alert';

export default function Home() {

  const [spaceData, setSpaceData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [dataError, setDataError] = useState();


  function loadSpaceData() {
    setIsLoadingData(true);
    setDataError(undefined);

    axios.get('/api/space')
      .then((response) => {
        setSpaceData(response.data);
      })
      .catch((error) => {
        setDataError(error);
      })
      .finally(() => {
        setIsLoadingData(false);
      })
  }

  useEffect(() => {
    loadSpaceData()
  }, []);

  return (
    <main className="p-4 space-y-2">
      {/* error */}
      {dataError &&
        <Alert type='danger'>
          <div className="flex w-full items-center">
            <span className="flex-grow">There was a problem loading the data. Try reloading the data.</span>
            <Button onClick={loadSpaceData}>
              Reload
            </Button>
          </div>
        </Alert>}

      {/* loading */}
      {isLoadingData &&
        <div className="flex justify-center items-center h-[80vh]">
          <Spinner size="large" />
        </div>}

      {(!isLoadingData && !dataError) &&
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
      }
    </main>
  );
}
