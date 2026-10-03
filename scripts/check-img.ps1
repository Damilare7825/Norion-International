Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\MY PC\Documents\Projects\Norion International\public\images\norion-logo.jpg"
$img = [System.Drawing.Image]::FromFile($sourcePath)

Write-Host "Image dimensions: $($img.Width) x $($img.Height)"

# We can crop the emblem or use the full image for the favicon.
# Let's see the colors and bounds of the emblem.
$img.Dispose()
