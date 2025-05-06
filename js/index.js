function scrollFunction() {
    if(document.documentElement.scrollTop > 200){ // نجلب المسافة العُلوية من شريط التمرير إلى أعلى المستند و نقارنها بالقيمة 200
        document.getElementById("navbar").classList.add("noTransparrent"); // نضيف الصنف في حالة تحقق الشرط
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent"); // نحذف الصنف في الحالة المعاكسة
    }
}

window.onscroll = function() {
    scrollFunction();
}

document.getElementById("fullYear").innerHTML = new Date().getFullYear();