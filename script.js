const totalNumber = document.getElementById('totalNum');
const interNumber = document.getElementById('interviewNum');
const rejectedNumber = document.getElementById('rejectedNum');
const jobsNumber = document.getElementById('jobsNum');
console.log(jobsNumber);

let interviewList = [];
let rejectedList = [];
let currentStatus = 'btnAll';



const btnAll = document.getElementById('btnAll');
console.log(btnAll);
const btnInterview = document.getElementById('btnInterview');
const btnRejected = document.getElementById('btnRejected');

const allCards = document.getElementById('allCards');
const filterSection = document.getElementById('filter-section');


function calculateNumber() {
  totalNumber.innerText = allCards.children.length;
  interNumber.innerText = interviewList.length;
  rejectedNumber.innerText = rejectedList.length;
  jobsNumber.innerText = allCards.children.length;
}
calculateNumber();

function changeButton(id) {
  btnAll.classList.remove('bg-blue-600', 'text-white');
  btnInterview.classList.remove('bg-blue-600', 'text-white');
  btnRejected.classList.remove('bg-blue-600', 'text-white');

  btnAll.classList.add('bg-white', 'text-gray-500');
  btnInterview.classList.add('bg-white', 'text-gray-500');
  btnRejected.classList.add('bg-white', 'text-gray-500');

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove('bg-white', 'text-gray-500');
  selected.classList.add('bg-blue-600', 'text-white');
}





