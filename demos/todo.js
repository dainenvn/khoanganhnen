"use strict";
const KEY="portfolio-a3-tasks-v1";
const form=document.querySelector("#task-form"),input=document.querySelector("#task-input"),list=document.querySelector("#tasks"),empty=document.querySelector("#empty"),count=document.querySelector("#count");
let tasks=[];try{const saved=JSON.parse(localStorage.getItem(KEY)||"[]");if(Array.isArray(saved))tasks=saved.filter(t=>t&&typeof t.text==="string"&&typeof t.id==="string"&&typeof t.done==="boolean");}catch(e){console.warn("Không đọc được dữ liệu đã lưu",e);}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(tasks));}catch(e){console.warn("Không lưu được công việc",e);alert("Trình duyệt không cho phép lưu dữ liệu; các thay đổi chỉ tồn tại trong phiên này.");}}
function render(){list.replaceChildren();empty.hidden=tasks.length>0;count.textContent=`${tasks.filter(t=>t.done).length}/${tasks.length} công việc đã hoàn thành`;for(const task of tasks){const li=document.createElement("li");if(task.done)li.className="done";const cb=document.createElement("input");cb.type="checkbox";cb.checked=task.done;cb.setAttribute("aria-label",`Đánh dấu hoàn thành: ${task.text}`);cb.addEventListener("change",()=>{task.done=cb.checked;persist();render();});const span=document.createElement("span");span.textContent=task.text;const edit=document.createElement("button");edit.type="button";edit.className="secondary";edit.textContent="Sửa";edit.setAttribute("aria-label",`Sửa: ${task.text}`);edit.addEventListener("click",()=>{const next=prompt("Sửa nội dung công việc:",task.text);if(next===null)return;const value=next.trim();if(!value||value.length>160){alert("Nội dung phải từ 1 đến 160 ký tự.");return;}task.text=value;persist();render();});const del=document.createElement("button");del.type="button";del.className="danger";del.textContent="Xóa";del.setAttribute("aria-label",`Xóa: ${task.text}`);del.addEventListener("click",()=>{tasks=tasks.filter(t=>t.id!==task.id);persist();render();});li.append(cb,span,edit,del);list.append(li);}}
form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) {
    input.setCustomValidity("Vui lòng nhập nội dung công việc.");
    input.reportValidity();
    input.addEventListener("input", function clearCustomValidity() {
      input.setCustomValidity("");
    }, { once: true });
    return;
  }
  tasks.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random(),text,done:false});input.value="";persist();render();input.focus();
});
render();
