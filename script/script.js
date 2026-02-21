let interviewList= [];
let rejectedList= [];



let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");

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
count();

function toggleStyle (id){
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allBtn.classList.add('bg-gray-200', 'text-black');
    interviewBtn.classList.add('bg-gray-200', 'text-black');
    rejectedBtn.classList.add('bg-gray-200', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-200', 'text-black')
    selected.classList.add('bg-[#3B82F6]', 'text-white')
}

mainContainer.addEventListener('click', function(event){
 console.log(event.target.parentNode.parentNode);
 const jobName = this.parentNode.querySelector('.job-name').innerText;
 console.log(jobName);

});

