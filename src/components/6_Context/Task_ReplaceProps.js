import { useState, useContext } from 'react';
import { places } from './Task_data.js';
import { getImageUrl } from './Task_utils.js';
import { SizeContext } from './Task_Context'

export default function ReplaceProps() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 250 : 100;
  return (
    <div>
      <h2>Task: Replace prop drilling with context</h2>
      <SizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
      </SizeContext.Provider>
    </div>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {

const imageSize  = useContext(SizeContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}