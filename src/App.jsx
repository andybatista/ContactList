import ContactList from '../Components/ContactList';
import './App.css'
import { useState } from 'react';
import SelectedContact from "../Components/SelectedContact";



export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return <> {selectedContactId ? <SelectedContact selectedContactId={selectedContactId} />
  : 
  <ContactList setSelectedContactId={setSelectedContactId} />}</>;
}

