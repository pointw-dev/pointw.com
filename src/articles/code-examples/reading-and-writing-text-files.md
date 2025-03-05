# Reading and writing text files

## Open a file, print contents line by line

<tabs>
<tab name="Python">

```python
with open('filename.txt', 'r') as f:
    for line in f:
        print(line.rstrip())
```

alternately:

```python
def handle_line(line):
    print(line)

map(handle_line, [line.rstrip() for line in open('filename.txt', 'r')])
```

</tab>

<tab name="Javascript">

```javascript
const fs = require('fs')

const data = fs.readFileSync('filename.txt', 'UTF-8')
const lines = data.split(/\r?\n/)
lines.forEach((line) => {
    console.log(line);
})
```

alternately:

```javascript
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('file.txt'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
});
```

</tab>

<tab name="C#">

```csharp
using System;
using System.Text;

namespace MyProgram
{
    public class Program
    {
        public static void Main(string[] args)
        {       
            using (var reader = new System.IO.StreamReader(System.IO.File.OpenRead("filename.txt"), Encoding.UTF8))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    Console.WriteLine(line);
                }
            }
        }
    }
}
```

</tab>

<tab name="PowerShell">

```powershell
foreach ($line in Get-Content .\filename.txt) {
    Write-Output $line
}
```

</tab>

<tab name="VB Script">

```vb
Const ForReading = 1
Dim fso
Set fso = WScript.CreateObject("Scripting.FileSystemObject")

Dim file, line
Set file = fso.OpenTextFile("filename.txt", ForReading)
Do While file.AtEndOfStream = False
  line = file.ReadLine
  WScript.Echo line
Loop
file.Close
```

</tab>
</tabs>

## Create a new file, write text into it

<tabs>
<tab name="Python">

```python
with open('newfilename.txt', 'w') as f:
    f.write('line 1\n')
    f.write('line 2\n')
```

</tab>

<tab name="Javascript">

```javascript
const fs = require('fs')

const writer = fs.createWriteStream('newfilename.txt')
writer.write('line 1\n')
writer.write('line 2\n')
```

</tab>

<tab name="C#">

```csharp
namespace MyProgram
{
    public class Program
    {
        public static void Main(string[] args)
        {       
            using (var writer = new System.IO.StreamWriter("newfilename.txt"))
            {
                writer.WriteLine("line 1");
                writer.WriteLine("line 2");
            }
        }
    }
} 
```

</tab>

<tab name="PowerShell">

```powershell
# this will create or overwrite newfilename.txt
"line 1" | Out-File -FilePath .\newfilename.txt
Add-Content .\newfilename.txt "line 2"
```

alternately:

```powershell
# this will only create, error if already exists
New-Item .\newfilename.txt
Set-Content .\newfilename.txt "line 1"
Add-Content .\newfilename.txt "line 2"
```

</tab>

<tab name="VB Script">

```vb
Dim fso
Set fso = WScript.CreateObject("Scripting.FileSystemObject")

Dim file
Set file= fso.CreateTextFile("newfilename.txt", True, False)  ' True = overwrite, False = unicode
file.WriteLine "line 1"
file.WriteLine "line 2"
file.Close
```

</tab>
</tabs>

## Append to an existing file

<tabs>
<tab name="Python">

```python
with open('priorfilename.txt', 'a') as f:
    f.write('line 3\n')
```

</tab>

<tab name="Javascript">

```javascript
const fs = require('fs')

const writer = fs.createWriteStream('priorfilename.txt', {'flags': 'a'})
writer.write('line 3\n')
```

</tab>

<tab name="C#">

```csharp
namespace MyProgram
{
    public class Program
    {
        public static void Main(string[] args)
        {       
            using (var writer = new System.IO.StreamWriter("priorfilename.txt", true))  // true = append
            {
                writer.WriteLine("line 3");
            }
        }
    }
}
```

</tab>

<tab name="PowerShell">

```powershell
Add-Content .\priorfilename.txt "line 3"
```

</tab>

<tab name="VB Script">

```vb
Const ForAppending = 8

Dim fso
Set fso = WScript.CreateObject("Scripting.FileSystemObject")

Dim file
Set file= fso.OpenTextFile("priorfilename.txt", ForAppending)
file.WriteLine "line 3"
file.Close
```

</tab>
</tabs>

## Check if a file exists

<tabs>
<tab name="Python">

```python
import os
if os.path.exists('filename.txt'):
    print('It exists')
```

</tab>

<tab name="Javascript">

```javascript
const fs = require('fs')

if (fs.existsSync('filename.txt')) {
    console.log('It exists')
}
```

</tab>

<tab name="C#">

```csharp
using System;

namespace MyProgram
{
    public class Program
    {
        public static void Main(string[] args)
        {       
            if (System.IO.File.Exists("filename.txt"))
            {
                Console.WriteLine("It exists");
            }
        }
    }
}
```

</tab>

<tab name="PowerShell">

```powershell
If (Test-Path .\filename.txt -PathType Leaf) {
    Write-Output "It exists"
}
```

</tab>

<tab name="VB Script">

```vb
Dim fso
Set fso = CreateObject("Scripting.FileSystemObject")

If fso.FileExists("filename.txt") Then
    WScript.Echo "It exists"
End If
```

</tab>
</tabs>
