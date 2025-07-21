# Financial Goals Tracker App

A simple and interactive **React.js application** that helps users **set financial goals**, **track their progress**, and **make deposits** toward each goal. It also provides an **overview** of all goals, including total savings, completed goals, approaching deadlines, and overdue alerts.

---

## Features

- **Add/Edit/Delete Goals**: Users can create financial goals with name, target amount, category, and deadline.
- **Progress Chart**: Each goal includes a progress chart showing percentage saved.
- **Deposit Funds**: Add money toward any goal and update the saved amount instantly.
- **Overview Section**:
  - Total number of goals
  - Total amount saved across all goals
  - Count of completed goals
  - Days remaining for each goal
  - Warnings for goals due in less than 30 days
  - Overdue alerts for goals past deadline without completion

---


## Project Structure

```
financial-goals-tracker/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Chart.js
│   │   ├── Deposits.js
│   │   ├── GoalForm.js
│   │   ├── GoalList.js
│   │   └── Overview.js
│   │
│   ├── pages/
│   │   └── Goals.js
│   │
│   ├── App.js
│   └── index.js
│
├── db.json        # JSON Server data
├── package.json
└── README.md
```

---

## Technologies Used

- **Frontend**: React (Functional Components + Hooks)
- **Styling**: Plain CSS 
- **Backend**: JSON Server (`db.json`)
- **Tooling**: Create React App (CRA), Fetch API

---

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Create and Clone the Repository

- Go to [GitHub](https://github.com) and create a new repository.
- Set the repository to **private**.
- Add your collaborator: `Technical Master` under **Settings > Collaborators**.

Then clone the repo to your local machine:

```bash
git clone https://github.com/your-username/phase-2-week-2-code-challenge-sgp.git
cd phase-2-week-2-financial-challenge-sgp
```

> Replace `your-username` with your actual GitHub username.

---

### 2. Set Up JSON Server (Backend)

Install JSON Server globally if you haven’t already:

```bash
npm install -g json-server
```

Inside your project folder, create a file named `db.json` and add your mock data:

```json
{
  "goals": [
    {
      "id": 1,
      "name": "Emergency Fund",
      "targetAmount": 50000,
      "savedAmount": 12000,
      "category": "Savings",
      "deadline": "2025-09-01"
    },
  ]
}
```

Run the JSON server:

```bash
json-server --watch db.json --port 3001
```

This will serve your goals data at `http://localhost:3001/goals`.

---

### 3. Install Frontend Dependencies

Make sure you're inside the project folder, then install React dependencies:

```bash
npm install
```

---

### 4. Run the React App

Start the development server:

```bash
npm start
```

The app should now be live at:

```
http://localhost:3000
```

---

## Live Demos
### FrontEnd(React on Netlify)
"https://effortless-rolypoly-6f2c6f.netlify.app/goals"
### Backend(JSON Server on Render)
"https://goal-server-1.onrender.com/goals"



## Key Concepts Practiced

- `useState`, `useEffect` for React state management and side effects
- Controlled form components
- Fetching data from JSON Server using `fetch()`
- Using `PATCH`, `POST`, `GET` and `DELETE` HTTP methods
- Lifting state up and prop-drilling
- Conditional rendering
- Array methods:
  - `.map()`
  - `.filter()`
  - `.reduce()`
- Date/time operations using `new Date()` and comparisons

## License

**MIT License**

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.**







