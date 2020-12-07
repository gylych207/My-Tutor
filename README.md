# MyTutor



## Project Description

MyTutor, is a tutoring platform for mid and high school students. The Website is designed to support students with one to one tutoring sessions. Studens can search tutors related with their subjects and read information about them. if they like the portfolio of the tutor, they can book a tutoring online. MyTutor is open for tutor applications too. Tutors who can interested in working with us, can send their info to our Tutors database. The appication process is pretty simple. As soon as they fill out the form, they can find themselves in the tutors page. For now, there is no any sign in/sign up features yet for, both for tutors and students. For the Sake of time, i will create only "Home","Sign up","Tutors" pages including "tutor info" and components. 

## Wireframes

The wireframes below are high fidelity mockaps except mobile screens. The main functionalities of the website are placed in the "Sign Up" page and "tutors" page. "Sign Up" page contains a form for adding a tutor in our DB. In the tutors page, there is a search bar to search tutors by their lessons. Then they can click to info button to show the portfolio of the tutor. Also, there is a book button in the portfolio section to purchase a tutoring session

https://xd.adobe.com/view/8cf91a20-a55c-48ce-9212-6093c1232e78-d9aa/?fullscreen&hints=off

## Component Hierarchy

https://xd.adobe.com/view/1ed0f55b-4906-487f-9600-84062b0e6964-4b83/

## API and Data Sample

https://airtable.com/appWoWF7wRoOZTYEJ


Airtable is returning the data for this base as follows:
```
records: Array(4)
0: {id: "recML1znqDIxRv2nS", fields: {…}, createdTime: "2020-12-04T05:26:39.000Z"}
1: {id: "recNxXx8K1tLaqJal", fields: {…}, createdTime: "2020-12-04T05:26:39.000Z"}
2:
createdTime: "2020-12-04T05:26:39.000Z"
fields: {lessons: "Physics", session: "45min", name: "John", price: "30", lastName: "Mayer"}
id: "recn95o3hW9aGbTuU"
__proto__: Object
3: {id: "recu5Ye7ie4uxIhlY", fields: {…}, createdTime: "2020-12-04T05:31:48.000Z"}
length: 4
__proto__: Array(0)
__proto__: Object

```

### MVP/PostMVP

#### MVP

- Home page with clickable navbar to route tutors and become a tutor page
- Get data from the API.
- Post data by adding a new tutor
- Route each button to linked page
- Render search results in the tutors page
- fully functional info button to show tutor's info, and book button to make a purchase
#### PostMVP

- Add a review / rating and delete a review in the tutor portfolio section.
- Sort search results according to the star rating
- Create other pages.

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Dec  5   | Proposal Approval / Airtable Setup         | N/A |
| Dec  6   | Creating Components / Get Data / post data setup  | N/A |
| Dec  7   | sorting search results                     | N/A |
| Dec  9   | styling                                    | N/A |
| Dec 10   | styling                                    | N/A |
| Dec 11   | Final revision                             | N/A |
| Dec 12   | Presentation                               | N/A |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     4hrs      |     N/A     |
| Airtable setup            |    H     |     .5hrs      |      0.5hr    |     N/A     |
| get Data.                 |    H     |      .5hrs     |     N/A       |     N/A     |
| populating tutorsPage     |    H     |      3hrs      |      N/A      |     N/A     |
| populating Portfolio      |    H     |      3hrs      |      N/A      |     N/A     |
| Post Data Form            |    H     |      4hrs      |      N/A      |     N/A     |
| Search Function           |    H     |      5hrs      |      N/A      |     N/A     |
| Creating payment.         |    H     |      3hrs      |     N/A       |     N/A     |
| Styleing Home Page        |    H     |      4hrs      |     N/A       |     1hr     |
| Styling Tutors page.      |    H     |      5hrs      |      N/A      |     N/A     |
| Styling Portfolio page.   |    H     |      3hrs      |      N/A      |      N/A    |
| Styling Payment Page.     |    H     |      3hrs      |       N/A     |     N/A     |
| Styling Become A tutor    |    H     |      5hrs      |       N/A     |     N/A     |
| Add review/delete         |    H     |      4hrs      |       N/A     |     N/A     |
| Search result sort        |    H     |      6hrs      |       N/A     |     N/A     |
| Total                     |    H     |    48 Hrs      |      N/A      |     N/A    |

## SWOT Analysis

### Strengths:

I have a good understanding of detting data from API So i can easily populate the API data. 
### Weaknesses:

My weekness is to how to iplement update the data, and delete the data as well component lifecycle methods. 

### Opportunities:

This project is huge opportunity for me to digest the topics what we covered so far. And, is a kind of chance to give a life to my prototypes that i have designed before

### Threats:

I spend too much time to search solution online, readng blogs,watching vdeos. i spend too much time. But i learned a lot when i try something on my own. but the poor balance between asking a help and struggling myself on the solution is a vital to manage my time. 
