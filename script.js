// 유저가 값을 입력한다
// + 버튼을 클릭하면 , 할일이 추가된다
// delete 버튼을 누르면 할일이 삭제된다
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
// (1. check 버튼을 클릭하는 순간 true false)
// (2. true 이면 끝난걸로 간주하고 밑줄 보여주기)
// (3. false 이면 안끝난걸로 간주하고 그대로 두기)
// 진행중 끝남 탭을 누르면 , 언더바가 이동한다
// 끝남탭은 , 끝난 아이템만 , 집행중탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskinput = document.getElementById("task-input");
let addbutton = document.getElementById("add-button");
let tasklist = []

addbutton.addEventListener("click", addtask);

function addtask() {
    let task = {
        id: randomIDgenerate(),
        taskcontent: taskinput.value,
        isComplete: false,
    };
    tasklist.push(task);
    console.log(tasklist);
    render();
}

function render() {
    let resultHTML = '';
    for (let i = 0; i < tasklist.length; i++) {
        if (tasklist[i].isComplete == true) {
            resultHTML += `<div class="task">
                        <div class="task-done">${tasklist[i].taskcontent}</div>
                        <div>
                            <button onclick="togglecomplete('${tasklist[i].id}')">Check</button>
                            <button onclick="deletetask('${tasklist[i].id}')">Delete</button>
                        </div>
                    </div>`;
        }
        else {
            resultHTML += `<div class="task">
                        <div>${tasklist[i].taskcontent}</div>
                        <div>
                            <button onclick="togglecomplete('${tasklist[i].id}')">Check</button>
                            <button onclick="deletetask('${tasklist[i].id}')">Delete</button>
                        </div>
                    </div>` ;
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function togglecomplete(id) {
    console.log("id:", id);
    for (let i = 0; i < tasklist.length; i++) {
        if (tasklist[i].id == id) {
            tasklist[i].isComplete = !tasklist[i].isComplete;
            break;
        }
    }
    render();
    console.log(tasklist);
}

function randomIDgenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function deletetask(id) {
    for(let i=0;i<tasklist.length;i++) {
        if(tasklist[i].id == id) {
            tasklist.splice(i,1)
            break;
        }
    }
    render();
}