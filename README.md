# pyshell-sample
Execute python code from Node.js using python-shell 

Install npm dependencies
```
npm i python-shell
npm i esm
```

Run 
```
node -r esm index.js //index.js is file name
```


output
```
[ec2-user@ip-172-100-45-73 pyshell-sample]$ node -r esm index.js
----------Printing Argument---------------

{ argument: [ 'pythonScripts/pyscript.py', 'image3.png' ] }

-------------------------
----------Printing Argument---------------

{ argument: [ 'pythonScripts/pyscript.py', 'image1.png' ] }

-------------------------
----------Printing Argument---------------

{
  argument: [
    'pythonScripts/pyscript.py',
    'image2.png',
    'image4.png',
    'image5.png'
  ]
}

```