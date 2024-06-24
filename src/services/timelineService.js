// src/services/timelineService.js
import { db } from '../firebase';
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, updateDoc } from 'firebase/firestore';

const timelineCollection = collection(db, 'Timeline');

export const getTimelineEvents = (callback) => {
    const q = query(timelineCollection);
    return onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
            const fetchedEvents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log('Firestore Query Result:', fetchedEvents); // Debugging line

            // Separate events by era
            const era1Events = fetchedEvents.filter(event => event.era === 1).sort((a, b) => b.year - a.year);
            const era2Events = fetchedEvents.filter(event => event.era === 2).sort((a, b) => a.year - b.year);

            // Combine the sorted events
            const sortedEvents = [...era1Events, ...era2Events];

            // Pass the sorted events to the callback
            callback(sortedEvents);
        } else {
            callback([]);
        }
    });
};

export const addTimelineEvent = async (event) => {
    return await addDoc(timelineCollection, event);
};

export const deleteTimelineEvent = async (id) => {
    const eventDoc = doc(db, 'Timeline', id);
    return await deleteDoc(eventDoc);
};

export const updateTimelineEvent = async (id, updatedEvent) => {
    const eventDoc = doc(db, 'Timeline', id);
    return await updateDoc(eventDoc, updatedEvent);
};