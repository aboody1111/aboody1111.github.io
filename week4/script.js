var names=new Array();
names[0]="John";
names[1]="Jane";
names[2]="Jim";
names[3]="Jill";
names[4]="Jack";
names[5]="Joe";
names[6]="Jenny";
names[7]="Jerry";   
names[8]="Jeff";
names[9]="Jesse";

for (var i = 0; i < names.length; i++) {

    if (names[i].charAt(0)=='J'||names[i].charAt(0)=='j') {
        console.log("Goodbye " + names[i]);
    }
     else {
        console.log("Hello " + names[i]);
    }
   
}


