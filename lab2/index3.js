import{EventEmitter} from 'node:events';
const task = new EventEmitter();
const sayHi = (name) => {
    console.log(`Logged In ${name}`);
     
};
const starts =()=>{
    console.log("System Started");
};
task.on("greet",starts);
task.on("greet",sayHi); //Event and method binding 
task.on("greet" ,(name)=>{
    console.log(`${name} starts shopping`);
} 
);
task.on("greet" ,(name)=>{
    console.log(`${name} logged out`);
} 
);
task.emit("greet","Aaditya ");// Announcement
task.emit("greet","Akii ");
task.emit("greet","Akii ");