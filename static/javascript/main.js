function autoTab(field0, field1, len, field2) {
    if (document.getElementById(field1).value.length > len){
        if(field2 == null){
            document.getElementById(field1).value =  document.getElementById(field1).value.charAt(0);
            return null;
        }
        let otp;
        otp = null
        if(document.getElementById(field1).value.length > 2){
            otp = document.getElementById(field1).value
        }
        document.getElementById(field2).value = document.getElementById(field1).value.charAt(1);
        document.getElementById(field1).value =  document.getElementById(field1).value.charAt(0);
        if(otp != null){
            let deduction = 1
            let currentField = parseInt(field1.charAt(3))
            if (document.getElementById(field1).value != null){
                document.getElementById(field1).value = otp.charAt(currentField)
            }
            if (otp.length > 6){
                deduction = 0
            }
            for(currentField; currentField < 7; currentField++)
                document.getElementById(`otp${currentField}`).value = otp.charAt(currentField-deduction);
                document.getElementById(`otp${currentField-1}`).focus()
            }
        else{
            document.getElementById(field2).focus();
        }
    }
    else if(document.getElementById(field1).value.length < len){
        if (field0 != null){
            document.getElementById(field0).focus()
        }
    }
}

function editShop(){
    let editButton = document.getElementById('shopEditButton')
    if(editButton.innerText == 'Edit Details'){
        let fields = document.getElementsByClassName('shopDetails')
        for(items in fields){
            document.getElementById(fields.item(items).id).disabled = false
            document.getElementById(fields.item(items).id).focus()
        }
        editButton.className = "btn btn-outline-warning"
        editButton.innerText = "Save Changes"
    }
    else{
        let fields = document.getElementsByClassName('shopDetails')
        for(items in fields){
            document.getElementById(fields.item(items).id).disabled = true
            document.getElementById(fields.item(items).id).focus()
        }
        editButton.className = "btn btn-outline-primary"
        editButton.innerText = "Edit Details"
    }
}

