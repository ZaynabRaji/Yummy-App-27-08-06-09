const planner = document.getElementById('planner');
plannerArray = Array.from(planner);
planner = JSON.parse(localStorage.getItem('planner')) || [];
function saveplanner() {
    localStorage.setItem('planner', JSON.stringify(planner));
    }
    displayplanner();