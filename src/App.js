import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './contexts/authContext';
import LoginPage from './pages/LoginPage';
import './globalStyles.css';
import NavbarComponent from './components/NavbarComponent';
import ProfilePage from './pages/ProfilePage';
import CharactersPage from './pages/CharactersPage';
import CharacterAddPage from './pages/subPages/CharacterAddPage';
import SingleCharacterPage from './pages/subPages/SingleCharacterPage';
import AboutPage from './pages/AboutPage';
import AddStoryPage from './pages/subPages/AddStoryPage';
import StoriesPage from './pages/StoriesPage';
import ChapterPage from './pages/subPages/ChapterPage';
import SingleStoryPage from './pages/subPages/SingleStoryPage';
import AddChapterPage from './pages/subPages/AddChapterPage'
import TimelinePage from './pages/TimelinePage';
import ImportantEventsPage from './pages/ImportantEventsPage';
import LocationsPage from './pages/LocationsPage';
import SingleLocationPage from './pages/subPages/SingleLocationsPage';
import SingleEventPage from './pages/subPages/SingleEventPage';
import MagicPage from './pages/MagicPage';
import MapsPage from './pages/MapsPage';
import BestiaryPage from './pages/BestiaryPage';
import SchoolsPage from './pages/subPages/SchoolsPage';
import ClassesPage from './pages/subPages/ClassesPage';
import SubSchoolPage from './pages/subPages/SubSchoolPage';
import SingleCreaturePage from './pages/subPages/SingleCreaturePage';
import SingleRacePage from './pages/subPages/SingleRacePage';
import AddBestiaryEntryPage from './pages/subPages/AddBestiaryEntryPage';

const AppWrapper = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        {/* Base Path (Home) */}
        <Route path="/" element={<HomePage />} />

        {/* Login/Register */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/login" element={<LoginPage />} />

        {/* Profile */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Characters */}
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/add" element={<CharacterAddPage />} />
        <Route path="/characters/:characterId" element={<SingleCharacterPage />} />

        {/* Stories */}
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:storyId" element={<SingleStoryPage />} />
        <Route path="/stories/add" element={<AddStoryPage />} />
        <Route path="/stories/:storyId/chapters/:chapterId" element={<ChapterPage />} />
        <Route path="/stories/:storyId/add-chapter" element={<AddChapterPage />} />

        {/* Important Events */}
        <Route path="/important-events" element={<ImportantEventsPage />} />
        <Route path="/important-events/:eventId" element={<SingleEventPage />} />

        {/* Locations */}
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:locationId" element={<SingleLocationPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Magic Page */}
        <Route path="/magic" element={<MagicPage />} />
        <Route path="/magic/schools" element={<SchoolsPage />} />
        <Route path="/subschools/:name" element={<SubSchoolPage />} />
        <Route path="/magic/classes" element={<ClassesPage />} />

        {/* Bestiary Page */}
        <Route path="/bestiary" element={<BestiaryPage />} />
        <Route path="/bestiary/creature/:creatureId" element={<SingleCreaturePage />} />
        <Route path="/bestiary/race/:raceId" element={<SingleRacePage />} />
        <Route path="/bestiary/add" element={<AddBestiaryEntryPage />} />

        {/* Maps Page */}
        <Route path="/maps" element={<MapsPage />} />

        {/* Timeline */}
        <Route path="/timeline" element={<TimelinePage />} />

        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/WritingsOfGajamyw">
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
};

export default App;