## Author
Volodymyr Borshosh

mugivaraq13@gmail.com

https://t.me/@mugivaraq

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Welcome to Spotify Clone!
This guide will walk you through the basics of using our music streaming platform. Get ready to discover and enjoy your favorite tunes!

Open the App: Launch the Spotify Clone app on your web browser.

Sign Up (Optional): If you're a new user, click on "Sign Up" and create an account with a username and password. You can skip this step for now and explore the app as a guest.

Exploring the App

Browse Music:

Use the search bar at the top to find specific songs or artists.

Playing Music:

Click on a song title to start playing it.
Playback controls (play/pause) are located at the bottom of the player.
You can adjust the volume using the volume slider.

Upload Music (if logged in):

Click on the "Upload Music" button.
Give your song a name, add a mp3 file and cover image, and click "Create."

Like Music:

Near every song you can see a heart button
Click on it to add a song to "Liked" playlist

## Project Documentation
Client-Side (Single Tier):

Presentation Layer (UI):
This layer includes Activities/Fragments (Android) or View Controllers (iOS) responsible for the user interface (UI) and handling user interactions.
It directly interacts with the Data Access Layer to retrieve and update data.
Data Access Layer:
This layer interacts directly with the database using libraries like Room (Android) or Core Data (iOS) for persistence or SQLite for raw SQL queries.
It retrieves and stores data models (songs, playlists, etc.).
Database:

Stores user data (profiles), music metadata, and other app data.
Additional Considerations:

Security: Implement robust security measures on the client-side to prevent unauthorized access to the database. This might involve encrypting sensitive data at rest and in transit.
User Management: Consider implementing a simple user authentication system directly within the client-side code. This might involve storing hashed passwords or tokens securely.
Scalability: This architecture might struggle with scalability for a large user base due to the increased load on the client-side and database.
Benefits of this Simplified Architecture:

Simpler Development: Easier to set up and develop for small-scale projects.
Reduced Infrastructure: No need for separate server-side components.
Drawbacks of this Simplified Architecture:

Security Risks: Sensitive data like passwords might be vulnerable on the client-side.
Limited Scalability: Performance might degrade with a growing user base.


## Project Task Decomposition

Week 1: 

- Implement feature: User Registration ✔️
- Set up Azure SQL Database ✔️
- Create Swagger documentation for API endpoints 
- Configure Google OAuth 2.0 for user authentication ✔️
- Create initial project structure on GitHub repository ✔️

 
Week 2: 

- Implement feature: Personalized Recommendations 
- Integrate Entity Framework for database interactions 
- Develop architecture diagram for project documentation ✔️
- Set up Continuous Integration/Continuous Delivery pipeline 
- Write unit tests for user registration functionality 

 

Week 3: 

- Implement feature: Playlist Creation 
- Integrate Spotify API for music library access 
- Develop infrastructure diagram for project documentation ✔️
- Write getting started documentation for local project setup ✔️
- Execute integration tests for playlist creation endpoint 

 

Week 4: 

- Implement feature: Discover Weekly 
- Set up Storage Account for media file storage 
- Define project tasks decomposition for project documentation 
- Develop Postman collection for API testing 
- Execute unit tests for personalized recommendations algorithm 

 

Week 5: 

- Implement feature: Podcast Streaming 
- Integrate Service Bus for message queueing 
- Write project documentation outlining architecture and infrastructure ✔️
- Write user documentation for using the platform ✔️
- Execute integration tests for podcast streaming endpoint 

 

Week 6: 

- Implement feature: Search Functionality ✔️
- Refactor codebase for improved maintainability ✔️
- Write test cases for user authentication flows 
- Update README.md file on GitHub repository ✔️
- Execute unit tests for search functionality 

 

Week 7: 

- Implement feature: Social Sharing 
- Implement error handling and logging mechanisms 
- Develop project tasks decomposition for project documentation 
- Execute load testing on API endpoints 
- Execute integration tests for social sharing functionality 

 

Week 8: 

- Implement feature: Offline Listening 
- Implement caching mechanism for improved performance 
- Write user documentation for offline listening feature 
- Update README.md file with deployment instructions 
- Execute unit tests for offline listening functionality 

 

Week 9: 

- Implement feature: Artist Radio 
- Implement rate limiting to prevent abuse of API endpoints 
- Write test cases for data validation and input sanitization 
- Execute security testing on authentication mechanisms 
- Execute integration tests for artist radio feature 

 

Week 10: 

- Implement feature: Concert Recommendations 
- Implement background tasks for automated processes 
- Write project documentation for testing strategies 
- Conduct code review and address any identified issues 
- Execute unit tests for concert recommendations feature 

 

Week 11: 

- Implement feature: Lyrics Integration 
- Implement metrics monitoring for application performance 
- Write test cases for edge cases and boundary conditions 
- Conduct final round of testing and bug fixing 
- Execute integration tests for lyrics integration feature 

 

Week 12: 

- Implement feature: Customizable Profiles 
- Implement user feedback mechanisms 
- Finalize project documentation and README.md file 
- Prepare project for deployment to Azure 
- Execute user acceptance testing with selected users 
