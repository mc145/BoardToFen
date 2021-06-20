from PIL import Image
import os
import PIL 
import glob 


image = Image.open('rawdata/whitePawns/0001whitepawn .png')

resized_image = image.resize((64,64)) 
print(resized_image.size)

resized_image = resized_image.save("test.png") 



