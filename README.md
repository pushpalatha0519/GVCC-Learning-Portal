# GVCC Learning Portal

A full-stack Learning Portal application where students can watch learning videos, create bookmarks, and resume videos from saved timestamps.

## Features

### Learning Portal
- Student-friendly course dashboard
- Video learning interface
- Responsive UI

### Video Bookmark System
- Create multiple bookmarks for a single video
- Add custom bookmark names
- Store video ID and timestamp
- Resume video playback from saved timestamp
- Delete bookmarks

### Data Persistence
- Backend API integration
- MongoDB Atlas database storage
- Bookmarks remain available after refresh

### Screenshot Protection
Implemented browser-level protection mechanisms:
- Disabled right-click
- Blocked common screenshot keyboard shortcuts
- Added watermark overlay on video content

Note:
Complete screenshot prevention is not possible on all platforms because operating systems control screenshot functionality. The implemented solution discourages unauthorized screenshots.

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

## Project Structure
