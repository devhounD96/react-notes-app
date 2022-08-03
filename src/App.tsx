import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Note } from './models/note.model'
import { Container, Row, Col } from 'react-bootstrap'
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'Meeting Overdue',
    text: 'Client Meet Emaar',
    color: '#1bc4c4',
    date: (new Date).toString()
  }]);
  return (
   <>
   <Header />
   <Container className='mt-5'>
    <Row>
      <Col>
      <NotesList notes={notes} setNotes={setNotes}/>
      </Col>
    </Row>
   </Container>
   </>
  );
}

export default App;
