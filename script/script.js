
let interviewList= [];
let rejectedList= [];
let currentStatus = 'all-btn';



let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");
const filterSection = document.getElementById('filter-section')

// from main
const allCardSection = document.getElementById("all-card") ;

 console.log(allCardSection);

 const mainContainer = document.querySelector('main');
 console.log(mainContainer);

 //get 3 btn in  from main
 const allBtn = document.getElementById("all-btn");
 const interviewBtn = document.getElementById("interview-btn");
 const rejectedBtn = document.getElementById("rejected-btn");


function count () {
    total.innerText = allCardSection.children.length ;
    interview.innerText = interviewList.length
    rejected.innerText = rejectedList.length

}


function toggleStyle (id){
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allBtn.classList.add('bg-gray-200', 'text-black');
    interviewBtn.classList.add('bg-gray-200', 'text-black');
    rejectedBtn.classList.add('bg-gray-200', 'text-black');

    const selected = document.getElementById(id);
    currentStatus = id;
    currentStatus = id;
    selected.classList.remove('bg-gray-200', 'text-black')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if(id === 'interview-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if(id === 'rejected-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected()
    }
    // else if (id==="all-btn"){
    //     allCardSection.classList.remove('hidden');
    //     filterSection.classList.add('hidden');
    // }
    else {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    
}

mainContainer.addEventListener('click', function(event){
    console.log (event.target.classList.contains('interview-btn'));

 if(event.target.classList.contains('interview-btn')){ // classlist ----> interview-btn
    const parentNode =  event.target.parentNode.parentNode;
 const jobName = parentNode.querySelector('.job-name').innerText;
 const para1 = parentNode.querySelector('.para1').innerText;
 const para2 = parentNode.querySelector('.para2').innerText;
 const status = parentNode.querySelector('.status').innerText;
 const para3 = parentNode.querySelector('.para3').innerText;

  parentNode.querySelector('.status').innerText = 'Interview';

 const jobInfo ={
    jobName, 
    para1, 
    para2 , 
    status: 'Interview' , 
    para3
 }
 const jobExits = interviewList.find(item=> item.jobName == jobInfo.jobName );

   if (!jobExits ){
    interviewList.push(jobInfo);
   }
   rejectedList = rejectedList.filter(item => item.jobName != jobInfo.jobName)
   count ();
   renderInterview();
   //console.log(interviewList);
 }
  
else if(event.target.classList.contains('rejected-btn')){ // classlist ----> interview-btn
    const parentNode =  event.target.parentNode.parentNode;
 const jobName = parentNode.querySelector('.job-name').innerText;
 const para1 = parentNode.querySelector('.para1').innerText;
 const para2 = parentNode.querySelector('.para2').innerText;
 const status = parentNode.querySelector('.status').innerText;
 const para3 = parentNode.querySelector('.para3').innerText;

  parentNode.querySelector('.status').innerText = 'Rejected';

 const jobInfo ={
    jobName, 
    para1, 
    para2 , 
    status: 'Rejected' , 
    para3
 }
 const jobExits = rejectedList.find(item=> item.jobName == jobInfo.jobName );


   if (!jobExits ){
    rejectedList.push(jobInfo);
   }
   interviewList = interviewList.filter(item => item.jobName != jobInfo.jobName);
   
   if (currentStatus == 'interview-btn'){
     renderInterview();
   }
   
   count ();
   //renderRejected();
   //console.log(interviewList);
 }

 else if (event.target.classList.contains('delete-btn')) {  // classlist ------> delete-btn

    const card = event.target.closest('.shadow-lg');
    const jobName = card.querySelector('.job-name').innerText;

    card.remove();

    interviewList = interviewList.filter(item => item.jobName !== jobName);
    rejectedList = rejectedList.filter(item => item.jobName !== jobName);

    if (currentStatus === 'interview-btn') {
        renderInterview();
    } 
    else if (currentStatus === 'rejected-btn') {
        renderRejected();
    }

    count();
}

});


function renderInterview() {
    filterSection.innerHTML = '';
for(interview of interviewList){
   // console.log(interview);
    let div = document.createElement ('div');
    div.className =     `flex justify-between shadow-lg bg-blue-100 rounded-lg p-4 my-4`;
    div.innerHTML =     `
      <div id="mobile-crop">
            <div id="crop-heading">
            <h1 class="text-blue-900 text-xl font-bold py-4  job-name">${interview.jobName}</h1>
            <p class="text-gray-400 para1">${interview.para1}</p>
            <p class="text-gray-400 para2">${interview.para2}</p>
            </div>
            <div id="not-applied" >
                <button class="bg-gray-100 text-blue-950 my-4  p-4 rounded-md  status">${interview.status}</button>
                <p class="my-4 para3">${interview.para3}</p>
            </div>
            <div class="job-btn">
                <button id="interview-btn" class="border-2 bg-green-400 py-2 px-4 text-white" >Interview</button>
                <button id="rejected-btn" class="border-2 bg-red-400 py-2 px-4 text-white" >Rejected</button>
            </div>
        </div>
         <div id="delete">
        <button class="bg-red-200 text-red-800 p-2 rounded-md">Delete</button>
       </div>
    `
    filterSection.appendChild(div);
 }
}
function renderRejected() {
    filterSection.innerHTML = '';
for(rejected of rejectedList){
   // console.log(interview);
    let div = document.createElement ('div');
    div.className =     `flex justify-between shadow-lg bg-blue-100 rounded-lg p-4 my-4`;
    div.innerHTML =     `
      <div id="mobile-crop">
            <div id="crop-heading">
            <h1 class="text-blue-900 text-xl font-bold py-4  job-name">${rejected.jobName}</h1>
            <p class="text-gray-400 para1">${rejected.para1}</p>
            <p class="text-gray-400 para2">${rejected.para2}</p>
            </div>
            <div id="not-applied" >
                <button class="bg-gray-100 text-blue-950 my-4  p-4 rounded-md  status">${rejected.status}</button>
                <p class="my-4 para3">${rejected.para3}</p>
            </div>
            <div class="job-btn">
                <button id="interview-btn" class="border-2 bg-green-400 py-2 px-4 text-white" >Interview</button>
                <button id="rejected-btn" class="border-2 bg-red-400 py-2 px-4 text-white" >Rejected</button>
            </div>
        </div>
         <div id="delete">
        <button class="bg-red-200 text-red-800 p-2 rounded-md">Delete</button>
       </div>
    `
    filterSection.appendChild(div);
 }
}
