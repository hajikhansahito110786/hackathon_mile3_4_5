// script.js 

// Taking elements from HTML
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");

let isHidden = true;

// Function to toggle between input form and resume preview
function hide() {
    if (isHidden) {
    
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading" >
                    <h1>${inputField["name"].value}
                   <p> 
                   
                            
                        
                   
                    <p>${inputField["Linkedin"].value}</p>
                   <p> ${inputField["phone"].value}</p>
                   <p> ${inputField["email"].value}</p></h1>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${inputField["objective"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${inputField["skills"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Education</h2>
                            <p>${inputField["education"].value}</p>
                        </div>
                        
                    </div>
                    
                        
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${inputField["projects"].value}</p>
                        </div>
                        
                             
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}
