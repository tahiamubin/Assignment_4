let currentTab = 'all-btn';
const tabActive = ["bg-[#3B82F6]"  , "p-3" , "gap-2", "rounded-lg", "text-white"];
const tabInactive = ["bg-gray-200","p-3" , "gap-2", "rounded-lg", "text-black" ];

const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');
const emptyState = document.getElementById("empty-state");
const jobContainer = document.getElementById("job-container");
const availableState = document.getElementById("available");


// tabs
function switchTab(tab){
   
    //console.log(tab);
    const tabs = ['all' , 'interview' , 'rejected'];
     currentTab = tab;
   // tab selection
    for (const t of tabs){
        const tabName = document.getElementById("tab-"+t);
        //console.log(tabName);
        if (t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            
            tabName.classList.add(...tabInactive);
            tabName.classList.remove(...tabActive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer]; // to hide all section
    for(const section of pages){
        section.classList.add("hidden");
    }

    

    // show only the selected
    emptyState.classList.add("hidden");
    
    if(tab === "all"){
        allContainer.classList.remove("hidden");
        if (allContainer.children.length <1){
            emptyState.classList.remove("hidden");
        }
    }
    else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");
        if (interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else {
        rejectedContainer.classList.remove("hidden");
        if (rejectedContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    updateState ();

}

// stat-update
const totalState = document.getElementById("stat-total");
const interviewState = document.getElementById("stat-interview");
const rejectedState = document.getElementById("stat-rejected");



switchTab(currentTab); // initially all tab selected


// button --> dynamic
document.getElementById("jobs-container").addEventListener('click' , function(event){
    clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector (".status");
    const parent = card.parentNode;
    //console.log(card)
    //console.log(clickedElement.parentNode.parentNode.parentNode)

    if (clickedElement.classList.contains("interview")){
        status.innerText = "Interviewed";
       interviewContainer.appendChild(card);
       updateState ()
    }
    if (clickedElement.classList.contains("rejected")){
        status.innerText = "Rejected";
       rejectedContainer.appendChild(card);
       updateState ()
    }
    if (clickedElement.classList.contains("delete")){
       parent.removeChild(card);
       updateState ()
    }
    

})

function updateState (){
    // totalState.innerText = allContainer.children.length;
    // interviewState.innerText = interviewContainer.children.length;
    // rejectedState.innerText = rejectedContainer.children.length;
    const counts = {
        all: allContainer.children.length ,
        interview: interviewContainer.children.length ,
        rejected: rejectedContainer.children.length
    };
    totalState.innerText = counts.all ;
    interviewState.innerText = counts.interview ;
    rejectedState.innerText = counts.rejected ;

    availableState.innerText = counts[currentTab];
    if (counts[currentTab] < 1){
        emptyState.classList.remove("hidden");
    }
    else {
        emptyState.classList.add("hidden");
    }

}
updateState ();

