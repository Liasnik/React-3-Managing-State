import DestroysItsState from "./4.1DestroysItsState "
import SaveStateInParent from "./4.1Save state in parent"
import SamePosPreservesState from "./4.2Same position preserves state "
import DifferentСomponents from "./4.3.1Different components at the same position"
import DifferentTags from "./4.3.2Different Tags"
import Scoreboard from "./4.4Scoreboard "
import Messenger from "./4.5_Messenger"
import SaveStateRemovedComponents from "./4.6SaveStateRemovedComponents"


export default function PresAndResgState() {
    return (
        <div>          
        <div className='PresAndResState'>
            <div>
            <DestroysItsState/>
            <SaveStateInParent/>
            </div>
            <div>
                <SamePosPreservesState/>
            </div>
        </div >
            
            <div className='PresAndResState'>
                <div style={{width: '600px'}}>
                  <h2>3. Различные компоненты в одном и том же положении сбрасывают состояние</h2>
                  <p><b>Когда вы визуализируете другой компонент в той же позиции, он сбрасывает состояние всего его поддерева.</b> Чтобы увидеть, как это работает, увеличьте счетчик и установите флажок:</p>
                    <div style={{display: 'flex', margin: '10px'}}>
                        <DifferentСomponents/>
                        <DifferentTags/>
                    </div>
                    <p>Здесь в первом примере мы переключаемся между различными типами компонентов в одной и той же позиции. Первоначально первый дочерний элемент содержал 'div' файл Counter. Но когда мы заменили его на тег 'p', React удалил его Counter из дерева пользовательского интерфейса и уничтожил его состояние.</p>
                    <p>Во втором примере состояние счетчика тоже сбрасывается при установке флажка. Хотя вы визуализируете Counter, первый дочерний элемент изменяется с 'div' на 'section'. Когда дочерний элемент 'div' был удален из DOM, все дерево под ним (включая Counter и его состояние) также было уничтожено.</p>
                    <p>Как правило, <b>если вы хотите сохранить состояние между повторными рендерингами, структура вашего дерева должна «соответствовать» </b> от одного рендеринга к другому. Если структура отличается, состояние уничтожается, потому что React уничтожает состояние, когда удаляет компонент из дерева.</p>
                </div>
                <Scoreboard/>
            </div>
            <div className='PresAndResState'>
                <Messenger/>
                <SaveStateRemovedComponents/>
        </div >
        </div>
    )
}