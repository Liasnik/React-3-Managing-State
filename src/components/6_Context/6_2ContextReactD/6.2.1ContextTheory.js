export default function ContextTheory() {
    return (
      <div className='dubleDiv'>
        <div style={{width: '570px'}}>
            <h2>2.1 Контекст: альтернатива передаче props.</h2>
            <p>Контекст позволяет родительскому компоненту предоставлять данные всему дереву под ним. Есть много вариантов использования контекста. Вот один пример:</p>
            <p>Допустим, мы хотм, чтобы несколько заголовков внутри одного и того же Section всегда имели одинаковый размер:</p>
            <div className='code'>
                <code>{code}</code>
            </div>
            <p>Мы передали свойство level каждому 'Heading' отдельно.</p>
            <p>А вот так будет выглядеть 'Heading' в контексте 'Section':</p>
            <div className='code'>
                <code>{code2}</code>
            </div>
            <p>Вы не можете сделать это только с props. Здесь играет роль Context. Вы сделаете это в три шага:</p>
            <h3>Step 1: Create the context </h3>
            <div className='code'>
                <code>{code3}</code>
            </div>
            <p>Единственным аргументом createContextявляется значение по умолчанию. Можно передать любое значение (даже объект).</p>
            <h3>Step 2: Use the context </h3>
            <div className='code'>
                <code>{code4}</code>
            </div>
            <p>Удалили level props и читаем значение из только что импортированного контекста LevelContext.</p>
            <h3>Шаг 3. Укажите контекст</h3>
            <p>Нужно обернуть дочерние элементы Section, в данном случае, поставщиком контекста.</p>
            <p>Если вы не предоставите контекст, React будет использовать значение по умолчанию, которое вы указали на первом шаге.</p>
            <div className='code'>
                <code>{code5}</code>
            </div>
            <p>Это говорит React: «если какой-либо компонент внутри этого 'Section' запрашивает LevelContext, дайте ему этот level». Компонент будет использовать значение ближайшего 'LevelContext.Provider' в дереве пользовательского интерфейса над ним.</p>
            <b>
                <p>Это тот же результат, что и исходный код, но вам не нужно передавать свойство level каждому Heading-компоненту! Вместо этого он «вычисляет» свой уровень заголовка, спрашивая ближайший Section выше:</p>
                <p>1. Вы передаете level props в 'Section'.</p>
                <p>2. Section оборачивает своих детей в 'LevelContext.Provider value=level'.</p>
                <p>3. Heading запрашивает ближайшее значение LevelContext выше с useContext(LevelContext).</p>
            </b>
          </div>
            
          <div style={{width: '570px', margin: '50px 0 0 10px'}}>
            <h3>Использование и предоставление контекста из одного и того же компонента</h3>
            <p>В настоящее время вам все еще нужно указать каждый раздел level вручную:</p>
            <div className='code'>
                <code>{code6}</code>
            </div>
            <p>Поскольку контекст позволяет вам считывать информацию из вышеуказанного компонента, каждый из них Section может считывать ее level автоматически и передавать Section level + 1 вниз. Вот как вы можете это сделать:</p>
            <div className='code'>
                <code>{code7}</code>
            </div>
            <p>С этим изменением вам не нужно передавать levelсвойство ни в 'Section', ни в 'Heading':</p>
            <div className='code'>
                <code>{code8}</code>
            </div>
            <p>Теперь оба Headingи Section прочитайте, LevelContext чтобы выяснить, насколько они «глубокие». И Section оборачивает своих дочерних элементов в , LevelContext чтобы указать, что все, что находится внутри него, находится на «более глубоком» уровне.</p>
            <h3>Примечание</h3>
            <p>В этом примере используются уровни заголовков, поскольку они наглядно показывают, как вложенные компоненты могут переопределять контекст.  </p>
            <p>Но контекст полезен и для многих других случаев использования.</p>
            <p> Вы можете передавать любую информацию, необходимую для всего поддерева: <b>текущую цветовую тему, текущего пользователя, вошедшего в систему, и так далее.</b></p>
          </div>
        </div>
    )
}

const code =  `<Section>export 
  <Heading level={3}>About</Heading>
  <Heading level={3}>Photos</Heading>
</Section>`

const code2 = `<Section level={3}>
  <Heading>About</Heading>
  <Heading>Photos</Heading>
</Section>`

const code3 = `import { createContext } from 'react';

export const LevelContext = createContext(1);`

const code4 = `import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
    const level = useContext(LevelContext);
    // ...
  }`

const code5 = `import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}`

const code6 = `  return (
    <Section level={1}>
      ...
      <Section level={2}>
        ...`

const code7 = `import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}`

const code8 = `import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}`