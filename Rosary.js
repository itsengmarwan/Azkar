let counter = 0;

// إضافة وظيفة لحفظ العدد في المخزن المحلي
function saveCounter() {
  localStorage.setItem('counter', counter);
}

// إضافة وظيفة لاستعادة العدد من المخزن المحلي
function restoreCounter() {
  counter = localStorage.getItem('counter');
  if (counter === null) {
    counter = 0;
  } else {
    counter = parseInt(counter);
  }
  document.getElementById('counter').innerHTML = counter;
}

// استعادة العدد عند تحميل الصفحة
restoreCounter();

// تعديل وظيفة الزيادة
function increment() {
  counter++;
  document.getElementById('counter').innerHTML = counter;
  saveCounter();
}

// تعديل وظيفة إعادة الضبط
function reset() {
  counter = 0;
  document.getElementById('counter').innerHTML = counter;
  saveCounter();
}

// تعديل وظيفة العودة للصفحة الرئيسية
function goHome() {
  window.location.href = '/';
}