import {PythonShell} from "python-shell";

class PyShell {
  constructor(){
    this.options = {
      mode: 'text',
      pythonPath: '/usr/bin/python3' ,
      pythonOptions: ['-u'],
      scriptPath: './',
    }
  }

  setOptions(argument) {
    this.options ={
      ...this.options,
      args:[...argument]
    };
    // console.log(this.options);
  }

  getOptions(){
    return this.options;
  }

  run(){
    PythonShell.run('./pythonScripts/pyscript.py',this.getOptions(),(err,result)=>{
      if(err) throw err;
      //get output from python program in js
      console.log("----------Printing Argument---------------\n");
      console.log(JSON.parse(result[0]));
      console.log("\n-------------------------");
    });
  }
}
let pyshell = new PyShell();
//pass single argument
let argument = ["image1.png"];
pyshell.setOptions(argument);
pyshell.run();

//pass multiple argument
argument = ["image2.png", "image4.png","image5.png"];
pyshell.setOptions(argument);
pyshell.run();

//pass single argument
argument = ["image3.png"];
pyshell.setOptions(argument);
pyshell.run();


