function calculateFee() {

    // Get student details
    let studentName = document.getElementById("studentName").value;
    let registerNumber = document.getElementById("registerNumber").value;

    // Get fee values
    let tuitionFee = Number(document.getElementById("tuitionFee").value) || 0;
    let hostelFee = Number(document.getElementById("hostelFee").value) || 0;
    let transportFee = Number(document.getElementById("transportFee").value) || 0;
    let examFee = Number(document.getElementById("examFee").value) || 0;
    let otherFee = Number(document.getElementById("otherFee").value) || 0;
    let amountPaid = Number(document.getElementById("amountPaid").value) || 0;

    // Calculate total
    let totalFee = tuitionFee + hostelFee + transportFee + examFee + otherFee;

    // Calculate remaining amount
    let remainingFee = totalFee - amountPaid;

    // Prevent negative remaining fee
    if (remainingFee < 0) {
        remainingFee = 0;
    }

    // Payment status
    let status;

    if (amountPaid >= totalFee && totalFee > 0) {
        status = "Paid";
    } else if (amountPaid > 0) {
        status = "Partially Paid";
    } else {
        status = "Pending";
    }

    // Display results
    document.getElementById("displayName").textContent =
        studentName || "-";

    document.getElementById("displayRegister").textContent =
        registerNumber || "-";

    document.getElementById("totalFee").textContent =
        totalFee.toFixed(2);

    document.getElementById("displayPaid").textContent =
        amountPaid.toFixed(2);

    document.getElementById("remainingFee").textContent =
        remainingFee.toFixed(2);

    document.getElementById("status").textContent =
        status;
}


function resetForm() {

    document.getElementById("studentName").value = "";
    document.getElementById("registerNumber").value = "";
    document.getElementById("tuitionFee").value = "";
    document.getElementById("hostelFee").value = "";
    document.getElementById("transportFee").value = "";
    document.getElementById("examFee").value = "";
    document.getElementById("otherFee").value = "";
    document.getElementById("amountPaid").value = "";

    document.getElementById("displayName").textContent = "-";
    document.getElementById("displayRegister").textContent = "-";
    document.getElementById("totalFee").textContent = "0";
    document.getElementById("displayPaid").textContent = "0";
    document.getElementById("remainingFee").textContent = "0";
    document.getElementById("status").textContent = "-";
}