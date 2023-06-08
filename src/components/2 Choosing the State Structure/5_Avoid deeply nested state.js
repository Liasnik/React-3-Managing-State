import { useState } from 'react';
import { useImmer } from 'use-immer';
import { initialTravelPlan } from './5_1_initialTravelPlan.js';

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place // Создаем новую версию родительского места
    // that doesn't include this child ID. // которая не включает этот дочерний ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId)
    };
    // Update the root state object... (Обновляем объект карневого состояния...)
    setPlan({
      ...plan,
     // ...so that it has the updated parent. // ...чтобы у него был обновлённый родитель.
      [parentId]: nextParent
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <> 
    <div>
      <h2><i>5. Avoid deeply nested state  </i></h2>
      <h2><i>Избегайте глубоко вложенных состояний</i></h2>
      <h3>Places to visit:</h3>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </div>
    <TravelPlanImmer2/>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      <input type='checkbox'/>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>

      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

// С имером и с удалением всего лишнего:

function TravelPlanImmer2() {
  const [plan, updatePlan] = useImmer(initialTravelPlan);

  function handleComplete(parentId, childId) {
    updatePlan(draft => {
      // Remove from the parent place's child IDs.
      const parent = draft[parentId];
      parent.childIds = parent.childIds.filter(id => id !== childId);

      // Forget this place and all its subtree.
      deleteAllChildren(childId);
      
      function deleteAllChildren(id) {
        const place = draft[id];
        place.childIds.forEach(deleteAllChildren);
        delete draft[id];
      }
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <div>
      <h3>Places to visit:</h3>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </div>
  );
}

// function PlaceTree2({ id, parentId, placesById, onComplete }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button onClick={() => {
//         onComplete(parentId, id);
//       }}>
//         Complete
//       </button>
//       {childIds.length > 0 &&
//         <ol>
//           {childIds.map(childId => 
//             <PlaceTree2
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           )}
//         </ol>
//       }
//     </li>
//   );
// }




// export default function TravelPlan() {
//     const [plan, setPlan] = useState(initialTravelPlan);
//     const planets = plan.childPlaces;
//     return (
//       <div>
//         <ol>
//           {planets.map(place => (
//             <PlaceTree key={place.id} place={place} />
//           ))}
//         </ol>
//       </div>
//     );
//   }

// function PlaceTree({ place }) {
//   const childPlaces = place.childPlaces;
//   return (
//     <li>
//       {place.title}
//       {childPlaces.length > 0 && (
//         <ol>
//           {childPlaces.map(place => (
//             <PlaceTree key={place.id} place={place} />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

