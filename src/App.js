import AllStates3 from './components/1_ReactingToInput/3_Quiz';
import './App.css';
import Form from './components/1_ReactingToInput/2_City quiz';
import AllStates from './components/1_ReactingToInput/1_AllStatesAtOnce ';
import Picture from './components/1_ReactingToInput/Challenge_1';
import EditProfile from './components/1_ReactingToInput/Challenge_2';
import FeedbackForm from './components/2 Choosing the State Structure/2_Avoid contradictions';
import LetsCheckForm from './components/2 Choosing the State Structure/3_Avoid redundant state ';
import Menu from './components/2 Choosing the State Structure/4_Avoid duplication';
import MovingDot from './components/2 Choosing the State Structure/1_Group related state ';
import TravelPlan from './components/2 Choosing the State Structure/5_Avoid deeply nested state';
import Question from './components/1_ReactingToInput/4_1Questions';
import Chellenge1 from './components/2 Choosing the State Structure/Task_1';
import TravelPack from './components/2 Choosing the State Structure/Task_2_TravelPlan';
import MailClient from './components/2 Choosing the State Structure/Task_3_MailClient';
import MailClient2 from './components/2 Choosing the State Structure/Task_4MailClient2';
import CounterChar2 from './components/Vue vs React 2';
import CounterChar from './components/Vue vs React';
import Accordion from './components/3_Sharing State Between Components/1_Lifting state up';
import Accordion1 from './components/3_Sharing State Between Components/1_Lifting';
import SyncedInputs from './components/3_Sharing State Between Components/Task_1_Synced inputs ';
import FilterableList from './components/3_Sharing State Between Components/Task_2_Filtering a list';
import PresAndResgState from './components/4_Preserving and Resetting State/4_Preserving and Resetting State';
import TaskApp from './components/7_Scaling Up with Reducer and Context/7_1Reducer and Context';
import TaskAppWithState from './components/5_Reducer.js/5_1Logic in Hendler and State';
import TaskAppWithReducer from './components/5_Reducer.js/5.2_useReducer';
import Component1 from './components/6_Context/6_1Context';
import ProfilePage from './components/6_Context/6_3ContextReact/6_3 ProfilePage';
import Page from './components/6_Context/6_2ContextReactD/6_2Page';
import ContextTheory from './components/6_Context/6_2ContextReactD/6.2.1ContextTheory';
import ReplaceProps from './components/6_Context/Task_ReplaceProps';
import Messenger from './components/5_Reducer.js/Exercises123/Messenger';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style={{margin: 'auto'}}>3. Managing State</h1>
      </header>
      <p className='lesson-topic'>1. Reacting to Input with State</p>
      <div className='ReactingToInput'>
        <AllStates/>
        <Form/>
        <AllStates3/>
        <Question/>
      </div>
      <div className='Challenges'>
        <Picture/>
        <EditProfile/>
      </div>
      <p className='lesson-topic'>2. Choosing the State Structure</p>
      <div className="State-Sructure">
        <MovingDot/>
        <FeedbackForm/>
        <LetsCheckForm/>
      </div>
      <div className="State-Sructure">
        <Menu/>
        <TravelPlan/>
      </div>
      <div className='Challenges' >
        <Chellenge1/>
        <TravelPack/>
      </div>
      <div className='Challenges' >
        <MailClient/>
        <MailClient2/>
      </div>
      <div className='VueReact'>
        <CounterChar2/>
        <CounterChar/>
      </div>
      <p className='lesson-topic'>3. Sharing State Between Components</p>
      <div className='SharingStateBetween'>
        <Accordion/>
        <Accordion1/>
      </div>
      <div className='Challenges' >
        <SyncedInputs/>
        <FilterableList/>
      </div>
      <p className='lesson-topic'>4. Preserving and Resetting State (Сохранение и сброс состояния)</p>
      <div>
        <PresAndResgState/>
      </div>
      <p className='lesson-topic'>5. Reducer (Извлечение логики состояния в редюсер)</p>
      <div className="PresAndResState" style={{backgroundColor: 'lightsteelblue', height: '600px'}}>
      <TaskAppWithState/>
      <TaskAppWithReducer/>
      </div>
      <div className='Challenges' >
      <Messenger/>
      </div>
      <p className='lesson-topic'>6. Context (Глубокая передача данных с учетом контекста)</p>
      <div className="PresAndResState" style={{backgroundColor: 'lightsteelblue'}}>
      <Component1/>
      <Page/>
      </div>
      <div className="PresAndResState" style={{backgroundColor: 'lightsteelblue'}}>
      <ContextTheory/>
      </div>
      <div className="PresAndResState" style={{backgroundColor: 'lightsteelblue'}}>
      <ProfilePage/>
      </div>
      <div className='Challenges' >
      <ReplaceProps/>
      </div>
      <p className='lesson-topic'>7. Scaling Up with Reducer and Context (Масштабирование с помощью редьюсера и контекста)</p>
      <div className="PresAndResState" style={{backgroundColor: 'lightsteelblue', height: '600px'}}>
        <TaskApp/>
      </div>
    </div>
  );
}

export default App;
