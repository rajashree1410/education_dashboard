// --- Sample Admission Dataset (Embedded) ---
const admissions = [
  { id: 1, name: "Amit", gender: "Male", stream: "Science", location: "Delhi", score: 85, status: "Admitted" },
  { id: 2, name: "Priya", gender: "Female", stream: "Commerce", location: "Mumbai", score: 90, status: "Admitted" },
  { id: 3, name: "Ravi", gender: "Male", stream: "Arts", location: "Chennai", score: 70, status: "Rejected" },
  { id: 4, name: "Sneha", gender: "Female", stream: "Science", location: "Bangalore", score: 88, status: "Admitted" },
  { id: 5, name: "Karan", gender: "Male", stream: "Commerce", location: "Kolkata", score: 75, status: "Rejected" },
  { id: 6, name: "Anita", gender: "Female", stream: "Science", location: "Pune", score: 82, status: "Admitted" },
  { id: 7, name: "Rahul", gender: "Male", stream: "Arts", location: "Hyderabad", score: 65, status: "Rejected" },
  { id: 8, name: "Divya", gender: "Female", stream: "Science", location: "Delhi", score: 92, status: "Admitted" },
  { id: 9, name: "Suresh", gender: "Male", stream: "Commerce", location: "Chennai", score: 78, status: "Admitted" },
  { id: 10, name: "Sruthi", gender: "Female", stream: "Science", location: "Mumbai", score: 85, status: "Admitted" },
  { id: 11, name: "Vikram", gender: "Male", stream: "Science", location: "Delhi", score: 88, status: "Admitted" },
  { id: 12, name: "Kavya", gender: "Female", stream: "Arts", location: "Chennai", score: 72, status: "Rejected" },
  { id: 13, name: "Manoj", gender: "Male", stream: "Commerce", location: "Pune", score: 80, status: "Admitted" },
  { id: 14, name: "Aishwarya", gender: "Female", stream: "Science", location: "Bangalore", score: 91, status: "Admitted" },
  { id: 15, name: "Deepak", gender: "Male", stream: "Arts", location: "Kolkata", score: 60, status: "Rejected" },
  { id: 16, name: "Ritika", gender: "Female", stream: "Commerce", location: "Delhi", score: 84, status: "Admitted" },
  { id: 17, name: "Arjun", gender: "Male", stream: "Science", location: "Hyderabad", score: 89, status: "Admitted" },
  { id: 18, name: "Nisha", gender: "Female", stream: "Arts", location: "Pune", score: 68, status: "Rejected" },
  { id: 19, name: "Karthik", gender: "Male", stream: "Science", location: "Mumbai", score: 87, status: "Admitted" },
  { id: 20, name: "Sonia", gender: "Female", stream: "Commerce", location: "Bangalore", score: 79, status: "Admitted" },
  { id: 21, name: "Tarun", gender: "Male", stream: "Science", location: "Chennai", score: 76, status: "Rejected" },
  { id: 22, name: "Preethi", gender: "Female", stream: "Science", location: "Delhi", score: 93, status: "Admitted" },
  { id: 23, name: "Rohit", gender: "Male", stream: "Arts", location: "Kolkata", score: 69, status: "Rejected" },
  { id: 24, name: "Meera", gender: "Female", stream: "Commerce", location: "Hyderabad", score: 88, status: "Admitted" },
  { id: 25, name: "Ajay", gender: "Male", stream: "Science", location: "Bangalore", score: 81, status: "Admitted" },
  { id: 26, name: "Pooja", gender: "Female", stream: "Science", location: "Pune", score: 89, status: "Admitted" },
  { id: 27, name: "Gopal", gender: "Male", stream: "Commerce", location: "Chennai", score: 74, status: "Rejected" },
  { id: 28, name: "Lavanya", gender: "Female", stream: "Arts", location: "Delhi", score: 71, status: "Rejected" },
  { id: 29, name: "Rakesh", gender: "Male", stream: "Science", location: "Mumbai", score: 84, status: "Admitted" },
  { id: 30, name: "Varsha", gender: "Female", stream: "Science", location: "Hyderabad", score: 90, status: "Admitted" },
  { id: 31, name: "Siddharth", gender: "Male", stream: "Commerce", location: "Bangalore", score: 77, status: "Admitted" },
  { id: 32, name: "Geetha", gender: "Female", stream: "Arts", location: "Pune", score: 65, status: "Rejected" },
  { id: 33, name: "Vivek", gender: "Male", stream: "Science", location: "Chennai", score: 92, status: "Admitted" },
  { id: 34, name: "Anjali", gender: "Female", stream: "Commerce", location: "Delhi", score: 86, status: "Admitted" },
  { id: 35, name: "Harish", gender: "Male", stream: "Science", location: "Kolkata", score: 83, status: "Admitted" },
  { id: 36, name: "Snehal", gender: "Female", stream: "Arts", location: "Mumbai", score: 66, status: "Rejected" },
  { id: 37, name: "Tejas", gender: "Male", stream: "Science", location: "Hyderabad", score: 88, status: "Admitted" },
  { id: 38, name: "Nikita", gender: "Female", stream: "Science", location: "Pune", score: 91, status: "Admitted" },
  { id: 39, name: "Abhinav", gender: "Male", stream: "Commerce", location: "Bangalore", score: 79, status: "Admitted" },
  { id: 40, name: "Maya", gender: "Female", stream: "Arts", location: "Chennai", score: 73, status: "Rejected" }
];


let chartInstance = null;

// --- Helper to render charts ---
function renderChart(labels, data, title, type = "bar", colors = null) {
  const ctx = document.getElementById("chart").getContext("2d");
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: title,
        data: data,
        backgroundColor: colors || [
          "#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f1c40f"
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// --- Chart 1: Admission by Stream ---
document.getElementById("showStreamChart").addEventListener("click", () => {
  const streams = [...new Set(admissions.map(a => a.stream))];
  const counts = streams.map(stream => admissions.filter(a => a.stream === stream && a.status === "Admitted").length);
  renderChart(streams, counts, "Admissions by Stream", "bar");
});

// --- Chart 2: Admission by Gender ---
document.getElementById("showGenderChart").addEventListener("click", () => {
  const genders = [...new Set(admissions.map(a => a.gender))];
  const counts = genders.map(g => admissions.filter(a => a.gender === g && a.status === "Admitted").length);
  renderChart(genders, counts, "Admissions by Gender", "pie");
});

// --- Chart 3: Admission by Location ---
document.getElementById("showLocationChart").addEventListener("click", () => {
  const locations = [...new Set(admissions.map(a => a.location))];
  const counts = locations.map(loc => admissions.filter(a => a.location === loc && a.status === "Admitted").length);
  renderChart(locations, counts, "Admissions by Location", "bar");
});
