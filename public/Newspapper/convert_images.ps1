$inputFolder = "D:\Front End\Personal\Tera-Fantastica\public\Newspapper"
$outputFolder = "D:\Front End\Personal\Tera-Fantastica\public\NewspapperDZI"

if (-Not (Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder
}

Get-ChildItem -Path $inputFolder -Filter *.png | ForEach-Object {
    $filename = $_.Name
    $name = [System.IO.Path]::GetFileNameWithoutExtension($filename)
    & vips dzsave "$($_.FullName)" "$outputFolder\$name"
}