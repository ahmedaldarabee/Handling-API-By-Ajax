$(function(){
    $.ajax(({
        method:"get",
        url:"JSON/developerData.json",
        
        success: function(data,status,xhr){
            // Select all .info-section elements
            let infoSections = document.querySelectorAll(".info-section");

            // Loop through each developer and corresponding .info-section
            for (let i = 0; i < data.length; i++) {
                // Make sure we don't exceed the number of available .info-sections
                if (i < infoSections.length) {
                    infoSections[i].innerHTML = `
                        <h3 id="name"><span><i class="fa-solid fa-user"></i></span> ${data[i].name}</h3>
                        <p id="major"><span><i class="fa-brands fa-uncharted"></i></span> ${data[i].major}</p>
                        <p id="email"><span><i class="fa-solid fa-envelope"></i></span> ${data[i].email}</p>
                        <p id="principle"><span><i class="fa-solid fa-lines-leaning"></i></span> ${data[i]["life-principle"]}</p>
                    `;
                }
            }
        },                
        error: function(xhr,status,error){
            console.log("Your work is wrong!")
        },
    }))
})