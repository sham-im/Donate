let count = 0;
const donateBtn = document.getElementById("donateBtn");
const modal = document.getElementById("my_modal_5");

donateBtn.addEventListener("click", function () {
    const amountInput = parseFloat(document.getElementById("amountInput").value);
    const mybalancee = document.getElementById("mybalancee");
    const ttl = document.getElementById("donatebalance");

    
    const currentBalance = parseFloat(mybalancee.innerText);


    if (amountInput <= 0 || isNaN(amountInput)) {
        document.getElementById("donationError").classList.remove("hidden");
        return;
    }


    if (amountInput > currentBalance) {
        document.getElementById("balanceError").classList.remove("hidden");
        return;
    }

    
    document.getElementById("donationError").classList.add("hidden");
    document.getElementById("balanceError").classList.add("hidden");

    
    ttl.innerText = (parseFloat(ttl.innerText) + amountInput).toFixed(2);
    mybalancee.innerText = (currentBalance - amountInput).toFixed(2);

        modal.showModal();
        
    

    // History 
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-green-500";
    historyItem.innerHTML = `
    <p class="text-xl font-bold"> ${amountInput.toFixed(2)} BDT Is Donated for Flood at Noakhali, Bangladesh</p>
        <p class="text-sm p-4 text-gray-400">Date: ${new Date().toString()}</p>
    `;

    // Add  history 
    const historyContainer = document.getElementById("historyContainer");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// Close  modal 
const modalCloseButton = document.getElementById("closeModalButton");
modalCloseButton.addEventListener("click", function () {
    modal.close();
});

// Tab switch
const historyTab = document.getElementById("historyTab");
const donationTab = document.getElementById("donationTab");

historyTab.addEventListener("click", function () {

    historyTab.classList.add("bg-[#B4F461]");
    historyTab.classList.remove("bg-gray-400");
    donationTab.classList.remove("bg-[#B4F461]");

    
    document.getElementById("histry").classList.add("hidden");
    document.getElementById("historySection").classList.remove("hidden");
});

donationTab.addEventListener("click", function () {
    
    donationTab.classList.add("bg-[#B4F461]");
    donationTab.classList.remove("bg-gray-400");
    historyTab.classList.remove("bg-[#B4F461]");
    document.getElementById("histry").classList.remove("hidden");
    document.getElementById("historySection").classList.add("hidden");
});






