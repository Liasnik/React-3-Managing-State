import { useState } from 'react';

export default function Accordion1() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div  onClick={() => setActiveIndex(null)} className='accordion'>
     <h3>Kyiv, Ukraine</h3>
      <Panel
      title="About" 
      isActive={activeIndex === 0}
      onShow={e => {e.stopPropagation()
         setActiveIndex(0)} }
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel 
      title="Etymology" 
      isActive={activeIndex === 1}
      onShow={e => {e.stopPropagation(); setActiveIndex(1)}} 
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
      <Panel 
      title="Symorody" 
      isActive={activeIndex === 2}
      onShow={e => {e.stopPropagation(); setActiveIndex(2)}}  
      >
        A name comes from <span lang="kk-KZ">Jgмma</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}

function Panel({ title, children, onShow, isActive }) { 
  return (
    <section className="panel" >
      {isActive ? (
        <div className="open">
        <h3 >{title}</h3>
        <p>{children}</p>
        </div>
      ) : (
        <h3 onClick={onShow} className="close" >{title}</h3>
      )}
    </section>
  );
}