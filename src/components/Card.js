export default function Card( {card} ) {
  return (
    <div style={style} >
       <div >
        <span className="sp-colors-accent">
          { card.name }
        </span>
       </div>
       <div>{ card.description }</div>
   </div> 
  )
};

const style =  {
  border: '1px solid #777',
  margin: '20px'
}
