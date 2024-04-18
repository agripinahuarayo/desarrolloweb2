
//realizar las sgtes. convercines implicitas
let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
/*
varx=var1;
console.log("para la variable var1="+varx+"con el tipo dato="+typeof varx);
varx=var2;
console.log("para la variable var2="+varx+"con el tipo dato="+typeof varx);
varx=var3;
console.log("para la variable var3="+var2+"con el tipo dato="+typeof var2);
varx=var4;
console.log("para la variable var4="+var3+"con el tipo dato="+typeof var3);*/
//converciones explicitas

varx=var1+var2;
console.log("para la variable var1="+varx+"con el tipo dato="+typeof varx);
var3=Boolean(var2)+var3;
console.log("para la variable var1="+var3+"con el tipo dato="+typeof var3);
varx=var1+Number(var4);
console.log("para la variable var1="+varx+"con el tipo dato="+typeof varx);