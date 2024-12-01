alert("Welcome!");

function updateCert(event) {
    let certification = event.target.value;
    if (certification === firstAid) {
        let certificationElement = document.querySelector("#more-info");
        certificationElement.innerHTML = "Trained by American Red Cross in order to be prepared for emergency situations";
    }
}


let certificationSelectElement = document.querySelector("#certifications");
certificationSelectElement.addEventListener("change", updateCert);