const dataJson = JSON.parse(data);
const milestones = dataJson['data'];
function loadMilestones(){
  const milestones_div = document.querySelector('.milestones');
  const milestones_text = milestones.map((milestone)=>{
      return `<div class="milestone border-b" id="${milestone['_id']}">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="markMilestone(this,${milestone['_id']})" /></div>
        <div onclick="openMilestoneModules(this,${milestone['_id']})">
          <p>
            ${milestone['name']}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
      ${milestone['modules'].map((module)=>{
        return `
        <div class="module border-b">
          <p>${module['name']}</p>
        </div>
        `;
      }).join('')}
        
      </div>
  </div>`
  }).join('');
  milestones_div.innerHTML=milestones_text;
}
function openMilestoneModules(current_milestone,id){
  const milestones_hidden = current_milestone.parentNode.nextElementSibling;
  const active  = document.querySelector('.active');
  const milestones_show = document.querySelector('.show');

  if(active && !current_milestone.classList.contains('active'))
        active.classList.remove('active');

  current_milestone.classList.toggle('active');

  if(!milestones_hidden.classList.contains('show') && milestones_show)
       milestones_show.classList.remove('show');

  milestones_hidden.classList.toggle('show');
  showMilestoneDetails(id);

 }
 function showMilestoneDetails(id){
    const milestoneDetails = document.querySelector(".milestoneDetails");
    console.dir(milestoneDetails);
    milestoneDetails.childNodes[1].style.opacity ="0";
    milestoneDetails.childNodes[1].src= milestones[id].image;
    milestoneDetails.childNodes[3].innerText=milestones[id]['name'];
    milestoneDetails.childNodes[5].innerText=milestones[id]['description'];

 }
 const  milestoneImg = document.querySelector('.milestoneImage');
 milestoneImg.onload = function(){
      this.style.opacity='1';
 };
 function markMilestone(current_milestone,id){
  const doneList = document.querySelector('.doneList');
  const milestonesList = document.querySelector('.milestones');
  const doneItem = document.getElementById(id);
  if(current_milestone.checked){
    milestonesList.removeChild(doneItem);
    doneList.appendChild(doneItem);
    const items = [];
    for(let i = 0;i<doneList.children.length;i++){
      items.push(doneList.children[i]);
       
    }
    doneList.innerHTML="";
    items.sort((itemA,itemB)=>{
      const idA = +itemA.getAttribute('id');
      const idB = +itemB.getAttribute('id');
      return idA-idB;
    });
    for(let i=0;i<items.length;i++){
      doneList.appendChild(items[i]);
    }
  }
  else {
    doneList.removeChild(doneItem);
    milestonesList.appendChild(doneItem);
    const items = [];
    for(let i = 0;i<milestonesList.children.length;i++){
      items.push(milestonesList.children[i]);
       
    }
    milestonesList.innerHTML="";
    items.sort((itemA,itemB)=>{
      const idA = +itemA.getAttribute('id');
      const idB = +itemB.getAttribute('id');
      return idA-idB;
    });
    for(let i=0;i<items.length;i++){
      milestonesList.appendChild(items[i]);
    }
  }

 }
loadMilestones();