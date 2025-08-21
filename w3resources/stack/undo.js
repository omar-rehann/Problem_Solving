// Undo Use Stack

let actions = [];

// المستخدم كتب كلمة
actions.push("كتب كلمة Hello");
actions.push("مسح كلمة Hello");
actions.push("كتب كلمة World");

console.log("كل العمليات:", actions);

// عايزين نعمل Undo (تراجع عن آخر عملية)
let lastAction = actions.pop();

console.log("آخر عملية تم التراجع عنها:", lastAction);
console.log("العمليات المتبقية:", actions);